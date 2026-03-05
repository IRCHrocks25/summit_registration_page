import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0'; // Bind to all interfaces for Railway

// Allowed hosts (for logging/monitoring only – not blocking)
const ALLOWED_HOSTS = [
  'summitregistrationpage-production.up.railway.app',
  'localhost',
  '127.0.0.1',
];

// Host logging middleware (non-blocking to avoid 502/healthcheck issues)
app.use((req, res, next) => {
  const host = req.get('host') || '';
  const hostname = req.hostname || '';

  const isAllowed =
    ALLOWED_HOSTS.includes(hostname) ||
    ALLOWED_HOSTS.some((allowed) => host.includes(allowed));

  if (!isAllowed) {
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

// Serve static files from the build directory
app.use(express.static(buildDir));

// Handle SPA routing - serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(join(buildDir, 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).send('Internal Server Error');
});

// Start server - bind to 0.0.0.0 so Railway can reach it
app.listen(PORT, HOST, () => {
  console.log(`Server is running on ${HOST}:${PORT}`);
  console.log(`Build directory: ${buildDir}`);
});

