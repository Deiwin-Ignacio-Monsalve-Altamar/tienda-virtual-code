const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CAR":
      return {
        ...state,
        myShop: [...state.myShop, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
