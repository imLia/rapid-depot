import React, {Component} from 'react';


export default class ReceiptInfo extends Component {
  render() {
    return (
      <div className='receiptInfo'>
        <h4>
          Receipt #0001
          <small className='float-right'>
            July 14, 2016
          </small>
        </h4>
        <table>
          <thead>
            <tr>
              <th>SKU</th>
              <th>UPC</th>
              <th width='280'>Name</th>
              <th>Quantity</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ABDD23234</td>
              <td>ABDE98374923</td>
              <td>13" MacBook Pro 256GB</td>
              <td>10</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
        <h4>
          Receipt #0002
          <small className='float-right'>
            July 14, 2016
          </small>
        </h4>
        <table>
          <thead>
            <tr>
              <th>SKU</th>
              <th>UPC</th>
              <th width='280'>Name</th>
              <th>Quantity</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ABDD23234</td>
              <td>ABDE98374923</td>
              <td>13" MacBook Pro 256GB</td>
              <td>10</td>
              <td>8</td>
            </tr>
            <tr>
              <td>ABDD23234</td>
              <td>ABDE98374923</td>
              <td>13" MacBook Pro 256GB</td>
              <td>10</td>
              <td>10</td>
            </tr>
            <tr>
              <td>ABDD23234</td>
              <td>ABDE98374923</td>
              <td>13" MacBook Pro 256GB</td>
              <td>10</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
        <h4>
          Receipt #0004
          <small className='float-right'>
            July 14, 2016
          </small>
        </h4>
        <table>
          <thead>
            <tr>
              <th>SKU</th>
              <th>UPC</th>
              <th width='280'>Name</th>
              <th>Quantity</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ABDD23234</td>
              <td>ABDE98374923</td>
              <td>13" MacBook Pro 256GB</td>
              <td>10</td>
              <td>10</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>ABDD23234</td>
              <td>ABDE98374923</td>
              <td>13" MacBook Pro 256GB</td>
              <td>10</td>
              <td>10</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>ABDD23234</td>
              <td>ABDE98374923</td>
              <td>13" MacBook Pro 256GB</td>
              <td>10</td>
              <td>10</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>ABDD23234</td>
              <td>ABDE98374923</td>
              <td>13" MacBook Pro 256GB</td>
              <td>10</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
