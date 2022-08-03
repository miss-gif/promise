function a(callback) {
  setTimeout(() => {
    console.log("a");
    callback();
  }, 1000);
}
function b(callback) {
  setTimeout(() => {
    console.log("b");
    callback();
  }, 1000);
}
function c(callback) {
  setTimeout(() => {
    console.log("c");
    callback();
  }, 1000);
}
function d(callback) {
  setTimeout(() => {
    console.log("d");
    callback();
  }, 1000);
}
a(function () {
  b(function () {
    c(function () {
      d(function () {
        console.log("Done!");
      });
    });
  });
});
