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
              <th width='100'>Stated Quantity</th>
              <th width='100'>Balance</th>
              <th width='100'>Qty Scanned</th>
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
              <td>{macbook.balance}</td>
              <td>
                <input
                  type='number'
                  value={macbook.quantityScanned}
                  onChange={this.props.handleMacbookChange}
                  />
              </td>
            </tr>
            <tr>
              <td>{android.sku}</td>
              <td>{android.upc}</td>
              <td>{android.description}</td>
              <td>{android.statedQuantity}</td>
              <td>{android.balance}</td>
              <td>
                <input
                  type='number'
                  value={android.quantityScanned}
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
