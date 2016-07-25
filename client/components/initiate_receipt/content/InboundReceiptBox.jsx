import React, {Component} from 'react';

import MenuBar from '../menu/MenuBar';
import POHeader from './POHeader';
import PartnerBasicInfo from './PartnerBasicInfo';
import ReceiptInfo from './ReceiptInfo';


export default class InitiateReceipt extends Component {
  constructor(props){
    super(props);

    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August",
      "September", "October", "November", "December"];
    let newDate = new Date();
    let currentDate = monthNames[newDate.getMonth()] + " " + newDate.getDate()+ ", " + newDate.getFullYear();

    let period = newDate.getHours() <= 12 ?  'A.M' : 'P.M';
    let hoursOf12 = newDate.getHours() >= 12  ? newDate.getHours() - 12 : newDate.getHours();
    let minutes = (newDate.getMinutes()< 10 ? '0':'') + newDate.getMinutes() ;
    let currentTime = hoursOf12 + ":" + minutes + " " + period;



    this.state = {
      partnerName: 'Payless',
      poNumber: '1337123',
      currentDate: currentDate,
      timeStarted: currentTime,
      timeArrived: '7:00 A.M',
      excess: 0,
      macBookState: 1,
      androidState: 2,
      totalScanned: 0
    };
    this.handleTextBoxChange = this.handleTextBoxChange.bind(this);
    this.handleMacbookChange = this.handleMacbookChange.bind(this);
    this.handleAndroidState = this.handleAndroidState.bind(this);
    //this.updatedScanned = this.updatedScanned.bind(this);
    // this.barcode = this.barcode.bind(this);
  }

  // componentDidMount() {
  //  let totalScanned = parseInt(this.state.macBookState) + parseInt(this.state.androidState);
  //  this.setState({
  //    totalScanned: totalScanned
  //   })
  //  }


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
                    totalScanned = {parseInt(this.state.macBookState) + parseInt(this.state.androidState)}

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
