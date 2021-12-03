// * TODO: Implement function for updating user's step data in store
// * TODO: Function for getting user's step data may need some adjustments
module.exports = function stepService(store) {
  const service = {};

  service.get = (username) => {
    let user = store[username];

    if(user && Object.keys(user).includes("ts")) return user;

    return undefined;
  };

  service.add = (username, ts, newSteps, update_id) => {
    // Assume that `store` is initially an empty object {}. An example `store` is:
    // {
    //   jenna: {
    //     ts: 1503256778463,
    //     cumulativeSteps: 12323,
    //   },
    //   james: {
    //     ts: 1503256824767,
    //     cumulativeSteps: 587,
    //   },
    // }
    let user = service.get(username);
    let userUpdate = {};
    if(user) {
      userUpdate.ts = ts;
      userUpdate.update_id = update_id;
      userUpdate.cumulativeSteps = Number(user.cumulativeSteps) + Number(newSteps);
      store[username] = {
        ...userUpdate
      };
    } else {
      store[username] = {
        ts,
        cumulativeSteps: newSteps,
        update_id
      }
    }
  }

  return service;
};
