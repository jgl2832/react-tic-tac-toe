Made by following instructions here: https://reactjs.org/tutorial/tutorial.html

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup with Docker

You can run this projects through Docker in two modes: development or production.

### Development
When running the project in development mode, edits to files are reflected in real time in the Docker container.

Run in your console (only the first time):
```
cp docker-compose.override.yml.dist docker-compose.override.yml
```

And then:
```
docker-compose up -d
```

Your project is live at: http://localhost:8080

> Remember that in development mode you need to manually run `npm install` and `npm run build` in order to pull all the 3rd party packages.

### Production

Simply run:
```
docker-compose up -d
```

Your project is live at: http://0.0.0.0:3000

If you want to switch from development to production, remember to execute:
```
rm docker-compose.override.yml
```

## Docker commands

If you want to enter inside the running Docker container, run:
```
docker-compose exec web bash
```

If you want to stop and remove the Docker container, run:
```
docker-compose down
```


## Available Scripts

In the project directory, you can run:

### `npm install`

Install the 3rd party packages, needed to run the application.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
