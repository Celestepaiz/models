const express = require('express')
const app = express()
const models = require('./models')
const bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))

/*models.access.findOne().then(function(task){
    console.log(task)
})*/
app.get('/', function(req, res){
    res.send('Holi amor')
})

app.post('/access', (req,res) => {
    const access = models.access.build({
        modelo: req.body.modelo,
        marca: req.body.marca,
        placas: req.body.placas,
        codigo: req.body.codigo,
        id_user: req.body.id_user
    })

    access.save().then(function(newAccess){
        res.status(200).json({
            message: "ok"
        })
    })
})

app.get('/access/:id_user', (req, res) => {
    models.access.findAll({
        where:{
            id_user: req.params.id_user
        }
    }).then((registro) => {
        res.status(200).json({
            registro: registro
        })
    })
    
})

app.delete('/access/:codigo', (req, res) => {
    models.access.destroy({
        where:{
            codigo: req.params.codigo
        }
    }).then((registro) =>{
        res.status(200).json({
            message: "eliminado"
        })
    })
})


app.post('/maintenance', (req, res) => {
    const maintenance = models.maintenance.build({
        concepto: req.body.concepto,
        monto: req.body.monto, 
        fecha_limite: req.body.fecha_limite,
        id_user: req.body.id_user
    })

    maintenance.save().then(function(newMaintenance){
        res.status(200).json({
            message: "ok"
        })
    })
})

app.get('/maintenance/:id_user', (req, res) => {
    models.maintenance.findAll({
        where:{
            id_user: req.params.id_user
        }
    }).then((registro) => {
        res.status(200).json({
            registro: registro
        })
    })
    
})

app.delete('/maintenance/:_id', (req, res) => {
    models.maintenance.destroy({
        where:{
            id: req.params._id            
        }
    }).then((registro) =>{
        res.status(200).json({
            message: "eliminado"
        })
    })
})


app.post('/payments', (req, res) => {
    const payments = models.payments.build({
        folio: req.body.folio,
        fecha_mant: req.body.fecha_mant,
        calle: req.body.calle,
        numero: req.body.numero,
        concepto: req.body.concepto,
        monto: req.body.monto,
        nombre: req.body.nombre,
        id_user: req.body.id_user
        
    })
    payments.save().then(function(newPayments){
        res.status(200).json({
            message: "ok"
        })
    })
})


app.get('/payments/:id_user', (req, res) => {
    models.payments.findAll({
        where:{
            id_user: req.params.id_user
        }
    }).then((registro) => {
        res.status(200).json({
            registro: registro
        })
    })
    
})

app.delete('/payments/:folio', (req, res) => {
    models.payments.destroy({
        where:{
            folio: req.params.folio
        }
    }).then((registro) =>{
        res.status(200).json({
            message: "eliminado"
        })
    })
})

app.listen(3001, function(){
    console.log('Esta corriendo en el puerto 3001')
})