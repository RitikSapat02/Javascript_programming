var userLoggedIn = true;
function checkUserLoggedIn() {
  var promise = new Promise((resolve, reject) => {
    //wait for 1sec
    setTimeout(() => {
      if (userLoggedIn) {
        //promise resolved
        resolve("User logged in");
      } else {
        //reject
        reject();
      }
    }, 1000);
  });
  return promise;
}

setTimeout(() => {
  userLoggedIn = false;
}, 500);

checkUserLoggedIn()
  .then((successmsg) => {
    console.log(successmsg);
  })
  .catch(() => {
    console.log("User not logged in");
  });
