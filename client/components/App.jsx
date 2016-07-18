import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Logo from './logo/Logo';
import SearchBox from './search/SearchBox';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchStatus: false
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    this.setState({
      searchStatus: true
    });
  }

  render() {
    let _class = `inbound-search-results-component ${this.state.searchStatus && 'slowFade'}`;

    return <section className="container">
      <Logo />
      <SearchBox search={this.handleSearch} />
      <div className={_class} id="partnerResults">
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
    </section>
  }
}