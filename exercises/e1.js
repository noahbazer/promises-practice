/**
 * PROMISE CONSTRUCTOR (Resolve with onFulfilled callback argument )
 * Please, make sure to read the "01 Promise-constructor.md" file in exercise-info folder before you start!
 **/

export const createOneSecondPromise = () => {
  const oneSecondPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('The PROMISE was RESOLVED');
    }, 1000);
  });

  return oneSecondPromise;
};

export const logMessageAfterOneSecond = (message) => {
  const onFulfilled = () => {
    console.log(message);
  };

createOneSecondPromise()
  .then(onFulfilled);
};

export const logMessageAfterOneSecondAwait = async (message) => {
  const onFulfilled = () => {
    console.log(message);
  };

  await createOneSecondPromise()
    .then(onFulfilled);
};

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-1"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
