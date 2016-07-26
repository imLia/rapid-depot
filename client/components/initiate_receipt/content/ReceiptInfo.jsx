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
              <td>{this.props.ReceiptInfo.upc.item1}</td>
              <td>{this.props.ReceiptInfo.macBookupc}</td>
              <td>
                13" MacBook Pro 256GB
              </td>
              <td>{this.props.ReceiptInfo.statedQuantity}</td>
              <td>
                <input
                  type='number'
                  value={this.props.ReceiptInfo.macBookState}
                  onChange={this.props.handleMacbookChange}
                  />
              </td>
            </tr>
            <tr>
              <td>{this.props.ReceiptInfo.androidSku}</td>
              <td>{this.props.ReceiptInfo.androidupc}</td>
              <td>Android</td>
              <td>{this.props.ReceiptInfo.statedQuantity}</td>
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
