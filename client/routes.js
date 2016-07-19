import React from 'react';
import { Route } from 'react-router';

import App from './components/App';
import ResultHeader from './components/search/result/SearchResult';
import InitiateReceipt from './components/initiate_receipt/menu/MenuBar';

export default (
  <Route>
    <Route  path="/" component ={App}/>
    <Route path="initiate_receipt" component = {InitiateReceipt} />
  </Route>
)
