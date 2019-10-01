export default function catsReducer(
   state = {loading: false, pictures: []}, action
   ) {
   switch(action.type) {
      case "LOADING_CATS":
         return {...state, loading: true}

      case "FETCH_CATS":
         state = {loading: false, pictures: action.payload}
         return state

      default:
         return state
   }
}
