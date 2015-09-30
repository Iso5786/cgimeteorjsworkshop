Notifications = new Mongo.Collection('notifications');

Notifications.allow({
  update: function(userId, doc, fieldNames) {
    return ownsDocument(userId, doc) && 
      fieldNames.length === 1 && fieldNames[0] === 'read';
  }
});

createCommentNotification = function(comment) {
	/*
		Exercise 3 - part 2: Insert a Notification when a comment is added. 
		Fields: userId, postId, commentId, commenterName, read
		Check if the current user is not the owner of the post,
		because post's owner doesn't have to notify himself.
	*/
};