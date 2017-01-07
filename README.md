# Introduction

[![Angular 2 Style Guide](https://mgechev.github.io/angular2-style-guide/images/badge.svg)](https://angular.io/styleguide)

# How to start

**Note** that this seed project requires node v4.x.x or higher and npm 2.14.7.


In order to start the dashboard use:

```bash
# install the project's dependencies
npm install
# install the angular-cli for tasks
npm install -g angular-cli@latest
# watches your files and uses livereload by default
npm start
#navigate to localhost:2020 
# npm run build.docs
npm run build
# prod build
# prod build to host the application in IIS
#http://localhost/corporate/
ng build --prod --bh /corporate/

```


## Project Milestones And Udacity Rubrick
 - [ ] App includes all requirements, including header, menu, and all dashboard views.
   - [x] A geospatial view, identifying the number of employees at various company locations.
   - [x] A “key metrics” view, containing components displaying: the number of open issues, a line chart reflecting number of paying  customers over a period of time, and a bar chart reflecting number of reported issues over a period of time.
   - [x] A “data view” of all issues, with an appearance similar to a spreadsheet, that is sortable and filterable.
         - [ ] An issue should contain the following fields:
  		- submission timestamp
  		- customer name
  		- customer email address
  		- description
  		- open/closed status
  		- closed timestamp
  		- employee name
 - [x] Responsiveness - App is equally functional on mobile and desktop, using responsive design to ensure its displayed in a useable state.
 - [x] Component Design: Application makes use of a Front-End Framework (e.g. Backbone, Angular, Ember, et cetera) and properly separates data from the user interface.
 - [x] Data Formats: Each dashboard uses external data files (data not stored directly within the application). At least one file must be a comma-separated value (.csv) and at least one must be .json.
 - [x] Near Real-Time Updates: Dashboard components must query the datafiles regularly, or receive “push” updates, and update their displays in “near” real-time without requiring a refresh of the application.
 - [x] App Delivery: Build Process - App includes a build process (such as Grunt or Gulp). Assets are minimized and concatenated as appropriate.
 
