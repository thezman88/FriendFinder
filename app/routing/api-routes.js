
var friendStorage = require('../data/friend.js');

module.exports = function(app){
  //a GET route that displays JSON of all possible friends
  app.get('/api/friends', function(req,res){
    res.json(friendStorage);
  });

  app.post('/api/friends', function(req,res){
    //grabs  new friend's scores to compare with friendStorage
    let newFriendScores = req.body.scores;
    let scoresArray = [];
    let friendCount = 0;
    let bestFriendMatch = 0;

    for(let i=0; i<friendStorage.length; i++){
      let scoreDifference = 0;

      for(let j=0; j<newFriendScores.length; j++){
        scoreDifference += (Math.abs(parseInt(friendStorage[i].scores[j]) - parseInt(newFriendScores[j])));
      }

      //push results into scoresArray
      scoresArray.push(scoreDifference);
    }

    
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
