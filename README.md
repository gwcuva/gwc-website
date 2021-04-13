# GWC Website
[Website Wireframe](https://www.figma.com/file/3oCYmtWALN20gRkSa5Ew7V/GWC-General-Site?node-id=0%3A1) | [GHH Wireframe](https://www.figma.com/file/fTEjRE0zxWO1uZAVK3QOn1/GWC-Mockups-2?node-id=32%3A1122) | [Brand Identity Guide](https://www.figma.com/file/eb9ExHXT0yGgo4RkK8FG65/Brand-Manual-Identity-Iterations?node-id=251%3A92)

Figma mockups are also saved in this repository.

[CodeClimate](https://codeclimate.com/github/gwcuva/gwc-website) - a Code Summary site | [CircleCI](https://app.circleci.com/pipelines/github/gwcuva/gwc-website) - a Continuous Integration tool that makes sure tests run before building

## Steps to Get Started:
* If you are new to web development, React, etc., please check out this [guide](INTRO-WEB-DEV.md) to get started.
1. Git clone this repository (I suggest using [GitHub Desktop](https://desktop.github.com/) + [Visual Studio Code](https://code.visualstudio.com/Download))
  * If you get more comfortable with VSCode, look into [GitHub extensions](https://code.visualstudio.com/docs/editor/github) to help minimize desktop clutter
2. Make sure you have `npm`, which requires you to have [Node.js](https://nodejs.org/en/)
2. In the terminal (make sure you're in the correct directory), run `npm install` to make sure you have all the dependencies
3. To run the app, type `npm start` in your terminal. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Additional Steps
* If running tests, make sure to `npm test`
* If pushing to master, make sure to `npm build` to prepare for deployment

## Common Debugging
* If you're having trouble with modules, try removing the node_modules: `rm -rf node_modules` and then re-install `npm install`

## Permissions
* If you are on the web development committee, make sure to join the [website team](https://github.com/orgs/gwcuva/teams/website) on our organization

## General Workflow
1. Look at [Issues](https://github.com/gwcuva/gwc-website/issues) to find an unassigned task, if not being directed by an executive member.  
2. Assign yourself to the task.
3. Create a new branch called `<computing id>/<task description>`, for example if a student with the computing id, gwc12uva, is working on the main navigation issue, their branch would be named `gwc12uva/main-nav`
4. Create a pull request for your branch as soon as possible and make sure it's in the `In Progress` column of the appropriate [project](https://github.com/gwcuva/gwc-website/projects)
5. Commit often on your own branch. Never push to master directly!
6. When done, move your PR to the `In Review` column and make sure to notify the appropriate reviewer.
7. The reviewer will either ask for changes or approve the PR. If changes are needed, move branch back to `In Progress` and repeat steps 5-6.
8. Once your PR has been approved, go ahead and merge!
9. Once PR is merged, delete the branch to keep repository clean.

## Getting Acquainted With Our Repo
### node_modules
This is where all the different packages that we need to run our site are stored. You don't need to do anything manually with this. If you're ever having trouble with `npm start` giving you an error with the packages, try deleting this folder and then running `npm install`

---

### public
This is where all the public-facing files go, i.e. favicon, robots.txt 

---

### src
This is where all the code for running the website goes!

* **assets**
This is where any images needed will go

* **components**
This is where the different sections of the website will be coded

* **fonts**
This is where we store the fonts that we may need

* **misc. files**

  * App.tsx - Our homepage, essentially. Adding components here will make them show up on the main page

  * index.tsx - You probably won't interact with this. It just sets up the site with App.tsx

  * const.tsx - Put any values that can be computed once in here to have access throughout the whole site

  * index.scss - This is where you store css that is more general instead of styled components. Use the classes in here as often as possible instead of re-writing the same css in a styled component. Notable classes include `mono` and `text-white`

---


**Website Built/Maintained By:**
* Mara Hart
* Neha Bagalkot
* Lilian Zhang
* Pragnya Pandrate
* Maya Tietz
* Kim Do
* Jennifer Tcheou
* Sky Brodowski
* Belle Tran