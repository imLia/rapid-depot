import React, {Component} from 'react';

import MenuBar from '../menu/MenuBar';
import POHeader from './POHeader';
import PartnerBasicInfo from './PartnerBasicInfo';
import ReceiptInfo from './ReceiptInfo';


export default class InitiateReceipt extends Component {
  constructor(props){
    super(props);
    this.state = {
      partnerName: 'Payless',
      poNumber: '1337123',
      currentDate: 'July 14, 2016',
      timeStarted: '8:00 P.M',
      timeArrived: '7:00 A.M',
      totalScanned: '55',
      excess: '0'
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
              <section className='poContent'>
                <div className='poDetails'>
                  <PartnerBasicInfo partnerBasicInfo={this.state} />
                  <ReceiptInfo />
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
