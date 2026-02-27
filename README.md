# Multi-Step Registration Form

A modern, responsive, and visually appealing multi-step registration wizard built with React and Vite. It features a premium glassmorphism design, light/dark theme support, and seamless animations.

## Features

- **Multi-Step Wizard**: Three distinct steps (Personal Info, Account Details, Review & Submit) for a smooth user onboarding experience.
- **Light & Dark Mode**: Integrated theme toggling to support user preferences.
- **Glassmorphism UI**: Beautiful, premium aesthetics utilizing frosted glass effects.
- **Form Validation**: Real-time validation with inline error messages to prevent invalid submissions.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewports.
- **Interactive Elements**: Micro-animations, progress bar, and custom password visibility toggle.

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (CSS Variables, Flexbox, Animations)
- **Icons**: Lucide React

## Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repository-url>
   cd multiStepForm
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Deployment

This project is configured to be easily deployed on standard cloud providers like Vercel or Netlify.

**Vercel Deployment Issues?**
If you encounter `Could not resolve entry module "index.html"` on Vercel:

1. Ensure your "Root Directory" is left blank in Vercel Project Settings.
2. Ensure Vercel's "Framework Preset" is set to "Vite".
3. Trigger a redeployment without using the build cache.

## Author

Yash Soni
