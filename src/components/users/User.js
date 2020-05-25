import React, { Component, Fragment } from 'react';
import Spinner from '../layouts/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Repos from '../repos/Repos';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }
  static propTypes = {
    getUser: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUserRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
  };
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      public_repos,
      public_gists,
      hireable,
      company,
      following,
    } = this.props.user;
    const { loading, repos } = this.props;

    if (loading) return <Spinner />;
    return (
      <Fragment>
        <Breadcrumb className="mt-3">
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            {name}{' '}
            {hireable ? (
              <i className="fas fa-check text-success align-self-center"></i>
            ) : (
              <i className="fas fa-times text-danger align-self-center"></i>
            )}
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="card card-body text-center my-2 ">
          <div className="row">
            <div className="col-sm-4">
              <img
                src={avatar_url}
                alt={name}
                className="rounded-circle"
                style={{ width: '150px' }}
              />
              <h2>{name}</h2>
              {location && <p>Location: {location}</p>}
            </div>
            <div className="col-sm-8">
              {bio && (
                <Fragment>
                  <h3>Bio</h3>
                  <p>{bio}</p>
                </Fragment>
              )}
              <a
                href={html_url}
                className="btn btn-dark my-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit GitHub Profile
              </a>
              <ul className="list-unstyled">
                <li>
                  {login && (
                    <Fragment>
                      <strong>Username: </strong>
                      {login}
                    </Fragment>
                  )}
                </li>
                <li>
                  {company && (
                    <Fragment>
                      <strong>Company: </strong>
                      {company}
                    </Fragment>
                  )}
                </li>
                <li>
                  {blog && (
                    <Fragment>
                      <strong>Website: </strong>
                      {blog}
                    </Fragment>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card card-body text-center my-2">
          <div className="d-inline">
            <div className="badge badge-primary m-1">
              Followers: {followers}
            </div>
            <div className="badge badge-success m-1">
              Following: {following}
            </div>
            <div className="badge badge-danger m-1">
              Public Repos: {public_repos}
            </div>
            <div className="badge badge-dark m-1">
              Public Gists: {public_gists}
            </div>
          </div>
        </div>
        <h2 className="text-center text-uppercase">Latest Repositories</h2>
        <Repos repos={repos} />
      </Fragment>
    );
  }
}

export default User;
