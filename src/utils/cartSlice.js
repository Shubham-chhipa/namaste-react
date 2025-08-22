import { createSlice, current } from "@reduxjs/toolkit";

//creating a slice of our redux store
const cartSlice = createSlice({
  //this function takes a configuration to create a slice
  name: "cart",
  initialState: {
    //initial state is an object, which means initial value of our cartSlice
    items: [],
  },
  reducers: {
    //reducers is an object whihc contains actions an reducers, which means a reducer for each specific action
    addItem: (state, action) => {
      //it gets access to state:state of the slice, and action
      //here we modify state based on action
      // console.log(state); //redux creates a proxy object BTs which we cant access directly
      console.log(current(state)); //current method helps us access the current state value

      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      //we dont need action over here but we have access to it
      state.items.pop(); //pop for now you can build custom logic to remove specfic cart item
    },
    clearCart: (state, action) => {
      //RTK: in reducers - either mutate the existing state or return a new state
      state.items.length = 0;

      //or

      // return { items: []} //this new state will be replaced inside original state = { items: []}
    },
  },
});

//To understand the export part below
//what happens behind the scenes is when you do creatSlice() function, It will return aobject inside cartSlice
//So cartSlice object will look something like this:
// cartSLice = {
//     actions: {
//         addItem,
//         removeItem,
//         clearCart
//     },
//     reducer
// }
//so out of the above object we are exporting stuff below, And this the way redux toolkit is written

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer; //we are exporting this one single reducer which is a combination of the above small reducers(functions): addItem,removeItem, clearCart
