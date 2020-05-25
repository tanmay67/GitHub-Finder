import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: '',
  };

  //proptypes
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please Enter Something', 'warning');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };
  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form className="mt-3 p-0" onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="text"
              id="text"
              value={this.state.text}
              onChange={this.onChange}
              placeholder="Search User Login..."
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Search"
              className="btn btn-dark btn-block"
            />
          </div>
        </form>

        {showClear && (
          <div className="form-group">
            <button onClick={clearUsers} className="btn btn-primary btn-block">
              Clear
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Search;
