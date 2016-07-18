import React, {Component} from 'react';

export default (_args) => {
  let args = _args.tabHeaderObj;

  return (
    <ul data-tabs="data-tabs" id="inbound-search-type">
      <li className={args.partnerTab} onClick={args.switchTab} data-name="partner" role="presentation">
        <a href="#search-by-client" role="tab" aria-controls="search-by-client" id="search-by-client-label">
          Search by Partner
        </a>
      </li>
      <li className={args.poTab} onClick={args.switchTab} data-name="po" role="presentation">
        <a href="#search-by-po" role="tab" aria-controls="search-by-po" aria-selected="false" id="search-by-po-label">
          Search by Purchase Order
        </a>
      </li>
      <li className={args.skuTab} onClick={args.switchTab} data-name="sku" role="presentation">
        <a href="#search-by-sku" role="tab" aria-controls="search-by-sku" aria-selected="false" id="search-by-sku-label">
          Search by SKU
        </a>
      </li>
    </ul>
  )
}