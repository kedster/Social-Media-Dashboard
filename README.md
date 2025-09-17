# Social Media Dashboard App

![Preview](images/desktop-preview.jpg)

A modern social media dashboard built with React and TypeScript, deployed on Cloudflare's edge infrastructure.

## 🚀 Architecture

- **Frontend**: React TypeScript app deployed on Cloudflare Pages
- **Backend**: Cloudflare Workers API for data processing
- **Deployment**: Automated via GitHub Actions
- **Styling**: SASS/SCSS with responsive design

## 📁 Project Structure

```
├── frontend/          # React TypeScript application
├── backend/           # Cloudflare Worker API
├── .github/workflows/ # GitHub Actions for deployment
└── docs/             # Documentation
```

## 🛠️ Technologies

<p align="center">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" width="50" height="50" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" width="50" height="50" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="Sass" width="50" height="50" />
</p>

- **Frontend**: React 18, TypeScript, SASS, React Router
- **Backend**: Cloudflare Workers, TypeScript
- **Build Tools**: React Scripts 5.0, Wrangler CLI
- **Deployment**: Cloudflare Pages, Cloudflare Workers, GitHub Actions

## 🚀 Quick Start

### Prerequisites

- Node.js v20+
- npm
- Git

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kedster/Social-Media-Dashboard.git
   cd Social-Media-Dashboard
   ```

2. **Start the backend** (Terminal 1):
   ```bash
   cd backend
   npm install
   npm run dev
   ```

3. **Start the frontend** (Terminal 2):
   ```bash
   cd frontend
   npm install
   npm start
   ```

4. **Access the application**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8787

## 📦 Deployment

### Automatic Deployment

The application automatically deploys to Cloudflare when you push to the main branch:

1. Frontend → Cloudflare Pages
2. Backend → Cloudflare Workers

See [Cloudflare Deployment Guide](docs/CLOUDFLARE_DEPLOYMENT.md) for detailed setup instructions.

## Features

1. **Account Integration**: Connect your social media accounts, such as Facebook, Twitter, Instagram, LinkedIn, and more, to the app.
2. **Unified Dashboard**: Access all your connected accounts from a single dashboard, eliminating the need to switch between multiple apps or tabs.
3. **Real-time Analytics**: Get real-time insights into your social media performance, including followers, likes, comments, and engagement metrics.
4. **Scheduling and Publishing**: Schedule and publish posts across multiple social media platforms at once, saving time and effort.
5. **Social Listening**: Monitor mentions, hashtags, and keywords relevant to your brand or industry to stay updated on trends and engage with your audience effectively.
6. **Inbox Management**: Receive and respond to direct messages, comments, and notifications from different social media platforms within the app.
7. **Content Curation**: Discover and curate content from various sources, such as articles, images, and videos, to share with your audience.
8. **Collaboration and Team Management**: Collaborate with team members and assign roles and permissions for efficient social media management.
9. **Customizable Reports**: Generate customized reports with key performance indicators (KPIs) and export them for analysis or sharing with stakeholders.

## Installation

For detailed installation and deployment instructions, see the [Cloudflare Deployment Guide](docs/CLOUDFLARE_DEPLOYMENT.md).

### Quick Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/kedster/Social-Media-Dashboard.git
   cd Social-Media-Dashboard
   ```

2. Install dependencies and start development servers:
   ```bash
   # Backend (Terminal 1)
   cd backend && npm install && npm run dev
   
   # Frontend (Terminal 2)
   cd frontend && npm install && npm start
   ```

3. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8787

## Usage

Once you have installed and launched the app, follow these steps to get started:

1. Create an account or log in to your existing account.

2. Connect your desired social media accounts using the provided integration options.

3. Explore the dashboard to view real-time analytics, scheduled posts, and incoming messages.

4. Use the scheduling and publishing features to plan and publish content across your social media accounts.

5. Monitor your brand or industry-related keywords and engage with your audience using the social listening features.

6. Customize the app's settings and notifications according to your preferences.

7. Generate and export reports to track your social media performance and share insights with others.

## Technologies
<p align="center">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" width="50" height="50" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" width="50" height="50" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="Sass" width="50" height="50" />
</p>


## Contributing

We welcome contributions to the Social Media Dashboard App! If you have any suggestions, bug reports, or feature requests, please open an issue on the project repository.

If you would like to contribute code to the project, follow these steps:

1. Fork the repository on GitHub.

2. Create a new branch for your feature or bug fix:

   ```
   git checkout -b feature/your-feature-name
   ```

3. Make the necessary changes and commit them:

   ```
   git commit -m "Add your commit message"
   ```

4. Push your branch to your forked repository:

   ```
   git push origin feature/your-feature-name
   ```




MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS," WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
