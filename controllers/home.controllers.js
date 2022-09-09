const ctrlHome = {}

ctrlHome.getHome = (re, res) => {

    res.send(

        {

            "apellido": "ortiz",
            "nombre": "matias"
        }
    )

}

ctrlHome.postHome = (re, res) => {

    res.send({

        "apellido": "garcia",
        "nombre": "ezequiel"
    })

}

ctrlHome.putHome = (re, res) => {

    res.send(

        {

            "apellido": "garcia",
            "nombre": "pablo"
        }
    )

}
ctrlHome.deleteHome = (re, res) => {

    res.send({



        "apellido": "rahn",
        "nombre": "seba"
    })

}

module.exports = ctrlHome;