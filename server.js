import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Allowed hosts
const ALLOWED_HOSTS = [
  'summitregistrationpage-production.up.railway.app',
  'localhost',
  '127.0.0.1',
];

// Host validation middleware
app.use((req, res, next) => {
  const host = req.get('host');
  const hostname = req.hostname;
  
  // Allow requests from allowed hosts or local development
  if (
    ALLOWED_HOSTS.includes(hostname) ||
    ALLOWED_HOSTS.some(allowed => host?.includes(allowed)) ||
    process.env.NODE_ENV !== 'production'
  ) {
    next();
  } else {
    res.status(403).send('Forbidden: Invalid host');
  }
});

// Serve static files from the build directory
app.use(express.static(join(__dirname, 'build')));

// Handle SPA routing - serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

