// These variables are our "database" for users.
// You can actually change the values to whatever you'd like!
// And you can and should use them in your `isRegisteredUser` function.
// But we use them in your test code as well, so whatever you do, don't delete them!

const user1 = 'krose@perseverenow.org';
const password1 = 'Hotforhimself';
const user2 = 'jdoty@perseverenow.org';
const password2 = 'Console.logger';


// **YOUR** code below. Pass those tests!

function isValidEmail(email) {
  if((email.endsWith('.prsvr@gmail.com') && email.indexOf('.prsvr@gmail.com') > 0) 
  || (email.endsWith('@perseverenow.org') && email.indexOf('@perseverenow.org') > 0)){
    return true
  }else{ 
    return false 
  }
}

function isValidPassword(pw){
   pw.length < 8
  {return false}
}

function isRegisteredUser(user) {
return user === user1 || user === user2 ||;{
  return true
} else{
  return false
}
}

function passwordMatches(user, password) {
switch(user){
  case user1
}
}

// Our code below. Do not touch!


if (typeof isValidEmail === 'undefined') {
  isValidEmail = undefined;
}

if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof isRegisteredUser === 'undefined') {
  isRegisteredUser = undefined;
}

if (typeof passwordMatches === 'undefined') {
  passwordMatches = undefined;
}

if (typeof user1 === 'undefined') {
  user1 = undefined;
}

if (typeof user2 === 'undefined') {
  user2 = undefined;
}

if (typeof user3 === 'undefined') {
  user3 = undefined;
}

if (typeof password1 === 'undefined') {
  password1 = undefined;
}

if (typeof password2 === 'undefined') {
  password2 = undefined;
}

if (typeof password3 === 'undefined') {
  password3 = undefined;
}



module.exports = {
  isValidEmail,
  isValidPassword,
  isRegisteredUser,
  passwordMatches,
  user1,
  user2,
  password1,
  password2,
}
