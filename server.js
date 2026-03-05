import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Handle uncaught exceptions and unhandled rejections
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  // Don't exit - let the server try to continue
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Don't exit - let the server try to continue
});

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0'; // Bind to all interfaces for Railway

// Allowed hosts (for logging/monitoring only – not blocking)
const ALLOWED_HOSTS = [
  'summitregistrationpage-production.up.railway.app',
  'localhost',
  '127.0.0.1',
];

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - Host: ${req.get('host') || 'unknown'}`);
  next();
});

// Host logging middleware (non-blocking to avoid 502/healthcheck issues)
app.use((req, res, next) => {
  const host = req.get('host') || '';
  const hostname = req.hostname || '';

  const isAllowed =
    ALLOWED_HOSTS.includes(hostname) ||
    ALLOWED_HOSTS.some((allowed) => host.includes(allowed));

  if (!isAllowed && req.path !== '/health') {
    console.warn(`Request from unexpected host: host=${host}, hostname=${hostname}`);
  }

  next();
});

// Check if build directory exists
const buildDir = join(__dirname, 'build');
if (!existsSync(buildDir)) {
  console.error(`ERROR: Build directory not found at ${buildDir}`);
  console.error('Please run "npm run build" before starting the server.');
  process.exit(1);
}

// Verify index.html exists
const indexHtmlPath = join(buildDir, 'index.html');
if (!existsSync(indexHtmlPath)) {
  console.error(`ERROR: index.html not found at ${indexHtmlPath}`);
  process.exit(1);
}

console.log(`Build directory verified: ${buildDir}`);
console.log(`index.html verified: ${indexHtmlPath}`);

// Health check endpoint for Railway
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Serve static files from the build directory (CSS, JS, images, etc.)
app.use(express.static(buildDir));

// Root route - serve index.html
app.get('/', (req, res) => {
  console.log('Serving index.html for root route');
  res.sendFile(indexHtmlPath);
});

// Handle SPA routing - serve index.html for all other routes
app.get('*', (req, res) => {
  console.log(`Serving index.html for route: ${req.path}`);
  res.sendFile(indexHtmlPath);
});

// Error handling middleware (must be last)
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server - bind to 0.0.0.0 so Railway can reach it
const server = app.listen(PORT, HOST, () => {
  console.log(`Server is running on ${HOST}:${PORT}`);
  console.log(`Build directory: ${buildDir}`);
  console.log(`Health check available at http://${HOST}:${PORT}/health`);
});

// Handle server errors
server.on('error', (err) => {
  console.error('Server error:', err);
  process.exit(1);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

