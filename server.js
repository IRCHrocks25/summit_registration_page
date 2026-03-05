import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

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

// Serve static files from the build directory
app.use(express.static(join(__dirname, 'build')));

// Handle SPA routing - serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

