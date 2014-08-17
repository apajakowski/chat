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
////////////////////////////

test('red color', function(done) {
  //<template name="messages"> 
  //<section id="messages"> 
  //<h2>Wiadomości:</h2> 
  //{{#each messages}} 
  //<strong>{{name}}:</strong> {{message}}<br> 
  //{{/each}} 
  //</section> 
  //</template> 


  //var element = document.createElement("div");
  //element.id = 'messages';
  var e = getElementById('messages');
  e.style.color = "#f00";
  done();

});











/////////////////////////////
});



