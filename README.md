# FriendFinder

A javascript application built with an express server on node.js.

deployed on heroku: https://desolate-castle-83432.herokuapp.com

the user is asked to complete a survey of 10 questions. Each answer on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.


the users results are compared to existing users to find the most compatiable friend.

```javascript
for(let i=0; i<friendStorage.length; i++){
      let scoreDifference = 0;

      for(let j=0; j<newFriendScores.length; j++){
        scoreDifference += (Math.abs(parseInt(friendStorage[i].scores[j]) - parseInt(newFriendScores[j])));
      }
```

Once the most compatable friend has been found the result is a displayed in a modal pop-up.

  



