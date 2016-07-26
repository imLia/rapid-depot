import React, {Component} from 'react';


export default class ReceiptInfo extends Component {
  render() {
    var macbook = this.props.ReceiptInfo.upc[4800067450871];
    var android = this.props.ReceiptInfo.upc[4711421853422];

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
              <td>{macbook.sku}</td>
              <td>{macbook.upc}</td>
              <td>
                {macbook.description}
              </td>
              <td>{macbook.statedQuantity}</td>
              <td>
                <input
                  type='number'
                  value={macbook.balance}
                  onChange={this.props.handleMacbookChange}
                  />
              </td>
            </tr>
            <tr>
              <td>{android.sku}</td>
              <td>{android.upc}</td>
              <td>{android.description}</td>
              <td>{android.statedQuantity}</td>
              <td>
                <input
                  type='number'
                  value={android.balance}
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
