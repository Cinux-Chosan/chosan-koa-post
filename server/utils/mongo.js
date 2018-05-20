var MongoClient = require('mongodb').MongoClient,
  assert = require('assert');

module.exports = Mongo;

function Mongo(db = 'test', url = 'mongodb://localhost:27017') {
  this.db = db;
  this.url = url;
}

Mongo.prototype.clients = {};
Mongo.prototype.getDB = function () {
  let context = this;
  let url = this.url;
  let db = this.db;
  let client = this.clients[url];
  return new Promise((res, rej) => {
    if (client) {
      res(client.db(db));
    } else {
      MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        context.clients[url] = client;
        res(client.db(db));
      });
    }
  });
}
Mongo.prototype.destory = function () {
  let clients = this.clients;
  for (const url in clients) {
    if (clients.hasOwnProperty(url)) {
      const client = clients[url];
      client.close();
      delete clients[url];
    }
  }
  this.clients = {};
}

process.on('exit', () => (new Mongo()).destory());

class myMongo{
  constructor(db = 'test', url = 'mongodb://localhost:27017') {
    this.db = db;
    this.url = url;
  }
}