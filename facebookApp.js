var database= [
    {
        username:"thanh",
        password:"1"
    }
];

var newsFeed= [
    {
        username: "Bobby",
        timeline: "So tired from school"
    },
    {
        username: "Sally",
        timeline: "JavaScript is so cool"
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password");

function signIn(user,pass) {
    if (user === database[0].username && 
        pass === database[0].password){
    console.log(newsFeed);
}   else {
    alert("Sorry, wrong username or password.");
}
}

signIn (userNamePrompt,passwordPrompt);