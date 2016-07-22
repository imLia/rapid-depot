import React, {Component} from 'react';


export default class ReceiptInfo extends Component {
  render() {
    return (
      <div className='receiptInfo'>
        <table>
          <thead>
            <tr>
              <th>SKU</th>
              <th>UPC</th>
              <th width='280'>Name</th>
              <th width='100'>Quantity</th>
              <th width='100'>Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ABDD23234</td>
              <td>ABDE98374923</td>
              <td>
                13" MacBook Pro 256GB
              </td>
              <td>10</td>
              <td>
                <input
                  type='number'
                  value={this.props.ReceiptInfo.macBookState}
                  onChange={this.props.handleMacbookChange}
                  />
              </td>
            </tr>
            <tr>
              <td>ABDD23234</td>
              <td>ABDE98374923</td>
              <td>Android</td>
              <td>10</td>
              <td>
                <input
                  type='number'
                  value={this.props.ReceiptInfo.androidState}
                  onChange={this.props.handleAndroidState}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
