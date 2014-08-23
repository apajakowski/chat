var assert = require('assert');

suite('Messages', function() {

  test('client initialization', function(done, client) {
    client.eval(function() {
      var message = Messages.find().fetch();
      emit('message', message);
    }).once('message', function(message) {
      assert.equal(message.length, 0);
      done();
    });
  });

  test('server initialization', function(done, server) {
    server.eval(function() {
      var message = Messages.find().fetch();
      emit('message', message);
    }).once('message', function(message) {
      assert.equal(message.length, 0);
      done();
    });
  });

test('insert a test message as client', function(done, client) {
    client.eval(function() {
        Messages.insert({
          name: 'testowiec',
          message: 'wiadomosc testowa',
          time: Date.now(),
        });
    var message = Messages.find({ message: 'wiadomosc testowa'}).fetch();
    emit('message', message);
    });

    client.once('message', function(message) {
         assert.equal(message.length, 1);
         done();
       });
  });

/////////////////////////

test('insert a test message as server', function(done, server) {
    server.eval(function() {
      Messages.insert({
        name: 'test', 
        message:'testowiec', 
        time: Date.now(),
      });
      var message = Messages.find({ message: 'testowiec'}).fetch();
      emit('message', message);
    });

    server.once('message', function(message) {
      assert.equal(message.length, 1);
      done();
    });
  });

test('send an empty message as client', function(done, client) {
    client.eval(function() {
      Messages.insert({
        name: 'test', 
        message:'', 
        time: Date.now(),
      });
      var message = Messages.find({ message: ''}).fetch();
      emit('message', message);
    });

    client.once('message', function(message) {
      assert.equal(message.length, 1);
      done();
    });
  });

test('send an empty message as server', function(done, server) {
    server.eval(function() {
      Messages.insert({
        name: 'test', 
        message:'', 
        time: Date.now(),
      });
      var message = Messages.find({ message: ''}).fetch();
      emit('message', message);
    });

    server.once('message', function(message) {
      assert.equal(message.length, 1);
      done();
    });
  });

test('send a message without a name as client', function(done, client) {
    client.eval(function() {
      Messages.insert({
        name: '', 
        message:'test', 
        time: Date.now(),
      });
      var message = Messages.find({ name: ''}).fetch();
      emit('message', message);
    });

    client.once('message', function(message) {
      assert.equal(message.length, 1);
      done();
    });
  });

test('send a message without a name as server', function(done, server) {
    server.eval(function() {
      Messages.insert({
        name: '', 
        message:'test', 
        time: Date.now(),
      });
      var message = Messages.find({ name: ''}).fetch();
      emit('message', message);
    });

    server.once('message', function(message) {
      assert.equal(message.length, 1);
      done();
    });
  });

test('try to send nothing as client', function(done, client) {
    client.eval(function() {
      Messages.insert({
        name: '', 
        message:'', 
        time: Date.now(),
      });
      var message = Messages.find({ name: '', message: ''}).fetch();
      emit('message', message);
    });

    client.once('message', function(message) {
      assert.equal(message.length, 1);
      done();
    });
  });

test('try to send nothing as server', function(done, server) {
    server.eval(function() {
      Messages.insert({
        name: '', 
        message:'', 
        time: Date.now(),
      });
      var message = Messages.find({ name: '', message: ''}).fetch();
      emit('message', message);
    });

    server.once('message', function(message) {
      assert.equal(message.length, 1);
      done();
    });
  });

test('send a message as client that contains more than 25 characters', function(done, client) {
    client.eval(function() {
      Messages.insert({
        name: 'test', 
        message:'testtesttesttesttesttesttesttest', 
        time: Date.now(),
      });
      var message = Messages.find({ message: 'testtesttesttesttesttesttesttest'}).fetch();
      emit('message', message);
    });

    client.once('message', function(message) {
      assert.equal(message.length, 1);
      done();
    });
  });


test('send a message as server that contains more than 25 characters', function(done, server) {
    server.eval(function() {
      Messages.insert({
        name: 'test', 
        message:'testtesttesttesttesttesttesttest', 
        time: Date.now(),
      });
      var message = Messages.find({ message: 'testtesttesttesttesttesttesttest'}).fetch();
      emit('message', message);
    });

    server.once('message', function(message) {
      assert.equal(message.length, 1);
      done();
    });
  });
////////////////////////////

});



