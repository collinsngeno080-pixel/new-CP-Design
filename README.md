# College Produce Landing Page

## Overview

Modern landing page for College Produce featuring an integrated contact form with Microsoft Graph email integration using Azure AD authentication. Built with React, TypeScript, and Express.

## Quick Start

### Prerequisites

- Node.js (v16 or higher)
- Azure AD credentials
- Docker (optional)

### Installation

```bash
# Install dependencies
npm install

# Configure environment
cp .env.local.example .env.local
# Edit .env.local with your Azure credentials

# Start development server
npm run dev:all
```

The frontend will be available at http://localhost:8080 and the API at http://localhost:3001.

## Azure Configuration

### Required Credentials

1. Go to https://portal.azure.com
2. Navigate to "App registrations"
3. Create or open your app registration
4. Copy the following values:
   - AZURE_TENANT_ID (from Overview tab)
   - AZURE_CLIENT_ID (from Overview tab)
   - AZURE_CLIENT_SECRET (from Certificates & secrets)
5. Add API permissions: Mail.Send
6. Set GRAPH_FROM_EMAIL to your service account email

### Environment Variables

```env
AZURE_TENANT_ID=your-tenant-id
AZURE_CLIENT_ID=your-client-id
AZURE_CLIENT_SECRET=your-client-secret
GRAPH_FROM_EMAIL=noreply@yourdomain.com
```

## Architecture

### Frontend

- React with TypeScript
- Vite build tool
- Tailwind CSS for styling
- Landing page with multiple sections
- Integrated contact form with validation

### Backend

- Express.js API server
- Microsoft Graph API integration
- OAuth2 token exchange
- Email delivery to multiple recipients

### Contact Form Email Flow

1. User submits contact form on landing page
2. Frontend sends POST request to /api/contact
3. Backend authenticates with Azure AD
4. Microsoft Graph API sends email
5. Success/error response to frontend

## Development

### Available Scripts

```bash
npm run dev          # Start frontend only
npm run dev:api      # Start backend API only
npm run dev:all      # Start both frontend and backend
npm run build        # Build for production
npm run preview      # Preview production build
```

### Project Structure

```
src/
  components/       # React components (Hero, CTA, Footer, etc.)
  pages/           # Page components (Landing, Contact)
  hooks/           # Custom React hooks
  lib/             # Utility functions
  types/           # TypeScript definitions
server/
  api.js           # Express API server for contact form
public/            # Static assets
```

## Docker

### Development

```bash
docker-compose up
```

### Production Build

```bash
docker build -f Dockerfile -t collegeproduce-app .
docker run -p 8080:8080 collegeproduce-app
```

### API Only

```bash
docker build -f Dockerfile.api -t collegeproduce-api .
docker run -p 3001:3001 collegeproduce-api
```

## Deployment

### Azure Web App

```bash
chmod +x deploy-azure.sh
./deploy-azure.sh
```

### Environment Setup

Ensure all environment variables are configured in your deployment platform:

- Azure Web App: Application Settings
- Vercel: Environment Variables
- Docker: .env file or docker-compose.yml

## Contact Form Email Recipients

The integrated contact form sends emails to:

- info@collegeproduce.com
- support@collegeproduce.com

To modify recipients, edit the `TO_EMAILS` array in server/api.js.

## Tech Stack

- React 18
- TypeScript
- Vite
- Express.js
- Microsoft Graph API
- Tailwind CSS
- Axios
- Docker

## License

Proprietary - College Produce

## Support

For issues or questions, contact the development team.
