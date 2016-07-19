import React, {Component} from 'react';

import MenuBar from '../menu/MenuBar';
import POHeader from './POHeader';
import POContent from './POContent';


export default class InitiateReceipt extends Component {
  render() {
    return (
      <div>
        <MenuBar />
        <section className='container'>
          <div className='inbound-receipt'>
            <div className='poProper'>
              <POHeader />
              <POContent />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
