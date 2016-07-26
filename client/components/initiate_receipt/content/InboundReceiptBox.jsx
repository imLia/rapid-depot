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
      excess: 0,
      macBookState: 0,
      androidState: 0,
      totalScanned: 0,

      macBookSku: '480006745',
      androidSku: '471142185',

      macBookupc: '4800067450871',
      androidupc: '4711421853422',

      statedQuantity: 10,

      currentUpc: '',
      upc: {
        '4800067450871': 'item1',
        '4711421853422': 'item2',
        'quantity': 0,
      }
    };
    this.handleTextBoxChange = this.handleTextBoxChange.bind(this);
    this.handleMacbookChange = this.handleMacbookChange.bind(this);
    this.handleAndroidState = this.handleAndroidState.bind(this);
    this.customMethod = this.customMethod.bind(this);
    //this.updatedScanned = this.updatedScanned.bind(this);
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
        let currentQty = this.state.upc.quantity += 1;
        // console.log(this.state.upc.quantity);
        this.setState({
          quantity:  currentQty,//this.state.upc.quantity += 1
          currentUpc: ''
        })
        console.log(this.state.upc.quantity);
      } else {
          console.log('UPC is not found');
          this.setState({
            currentUpc: ''
          })
      }
    }
  }

  componentDidUpdate(){

  }

  handleTextBoxChange(e) {
    this.setState({
      timeArrived: e.target.value
    })
  }

  handleMacbookChange(e) {
    this.setState({
      macBookState: e.target.value
    })
  }

  handleAndroidState(e) {
    // console.log(e.target.value);
    this.setState({
      androidState: e.target.value
    })
  }

  // componentDidUpdate() {
  //   let totalScanned = parseInt(this.state.macBookState) + parseInt(this.state.androidState);
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
                    totalScanned = {this.state.upc.quantity}

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
