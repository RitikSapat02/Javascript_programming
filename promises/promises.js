var userLoggedIn = true;
var promise = new Promise((resolve, reject) => {
  //wait for 1sec
  setTimeout(() => {
    if (userLoggedIn) {
      //promise resolved
      resolve();
    } else {
      //reject
      reject();
    }
  }, 1000);
});

setTimeout(() => {
  userLoggedIn = false;
}, 500);

promise
  .then(() => {
    console.log("User Logged In");
  })
  .catch(() => {
    console.log("User not logged in");
  });
