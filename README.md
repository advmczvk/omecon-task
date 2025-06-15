# OmeconTask

### Description

Build an app that allows user to display a list of products:

- [x] Fetching products from mock API
- [x] Filtering and pagination of products using RxJS
- [x] RWD using Angular Material or Tailwind CSS
- [x] Unit tests (Jest)
- [x] E2E tests (Cypress) **OPTIONAL**
- [x] README file with instructions on how to run the app
- [x] npm run [lint, test, build, e2e] commands
- [x] CI/CD pipeline with GitHub Actions

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.2.

## Initial Setup

Using Node Version Manager install the required Node.js version:

```bash
nvm use
```

Install all dependencies with npm:

```bash
npm install
```

## Development server

To start a local development server, run:

```bash
npm run start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
npm run build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the Jest test runner, use the following command:

```bash
npm run test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
npm run e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## CI/CD Pipeline

This project includes a CI/CD pipeline configured with GitHub Actions. The pipeline is defined in the `.github/workflows/ci.yml` file. It runs tests and checks code quality on every push to the **main** branch and on pull requests.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
