# GWC Website
[Website Wireframe](https://www.figma.com/file/3oCYmtWALN20gRkSa5Ew7V/GWC-General-Site?node-id=0%3A1) | [GHH Wireframe](https://www.figma.com/file/fTEjRE0zxWO1uZAVK3QOn1/GWC-Mockups-2?node-id=0%3A1) | [Brand Identity Guide](https://www.figma.com/file/eb9ExHXT0yGgo4RkK8FG65/Brand-Manual-Identity-Iterations?node-id=251%3A92)

Figma mockups are also saved in this repository.

## Steps to Get Started:
* If you are new to web development, React, etc., please check out this [guide](INTRO-WEB-DEV.md) to get started.
1. Git clone this repository (I suggest using [GitHub Desktop](https://desktop.github.com/) + [Visual Studio Code](https://code.visualstudio.com/Download))
2. Make sure you have [Yarn](https://classic.yarnpkg.com/en/docs/install), which may require you to have [Node.js](https://nodejs.org/en/)
2. In the terminal (make sure you're in the correct directory), run `yarn install` to make sure you have all the dependencies
3. To run the app, type `yarn start` in your terminal. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Additional Steps
* If running tests, make sure to `yarn test`
* If pushing to master, make sure to `yarn build` to prepare for deployment

## Common Debugging
* If you're having trouble with modules, try removing the node_modules: `rm -rf node_modules` and then re-install `yarn install`

## Permissions
* If you are on the web development committee, make sure to join the [website team](https://github.com/orgs/gwcuva/teams/website) on our organization

## General Workflow
1. Look at [Issues](https://github.com/gwcuva/gwc-website/issues) to find an unassigned task, if not being directed by an executive member.  
2. Assign yourself to the task.
3. Create a new branch called `<computing id>/<task description>`, for example if a student with the computing id, gwc12uva, is working on the main navigation issue, their branch would be named `gwc12uva/main-nav`
4. Create a pull request for your branch as soon as possible and make sure it's in the `In Progress` column of the appropriate [project](https://github.com/gwcuva/gwc-website/projects)
5. Commit often on your own branch. Never push to master directly!
6. When done, move your PR to the `In Review` column and make sure to notify the appropriate reviewer.
7. The reviewer will either ask for changes or approve and merge the PR. If changes are needed, move branch back to `In Progress` and repeat steps 5-6.
8. Once PR is merged, delete the branch to keep repository clean.
