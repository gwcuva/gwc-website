# GWC Website

## Steps to Get Started:
1. Git clone this repository (I suggest using GitHub Desktop + Visual Studio Code)
2. Make sure you have [Yarn](https://classic.yarnpkg.com/en/docs/install), which may require you to have [Node.js](https://nodejs.org/en/)
2. In the terminal (make sure you're in the correct directory), run `yarn install` to make sure you have all the dependencies
3. To run the app, type `yarn start` in your terminal. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
4. *If running tests, make sure to `yarn test`
5. *If pushing to master, make sure to `yarn build` to prepare for deployment

## Common Debugging
* If you're having trouble with modules, try removing the node_modules: `rm -rf node_modules` and then re-install `yarn install`