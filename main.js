function a() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      console.log("a");
      resolve("Hello a");
    }, 1000);
  });
}
function b() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      console.log("b");
      resolve("Hello b");
    }, 1000);
  });
}
function c() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      console.log("c");
      resolve("Hello c");
    }, 1000);
  });
}
function d() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      console.log("d");
      resolve("Hello d");
    }, 1000);
  });
}

async function test() {
  await a();
  await b();
  await c();
  await d();
  console.log("Done!");
}

test();
