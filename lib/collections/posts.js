Posts = new Mongo.Collection('posts');

Meteor.methods({
  postInsert: function(postAttributes) {
    check(this.userId, String);
	/*
		Exercise 2 - part 1: check the postAttributes (both must be Strings)
		http://docs.meteor.com/#/full/check	
	*/
    
    var postWithSameLink = Posts.findOne({url: postAttributes.url});
    if (postWithSameLink) {
      return {
        postExists: true,
        _id: postWithSameLink._id
      }
    }
    
    var user = Meteor.user();
    var post = _.extend(postAttributes, {
      userId: user._id, 
      author: user.username, 
      submitted: new Date()
    });
    
	/*
		Exercise 2 - part 2: insert the post and assign return value to postId var. 
    */
	
    return {
      _id: postId
    };
  }
});
