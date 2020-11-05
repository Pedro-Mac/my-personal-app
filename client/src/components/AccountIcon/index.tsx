import React from 'react';

//styles
import './styles.scss';

const AccountIcon: React.FC = () => {
  return (
    <div className="container-icons d-flex flex-column">
      <a href="https://github.com/Pedro-Mac">
        <img src="./assets/images/github-icon.svg" alt="github" />
      </a>
      <a href="https://www.linkedin.com/in/pedrotmachado/">
        <img src="./assets/images/linkedin-icon.svg" alt="linkedin" />
      </a>
    </div>
  );
};

export default AccountIcon;
