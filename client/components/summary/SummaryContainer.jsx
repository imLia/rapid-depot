import React, {Component} from 'react';

import MenuBar from '../menu/MenuBar';
import SummaryHeader from './SummaryHeader';
import SummaryContent from './SummaryContent';


export default class InitiateReceipt extends Component {
  render() {
    return (
      <div>
        <MenuBar />
        <section className='container'>
          <div className='inbound-receipt'>
            <div className='poProper'>
              <SummaryHeader />
              <SummaryContent />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
