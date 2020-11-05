import React, { useState } from 'react';

import './styles.scss';

const TitleSection: React.FC = () => {
  const [currentPedroInfo, setCurrentPedroInfo] = useState<string>('');
  const [activeTab, setActiveTab] = useState<string>('');

  const pedroInfoList = ['stack', 'passion', 'hobbie'];

  const handleInfoDisplayed = (info: string) => {
    let description: string = '';
    switch (info) {
      case 'stack':
        description = 'a fullstack developer';
        break;
      case 'passion':
        description = 'wilderness addicted';
        break;
      case 'hobbie':
        description = 'a surfing freak';
        break;
      default:
        description = '';
    }
    setActiveTab(() => info);
    setCurrentPedroInfo(() => description);
  };
  return (
    <section>
      <div className="container-title">
        <h1 className="text-left">Hi, I am</h1>
        <h2 className="text-left">
          {currentPedroInfo ? `'${currentPedroInfo}'` : "'Pedro'"}
        </h2>
      </div>

      <img
        className="mt-4 mb-5"
        src="./assets/images/coding-icon.svg"
        alt="coding"
      />

      <div className="container-title-handlers mt-5">
        <ul className="d-flex flex-row justify-content-between list-group">
          {pedroInfoList.map(value => (
            <li
              style={{ color: activeTab === value ? '#FCA311' : '' }}
              onClick={() => handleInfoDisplayed(value)}
            >
              pedro.{value}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TitleSection;
