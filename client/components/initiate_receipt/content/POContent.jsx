import React, {Component} from 'react';

import PartnerBasicInfo from './PartnerBasicInfo';
import ReceiptInfo from './ReceiptInfo';

export default class POContent extends Component {
  render() {
    return (
      <section className='poContent'>
        <div className='poDetails'>
          <PartnerBasicInfo />
          <ReceiptInfo />
        </div>
      </section>
    );
  }
}
