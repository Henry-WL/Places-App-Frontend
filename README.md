# Project: YourPlaces Application

[Visit The App](https://yourplaces-gn4g.onrender.com/) (Please allow a few minutes for the server to start)

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

## Demo Pictures

<img width="1719" alt="Pasted Graphic" src="https://github.com/BulletToothTony/Places-App-Frontend/assets/58192857/c1ce44c9-d1da-4d8c-9ed9-b429ad9ab1f7">

<img width="1722" alt="Pasted Graphic 2" src="https://github.com/BulletToothTony/Places-App-Frontend/assets/58192857/d4c64ae4-5b57-41c9-9951-7474949a5031">

<img width="1721" alt="Pasted Graphic 3" src="https://github.com/BulletToothTony/Places-App-Frontend/assets/58192857/6f0c22ae-878b-42c2-a9d0-4458078c4a0d">

<img width="1715" alt="Pasted Graphic 4" src="https://github.com/BulletToothTony/Places-App-Frontend/assets/58192857/dcb57e18-cda7-4017-bd23-0225f0432240">

<img width="1728" alt="Pasted Graphic 5" src="https://github.com/BulletToothTony/Places-App-Frontend/assets/58192857/5cf244cb-402a-48fc-a78b-b10aaedc71d0">

<img width="1723" alt="Pasted Graphic 6" src="https://github.com/BulletToothTony/Places-App-Frontend/assets/58192857/1f3ee2e5-32aa-4262-97ee-34c224b6db5c">


## Contact

[LinkedIn](https://www.linkedin.com/in/henry-westhoff-lewis-b18a91196/)



