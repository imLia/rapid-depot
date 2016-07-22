import React, {Component} from 'react';

import CreateModifyReceiptButtons from './CreateModifyReceiptButtons';


export default class PartnerBasicInfo extends Component {
  render() {
    return (
      <aside className='partnerBasicInfo'>
        <h4>Partner Name</h4>
        <p>ACME Toy Company</p>
        <h4>P.O.#:</h4>
        <p>1337123</p>
        <h4>Date:</h4>
        <time datetime='2016-07-14'>July 14, 2016</time>
        <h4>Time Started</h4>
        <time datetime='20:00'>8:00 P.M.</time>
        <h4>Time Arrived</h4>
        <time datetime='20:00'>8:00 P.M.</time>
        <fieldset>
          <div className='input-group'>
            <label className='input-group-label'>
              P.O. Status
            </label>
            <select className='input-group-field'>
              <option value=''>
                Open
              </option>
              <option value=''>
                Partially Recieved
              </option>
              <option value=''>
                Closed
              </option>
            </select>
          </div>
        </fieldset>
        <CreateModifyReceiptButtons />
      </aside>
    );
  }
}
