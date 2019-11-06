//a POST routes /api/friends - this handles incoming survey results. will also used to handle the compatibility logic
//Load Data
var friendStorage = require('../data/friend.js');

module.exports = function(app){
  //a GET route that displays JSON of all possible friends
  app.get('/api/friends', function(req,res){
    res.json(friendStorage);
  });

  app.post('/api/friends', function(req,res){
    //grabs the new friend's scores to compare with friends in friendStorage array
    let newFriendScores = req.body.scores;
    let scoresArray = [];
    let friendCount = 0;
    let bestFriendMatch = 0;

    //runs through all current friends in list
    for(let i=0; i<friendStorage.length; i++){
      let scoreDifference = 0;
      //run through scores to compare friends
      for(let j=0; j<newFriendScores.length; j++){
        scoreDifference += (Math.abs(parseInt(friendStorage[i].scores[j]) - parseInt(newFriendScores[j])));
      }

      //push results into scoresArray
      scoresArray.push(scoreDifference);
    }

    //after all friends are compared, find best match
    for(let i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestFriendMatch]){
        bestFriendMatch = i;
      }
    }

    //return bestFriendMatch data
    let bff = friendStorage[bestFriendMatch];
    res.json(bff);

    //pushes new submission into the friendsList array
    friendStorage.push(req.body);
  });
};
