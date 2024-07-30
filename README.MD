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
