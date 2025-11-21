#!/bin/bash

# This is an example script for manually deploying the frontend.
# The commands will vary based on your hosting provider (e.g., Vercel, Netlify).

echo "Building frontend..."
cd client
npm install
npm run build

echo "Deploying frontend..."
# Example for Vercel:
# vercel --prod

echo "Frontend deployment script finished."