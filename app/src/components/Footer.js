import React from 'react';
import Typography from 'material-ui/Typography';
import './App.css';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="GithubButton">
        <a
          className="github-button"
          href="https://github.com/mosaxiv/packagist-trends"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star mosaxiv/packagist-trends on GitHub"
        >
          Star
        </a>
        <a
          className="github-button"
          href="https://github.com/mosaxiv/packagist-trends/issues"
          data-icon="octicon-issue-opened"
          data-size="large"
          aria-label="Issue mosaxiv/packagist-trends on GitHub"
        >
          Issue
        </a>
      </div>
      <Typography align="center">
        Made by <a href="https://github.com/mosaxiv">mosaxiv</a>. Thanks for{' '}
        <a href="https://packagist.org/">Packagist</a>.
      </Typography>
    </footer>
  );
};

export default Footer;
