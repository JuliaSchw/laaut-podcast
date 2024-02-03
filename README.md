# New Next Project

This project was created from the neue fische `next` template.

```bash
npx -y ghcd@latest neuefische/web-exercises/tree/main/templates/next my-app -i
```

## Development

### Local Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

Use `npm run test` to run the tests.

### CodeSandbox Cloud

Select the "Preview: 3000" tab to view this project.

Select the "Tests: logs" tab to view the tests.

> The `npm run dev` and `npm run test` scripts run automatically.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
- `npm run build` to build the project
- `npm run start` to start a production server
- `npm run test` to run the tests
- `npm run lint` to run the linter

### Used Libraries and Hooks

- `styled components` for css styled components
- `react spring` for animations
- `zustand` for state management in react
- `use gesture` for mouse and touch events
- `useContext` Hook for Prop Drilling
- `useForm` Hook for better HTML Forms 

### How to resolve Module Errors 

1. ## Check Node.js and npm versions:
Ensure that you are using a compatible version of Node.js and npm with your Next.js project. You can check the required versions in the Next.js documentation. You can also use nvm (Node Version Manager) to manage Node.js versions.

2. ## Remove node_modules and package-lock.json:
rm -rf node_modules
rm package-lock.json
npm install

3. ## Check your next.config.js:
Ensure that your next.config.js is correctly configured. Make sure there are no typos or missing dependencies in the configuration file.

4. ## Update Next.js and its dependencies:
npm install next@latest

5. ## Clear npm cache:
npm cache clean --force

6. ## Reinstall: 
npm install