import React from 'react';
import { Route } from 'react-router';

import App from './components/App';
import InitiateReceipt from './components/initiate_receipt/content/InboundReceiptBox';

export default (
  <Route>
    <Route  path="/" component ={App}/>
    <Route path="initiate_receipt" component = {InitiateReceipt} />
  </Route>
)
