import React, {Component} from 'react';

import MenuBar from '../menu/MenuBar';
import POHeader from './POHeader';
import PartnerBasicInfo from './PartnerBasicInfo';
import ReceiptInfo from './ReceiptInfo';

let currentUpc = '';

export default class InitiateReceipt extends Component {
  constructor(props){
    super(props);

    let newDate = new Date();
    function currentDate () {
      let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August",
        "September", "October", "November", "December"];

      return monthNames[newDate.getMonth()] + " " + newDate.getDate()+ ", " + newDate.getFullYear();
    }

    function currentTime() {
      let period = newDate.getHours() <= 12 ?  'A.M' : 'P.M';
      let hoursOf12 = newDate.getHours() >= 12  ? newDate.getHours() - 12 : newDate.getHours();
      let minutes = (newDate.getMinutes()< 10 ? '0':'') + newDate.getMinutes() ;

      return  hoursOf12 + ":" + minutes + " " + period;
    }



    this.state = {
      partnerName: 'Payless',
      poNumber: '1337123',
      currentDate: currentDate(),
      timeStarted: currentTime(),
      timeArrived: '7:00 A.M',
      totalExcess: 0,
      macBookState: 0,
      androidState: 0,
      totalScanned: 0,

      currentUpc: '',
      upc: {
        '4800067450871': {
          'sku': '4548000674',
          'upc': '4800067450871',
          'description': '13" MacBook Pro 256GB',
          'statedQuantity':  2,
          'balance': 0,
          quantityScanned: 0,
          excess: 0
        },
        '4711421853422': {
          'sku': '45447422',
          'upc': '4711421853422',
          'description': 'android',
          'statedQuantity':  2,
          'balance': 0,
          quantityScanned: 0,
          excess: 0
        }
      }
    };
    this.handleTextBoxChange = this.handleTextBoxChange.bind(this);
    this.handleMacbookChange = this.handleMacbookChange.bind(this);
    this.handleAndroidState = this.handleAndroidState.bind(this);
    this.customMethod = this.customMethod.bind(this);
    // this.updatedScanned = this.updatedScanned.bind(this);
    // this.barcode = this.barcode.bind(this);
  }

  componentDidMount(){
    document.body.addEventListener('keydown', this.customMethod)
  }

  customMethod(e) {
    if (e.code !== 'Enter' && e.code !== 'ShiftLeft') {
      // currentUpc += e.key;
      // console.log(currentUpc);
      this.setState({
        currentUpc: this.state.currentUpc += e.key
      })
    } else {
      if (this.state.currentUpc in this.state.upc) {
        let macbook =  this.state.upc[4800067450871];
        let android = this.state.upc[4711421853422];
        if(this.state.currentUpc == macbook.upc){
          macbook.quantityScanned++;
          macbook.balance = macbook.statedQuantity - macbook.quantityScanned;
          if(macbook.balance < 0){
            macbook.excess  = macbook.balance
            this.setState({
              quantityScanned: macbook.quantityScanned,
              balance: macbook.balance,
              excess: macbook.excess
            });
          }
          // console.log(macbook.quantityScanned);
           console.log(macbook.balance);
        }
        else if(this.state.currentUpc == android.upc){
          android.quantityScanned++;
          android.balance = android.statedQuantity - android.quantityScanned;
          if(android.balance < 0){
            android.excess = android.balance;
            this.setState({
              quantityScanned: android.quantityScanned,
              balance: android.balanc,
              excess: android.excess
            })
          }
          // console.log(android.quantityScanned);
          console.log(android.balance);
        }
      } else {
          console.log('UPC is not found');
          this.setState({
            currentUpc: ''
          })
      }
    }
  }

  handleTextBoxChange(e) {
    this.setState({
      timeArrived: e.target.value
    })
  }

  handleMacbookChange(e) {
    let macbook =  this.state.upc[4800067450871];
    macbook.quantityScanned = e.target.value;
    macbook.balance = macbook.statedQuantity - macbook.quantityScanned;
    if(macbook.balance < 0){
      macbook.excess  = macbook.balance
      this.setState({
        quantityScanned: macbook.quantityScanned,
        balance: macbook.balance,
        excess: macbook.excess
      });
    }
    else{
        this.setState({
          quantityScanned: macbook.quantityScanned,
          balance: macbook.balance,
        });
    }
    console.log(macbook.excess);
  }

  handleAndroidState(e) {
    let android = this.state.upc[4711421853422];
    android.quantityScanned = e.target.value;
    android.balance = android.statedQuantity - android.quantityScanned;
    if(android.balance < 0){
      android.excess = android.balance;
      this.setState({
        quantityScanned: android.quantityScanned,
        balance: android.balanc,
        excess: android.excess
      })
    }
    else{
      this.setState({
      quantityScanned: android.quantityScanned,
      balance: android.balance
      })
    }
    console.log(android.excess);
  }

  // componentDidUpdate() {
  //   let totalScanned = this.state.upc[4800067450871].balance)+ parseInt(this.state.upc[4711421853422].balance);
  //   this.setState({
  //     totalScanned: totalScanned
  //   })
  // }

  // barcode(e) {
  //   let code = (e.keyCode ? e.keyCode : e.which);
  //
  //   if (code == 13) {
  //     // Enter key hit
  //     console.log(barcode);
  //   }
  //   else if (code==9) {
  //     // Tab key hit
  //     // $('h2').text(barcode);
  //   } else {
  //     barcode = barcode + String.fromCharCode(code);
  //   }
  // }
  render() {
    // console.log(parseInt(this.state.macBookState));
    // console.log(parseInt(this.state.androidState));
    // console.log(this.state.currentUpc in this.state.upc);
    // totalScanned = {parseInt(this.state.macBookState) + parseInt(this.state.androidState)}
    // console.log(this.state.upc);
    return (
      <div onKeyDown={this.barcode}>
        <MenuBar />
        <section className='container'>
          <div className='inbound-receipt'>
            <div className='poProper'>
              <POHeader />
              <section className='poContent'>
                <div className='poDetails'>
                  <PartnerBasicInfo
                    partnerBasicInfo={this.state}
                    handleTextBoxChange={this.handleTextBoxChange}
                    totalScanned = {parseInt(this.state.upc[4800067450871].quantityScanned)+ parseInt(this.state.upc[4711421853422].quantityScanned)}
                    totalExcess = {Math.abs(parseInt(this.state.upc[4800067450871].excess)+ parseInt(this.state.upc[4711421853422].excess))}

                  />
                  <ReceiptInfo
                    ReceiptInfo={this.state}
                    handleMacbookChange={this.handleMacbookChange}
                    handleAndroidState={this.handleAndroidState}
                  />
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
