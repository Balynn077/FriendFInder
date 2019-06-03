var newFriend = {
	friendName: "Anna",
	friendImg: "<image>", 
	scores: ["3", "4", "5", "3", "3", "3", "3", "3", "2", "3"]};

var friendArray = {
	"friendName": "David",
	"friendImg": "<image>",
	"scores": [	1,	3,	1,	2,	1,	1,	3,	5,	4,	1	]};

var friendMatch = [];

function newArray() {

	for (var i = 0; i < newFriend.scores.length; i++) {
		var friendCalc = Math.abs(newFriend.scores[i] - friend.scores[i]);
		console.log("friendCalc: " + friendCalc);
		friendMatch.push(friendCalc);
	};
	console.log("friendMatch: " + friendMatch);
	var reducer = (accumulator, currentValue) => accumulator + currentValue;
	console.log(friendMatch.reduce(reducer));
};

newArray();