// UserList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setSearchQuery,
  toggleShowAdults,
  setSelectedGender,
} from './userSlice';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const searchQuery = useSelector((state) => state.user.searchQuery);
  const showAdults = useSelector((state) => state.user.showAdults);
  const selectedGender = useSelector((state) => state.user.selectedGender);

  const filteredUsers = users.filter((user) => {
    const nameMatch = user.name.toLowerCase().includes(searchQuery.toLowerCase());
    const adultMatch = !showAdults || user.age >= 18;
    const genderMatch = selectedGender === 'All' || user.gender === selectedGender;

    return nameMatch && adultMatch && genderMatch;
  });

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleAdultCheckboxChange = () => {
    dispatch(toggleShowAdults());
  };

  const handleGenderSelectChange = (e) => {
    dispatch(setSelectedGender(e.target.value));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div>
        <label>
          Show Adults Only
          <input
            type="checkbox"
            checked={showAdults}
            onChange={handleAdultCheckboxChange}
          />
        </label>
        <select value={selectedGender} onChange={handleGenderSelectChange}>
          <option value="All">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name} - Age: {user.age} - Gender: {user.gender}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
