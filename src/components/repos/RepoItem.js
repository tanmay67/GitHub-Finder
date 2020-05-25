import React from 'react';
import PropTypes from 'prop-types';

export const RepoItem = ({ repo }) => {
  return (
    <div className="card card-body my-2">
      <h5>
        <a href={repo.html_url} style={{ color: 'red' }}>
          {repo.name}
        </a>
      </h5>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};
export default RepoItem;
