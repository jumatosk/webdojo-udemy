# WebDojo - Cypress Test Documentation

## 🧪 Test Project Overview

This documentation covers the Cypress test suite for the WebDojo project, which is part of the Curso Ninja do Cypress. The test suite includes various test scenarios covering different aspects of web automation testing.

## 📁 Project Structure

```
web/
├── cypress/
│   ├── e2e/                    # Test specification files
│   │   ├── alerts.cy.js       # Alert handling tests
│   │   ├── cep.cy.js         # CEP validation tests
│   │   ├── consultancy.cy.js # Consultancy form tests
│   │   ├── draganddrop.cy.js # Drag and drop interaction tests
│   │   ├── github.cy.js      # GitHub integration tests
│   │   ├── hover.cy.js       # Hover interaction tests
│   │   ├── iframe.cy.js      # iframe handling tests
│   │   ├── links.cy.js       # Link validation tests
│   │   ├── login.cy.js       # Login functionality tests
│   │   └── studio.cy.js      # Cypress Studio tests
│   ├── fixtures/              # Test data files
│   │   ├── address.json      # Address test data
│   │   └── consultancy.json  # Consultancy test data
│   └── support/               # Support files
│       ├── commands.js       # Custom commands
│       ├── consultancy.js    # Consultancy-specific commands
│       ├── e2e.js           # E2E test configuration
│       └── formattedDate.js # Date formatting utilities
```

## 🛠️ Dependencies

Main test dependencies include:

- Cypress: ^14.5.4
- cypress-real-events: ^1.15.0
- serve: ^14.2.4
- dotenv: ^17.2.3

## 🚀 Available Scripts

### Starting the Application

```bash
# Start the web application on port 3000
yarn dev
```

### Running Tests

```bash
# Open Cypress Test Runner (Interactive Mode)
yarn cyo

# Run all tests in headless mode
yarn test

# Run a specific test file
yarn test:spec cypress/e2e/[test-name].cy.js
```

## 📝 Test Categories

### 1. Alert Handling

- File: `alerts.cy.js`
- Tests JavaScript alert interactions and validations

### 2. CEP Validation

- File: `cep.cy.js`
- Brazilian postal code validation and address form testing

### 3. Consultancy Forms

- File: `consultancy.cy.js`
- Form submission and validation for consultancy features
- Uses test data from `consultancy.json`

### 4. Drag and Drop

- File: `draganddrop.cy.js`
- Tests for drag and drop interactions

### 5. GitHub Integration

- File: `github.cy.js`
- GitHub-related feature testing

### 6. Hover Interactions

- File: `hover.cy.js`
- Mouse hover event testing

### 7. IFrame Handling

- File: `iframe.cy.js`
- Tests for iframe content and interactions

### 8. Link Validation

- File: `links.cy.js`
- Link functionality and navigation testing

### 9. Login Functionality

- File: `login.cy.js`
- Authentication and login flow validation

### 10. Cypress Studio

- File: `studio.cy.js`
- Tests created using Cypress Studio feature

## ⚙️ Configuration

The project uses the following configuration files:

- `cypress.config.js`: Main Cypress configuration
- `.env`: Environment variables

## 🔧 Support Files

### commands.js

- Custom Cypress commands
- Global test utilities

### consultancy.js

- Specific commands for consultancy tests
- Helper functions for form handling

### e2e.js

- E2E test configuration
- Global test setup

### formattedDate.js

- Date formatting utilities
- Date-related helper functions

## 🏃‍♂️ Running Tests Step by Step

1. **Prepare the Environment**

   ```bash
   # Install dependencies
   yarn install
   ```

2. **Start the Application**

   ```bash
   yarn dev
   ```

3. **Run Tests**
   Choose one of the following methods:

   ```bash
   # Interactive mode (Cypress Test Runner)
   yarn cyo

   # Headless mode (all tests)
   yarn test

   # Single test file
   yarn test:spec cypress/e2e/login.cy.js
   ```

## 💡 Best Practices

1. Always start the application (`yarn dev`) before running tests
2. Use the interactive mode (`yarn cyo`) during test development
3. Use headless mode (`yarn test`) for CI/CD pipelines
4. Keep test data in the `fixtures` folder
5. Add custom commands to `commands.js` for reusability

## 🔍 Troubleshooting

If you encounter issues:

1. Verify the application is running (`yarn dev`)
2. Check if all dependencies are installed
3. Ensure environment variables are properly set
4. Clear Cypress cache if needed: `npx cypress cache clear`
