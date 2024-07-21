# 🎮 Wildy Gamy - Arcade Fun in France! 🇫🇷

Welcome to **Wildy Gamy**, a project by students from the Wild Code School! This project is a showcase website for a fictional arcade expanding in France, designed to attract customers with the unique feature of playing a game online to earn virtual tokens that can be exchanged for prizes in-store. 

## 📜 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [Special Thanks](#special-thanks)
- [License](#license)

## 📖 Overview

Wildy Gamy is a playful and engaging website created to draw in arcade enthusiasts. The website offers a virtual taste of the arcade experience, allowing users to play a game reminiscent of Space Invaders. Achieving high scores in this game earns virtual tokens, which can be redeemed for exciting prizes at the arcade. 

## 🌟 Features

- **Home Page**: Showcases a photo gallery of the arcade and a podium.
- **Catalog Page**: Lists all playable games available at the arcade.
- **Demo Page**: Features a playable Space Invaders-style game.
- **Prizes Page**: Displays exchangeable prizes for virtual tokens won.
- **User Account**: Allows users to create accounts, log in, view their favorite games, and track their best scores.

## 🛠 Technologies

- **Frontend**: React, React Router DOM, SASS, Swiper, Toastify
- **Backend**: Node.js, Express
- **Database**: MySQL with mysql2
- **Security**: Argon2, JWT
- **Email**: Node Mailer
- **Map Integration**: Leaflet
- **Methodology**: Agile (Scrum)
- **Code Quality**: Prettier, ESLint

## 📦 Installation

To get started with the Wildy Gamy project, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone git@github.com:WildCodeSchool-2024-02/JS-bdx-0224-P3-Wildy_gamy.git
    cd JS-bdx-0224-P3-Wildy_gamy
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up the database**:
    - Create a MySQL database.
    - Configure your database settings in the `.env` file in both `server` and `client`: you can copy `.env.sample` files as starters and add your environment variables.
    - To initialize the wildy_gamy database:
    ```bash
    npm run db:migrate
    ```
    - To run seeders:
    ```bash
    npm run db:seed
    ```

4. **Run the application**:
    ```bash
    npm run dev
    ```

## 🚀 Usage

- Navigate to the home page to explore the arcade through the photo gallery.
- Visit the catalog to see the list of games available at the arcade.
- Play the demo game on the demo page to earn virtual tokens.
- Check out the prizes page to see what you can win with your tokens.
- Create an account to get coins, save your high scores and favorite games.

## 🛠 This Project Uses Harmonia

Harmonia is a framework meant to serve as a foundation for every project following the React-Express-MySQL stack, as learned in Wild Code School. It's pre-configured with a set of tools which'll help students produce industry-quality and easier-to-maintain code, while staying a pedagogical tool.

## 👥 Contributors

- [@JadeJolivet](https://github.com/JadeJolivet)
- [@pjroggy](https://github.com/pjroggy)
- [@PaulBOURY](https://github.com/PaulBOURY)
- [@FGAT3](https://github.com/FGAT3)

## 😎 Special Thanks

Thank you for your dedication and your invaluable teachings.

- [@Elea641](https://github.com/Elea641)
- [@KevinDavoust](https://github.com/KevinDavoust)
- [@Yoann-Fortin](https://github.com/Yoann-Fortin)

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by the Wildy Gamy team at Wild Code School!

---

Feel free to reach out for any questions or suggestions! Enjoy your arcade experience! 🎉
