Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    
    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    };
    
	/* 
		Exercise 2 - part 3: invoke the postInsert function.
		http://docs.meteor.com/#/full/meteor_error		
		Use the following callback function:
		
		function(error, result) {
		  // display the error to the user and abort
		  if (error)
			return alert(error.reason);
		  
		  // show this result but route anyway
		  if (result.postExists)
			alert('This link has already been posted');
		  
		  Router.go('postPage', {_id: result._id});  
		});
	*/
  }
});