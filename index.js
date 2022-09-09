const express = require("express")


const app= express();
app.use(express.json())

app.use(require("./routes/home.routes")) //mpoint es igual rutas


port= 3000
app.listen(port, ()=>{
console.log(`server corriendo en el puerto ${port}`)

})


