# Contributing to Rajwadi Poshak

Thank you for your interest in contributing to Rajwadi Poshak! We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Detailed Setup Guide

### Prerequisites
Before you begin, ensure you have the following installed:
- Node.js >= 18.0.0
- npm >= 9.0.0
- MongoDB >= 6.0
- Git
- A code editor (VS Code recommended)

### Step 1: Clone the Repository
```bash
# Fork the repository first through GitHub interface, then:
git clone https://github.com/YOUR-USERNAME/Rajwadi-Poshak-Ecommerce.git
cd Rajwadi-Poshak-Ecommerce

# Add upstream remote
git remote add upstream https://github.com/Vegadjay/Rajwadi-Poshak-Ecommerce.git

# Verify remotes
git remote -v
```

### Step 2: Install Dependencies
```bash
# Install project dependencies
npm install

# If you're using yarn
yarn install
```

### Step 3: Environment Setup
```bash
# Copy the example environment file
cp .env.example .env

# Open .env and update the following variables:
# MONGODB_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret
# NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### Step 4: Database Setup
```bash
# Start MongoDB locally
mongod

# If using MongoDB Atlas, update your .env with the connection string
```

### Step 5: Run Development Server
```bash
# Start the development server
npm run dev

# Or using yarn
yarn dev

# The server will start on http://localhost:3000
```

### Step 6: Create a New Branch
```bash
# Create and checkout to a new branch
git checkout -b feature/your-feature-name

# Or for bug fixes
git checkout -b fix/your-fix-name
```

### Step 7: Making Changes
1. Make your changes in the code
2. Run tests to ensure nothing breaks:
   ```bash
   npm run test
   ```
3. Run linting:
   ```bash
   npm run lint
   ```
4. Format your code:
   ```bash
   npm run format
   ```

### Step 8: Committing Changes
```bash
# Add your changes
git add .

# Commit with a meaningful message
git commit -m "feat: add new feature" # for features
git commit -m "fix: resolve issue" # for fixes
```

### Step 9: Pushing Changes
```bash
# Push to your fork
git push origin your-branch-name
```

### Step 10: Create Pull Request
1. Go to your fork on GitHub
2. Click "New Pull Request"
3. Select your branch and fill in the PR template
4. Submit the pull request

## Development Process
We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Pull Request Process

1. Update the README.md with details of changes to the interface, if applicable.
2. Update the version numbers in any examples files and the README.md to the new version that this Pull Request would represent.
3. The PR will be merged once you have the sign-off of at least one other developer.

## Any Contributions You Make Will Be Under the MIT Software License
In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report Bugs Using GitHub's [Issue Tracker](https://github.com/Vegadjay/Rajwadi-Poshak-Ecommerce/issues)
We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/Vegadjay/Rajwadi-Poshak-Ecommerce/issues/new).

## Write Bug Reports with Detail, Background, and Sample Code

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can.
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

## Coding Style Guidelines

- Use TypeScript for all new code
- Follow the existing code style and formatting
- Use meaningful variable and function names
- Write comments for complex logic
- Keep functions small and focused
- Use ESLint and Prettier with the project's configuration

## Project Structure
```
rajwadi-poshak/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── components/        # Reusable components
│   └── pages/             # Page components
├── public/                # Static files
├── styles/                # Global styles
├── lib/                   # Utility functions
├── models/                # Database models
├── types/                 # TypeScript types
└── tests/                 # Test files
```

## Testing

- Write tests for new features
- Run existing tests before submitting PR:
  ```bash
  npm run test
  ```
- Ensure all tests pass before submitting

## Documentation

- Update documentation for any changed functionality
- Add JSDoc comments for new functions and components
- Keep the README.md up to date
- Document any new environment variables

## Community and Behavioral Expectations

- Be welcoming to newcomers
- Be respectful of differing viewpoints and experiences
- Accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

## Questions?

Feel free to contact the development team:
- Technical Issues: jayvegad10@gmail.com
- General Inquiries: hemang9705@gmail.com

Thank you for contributing to Rajwadi Poshak! 🙏
