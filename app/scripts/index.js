'use strict'

var fb = new Firebase('https://chatappcohort8.firebaseio.com/');

$('body').on('click', '#chatBtn', function(event) {
	event.preventDefault();

	// get name and message from input boxes
	var name =  $('#chatName').val();
	var chatText = $('#chatText').val();

	// send chatText to firebase
	fb.push({name: name, message: chatText});


	$('#chatText').val('');
	location.reload(true);

});

// testing
fb.once('value', function (res){
    var data = res.val();
    Object.keys(data).forEach(function (uuid) {
    	$('.chatArea').append('<p>'+ data[uuid].name + ': ' + data[uuid].message +'</p>');
    });
  })
