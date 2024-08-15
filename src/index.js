const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
const CityRepository=require('./repository/city-repository');
const city = require('./models/city');
const setupAndStartServer = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.listen(PORT, async() => {
        console.log(`Server Started at ${PORT}`)
        
        try {
            const cp = new CityRepository();
           await cp.createCity({name:'jamui'});
        } catch (error) {
            console.log(error)
        }
    })
}
setupAndStartServer();
