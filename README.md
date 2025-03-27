# Rsbuild + TailwindCSS + Capacitor.js + shadcn/ui Project

A modern cross-platform mobile application built with Rsbuild, TailwindCSS, Capacitor.js, and shadcn/ui components.

## Tech Stack

- [Rsbuild](https://rsbuild.dev/) - Build tool
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Capacitor.js](https://capacitorjs.com/) - Cross-platform native runtime
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components

## Pre-requisites

1. Git client (only required for Windows OS, Mac OS comes with git pre-installed): https://git-scm.com/download/win
2. NodeJS and NPM (use LTS version)
     - Mac OS:
     1. Install Brew: **http://brew.sh/**
     2. Install NVM: **https://github.com/creationix/nvm#install-script**
     3. Install NodeJS using NVM:
     ```
     nvm install v22.13.1
     ```
     4. Set nvm to use v22.13.1:
     ```
     nvm use v22.13.1
     ```
   - Windows:
     1. Install NVM: **https://github.com/coreybutler/nvm-windows/releases**
     2. Check for available node version:
     ```
     nvm list available
     ```
     3. Install NodeJS using NVM:
     ```
     nvm install v22.13.1
     ```
     4. Set nvm to use the installed node version:
     ```
     nvm use 22.13.1
     ```
     5. (Optional) Set default node version:
     ```
     nvm alias default 22.13.1
     nvm use
     ```
     nvm alias default 18.16.1
     nvm use
     ```
3. Xcode (for iOS development)
4. Android Studio (for Android development)    

## Visual Code Plugins

Install the plugins below

1. https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
2. https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
3. https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens
4. https://marketplace.visualstudio.com/items?itemName=figma.figma-vscode-extension


## Setup

1. Install dependencies:
```bash
nvm use --lts
npm install
```

2. Install platform-specific dependencies:
```bash
npx cap add ios
npx cap add android
```

## Development

Start the development server:
```bash
npm run dev
```

## Building & Deployment

1. Build for production:
```bash
npm run build
```

2. Sync with native platforms:
```bash
npx cap sync
```

## Running on Mobile Devices

### iOS
Build, sync, and run on iOS simulator:
```bash
npm run build && npx cap sync && npx cap run ios
```

Run with live reload:
npx cap run ios --target=<device id> --host=localhost --port=3000 -l
Example:
```bash
npx cap run ios --target=A22FDE86-3ADA-4F34-9D93-6FB5D859F653 --host=localhost --port=3000 -l
```

### Android
Run on Android emulator with live reload:
npx cap run ios --target=<device id> --host=<host ip> --port=3000 -l
Example:
```bash
npx cap run android --target=Pixel_9_Pro_XL_API_36 --host=10.1.14.212 --port=3000 -l
```

## Project Structure

```
├── src/              # Source code
├── ios/              # iOS platform-specific code
├── android/          # Android platform-specific code
├── components/       # shadcn/ui components
├── components.json   # shadcn/ui configuration
└── rsbuild.config.mjs # Rsbuild configuration
```

## Acknowledgements
[shadcnui-boilerplate](https://github.com/TinsFox/shadcnui-boilerplate) by TinsFox.
