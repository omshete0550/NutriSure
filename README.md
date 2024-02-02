# NutriSure

<br/>

<p align="center">
  <img src="./client/assets/logo.png" width="20%" />
</p>

<p align="center">
  Reduces the contamination risks, time consuming label  reading, Limited Product Information , Unclerand small fonts and makes you Sure about your Nutrition
  <br />
  <br />
  <a href="#table-of-contents"><b>Explore the docs »</b></a>
  <br />
  <br />
  <a href="#architecture-and-design">Architecture</a>
  &nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#demonstration">Features</a>
  &nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#contributing">Local Setup</a>
  <br />
</p>

## Table Of Contents

- [About the Project](#about-the-project)
- [Architecture](#architecture)
- [Demonstration & Features](#demonstration)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Authors](#authors)

## About The Project

Welcome to NutriSure, a revolutionary app dedicated to empowering individuals with specific dietary needs, providing a seamless solution for making informed and safe food choices. At NutriSure, we understand the challenges faced by users like Siddanth, navigating through an overwhelming array of food products with various dietary restrictions.

**Objectives**

- Simple Scan: Instantly identify allergens, lactose, and adherence to religious dietary considerations.

- Store Locator: Find safe-to-consume products across various stores, saving time and reducing contamination risks.

- Community Engagement: Join a vibrant community to share suggestions, discuss food products, and report unexpected reactions.

- Recipe Generator: Utilize our machine learning-powered recipe generator for delicious dishes aligned with your dietary preferences.

- Offline Functionality: Access NutriSure even with an inconsistent internet connection, ensuring reliability wherever you shop.

**Our Mission**

NutriSure aims to make the process of selecting safe and suitable food products an effortless and enjoyable experience. Our commitment to user satisfaction, coupled with an easy-to-use interface, sets NutriSure apart as your go-to companion in the journey towards healthier eating.

## Architecture

The architecture and workflow was built using smartdraw.

<img src="./client/assets/architecture.jpg" alt="architecture">

## Demonstration

https://github.com/omshete0550/NutriSure/assets/95119784/f694ab1a-e39a-4425-bdc0-23e9d211b4c8

<br />

### Technologies Used

- Frontend
  - React Native
  - CSS
- Backend
  - Flask
  - MongoDB

<br />

## Contributing

**Local Setup || Project Structure**

NOTE: Individual instructions can be found in respective directories.

- The project contains 4 broad directories.

```
*
├───client
├───model
└───backend
```

- `client`: The frontend for the application.
- `backend`: The backend for the application.

<br />

**Client**

For local setup of frontend:

- `cd client`
- `npm i`
- `npx expo start`

Structure

```
client
├───assets
├───components
├───Pages
└───App.js
```

Individual Component & Pages Structure

```
component
└───component.jsx
```

```
Pages
└───page.jsx
```

<br />

**Server**

For local setup of backend:

- `cd backend`
- `python app.py`

```
backend
├───app.py
└───requirements.txt
```

<br />

## Authors

- Om Shete
- SaiKaushik Sadu
- Altaf Alam
- Sarah Khan
