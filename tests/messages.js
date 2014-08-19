var assert = require('assert');

suite('Messages', function() {

  test('server initialization', function(done, server) {
    server.eval(function() {
      var message = Messages.find().fetch();
      emit('message', message);
    }).once('message', function(message) {
      assert.equal(contact.length, 0);
      done();
    });
  });

test('client initialization', function(done, client) {
    client.eval(function() {
      var message = Messages.find().fetch();
      emit('message', message);
    }).once('message', function(message) {
      assert.equal(contact.length, 0);
      done();
    });
  });

test('insert test message from client', function(done, client) {
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

test('insert test message from server', function(done, server) {
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
////////////////////////////

test('red color', function(done, client) {
  var e = document.getElementById('messages');
  e.style.color = "#f00";
  done();

});











/////////////////////////////
});



