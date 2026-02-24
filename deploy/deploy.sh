#!/bin/bash
# ============================================================
# Ardenus Website - Deployment Script
# Run this to deploy or update the application
# ============================================================

set -e

APP_DIR="/var/www/ardenus"
REPO_URL="https://github.com/Ardenus-Technologies/Ardenus-Website.git"

echo "=============================================="
echo "  Deploying Ardenus Website"
echo "=============================================="

cd $APP_DIR

# Pull latest code (or clone if first time)
if [ -d ".git" ]; then
    echo "[1/6] Pulling latest changes..."
    git pull origin main
else
    echo "[1/6] Cloning repository..."
    git clone $REPO_URL .
fi

# Install Node.js dependencies
echo "[2/6] Installing Node.js dependencies..."
npm ci --production=false

# Build Next.js application
echo "[3/6] Building Next.js application..."
npm run build

# Setup Python backend
echo "[4/6] Setting up Python backend..."
cd backend
if [ ! -d "venv" ]; then
    python3 -m venv venv
fi
source venv/bin/activate
pip install -r requirements.txt
deactivate
cd ..

# Restart services with PM2
echo "[5/6] Restarting services..."
pm2 delete all 2>/dev/null || true

# Start Next.js (production mode)
pm2 start npm --name "ardenus-web" -- start

# Start Python email service
pm2 start "cd $APP_DIR/backend && source venv/bin/activate && python email_service.py" --name "ardenus-api" --interpreter bash

# Save PM2 configuration
pm2 save

echo "[6/6] Setting up PM2 startup..."
pm2 startup systemd -u $USER --hp /home/$USER

echo ""
echo "=============================================="
echo "  Deployment Complete!"
echo "=============================================="
echo ""
pm2 status
echo ""
echo "Test locally:"
echo "  - Website: curl http://localhost:3000"
echo "  - API: curl http://localhost:8000"
echo ""
