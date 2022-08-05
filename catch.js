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

// function test() {
//   a(1)
//     .then(() => {
//       console.log("Resolve!");
//     })
//     .catch(() => {
//       console.log("Reject");
//     })
//     .finally(function () {
//       console.log("Done!");
//     });
// }

async function test() {
  try {
    await a(8);
    console.log("Resolve!");
  } catch (error) {
    console.log("Reject!");
  } finally {
    console.log("Done!");
  }
}

test();
