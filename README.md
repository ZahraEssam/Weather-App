# Weather App 🌦️

A dynamic weather application built using **JavaScript, AJAX, and DOM Manipulation**.

## Features

- Fetches real-time weather data based on user location
- Displays:
  - City
  - Temperature (°C)
  - Weather condition (e.g., sunny, cloudy, rainy)

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API / AJAX
- Geolocation API

## Live Demo

[live Demo](https://zahraessam.github.io/Weather-App/)

##Flowchart 


```mermaid
flowchart TD
A[User Clicks Get Weather Button] --> B[Get User Location - Geolocation API]
B --> C[Extract Latitude & Longitude]
C --> D[Send Request using Fetch AJAX]
D --> E[Weather API Response JSON]
E --> F[Process Data in JavaScript]
F --> G[Update UI using DOM Manipulation]





