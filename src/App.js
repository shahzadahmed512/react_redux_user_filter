// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UserList from './UserList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>User Search</h1>
        <UserList />
      </div>
    </Provider>
  );
}

export default App;
