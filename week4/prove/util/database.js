const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect(
        'mongodb+srv://han16017:81ULAmTDzpKoqhgG@cluster0.sujjl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    )
        .then(client => {
            console.log('Connected!');
            callback(client);
        })
        .catch(err => {
            console.log(err);
        });
};

module.exports = mongoConnect;


