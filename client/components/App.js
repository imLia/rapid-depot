import React, {Component} from 'react';

// import '../styles/app.scss'

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <section className="container">
      <h1 className="brand is-animating">
        <a href="#">
<svg data-name="Layer 1" viewBox="0 0 437.92 476.14" xmlns="http://www.w3.org/2000/svg">
          <defs></defs>
          <path d="M425.93,117.65c-3.59-6.22-12-20.77-97.49-70.13S226.13,0,219,0,195-1.84,109.48,47.52,15.58,111.44,12,117.65,0,138.42,0,237.15,8.4,350.42,12,356.64s12,20.77,97.49,70.13S211.78,476.14,219,476.14s24,0,109.48-49.36,93.9-63.91,97.5-70.13,12-20.77,12-119.49S429.52,123.87,425.93,117.65ZM401.5,342.53C391.33,360.15,239.3,447.92,219,447.92S46.59,360.15,36.43,342.53s-10.17-193.16,0-210.77S198.62,28.22,219,28.22,391.33,114.15,401.5,131.76,411.66,324.92,401.5,342.53Z"></path>
          <path d="M319.8,167.56c0-1.15,0-2.31,0-3.51,0-45.13-3.84-51.79-5.48-54.63s-5.48-9.49-44.57-32.06S223,55.63,219.71,55.63s-11-.85-50.05,21.72-42.93,29.22-44.57,32.06-5.48,9.49-5.48,54.63c0,1.21,0,2.37,0,3.53-5.25.47-12.15,2.58-16.94,8.22-13,15.35-21.05,45.07-19.52,47.62,1.82,3,36,.46,42.82-3.31,2.47,3.55,10,11.17,43.68,30.64,4.34,2.51,8.28,4.72,11.89,6.7l8,20.61s5.22,15.77,29.3,15.77H219c24.08,0,29.3-15.77,29.3-15.77L256,258.44c4.1-2.23,8.67-4.77,13.79-7.73,33.94-19.59,41.3-27.18,43.73-30.7,6.5,3.81,41.13,6.42,43,3.39,1.53-2.54-6.47-32.26-19.52-47.61C332.08,170.08,325.07,168,319.8,167.56Zm-100.09-99c8,0,60,28.77,77.76,42.11L271.36,123l-.34-.2L191.1,81C204.65,73.88,216.28,68.53,219.71,68.53Zm-8.3,189.2c-21.15-9.1-71.22-38.72-75.15-45.51s-4.52-63.27-2-86.8L211.73,162ZM218,148.15h0l-77.34-36.51c6.57-5.16,19.28-13.12,32.68-20.8l.3.18,78.54,41Zm85.14,64.08c-4,7-56.52,37.9-76.67,46.15l.33-96.33a7.56,7.56,0,0,0,.06-1.29l37.19-17.56v30.23l17-9.62V135.17l22.75-10.74a7.55,7.55,0,0,0,1.12-.54C307.7,146.39,307.11,205.38,303.16,212.23Z"></path>
          <polygon points="172.07 155.66 141.07 138.74 141.07 154.81 172.07 171.7 172.07 155.66"></polygon>
          <path d="M314.14,362.25A45.27,45.27,0,0,0,258,338.48a162.78,162.78,0,0,1-19.07-44.09,44.59,44.59,0,0,1-20,5.08c-11.09,0-21.05-5.08-21.05-5.08a162.86,162.86,0,0,1-18.61,43.35,45.26,45.26,0,0,0-53.86,24.53,65.23,65.23,0,0,0-8.37-.56A64.43,64.43,0,0,0,86,369.67c47.52,30.25,119.67,69.47,133,69.47s86.11-39.57,133.62-69.88a64.43,64.43,0,0,0-30.32-7.54A65.25,65.25,0,0,0,314.14,362.25Z"></path>
        </svg>
        </a>
      </h1>
      <div className="inbound-search-component">
        <nav>
          <ul data-tabs="data-tabs" id="inbound-search-type">
            <li className="tabs-title is-active" role="presentation">
              <a aria-selected="true" href="#search-by-client" role="tab" aria-controls="search-by-client" id="search-by-client-label">
                Search by Partner
              </a>
            </li>
            <li className="tabs-title" role="presentation">
              <a href="#search-by-po" role="tab" aria-controls="search-by-po" aria-selected="false" id="search-by-po-label">
                Search by Purchase Order
              </a>
            </li>
            <li className="tabs-title" role="presentation">
              <a href="#search-by-sku" role="tab" aria-controls="search-by-sku" aria-selected="false" id="search-by-sku-label">
                Search by SKU
              </a>
            </li>
          </ul>
          <div className="tabs-content" data-tabs-content="inbound-search-type">
            <fieldset className="tabs-panel is-active" id="search-by-client" role="tabpanel" aria-hidden="false" aria-labelledby="search-by-client-label">
              <div className="input-group">
                <label className="input-group-label">
                  Partner Name
                </label>
                <input className="input-group-field" type="text" />
                <span className="input-group-button">
                  <button className="button" data-toggle="partnerResults" aria-controls="partnerResults">
                    Submit
                  </button>
                </span>
              </div>
            </fieldset>
            <fieldset className="tabs-panel" id="search-by-po" role="tabpanel" aria-hidden="true" aria-labelledby="search-by-po-label">
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
            <fieldset className="tabs-panel" id="search-by-sku" role="tabpanel" aria-hidden="true" aria-labelledby="search-by-sku-label">
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
        </nav>
      </div>
      <div className="inbound-search-results-component" data-toggler=".slowFade" id="partnerResults" aria-expanded="false">
        <section className="search-results">
          <header className="results-count">
            <h3>
              5 Results for
              <em>
                "Acme"
              </em>
            </h3>
          </header>
          <article className="results">
            <ul className="results-list" data-accordion="data-accordion" role="tablist">
              <li className="result" data-accordion-item="data-accordion-item">
                <a className="accordion-title" href="#" aria-controls="xoev67-accordion" role="tab" id="xoev67-accordion-label" aria-expanded="false" aria-selected="false">
                  Acme Manufacturing Company
                </a>
                <ul className="po-list" data-tab-content="data-tab-content" role="tabpanel" aria-labelledby="xoev67-accordion-label" aria-hidden="true" id="xoev67-accordion">
                  <li>
                    <a href="initiate-receipt">
                      <strong>
                        P.O. #
                      </strong>
                      BVBFJ424
                    </a>
                  </li>
                  <li>
                    <a href="initiate-receipt">
                      <strong>
                        P.O. #
                      </strong>
                      BY42323
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <strong>
                        P.O. #
                      </strong>
                      X424356
                    </a>
                  </li>
                </ul>
              </li>
              <li className="result" data-accordion-item="data-accordion-item">
                <a className="accordion-title" href="#" aria-controls="p8f2i4-accordion" role="tab" id="p8f2i4-accordion-label" aria-expanded="false" aria-selected="false">
                  Acme Toys Unlimited
                </a>
                <ul className="po-list" data-tab-content="data-tab-content" role="tabpanel" aria-labelledby="p8f2i4-accordion-label" aria-hidden="true" id="p8f2i4-accordion">
                  <li>
                    <a href="initiate-receipt">
                      <strong>
                        P.O. #
                      </strong>
                      244J424
                    </a>
                  </li>
                  <li>
                    <a href="initiate-receipt">
                      <strong>
                        P.O. #
                      </strong>
                      BSJDH323
                    </a>
                  </li>
                  <li>
                    <a href="initiate-receipt">
                      <strong>
                        P.O. #
                      </strong>
                      2224356
                    </a>
                  </li>
                </ul>
              </li>
              <li className="result" data-accordion-item="data-accordion-item">
                <a className="accordion-title" href="#" aria-controls="703qld-accordion" role="tab" id="703qld-accordion-label" aria-expanded="false" aria-selected="false">
                  Acme Footwear International
                </a>
                <ul className="po-list" data-tab-content="data-tab-content" role="tabpanel" aria-labelledby="703qld-accordion-label" aria-hidden="true" id="703qld-accordion">
                  <li>
                    <a href="#">
                      <strong>
                        P.O. #
                      </strong>
                      23323BFJ424
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <strong>
                        P.O. #
                      </strong>
                      JSDKDS22
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <strong>
                        P.O. #
                      </strong>
                      NNN32455
                    </a>
                  </li>
                </ul>
              </li>
              <li className="result" data-accordion-item="data-accordion-item">
                <a className="accordion-title" href="#" aria-controls="913ik3-accordion" role="tab" id="913ik3-accordion-label" aria-expanded="false" aria-selected="false">
                  Acme Computers
                </a>
                <ul className="po-list" data-tab-content="data-tab-content" role="tabpanel" aria-labelledby="913ik3-accordion-label" aria-hidden="true" id="913ik3-accordion">
                  <li>
                    <a href="#">
                      <strong>
                        P.O. #
                      </strong>
                      4879847
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <strong>
                        P.O. #
                      </strong>
                      2341356
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <strong>
                        P.O. #
                      </strong>
                      2523GSD
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </article>
        </section>
      </div>
      <div className="inbound-search-results-component" data-toggler=".slowFade" id="poResults" aria-expanded="false">
        <section className="search-results">
          <header className="results-count">
            <h3>
              5 Results for
              <em>
                "l337123"
              </em>
            </h3>
          </header>
          <article className="results">
            <ul className="results-list">
              <li className="result">
                <a className="accordion-title" href="#">
                  <strong>
                    P.O.# 1337123-245
                  </strong>
                  Payless
                </a>
              </li>
              <li className="result">
                <a className="accordion-title" href="#">
                  <strong>
                    P.O.# 1337123-245
                  </strong>
                  SSI
                </a>
              </li>
              <li className="result">
                <a className="accordion-title" href="#">
                  <strong>
                    P.O.# 1337123-245
                  </strong>
                  Acme International
                </a>
              </li>
              <li className="result">
                <a className="accordion-title" href="#">
                  <strong>
                    P.O.# 1337123-245
                  </strong>
                  Payless
                </a>
              </li>
              <li className="result">
                <a className="accordion-title" href="#">
                  <strong>
                    P.O.# 1337123-245
                  </strong>
                  Payless
                </a>
              </li>
            </ul>
          </article>
        </section>
      </div>
    </section>
  }
}