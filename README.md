# Beatsquares Documentation

Official documentation for [Beatsquares](https://www.beatsquares.com) - the platform for creating, organizing, and sharing content through Squares, Podcasts, Newsletters, and WhatsApp messages.

## 📚 Documentation Overview

This repository contains comprehensive documentation covering:

- **Getting Started** - Account setup, dashboard overview, and understanding Squares
- **Core Features** - Creating and managing Squares, Podcasts, Newsletters, and WhatsApp messages
- **Changelog** - Product updates with RSS feed subscription
- **Troubleshooting** - Common errors and frequently asked questions

## 🚀 Features

- **RSS-Enabled Changelog** - Subscribe to product updates automatically
- **Modern Design** - Clean, minimalist interface matching Beatsquares branding
- **Responsive Layout** - Optimized for all devices and screen sizes
- **Search & Navigation** - Easy-to-use search and organized navigation structure

## 🛠️ Development

### Local Development

Install the [Mintlify CLI](https://www.npmjs.com/package/mint) to preview your documentation changes locally:

```bash
npm i -g mint
```

Run the development server at the root of your documentation:

```bash
mint dev
```

View your local preview at `http://localhost:3000`.

### Project Structure

```
beatsquares_documentation/
├── getting-started/          # User onboarding and basics
├── core-features/            # Main platform features
├── changelog/                # Product updates with RSS
├── troubleshooting/          # Help and support
├── images/                   # Documentation assets
├── docs.json                 # Mintlify configuration
└── README.md                 # This file
```

## 🚀 Publishing Changes

This documentation is automatically deployed using Mintlify's GitHub integration. Changes are deployed to production automatically after pushing to the `main` branch.

### Deployment Process

1. Make changes to documentation files
2. Commit and push to `main` branch
3. Mintlify automatically builds and deploys
4. Changes are live within minutes

## 📖 RSS Feed

Stay updated with product changes by subscribing to our RSS feed:

- **Changelog RSS**: `/changelog/overview/rss.xml`
- **Automatic Updates**: Get notified of new features and improvements
- **RSS Readers**: Compatible with Feedly, RSS Reader, and other popular clients

## 🔧 Configuration

The documentation is configured via `docs.json` with:

- **Theme**: Maple (sophisticated, minimalist design)
- **Colors**: Beatsquares brand colors (black, white, gray)
- **Logo**: External logo from Beatsquares.com
- **Navigation**: Organized tabs for easy content discovery

## 🆘 Need Help?

### Troubleshooting

- **Dev environment issues**: Run `mint update` to ensure latest CLI version
- **404 errors**: Verify you're running in a folder with valid `docs.json`
- **Build failures**: Check `docs.json` syntax and file references

### Resources

- [Mintlify Documentation](https://mintlify.com/docs)
- [Mintlify Community](https://mintlify.com/community)
- [Beatsquares Support](mailto:support@beatsquares.com)

## 📄 License

This documentation is part of the Beatsquares platform. For more information, visit [beatsquares.com](https://www.beatsquares.com).
