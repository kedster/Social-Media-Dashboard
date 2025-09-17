# Cloudflare Deployment Guide

This document outlines the setup and deployment process for the Social Media Dashboard application using Cloudflare Pages (frontend) and Cloudflare Workers (backend).

## Project Structure

```
├── frontend/          # React TypeScript application (Cloudflare Pages)
├── backend/           # Cloudflare Worker API
├── .github/workflows/ # GitHub Actions for automated deployment
└── docs/             # Documentation
```

## Prerequisites

- Node.js v20+
- npm
- Cloudflare account
- GitHub repository

## Local Development

### 1. Start the Backend (Cloudflare Worker)

```bash
cd backend
npm install
npm run dev
```

The Worker API will be available at `http://localhost:8787`

API Endpoints:
- `GET /api/health` - Health check
- `GET /api/dataFake` - Social media follower data
- `GET /api/fakeOverview` - Overview analytics data

### 2. Start the Frontend (React App)

```bash
cd frontend
npm install
npm start
```

The frontend will be available at `http://localhost:3000`

## Deployment

### 1. Cloudflare Account Setup

1. Create a Cloudflare account at https://cloudflare.com
2. Get your Account ID from the dashboard
3. Create an API token with the following permissions:
   - Zone:Zone:Read
   - Zone:Page Rules:Edit
   - Zone:DNS:Edit
   - Account:Cloudflare Pages:Edit
   - User:User Details:Read

### 2. GitHub Secrets Configuration

Add the following secrets to your GitHub repository:

- `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token
- `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare Account ID

### 3. Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:

1. Build and deploy the frontend to Cloudflare Pages on push to main/master
2. Deploy the backend to Cloudflare Workers on push to main/master

### 4. Manual Deployment

#### Frontend (Cloudflare Pages)

1. Connect your GitHub repository to Cloudflare Pages
2. Set build settings:
   - Build command: `cd frontend && npm run build`
   - Build output directory: `frontend/build`
   - Root directory: `/`

#### Backend (Cloudflare Workers)

1. Install Wrangler CLI: `npm install -g wrangler`
2. Authenticate: `wrangler login`
3. Deploy: `cd backend && wrangler deploy`

## Configuration

### Frontend Environment Variables

The frontend automatically detects the environment:
- Development: Uses `http://localhost:8787/api` (local Worker)
- Production: Uses deployed Worker URL

### Backend Configuration

Worker configuration is in `backend/wrangler.jsonc`:

```jsonc
{
  "name": "social-media-api",
  "main": "src/index.ts",
  "compatibility_date": "2025-09-17"
}
```

## API Integration

The backend provides mock data that matches the original API structure. To integrate with real social media APIs:

1. Update `backend/src/index.ts`
2. Add necessary API keys as Worker secrets
3. Implement authentication and rate limiting

## Troubleshooting

### Common Issues

1. **Build fails on Node.js v20**: Ensure react-scripts is v5.0.1+
2. **CORS errors**: Check that the Worker includes proper CORS headers
3. **TypeScript errors**: Ensure .tsx extensions for JSX files

### Debugging

- Check Worker logs: `wrangler logs` or in Cloudflare dashboard
- Check Pages deployment logs in Cloudflare dashboard
- Test API endpoints locally: `curl http://localhost:8787/api/health`

## Next Steps

### Database Integration

Consider adding persistent storage:
- Cloudflare D1 for SQL data
- Cloudflare KV for key-value storage
- Cloudflare R2 for file storage

### Authentication

Implement authentication using:
- Cloudflare Access
- Auth0, Firebase Auth, or similar
- Custom JWT implementation

### Performance Optimization

- Add caching strategies
- Implement rate limiting
- Use Cloudflare Analytics for monitoring

## Support

For deployment issues:
- Check the GitHub Actions logs
- Review Cloudflare dashboard logs
- Consult Cloudflare Workers documentation: https://developers.cloudflare.com/workers/