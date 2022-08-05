function a(number) {
  return new Promise((resolve, reject) => {
    if (number > 4) {
      reject();
      return;
    }
    setTimeout(() => {
      console.log("a");
      resolve();
    }, 1000);
  });
}

function test() {
  a(7)
    .then(() => {
      console.log("Resolve!");
    })
    .catch(() => {
      console.log("Reject");
    });
}

test();
