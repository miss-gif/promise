function a() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("a");
      resolve();
    }, 1000);
  });
}

async function test() {
  await a();
  console.log("b");
}

test();

//////////////////////////////////////////////

function a() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("a");
      resolve();
    }, 1000);
  });
}

function test() {
  const promise = a();
  promise.then(function () {
    console.log("b");
  });
}

test();

//////////////////////////////////////////////

function a() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("a");
      resolve();
    }, 1000);
  });
}

function test() {
  a().then(function () {
    console.log("b");
  });
}

test();

//////////////////////////////////////////////

function a() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("a");
      resolve();
    }, 1000);
  });
}
function b() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("b");
      resolve();
    }, 1000);
  });
}
function c() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("c");
      resolve();
    }, 1000);
  });
}
function d() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("d");
      resolve();
    }, 1000);
  });
}

function test() {
  a().then(() => {
    b().then(() => {
      c().then(() => {
        d().then(() => {
          console.log("Done!");
        });
      });
    });
  });
}

test();

//////////////////////////////////////////////

function a() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("a");
      resolve();
    }, 1000);
  });
}
function b() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("b");
      resolve();
    }, 1000);
  });
}
function c() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("c");
      resolve();
    }, 1000);
  });
}
function d() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("d");
      resolve();
    }, 1000);
  });
}

function test() {
  a()
    .then(() => {
      return b();
    })
    .then(() => {
      return c();
    })
    .then(() => {
      return d();
    })
    .then(() => {
      console.log("Done!");
    });
}

// function test() {
//   a()
//     .then(() => b())
//     .then(() => c())
//     .then(() => d())
//     .then(() => {
//       console.log("Done!");
//     });
// }

test();
