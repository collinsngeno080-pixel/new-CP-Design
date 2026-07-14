# Multi-stage build for Vite React app with Express backend

# Stage 1: Build the frontend
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (needed for build)
RUN npm ci

# Copy source code
COPY . .

# Build the frontend
RUN npm run build

# Stage 2: Install production dependencies separately
FROM node:20-alpine AS deps

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies with minimal footprint
RUN npm ci --omit=dev --ignore-scripts && \
    npm cache clean --force && \
    rm -rf /root/.npm

# Stage 3: Production image - minimal runtime
FROM node:20-alpine AS production

WORKDIR /app

# Upgrade base packages (fix CVEs) and install dumb-init
RUN apk upgrade --no-cache && \
    apk add --no-cache dumb-init

# Create non-root user first (before copying files)
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001

# Copy only necessary production dependencies from deps stage
COPY --from=deps --chown=nodejs:nodejs /app/node_modules ./node_modules

# Copy server files
COPY --chown=nodejs:nodejs server/ ./server/

# Copy built frontend files
COPY --from=builder --chown=nodejs:nodejs /app/dist ./dist/

# Copy public files (only essential ones)
COPY --chown=nodejs:nodejs public/_redirects public/robots.txt public/sitemap.xml ./public/
COPY --chown=nodejs:nodejs public/images/ ./public/images/

# Copy minimal package.json for Node.js module resolution
COPY --chown=nodejs:nodejs package.json ./

USER nodejs

# Expose port (only what's needed)
EXPOSE 3001

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3001/health', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})" || exit 1

# Use dumb-init to handle signals properly
ENTRYPOINT ["dumb-init", "--"]

# Start API server
CMD ["node", "server/api.js"]
