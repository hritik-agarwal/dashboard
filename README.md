## Task

There are 2 sub-tasks :-

1. Contact Management
2. Charts on Diseases Tracking

## See Live Demo

[Checkout Live Demo ↗️](https://taiyo-task.netlify.app/)

Note: Charts may take 3-4 sec to display on first load.

## Instructions

- Use Charts and Maps using ReactJS, TypeScript, TailwindCSS, React Router v6 and React Query aka Tanstack Query.
- A GitHub/GitLab repo and deploy your app on free services like Vercel, Github Pages or Heroku etc
- Properly commented code and brief documentation on how to run the app, including information on the API endpoint used.

## Requirements

The app will have 2 pages :-

1. Contacts
   - Create new contact
   - Display all contacts
   - View contacts details
   - Feature to edit and delete contacts
   - Use of Redux to store the contact data
2. Charts
   - A line graph showing the cases fluctuations
   - A react leaflet map with markers that indicates the country name, total number of active, recovered cases and deaths in that particular country as a popup.
   - Use following apis to fetch data
     - World wide data of cases: https://disease.sh/v3/covid-19/all
     - Country Specific data of cases: https://disease.sh/v3/covid-19/countries
     - Graph data for cases with date: https://disease.sh/v3/covid-19/historical/all?lastdays=all

## To Run Locally

1. Clone the repo `git clone https://github.com/hritik-agarwal/dashboard`
2. Install packages `npm i`
3. Run the app `npm start`
