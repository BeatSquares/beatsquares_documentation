# Mintlify Documentation Writing Guide

## Table of Contents
1. [Overview](#overview)
2. [File Structure](#file-structure)
3. [Frontmatter](#frontmatter)
4. [Markdown Basics](#markdown-basics)
5. [Components](#components)
6. [Navigation Configuration](#navigation-configuration)
7. [Best Practices](#best-practices)
8. [Common Patterns](#common-patterns)

---

## Overview

Mintlify is a documentation platform that uses **MDX** (Markdown + JSX components) to create interactive, beautiful documentation. This guide covers everything you need to write excellent Mintlify documentation.

### Key Features
- **MDX Support**: Mix standard Markdown with React components
- **Interactive Components**: Callouts, cards, accordions, tabs, code blocks
- **Visual Editor**: Browser-based editing with component menu (press `/`)
- **Auto-deployment**: Changes pushed to GitHub deploy automatically
- **Theme Customization**: Configure via `docs.json`

---

## File Structure

### File Naming
- All documentation files use `.mdx` extension
- Use lowercase with hyphens: `creating-podcasts.mdx`
- Index file: `index.mdx` (serves as homepage)

### Directory Organization
```
beatsquares_documentation/
├── docs.json              # Global configuration
├── index.mdx              # Homepage
├── getting-started/       # Getting started section
│   ├── account-setup-login.mdx
│   └── dashboard-overview.mdx
├── core-features/         # Core features section
│   ├── creating-podcasts.mdx
│   └── creating-newsletters.mdx
├── changelog/             # Changelog section
│   └── overview.mdx
├── images/                # Image assets
├── logo/                  # Logo assets
└── snippets/              # Reusable content snippets
```

### Image Guidelines
- **Max size**: 5 MB per image
- **Formats**: PNG, JPG, GIF, SVG
- **For larger files**: Host externally (Cloudinary, S3) and use URL
- **Path format**: `/images/filename.png` (root-relative)

---

## Frontmatter

Every `.mdx` file starts with YAML frontmatter wrapped in `---`:

```yaml
---
title: "Page Title"
description: "Brief description of the page content (important for SEO)"
---
```

### Frontmatter Properties

| Property | Required | Purpose |
|----------|----------|---------|
| `title` | Yes | Page title (appears in browser tab, navigation) |
| `description` | Yes | Page description (SEO, social sharing) |
| `icon` | No | Icon for page (Font Awesome or custom) |
| `sidebarTitle` | No | Override sidebar display name |

**Example:**
```yaml
---
title: "Creating Podcasts"
description: "Step-by-step guide to creating, editing, and publishing podcast content"
icon: "podcast"
sidebarTitle: "Podcasts"
---
```

---

## Markdown Basics

### Headers
```markdown
# H1 - Page Title (use sparingly, usually in frontmatter)
## H2 - Main Sections
### H3 - Subsections
#### H4 - Sub-subsections
```

**Best Practice**: Start with `##` since the page title is H1. All headers automatically create anchor links.

### Text Formatting
```markdown
**Bold text**
*Italic text*
~~Strikethrough~~
`Inline code`
[Link text](https://example.com)
[Internal link](/path/to/page)
```

### Lists
```markdown
- Unordered list item
- Another item
  - Nested item

1. Ordered list item
2. Second item
   1. Nested ordered item
```

### Code Blocks

**Basic Code Block:**
````markdown
```javascript
console.log("Hello World");
```
````

**With Title:**
````markdown
```javascript helloWorld.js
console.log("Hello World");
```
````

**With Line Highlighting:**
````markdown
```python {2,4-6}
def hello():
    print("This line is highlighted")
    print("Normal line")
    print("These lines")
    print("are also")
    print("highlighted")
```
````

### Tables
```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Row 1    | Data     | Data     |
| Row 2    | Data     | Data     |
```

### Images
```markdown
![Alt text](/images/screenshot.png)
![External image](https://example.com/image.png)
```

### Horizontal Rule
```markdown
---
```

---

## Components

Mintlify provides powerful MDX components for interactive documentation.

### Callouts

Use callouts to highlight important information.

**Types:**
```mdx
<Note>
  This adds a note in the content
</Note>

<Warning>
  This raises a warning to watch out for
</Warning>

<Info>
  This draws attention to important information
</Info>

<Tip>
  This suggests a helpful tip
</Tip>

<Check>
  This indicates a successful or completed action
</Check>
```

**Example:**
```mdx
<Warning>
  Make sure to save your changes before leaving the page!
</Warning>
```

---

### Cards

Cards highlight main points or create navigation links.

**Basic Card:**
```mdx
<Card title="Card Title" icon="rocket" href="/getting-started">
  Description of what this card links to.
</Card>
```

**Properties:**

| Property | Type | Description |
|----------|------|-------------|
| `title` | string | Card title (required) |
| `icon` | string | Font Awesome or custom icon |
| `href` | string | Link URL (internal or external) |
| `img` | string | Image URL (displays at top) |
| `horizontal` | boolean | Compact horizontal layout |
| `cta` | string | Custom button text |
| `arrow` | boolean | Show/hide arrow indicator |

**Examples:**

```mdx
<!-- Icon Card with Link -->
<Card
  title="Getting Started"
  icon="rocket"
  href="/getting-started"
>
  Learn the basics of BeatSquares
</Card>

<!-- Image Card -->
<Card
  title="Visual Guide"
  img="/images/guide-preview.png"
  href="/guides/visual"
>
  Step-by-step visual walkthrough
</Card>

<!-- Horizontal Card -->
<Card
  title="Quick Reference"
  icon="book"
  horizontal
>
  Compact card for lists
</Card>

<!-- Custom CTA -->
<Card
  title="API Reference"
  icon="code"
  href="/api"
  cta="View API Docs"
  arrow={true}
>
  Complete API documentation
</Card>
```

**Card Groups:**
```mdx
<CardGroup cols={2}>
  <Card title="First Card" icon="star">
    Content here
  </Card>
  <Card title="Second Card" icon="heart">
    Content here
  </Card>
</CardGroup>
```

---

### Accordions

Accordions allow progressive disclosure of content.

**Single Accordion:**
```mdx
<Accordion title="What is BeatSquares?">
  BeatSquares is a platform for creating podcasts, newsletters, and more.
</Accordion>
```

**Properties:**

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | string | required | Accordion title |
| `description` | string | optional | Subtitle text |
| `defaultOpen` | boolean | false | Open by default |
| `icon` | string | optional | Custom icon |
| `iconType` | string | optional | Font Awesome style |

**Accordion Group:**
```mdx
<AccordionGroup>
  <Accordion title="Getting Started" icon="rocket" defaultOpen>
    Introduction content here
  </Accordion>

  <Accordion title="Advanced Features" icon="star">
    Advanced content here
  </Accordion>

  <Accordion title="Troubleshooting" icon="wrench">
    Help content here
  </Accordion>
</AccordionGroup>
```

**With Description:**
```mdx
<Accordion
  title="Premium Features"
  description="Available on Pro plan"
  icon="crown"
>
  List of premium features...
</Accordion>
```

---

### Code Groups (Tabs)

Display multiple code examples with tab navigation.

**Basic Code Group:**
````mdx
<CodeGroup>

```javascript helloWorld.js
console.log("Hello World");
```

```python hello_world.py
print('Hello World!')
```

```ruby hello_world.rb
puts "Hello World!"
```

</CodeGroup>
````

**Important**:
- Each code block **must** have a filename
- Filenames become tab labels
- Specify language for syntax highlighting

**Real-World Example:**
````mdx
<CodeGroup>

```bash Install with npm
npm install beatsquares-sdk
```

```bash Install with yarn
yarn add beatsquares-sdk
```

```bash Install with pnpm
pnpm add beatsquares-sdk
```

</CodeGroup>
````

---

### Steps

Create sequential step-by-step instructions.

```mdx
<Steps>
  <Step title="Create Account">
    Sign up at app.beatsquares.com
  </Step>

  <Step title="Verify Email">
    Check your inbox for verification link
  </Step>

  <Step title="Complete Profile">
    Fill in your organization details
  </Step>
</Steps>
```

---

### Tabs

General-purpose tabs for non-code content.

```mdx
<Tabs>
  <Tab title="Overview">
    General overview content
  </Tab>

  <Tab title="Features">
    Feature list content
  </Tab>

  <Tab title="Pricing">
    Pricing information
  </Tab>
</Tabs>
```

---

## Navigation Configuration

Navigation is configured in `docs.json`:

```json
{
  "$schema": "https://mintlify.com/docs.json",
  "name": "BeatSquares Documentation",
  "theme": "maple",
  "colors": {
    "primary": "#000000",
    "light": "#E8E8E8",
    "dark": "#FFFFFF"
  },
  "logo": {
    "light": "https://example.com/logo-light.png",
    "dark": "https://example.com/logo-dark.png"
  },
  "favicon": "https://example.com/favicon.ico",
  "navigation": {
    "tabs": [
      {
        "tab": "User Guide",
        "groups": [
          {
            "group": "Getting Started",
            "pages": [
              "index",
              "getting-started/quick-start",
              "getting-started/installation"
            ]
          },
          {
            "group": "Features",
            "pages": [
              "features/overview",
              {
                "group": "Podcasts",
                "pages": [
                  "features/podcasts/creating",
                  "features/podcasts/editing"
                ]
              }
            ]
          }
        ]
      },
      {
        "tab": "API Reference",
        "groups": [
          {
            "group": "Endpoints",
            "pages": ["api/authentication", "api/users"]
          }
        ]
      }
    ],
    "global": {
      "anchors": [
        {
          "anchor": "Support",
          "href": "mailto:support@example.com",
          "icon": "envelope"
        },
        {
          "anchor": "GitHub",
          "href": "https://github.com/example",
          "icon": "github"
        }
      ]
    }
  },
  "navbar": {
    "links": [
      {
        "label": "Dashboard",
        "href": "https://app.example.com"
      }
    ]
  },
  "footer": {
    "socials": {
      "x": "https://x.com/example",
      "github": "https://github.com/example",
      "linkedin": "https://linkedin.com/company/example"
    }
  }
}
```

### Navigation Structure

**Key Concepts:**
- **Tabs**: Top-level navigation sections
- **Groups**: Section groupings within tabs
- **Pages**: Individual documentation pages
- **Nested Groups**: Groups can contain other groups

**Page Path Rules:**
- Use relative paths from root: `"getting-started/quick-start"`
- Omit `.mdx` extension
- Use forward slashes `/`
- `"index"` refers to `index.mdx`

---

## Best Practices

### Writing Style

1. **Be Concise**: Get to the point quickly
2. **Use Active Voice**: "Click the button" vs "The button should be clicked"
3. **Front-load Information**: Most important info first
4. **Break Up Text**: Use headers, lists, callouts to improve scannability
5. **Include Examples**: Show, don't just tell

### Structure

1. **Start with Overview**: Brief introduction of what the page covers
2. **Prerequisites Section**: What users need before starting
3. **Step-by-Step Instructions**: Clear, numbered steps
4. **Visual Aids**: Screenshots, diagrams, videos
5. **Conclusion**: Summarize what was learned
6. **Next Steps**: Link to related content

### Components Usage

1. **Callouts**:
   - Use `<Note>` for additional context
   - Use `<Warning>` for critical information
   - Use `<Tip>` for helpful suggestions
   - Don't overuse - they lose impact

2. **Code Blocks**:
   - Always specify language for syntax highlighting
   - Include filenames when helpful
   - Add comments for clarity
   - Keep examples focused and minimal

3. **Accordions**:
   - Use for optional/advanced content
   - Good for FAQs
   - Don't hide critical information

4. **Cards**:
   - Great for navigation to multiple sections
   - Use icons consistently
   - Keep descriptions brief

### SEO & Discoverability

1. **Title**: Clear, descriptive, unique per page
2. **Description**: 120-160 characters, compelling
3. **Headers**: Use hierarchy properly (H2 → H3 → H4)
4. **Internal Links**: Link to related pages
5. **Alt Text**: Describe images for accessibility

### Accessibility

1. **Alt Text**: Provide for all images
2. **Link Text**: Descriptive ("Learn about podcasts" vs "Click here")
3. **Color Contrast**: Don't rely solely on color
4. **Header Hierarchy**: Don't skip levels
5. **List Structure**: Use proper Markdown lists

---

## Common Patterns

### Tutorial Page Template

```mdx
---
title: "How to Create Podcasts"
description: "Complete guide to creating and publishing podcasts with BeatSquares"
---

## Overview

Brief introduction of what this tutorial covers and what users will learn.

## What You'll Learn

- First thing
- Second thing
- Third thing

## Prerequisites

<Note>
  Before starting, make sure you have:
  - Requirement 1
  - Requirement 2
</Note>

## Step-by-Step Guide

### Step 1: Initial Setup

Detailed instructions...

![Screenshot description](/images/step1.png)

### Step 2: Configuration

More instructions...

<Warning>
  Important warning about this step
</Warning>

### Step 3: Finalization

Final instructions...

## Conclusion

Summary of what was accomplished.

## What's Next?

<CardGroup cols={2}>
  <Card title="Related Topic 1" icon="arrow-right" href="/path">
    Short description
  </Card>
  <Card title="Related Topic 2" icon="arrow-right" href="/path">
    Short description
  </Card>
</CardGroup>
```

---

### API Reference Template

```mdx
---
title: "API Endpoint Name"
description: "Description of what this endpoint does"
---

## Endpoint

```
POST /api/v1/endpoint
```

## Description

What this endpoint does and when to use it.

## Authentication

<Info>
  This endpoint requires authentication. Include your API key in the header.
</Info>

## Request

<CodeGroup>

```bash cURL
curl -X POST https://api.example.com/v1/endpoint \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"param": "value"}'
```

```javascript JavaScript
const response = await fetch('https://api.example.com/v1/endpoint', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ param: 'value' })
});
```

```python Python
import requests

response = requests.post(
    'https://api.example.com/v1/endpoint',
    headers={'Authorization': 'Bearer YOUR_API_KEY'},
    json={'param': 'value'}
)
```

</CodeGroup>

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `param1` | string | Yes | Description |
| `param2` | number | No | Description |

## Response

```json
{
  "success": true,
  "data": {
    "id": "123",
    "status": "created"
  }
}
```

## Error Codes

<AccordionGroup>
  <Accordion title="400 Bad Request">
    Invalid parameters provided
  </Accordion>
  <Accordion title="401 Unauthorized">
    Missing or invalid API key
  </Accordion>
  <Accordion title="500 Internal Server Error">
    Server error occurred
  </Accordion>
</AccordionGroup>
```

---

### Feature Overview Template

```mdx
---
title: "Feature Name"
description: "Overview of the feature and its capabilities"
---

## Introduction

Brief explanation of what this feature does and why it's useful.

## Key Features

<CardGroup cols={2}>
  <Card title="Feature 1" icon="star">
    Description of feature 1
  </Card>
  <Card title="Feature 2" icon="rocket">
    Description of feature 2
  </Card>
  <Card title="Feature 3" icon="heart">
    Description of feature 3
  </Card>
  <Card title="Feature 4" icon="shield">
    Description of feature 4
  </Card>
</CardGroup>

## How It Works

<Steps>
  <Step title="Step 1">
    First step description
  </Step>
  <Step title="Step 2">
    Second step description
  </Step>
  <Step title="Step 3">
    Third step description
  </Step>
</Steps>

## Use Cases

### Use Case 1
Description and example...

### Use Case 2
Description and example...

## FAQ

<AccordionGroup>
  <Accordion title="Common question 1?" defaultOpen>
    Answer to question 1
  </Accordion>
  <Accordion title="Common question 2?">
    Answer to question 2
  </Accordion>
</AccordionGroup>

## Learn More

- [Related topic 1](/link)
- [Related topic 2](/link)
- [Related topic 3](/link)
```

---

### FAQ Template

```mdx
---
title: "Frequently Asked Questions"
description: "Common questions and answers about BeatSquares"
---

## General Questions

<AccordionGroup>
  <Accordion title="What is BeatSquares?" defaultOpen>
    BeatSquares is a platform for creating podcasts, newsletters, and WhatsApp messages from your content.
  </Accordion>

  <Accordion title="How do I get started?">
    Start by creating an account at [app.beatsquares.com](https://app.beatsquares.com).
  </Accordion>
</AccordionGroup>

## Technical Questions

<AccordionGroup>
  <Accordion title="What audio formats are supported?">
    We support MP3, WAV, and AAC formats for podcast uploads.
  </Accordion>

  <Accordion title="How long does podcast generation take?">
    Typically 5-10 minutes depending on length and complexity.
  </Accordion>
</AccordionGroup>

## Billing Questions

<AccordionGroup>
  <Accordion title="What payment methods do you accept?">
    We accept all major credit cards and PayPal.
  </Accordion>
</AccordionGroup>

## Still have questions?

<Card title="Contact Support" icon="envelope" href="mailto:support@beatsquares.com">
  Our support team is here to help
</Card>
```

---

## Quick Reference

### Component Cheat Sheet

```mdx
<!-- Callouts -->
<Note>Note text</Note>
<Warning>Warning text</Warning>
<Info>Info text</Info>
<Tip>Tip text</Tip>
<Check>Success text</Check>

<!-- Cards -->
<Card title="Title" icon="icon-name" href="/path">Content</Card>
<Card title="Title" img="/image.png" horizontal>Content</Card>

<!-- Accordions -->
<Accordion title="Title">Content</Accordion>
<AccordionGroup>
  <Accordion title="Title 1">Content</Accordion>
  <Accordion title="Title 2">Content</Accordion>
</AccordionGroup>

<!-- Code Groups -->
<CodeGroup>
```language filename
code
```
```language filename
code
```
</CodeGroup>

<!-- Steps -->
<Steps>
  <Step title="Title">Content</Step>
  <Step title="Title">Content</Step>
</Steps>

<!-- Tabs -->
<Tabs>
  <Tab title="Title">Content</Tab>
  <Tab title="Title">Content</Tab>
</Tabs>

<!-- Card Groups -->
<CardGroup cols={2}>
  <Card>...</Card>
  <Card>...</Card>
</CardGroup>
```

---

## Development Workflow

### Local Development

1. **Install CLI**:
   ```bash
   npm install -g mintlify
   ```

2. **Navigate to docs directory**:
   ```bash
   cd /path/to/beatsquares_documentation
   ```

3. **Start dev server**:
   ```bash
   mint dev
   ```

4. **Preview**: Open `localhost:3000` in browser

5. **Edit files**: Changes auto-reload

### Deployment

1. **Commit changes**:
   ```bash
   git add .
   git commit -m "Update documentation"
   git push
   ```

2. **Auto-deploy**: Mintlify automatically deploys from GitHub

3. **Check status**: Monitor via GitHub Actions or Mintlify dashboard

---

## Resources

### Official Documentation
- [Mintlify Docs](https://mintlify.com/docs)
- [Mintlify Components](https://mintlify.com/docs/writing-content/overview)
- [Mintlify Blog](https://mintlify.com/blog)

### Tools
- [Mintlify VSCode Extension](https://marketplace.visualstudio.com/items?itemName=mintlify.document)
- [Mintlify MDX Extension](https://www.mintlify.com/blog/mdx-vscode-extension)

### Support
- Email: support@beatsquares.com
- [GitHub Issues](https://github.com/beatsquares)

---

## Conclusion

This guide covers the essentials of writing documentation with Mintlify. Remember:

1. ✅ Use MDX for rich, interactive content
2. ✅ Start with clear frontmatter
3. ✅ Use components purposefully
4. ✅ Maintain consistent structure
5. ✅ Write for your audience
6. ✅ Test locally before deploying

Happy documenting! 🚀
