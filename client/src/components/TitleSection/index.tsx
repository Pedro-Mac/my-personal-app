import React, {useState} from 'react'

import './styles.scss'

type pedroInfo = 'stack' | 'passion' | 'hobbie';

const TitleSection: React.FC = () => {
  const [pedroInfo, setPedroInfo] = useState<string>('');
  const [activeTab, setActiveTab] = useState<string>('');

  const handleInfoDisplayed = (info: pedroInfo) => {
    let description: string = '';
    switch(info){
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
    setActiveTab(()=>info);
    setPedroInfo(()=> description);
  }
  return (
    <section>
      <div className="container-title">
        <h1 className="text-left" >Hi, I am</h1>
        <h2 className="text-left" >{pedroInfo ? `'${pedroInfo}'` : "'Pedro'"}</h2>
      </div>

      <img className="mt-4 mb-5" src="./assets/images/coding-icon.svg" alt="coding"/>

      <div className="container-title-handlers mt-5">
        <ul className="d-flex flex-row justify-content-between list-group">
          <li style={{color: activeTab === 'stack' ? '#FCA311' : ''}} onClick={()=> handleInfoDisplayed('stack')}>pedro.stack</li>
          <li style={{color: activeTab === 'passion' ? '#FCA311' : ''}} onClick={()=> handleInfoDisplayed('passion')}>pedro.passion</li>
          <li style={{color: activeTab === 'hobbie' ? '#FCA311' : ''}} onClick={()=> handleInfoDisplayed('hobbie')}>pedro.hobbie</li>
        </ul>
      </div>
    </section>
  )
}

export default TitleSection;
