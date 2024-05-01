# Project: YourPlaces Application

[Visit The App](https://yourplaces-gn4g.onrender.com/)

[Backend Repository](https://github.com/BulletToothTony/Places-App-Backend)

This repository comprises the frontend portion of my 'YourPlaces' Application. 

## Table of Contents
- [About The Project](#about-the-project)
- [Key Features](#key-features)
- [Demo Pictures](#demo-pictures)
- [Contact](#contact)

## About The Project

'YourPlaces' is a full stack application allowing users to upload images of places they've been to, attach images to upload and comment and view on other user place uploads

#### Built With

#### - React.js

## Key Features

#### Authentication and Authorization with JWTs
The YourPlaces app implements authentication and authorization using JSON Web Tokens (JWTs). Upon login, the backend auth server issues a JWT, which is stored on the client-side. This token is sent in the request headers for routes that require authentication, ensuring secure access to protected resources.

#### Places Management
Tracking user places with images and the map feature are key components of the app. Each user can have many places they've uploaded, all places are stored on the backend using MongoDB, each place is unique and can have multiple comments from different users.

Users can edit their own place uploads if they are logged in and can delete comments they've made, all updates are shown in real time.

#### Image Sharing
Images are stored on the server, the path to the images is stored on the backend to save time and memory, users can upload custom profile pictures.

#### Map Implementation
Each place requires an address, the address users the GoogleMaps geocode API to find the longitude and latitude to store in the database. These coordinates are then used to plot the location on the map modal.

#### Responsive Design
The app is designed to be responsive across various devices, including desktops, tablets, and smartphones. This ensures optimal usability and accessibility regardless of screen size or device type.

## Demo video

https://streamable.com/zm1cm5

<div style="position:relative; width:100%; height:0px; padding-bottom:57.878%"><iframe allow="fullscreen" allowfullscreen height="100%" src="https://streamable.com/e/zm1cm5?" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>

## Demo Pictures


## Contact

[LinkedIn](https://www.linkedin.com/in/henry-westhoff-lewis-b18a91196/)



