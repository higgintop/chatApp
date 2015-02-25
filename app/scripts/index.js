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
	//location.reload(true);

});


fb.on('child_added', function (res){
  var data = res.val();
  addChatMessage(data.name, data.message);
  checkNumChats();
})

function addChatMessage(name, text) {
  $('.chatArea').append('<p>'+ name + ': ' + text +'</p>');
}

function checkNumChats() {
  var curLength = $('.chatArea').children().length;

  console.log("current length", curLength);

  if (curLength > 10){
  	// remove 1st 10 from dom
  	$('.chatArea p:lt(1)').remove();
  }

}
