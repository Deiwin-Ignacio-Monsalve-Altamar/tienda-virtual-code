const reducer = (state, action) => {
    switch (action.type) {
      case 'GET_MEN':
        return {
          ...state,
          list_men : state.categories.men || []
        }
      
      default: 
        return state;
    }
  }
  
  export default reducer;