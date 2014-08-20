Template.messages.messages = function () {
  return Messages.find({}, { sort: { time: -1 }});
}


Template.input.events = {
  'keydown input#message' : function (event) {
    if (event.which == 13) 
    { // 13 is the enter key event
      var name = document.getElementById('name');
      var message = document.getElementById('message');
        if(name.value.length > 0 && message.value.length >= 1 && message.value.length <= 25) { 
        Messages.insert({ 
          name: name.value, 
          message: message.value, 
          time: Date.now(), 
        }); 
        message.value = ''; 
         } else { 
      if (name.value.length < 1) 
         alert('Wpisz imie!'); 
     if (message.value.length < 1 || message.value.length > 25) 
        alert('Wiadomosc za krotka albo ma wiecej niz 25 znakow!');
      }
      
    }
  }
}

