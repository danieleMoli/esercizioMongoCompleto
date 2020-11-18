var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient; //Importo la libreria mongodb

router.get('/', function (req, res, next) {
    const MongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://MolinariDaniele:danielE118@cluster0.dn3hp.mongodb.net/Cluster0?retryWrites=true&w=majority"
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        const collection = client.db("sample_mflix").collection("movies"); //Mi connetto alla collection movies
    // perform actions on the collection object
        collection.find().limit(10).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            console.log(result);
            res.send(result);
        }); //Eseguo la query e passo una funzione di callback

        client.close();
    });
    
});

router.get('/movie_from_title/:title', function (req, res, next) {
    console.log(req.params); //Leggo i parametri passati all'url
    title = req.params.title;
    const uri = "mongodb+srv://MolinariDaniele:danielE118@cluster0.dn3hp.mongodb.net/Cluster0?retryWrites=true&w=majority"
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("sample_mflix").collection("movies"); //Mi connetto alla collection movies
        // eseguo una find sulla collection
        collection.find({ 'title': `${title}` }).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else res.send(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });
});

router.get('/list/:num', function (req, res, next) {
    console.log(req.params); //Leggo i parametri passati all'url
    let num = parseInt(req.params.num);
    const uri = "mongodb+srv://MolinariDaniele:danielE118@cluster0.dn3hp.mongodb.net/Cluster0?retryWrites=true&w=majority"
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("sample_mflix").collection("movies"); //Mi connetto alla collection movies
        // eseguo una find sulla collection
        collection.find().limit(num).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else res.send(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
            
        }); //Eseguo la query e passo una funzione di callback

    });
});

router.get('/movie_from_genres/:genres', function (req, res, next) {
    console.log(req.params); //Leggo i parametri passati all'url
    genres = req.params.genres;
    const uri = "mongodb+srv://MolinariDaniele:danielE118@cluster0.dn3hp.mongodb.net/Cluster0?retryWrites=true&w=majority"
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("sample_mflix").collection("movies"); //Mi connetto alla collection movies
        // eseguo una find sulla collection
        collection.find({ 'genres': `${genres}` }).limit(10).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else res.send(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });
});


router.get('/movie_from_year/:year', function (req, res, next) {
    console.log(req.params); //Leggo i parametri passati all'url
    year = parseInt(req.params.year);
    const uri = "mongodb+srv://MolinariDaniele:danielE118@cluster0.dn3hp.mongodb.net/Cluster0?retryWrites=true&w=majority"
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("sample_mflix").collection("movies"); //Mi connetto alla collection movies
        // eseguo una find sulla collection
        collection.find({ 'year': year }).limit(10).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else res.send(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });
});

router.get('/movie_from_rating/:rating', function (req, res, next) {
    rating = parseFloat(req.params.rating);
    const MongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://MolinariDaniele:danielE118@cluster0.dn3hp.mongodb.net/Cluster0?retryWrites=true&w=majority"
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true  });
    client.connect(err => {
        const collection = client.db("sample_mflix").collection("movies"); //Mi connetto alla collection movies
        // perform actions on the collection object
        console.log(rating);
        collection.find({"imdb.rating": rating}).limit(10).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else res.send(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

        //client.close();
    });
});


module.exports = router;



