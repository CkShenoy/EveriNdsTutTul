const { request } = require('express')
var ModuleVap = require('express')
var ModuleVaj = ModuleVap()

ModuleVaj.listen(8080, () =>
{
    console.log("Server has started....")
})

