// userSlice.js
import { createSlice } from '@reduxjs/toolkit';


const dummyUsers = [
    { id: 1, name: 'John Doe', age: 25, gender: 'Male' },
    { id: 2, name: 'Jane Smith', age: 30, gender: 'Female' },
    { id: 3, name: 'Michael Johnson', age: 18, gender: 'Male' },
    // ... add more dummy data
  ];
  
const initialState = {
  users: dummyUsers,
  searchQuery: '',
  showAdults: false,
  selectedGender: 'All',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    toggleShowAdults: (state) => {
      state.showAdults = !state.showAdults;
    },
    setSelectedGender: (state, action) => {
      state.selectedGender = action.payload;
    },
  },
});

export const { setSearchQuery, toggleShowAdults, setSelectedGender } = userSlice.actions;
export default userSlice.reducer;
