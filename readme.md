# Escape Room: training project

## Description:<br>
Escape Room is a website of a company that organizes game quests of various themes and difficulty levels.

On the site you can find an interesting quest on your favorite topic and learn all the details about it.

---
In this project, I implemented the client side of the business logic. Also made the transition from JS to TypeScript.

---
## Scripts

Possible scripts can be used in the project

### `npm run start:eslint`

Starts checking the progress of the project on eslint.

If there are errors or warnings, they will be printed to the console after the command completes.

### `npm run start:client`

Starts the **client** part of the application in development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in a browser.

The page will reload if you make changes.

You will also see any linter errors in the console.

### `npm run start:server`

Starts the **server** part of the application, from which you can get data for developing a client application. Available at [http://localhost:3001](http://localhost:3001)

### `npm run start`

Runs the client and server parts of the application in the *same* console, in parallel.

### `npm run build`

Builds the **client** part of the application into the `build` folder.

The assembly is minified and the filenames include hashes.

---
## Server

After running the command `npm run start:server` (or `npm run start` to run two applications in parallel), the server is available at [http://localhost:3001](http://localhost:3001).

---
### Структуры данных

#### Quest

```json
{
  "id": 1,
  "title": "Crypt",
  "description": "The medieval cemetery is fraught with many terrible secrets. Locals say that a vampire count is buried in the crypt, who goes hunting at night to drink human blood. In an hour the sun will drop below the horizon, will you have time to kill the vampire and get out of the crypt?",
  "previewImg": "img/preview-crypt.jpg",
  "coverImg": "img/cover-crypt.jpg",
  "type": "horror",
  "level": "hard",
  "peopleCount": [2, 5],
  "duration": 120
}
```

#### OrderPost

```json
{
  "name": "Jon Vek",
  "peopleCount": 1,
  "phone": "7000000000",
  "isLegal": true
}
```

### Список роутов:

- **GET** /quests — get list of quests.

- **GET** http://localhost:3001/quests/1 — get quest with id `id`.

- **POST** http://localhost:3001/orders — send a new order.
