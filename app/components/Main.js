import React from 'react';
import SearchGitHub from './SearchGitHub';
// var ReactDOM = require('react-dom');

const Main = ({history, children}) => {
  return (
    <div className="main-container">
      <nav className="navbar navbar-default" role="navigation">
        <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
          <SearchGitHub history={history} />
        </div>
      </nav>
      <div className="container">
        {children}
      </div>
    </div>
  )
}

export default Main;
