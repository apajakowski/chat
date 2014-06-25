var assert = require('assert');

suite('Messages', function() {

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

//////////////////////
test('using two clients', function(done, server, c1, c2) {
    c1.eval(function() {
      Messages.find().observe({
        added: addedNewPost
      });

      function addedNewPost(message) {
        emit('message', message);
      }
      emit('done');
    }).once('message', function(message) {
      assert.equal(message.title, 'from c2');
      done();
    }).once('done', function() {
      c2.eval(insertPost);
    });

    function insertPost() {
      Messages.insert({name: 'test', message: 'from c2', time: Date.now(),});
    }
  });


});
