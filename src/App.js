import React, { Component, Fragment } from 'react';
import './App.css';
import NavbarComp from './components/layouts/NavbarComp';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/Pages/About';
import User from './components/users/User';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
    user: {},
    repos: [],
  };

  //search github users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id="abaf243ea8cd5efbca77"&client_secret="bfa44a7640b80f48c5a10c36e00d2cdb04b98c0f"`
    );
    this.setState({ loading: false, users: res.data.items });
  };

  //clear users
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  //set alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  //get single github user
  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id="abaf243ea8cd5efbca77"&client_secret="bfa44a7640b80f48c5a10c36e00d2cdb04b98c0f"`
    );
    this.setState({ loading: false, user: res.data });
  };

  //get user respos
  getUserRepos = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id="abaf243ea8cd5efbca77"&client_secret="bfa44a7640b80f48c5a10c36e00d2cdb04b98c0f"`
    );
    this.setState({ loading: false, repos: res.data });
  };
  render() {
    const { loading, users, user, repos } = this.state;

    return (
      <Router>
        <div>
          <NavbarComp />
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Alert alert={this.state.alert} />
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users users={users} loading={loading} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    user={user}
                    loading={loading}
                    getUserRepos={this.getUserRepos}
                    repos={repos}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
