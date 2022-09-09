const router = require("express").Router();

const {
    getHome,
    postHome,
    putHome,
    deleteHome
} = require("../controllers/home.controllers") //stamos poniendo a puntos metodos que pusimose en eel controla





router.get("/user", getHome) //simplifico

router.post("/post", postHome)

router.put("/update", putHome)

router.delete("/delete", deleteHome)

module.exports = router;