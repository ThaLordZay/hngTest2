# HNG TEST 2
# Creating MovieBox App

This README guide will walk you through the steps required to run the movie box app using react

## Prerequisites

Before I ran the React app, I needed to have the following software installed on my computer:

- **Node.js**: React projects rely on Node.js for package management and development tools. You can download it from [https://nodejs.org/](https://nodejs.org/).

## Getting Started

1. **Navigate to the Project Directory**:
   - Open terminal or command prompt.
   - Change current directory to the root folder of the React project. For example:
     ```
     cd movie-box-app
     ```

2. **Install Dependencies**:
   - In the project directory, run the following command to install all the necessary project dependencies:
     ```
     npm install
     ```

3. **Start the Development Server**:
   - After the installation is complete, start the development server with the following command:
     ```
     npm start
     ```
   - This command will launch the development server and open the React app in the default web browser. It can accessed through `http://localhost:3000`.

4. **Development**:
   - Any changes you make to the source code will automatically trigger hot-reloading in the development server, allowing the user to see changes instantly in the browser.

## Conclusion

Once the React app has been successfully debeloped, we can start building the user interfaces and interactive web applications using React.

# Objective
- A movie discovery web application that allows users to search for movies, view details about them, and save their favorite movies. It consumes data from the TMDB API.

# Requirements

1. User Interface:
Thse user interface is responsive and visually appealing. Here's the link to the design I'm expected to replicate: https://www.figma.com/file/tVfgoNfhYkQaUkh8LGqRab/MovieBox-(Community)?type=design&node-id=1220-324&mode=design&t=6998DWtjQrxz8mOf-0
- The top 10 movies on the homepage is listed.
- They should be displayed in a grid layout with their movie posters.
- The Card component should display the movie title and release date.
- card - [data-testid: movie-card]
-movie poster - [data-testid: movie-poster]
-movie title - [data-testid: movie-title]
-movie release date - [data-testid: movie-release-date]

2. Movie Search:
I hava Implemented a search feature that allows users to search for movies by title, Display search results, including movie posters, titles, and release dates.
-Show a loading indicator while fetching search results.

3. Movie Details:
When i go to to /movies/:id route (where :id is the id), I should see the movie details page.
I should see
title - [data-testid: movie-title]
release date (in UTC) - [data-testid: movie-release-date]
runtime (in minutes) - [data-testid: movie-runtime]
overview - [data-testid: movie-overview]

# API Integration:
I used TMDB API to fetch movie data.

# API endpoints:
-Fetch movie details by ID: https://api.themoviedb.org/3/movie/{movie_id}

# Error Handling:
Implement error handling to display meaningful error messages to users in case of API failures or other issues.
# Submission:
-Host your frontend application on a platform of your choice (e.g., GitHub Pages, Netlify).
-Provide clear instructions on how to run your project locally in your README.md file.
-Ensure that the code is well-documented and organized.

PS: You MUST use react or  Next js
Submit your task through the designated submission form.

PPS: THE API MIGHT NOT RETURN ALL THE INFO ON THE SECOND PAGE OF THE DESIGN, ADD THE ESSENTIAL ONES THAT ARE LISTEN ABOVE. THE SIDEBAR DOESN'T NEED TO BE FUNCTIONAL.
YOU MAY USE ANY CSS FRAMEWORK/LIBRARY OF YOUR CHOICE
