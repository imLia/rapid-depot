import React, {Component} from 'react';

export default (_args) => {
  let args = _args.tabContentObj;

  return (
    <div className="tabs-content" data-tabs-content="inbound-search-type">
      <fieldset className={args.partnerContent} id="search-by-client" role="tabpanel" aria-hidden="true" aria-labelledby="search-by-client-label">
        <div className="input-group">
          <label className="input-group-label">
            Partner Name
          </label>
          <input className="input-group-field" type="text" />
          <span className="input-group-button">
            <button className="button" data-id="partnerResults" onClick={args.search}>
              Submit
            </button>
          </span>
        </div>
      </fieldset>
      <fieldset className={args.poContent} data-id="search-by-po" onClick={args.search}>
        <div className="input-group">
          <label className="input-group-label">
            P.O. Number
          </label>
          <input className="input-group-field" type="text" />
          <span className="input-group-button">
            <button className="button" data-toggle="poResults" aria-controls="poResults">
              Submit
            </button>
          </span>
        </div>
      </fieldset>
      <fieldset className={args.skuContent} data-id="search-by-sku" onClick={args.search}>
        <div className="input-group">
          <label className="input-group-label">
            SKU
          </label>
          <input className="input-group-field" type="text" />
          <span className="input-group-button">
            <button className="button" data-toggle="poResults" aria-controls="poResults">
              Submit
            </button>
          </span>
        </div>
      </fieldset>
    </div>
  )
}
