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
    function currentDate() {
      let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August",
        "September", "October", "November", "December"];
      return monthNames[newDate.getMonth()] + " " + newDate.getDate()+ ", " + newDate.getFullYear();
    }

    function currentTime() {
      let period = newDate.getHours() < 12 ?  'A.M' : 'P.M';
      let hoursOf12 = newDate.getHours() > 12  ? newDate.getHours() - 12 : newDate.getHours();
      if(hoursOf12 == 0 ){
        hoursOf12 = '12'
      }
      let hours = (hoursOf12 < 10  ? '0': '') + hoursOf12;
      let minutes = (newDate.getMinutes() < 10 ? '0':'') + newDate.getMinutes() ;

      return  hours + ":" + minutes  + " " + period;
    }


    this.state = {
      partnerName: 'Payless1',
      poNumber: '133712345',
      currentDate: currentDate(),
      timeStart: currentTime(),
      timeArrived: '7:00 A.M',
      macBookState: 0,
      androidState: 0,

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
      let macbook =  this.state.upc[4800067450871];
      let android = this.state.upc[4711421853422];
      if (this.state.currentUpc in this.state.upc) {
        if(this.state.currentUpc == android.upc){
          android.quantityScanned++;
          android.balance = android.statedQuantity - android.quantityScanned;
          if(android.balance < 0){
              android.excess  = android.balance;
              android.balance = 0;
              this.setState({
                // currentUpc: '',
                excess: android.excess
              })
            }
          else{
              this.setState({
              balance: android.balance,
              // currentUpc: ''
            })
          }
          console.log(android.quantityScanned);
        }
        else if(this.state.currentUpc == macbook.upc){
          macbook.quantityScanned++;
          macbook.balance = macbook.statedQuantity - macbook.quantityScanned;
          if(macbook.balance < 0){
            macbook.excess  = macbook.balance;
            macbook.balance = 0;
            this.setState({
              // currentUpc: '',
              excess: macbook.excess
            })
          }
          else{
            this.setState({
            balance: macbook.balance,
            // currentUpc: ''
            })
          }
          console.log(macbook.quantityScanned);
        }
      } else {
        console.log('UPC is not found');
        this.setState({
          // currentUpc: ''
        })
      }
      this.state.currentUpc = '';
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
        excess: macbook.excess
      });
      macbook.balance = 0;
    }
    else if(macbook.balance >= 0){
        this.setState({
          quantityScanned: macbook.quantityScanned,
          balance: macbook.balance,
        });
    }
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
      android.balance = 0;
    }
    else{
      this.setState({
      quantityScanned: android.quantityScanned,
      balance: android.balance
      })
    }
  }

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
    // this.state.upc[4800067450871].balance = this.state.upc[4800067450871].statedQuantity;
    // this.state.upc[4711421853422].balance = this.state.upc[4711421853422].statedQuantity;
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
