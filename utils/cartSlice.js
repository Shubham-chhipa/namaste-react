import { createSlice } from "@reduxjs/toolkit";

//creating a slice of our redux store
const cartSlice = createSlice({
  //this function takes a configuration to create a slice
  name: "cart",
  initialState: {
    //initial state is an object, which means initial value of our cartSlice
    items: ["pizza", "burger", "chhole bhature", "Rajma chawal"],
  },
  reducers: {
    //reducers is an object whihc contains actions an reducers, which means a reducer for each specific action
    addItem: (state, action) => {
      //it gets access to state:state of the slice, and action
      //here we modify state based on action
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      //we dont need action over here but we have access to it
      state.items.pop(); //pop for now you can build custom logic to remove specfic cart item
    },
    clearCart: (state, action) => {
      state.items.length = 0;
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

export default cartSlice.reducer;
