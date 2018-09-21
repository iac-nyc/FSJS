/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
    name:"iftekhar",
    friends:5,
    messages:["hello","Have a nice day"],
    postMessage : function(message) {
        return facebookProfile.messages.push(message);
    } ,
    addFriend : function() {
        return facebookProfile.friends +=1;
    } ,
    removeFriend : function () {
        return facebookProfile.friends -= 1;
    },
    deleteMessage : function(index) {
        var remove= facebookProfile.messages.splice(index,1);
        return remove
    }
};
console.log(facebookProfile.friends);
console.log((facebookProfile.addFriend()));
console.log(facebookProfile.friends);
