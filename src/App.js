import React from 'react';
import PostList from './PostList/PostList'
import './App.css';

function App() {
  return (
    <div className="App">

      <br/>
      <PostList/>
      <br/>
      <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
      <div>
          env value: {process.env.REACT_APP_NOT_SECRET_CODE} 
      </div>
 

    </div>
  );
}

export default App;
