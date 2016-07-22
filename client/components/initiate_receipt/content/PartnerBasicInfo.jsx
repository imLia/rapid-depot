import React, {Component} from 'react';


export default class PartnerBasicInfo extends Component {
  render() {
    return (
      <aside className='partnerBasicInfo'>
        <h4>Partner Name</h4>
        <p>{this.props.partnerName}</p>
        <h4>P.O.#:</h4>
        <p>1337123</p>
        <h4>Date:</h4>
        <time>July 14, 2016</time>
        <fieldset>
          <label>
            Time Started
            <time>
              8:00 P.M.
            </time>
          </label>
          <label>
            Time Arrived
            <input id='timeArrived' type='text' />
          </label>
          <div className='input-group'>
            <label className='input-group-label'>
              Receipt
            </label>
            <select className='input-group-field'>
              <option value=''>
                001
              </option>
              <option value=''>
                002
              </option>
              <option value=''>
                003
              </option>
              <option value=''>
                004
              </option>
            </select>
          </div>
        </fieldset>
        <div className='summary'>
          <div className='total-scanned callout'>
            <h4>
              Total Scanned
            </h4>
            <p>
              55
            </p>
          </div>
          <div className='excess callout alert'>
            <h4>
              Excess
            </h4>
            <p>
              0
            </p>
          </div>
        </div>
        <a className='button expanded success' data-open='scan-hud'>
          Start Scanning
        </a>
        <a className='button expanded' href='view-summary'>
          View Summary
        </a>
      </aside>
    );
  }
}
