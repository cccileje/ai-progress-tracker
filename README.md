# AI-to-YouTube Progress Tracker

A simple, senior-friendly progress tracker for the 8-week AI-to-YouTube lesson plan.

## Quick Start

1. Install Node.js (version 18 or higher) from https://nodejs.org
2. Open a terminal in this folder
3. Run:
   npm install
   npm run dev
4. Open the URL shown (usually http://localhost:5173)

## Build for Deployment

npm run build

The `dist/` folder can be uploaded to Netlify, Vercel, or GitHub Pages for free hosting.

## Backing Up Your Progress

Use the "Download Backup" button in the top-right corner to save your progress
as a JSON file. Use "Load Backup" to restore it on another device or browser.

## Syncing Across Browsers

On the first visit in each browser, enter a GitHub Personal Access Token with
the `gist` scope when prompted. Progress is stored in a private GitHub Gist and
will then be merged automatically across browsers. A token is saved only in
that browser's local storage. Never commit a token to source code; revoke any
token that has been exposed.