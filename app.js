const express = require('express');
const mapRoutes = require('express-routes-mapper')
const port=5000;
const routs=require('./routes')
const app= express()
const models = require("./models")
auth = require('./services/auth.policy')

app.get("/test",(req,res)=>{
    return res.send("Test done")
})
app.use(express.json());
const mappedOpenRoutes=mapRoutes(routs.publicRouts,"./controllers/")
const mappedPrivateRoutes=mapRoutes(routs.privateRouts,"./controllers/")
app.use("/public/", mappedOpenRoutes);
app.all("/api/*",(req,res,next)=> auth(req,res,next))
app.use("/api/",mappedPrivateRoutes)


let db= models.sequelize.models;
Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
});
app.listen(port,()=>{
    console.log("server is running on port " + port);
})