function a(number) {
  return new Promise((resolve, reject) => {
    if (number > 4) {
      reject();
    }
    setTimeout(() => {
      console.log("a");
      resolve();
    }, 1000);
  });
}

function test() {
  a(2)
    .then(() => {
      console.log("Resolve!");
    })
    .catch(() => {
      console.log("Reject");
    });
}

test();
