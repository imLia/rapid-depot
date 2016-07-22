import React, {Component} from 'react';

import MenuBar from '../menu/MenuBar';
import POHeader from './POHeader';
import POContent from './POContent';


export default class InitiateReceipt extends Component {
  constructor(props){
    super(props);
    this.state = {
      partnerName: 'Payless',
      poNumber: '',
      currentDate: '',
      timeStarted: '',
      timeArrived: '',
      totalScanned: '',
      excess: ''
    }
  }
  render() {
    return (
      <div>
        <MenuBar />
        <section className='container'>
          <div className='inbound-receipt'>
            <div className='poProper'>
              <POHeader />
              <POContent partnerName={this.state.partnerName} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
