#!/bin/bash
# ============================================================
# Ardenus Website - Lightsail Server Setup Script
# Run this on a fresh Ubuntu 24.04 LTS instance
# ============================================================

set -e  # Exit on error

echo "=============================================="
echo "  Ardenus Server Setup - Ubuntu 24.04 LTS"
echo "=============================================="

# Update system
echo "[1/8] Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install Node.js 20 LTS
echo "[2/8] Installing Node.js 20 LTS..."
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install Python 3 and pip
echo "[3/8] Installing Python 3..."
sudo apt install -y python3 python3-pip python3-venv

# Install Nginx (reverse proxy)
echo "[4/8] Installing Nginx..."
sudo apt install -y nginx

# Install PM2 (process manager for Node.js)
echo "[5/8] Installing PM2..."
sudo npm install -g pm2

# Install Certbot for SSL
echo "[6/8] Installing Certbot for SSL..."
sudo apt install -y certbot python3-certbot-nginx

# Install Git
echo "[7/8] Installing Git..."
sudo apt install -y git

# Create app directory
echo "[8/8] Creating application directory..."
sudo mkdir -p /var/www/ardenus
sudo chown -R $USER:$USER /var/www/ardenus

echo ""
echo "=============================================="
echo "  Setup Complete!"
echo "=============================================="
echo ""
echo "Installed versions:"
echo "  - Node.js: $(node --version)"
echo "  - npm: $(npm --version)"
echo "  - Python: $(python3 --version)"
echo "  - PM2: $(pm2 --version)"
echo "  - Nginx: $(nginx -v 2>&1)"
echo ""
echo "Next steps:"
echo "  1. Clone your repository to /var/www/ardenus"
echo "  2. Run the deploy script"
echo "  3. Configure SSL with: sudo certbot --nginx -d yourdomain.com"
echo ""
