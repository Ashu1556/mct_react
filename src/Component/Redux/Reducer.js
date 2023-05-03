const intialdata = {
  name: "ashu",
  data: [],
};

const basicReducer = (storedata = intialdata, action) => {
  if (action.type === "fetchdata") {
    return {
      data: action.payload,
    };
  }
  return storedata;
};

export default basicReducer;
