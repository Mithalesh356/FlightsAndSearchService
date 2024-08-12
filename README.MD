## Project SetUP

- clone the project on your local
- Execute `npm install` on the same path as of your root directort of the downloaded project
- Create a `.env` file in the root directory and add the environment variable which is in 'sampleenv.text'.
- Inside the `src/config` folder create a new file `config.json` and the add the following piece of json

```
  {
  "development": {
  "username": <YOUR_DB_USERNAME>,
  "password": <YOUR_DB_PASSWORD>,
  "database": "Flights_Search_DB_Dev",
  "host": "127.0.0.1",
  "dialect": "mysql"
  }
  }

```

- Once you've added your db config as listed above , go to the src folder from tour terminal and
  execute `npx sequelize db:create`.

# Folder Structure

- src/
  - index.js
  - models/
  - controllers/
  - middlewares/
  - services/
  - utils/
  - config/
    - ServerConfig.js
  - repository/
- tests/[later]

# Flow Of Project

- Server SetUP in index.js
- Install dotenv
- Created env variable
- Require dotenv in serverConfig/ and exported PORT to the index.js
- use body-parser in index.js
- install sequelize,sequelize-cli,mysql2
- initilize sequelize by (npx sequelize init) command.
- bring models,migrations,seeders folder and config.json in config folder in src from outside.
- keep config.json in gitignore because it has database password.
- Design database structure

  ```
  Airplane Table
      id
      model_number
      capacity

  Flights Table
      id
      departure_city_id
      destination_city_id
      airplane_id
      departure
      arrival
      Flight_number
      Airpoty_id

  Airport
      id
      name
      ciry_id
      address

   City
      id
      name

  Note:-   ->:-Means 1 to M  and <-:-Means M to 1
  Note:-  Airplane -> Flights   Airport <- City  Flights -> Airport
  ```

- Created City table using `npx sequelize model:generate --name City --attributes name:String` Command.
- Now run migrations using `npx sequelize db:migrate ` Command.
