# Flatdango

Flatdango is a mini web application that allows users to purchase movie tickets from the Flatiron Movie Theater. This project was created as part of a code challenge to demonstrate the ability to build a simple yet functional web application using JavaScript.

## Table of Contents

- [Flatdango](#flatdango)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Requirements](#requirements)
  - [Setup](#setup)

## Features

- View details of the first movie including its poster, title, runtime, showtime, and available tickets.
- Browse a menu of all movies.
- Purchase tickets for a movie and see the number of available tickets decrease in real-time.

## Requirements

- [Node.js](https://nodejs.org/en/)
- [JSON Server](https://www.npmjs.com/package/json-server)

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Addiowen/flatdango.git
   cd flatdango

2. **Install JSON server**

    ```bash
    npm install -g json-server

3. **Start JSON server in watch mode**

    ```bash
    json-server --watch db.json

4. **Finally**
    - Start the live server to execute index.html file
    - The application should be running on port 5500.