export const getFirstResolvedPromise = (promises) => {
  return new Promise((resolve) => {
    promises.forEach((p) => {
      p.then(resolve).catch(() => {});
    });
  });
};

export const getFirstPromiseOrFail = (promises) => {
  return Promise.race(promises.map(p => p.catch(e => Promise.reject(e))));
};

export const getQuantityOfRejectedPromises = (promises) => {
  return Promise.allSettled(promises).then(results => 
    results.filter(r => r.status === 'rejected').length
  );
};

export const getQuantityOfFulfilledPromises = (promises) => {
  return Promise.allSettled(promises).then(results => 
    results.filter(r => r.status === 'fulfilled').length
  );
};

//!  ⬇ ⬇ ⬇ ⬇ Don't Edit This Array ⬇ ⬇ ⬇ ⬇
export const allCharacters = [
  { id: 1, name: "billy" },
  { id: 2, name: "mandy" },
  { id: 3, name: "grim" },
];
//! ⬆  ⬆  ⬆  ⬆ do not edit this array   ⬆  ⬆  ⬆  ⬆ ️

//!  ⬇ ⬇ ⬇ ⬇ Don't Edit This Function ⬇ ⬇ ⬇ ⬇
export const fetchCharacterById = (id) => {
  // This function simulates an API, although most api's will return
  // simple data like this quickly, we want you to practice concurrent programming
  // so we're forcing each call to take one second

  const validIds = allCharacters.map((character) => character.id);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!validIds.includes(id))
        reject(`we do not have a character with the id of ${id}`);

      return resolve(allCharacters.find((character) => character.id === id));
    }, 1000);
  });
};
//! ⬆  ⬆  ⬆  ⬆ do not edit this function   ⬆  ⬆  ⬆  ⬆ ️

export const fetchAllCharactersByIds = async (ids) => {
  const promises = ids.map(id => fetchCharacterById(id));
  console.log(promises);
  return Promise.all(promises)
    .then(results => {
      console.log(results);
      return results;
    }).catch(() => [])};
