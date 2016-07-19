import React, {Component} from 'react';
import ReactDOM from 'react-dom';


export default class ResultList extends Component {
  constructor(props) {
    super(props);

    this.list = this.list.bind(this);
    this.nestedList = this.nestedList.bind(this);
  }

  list() {
    return (
      <li className="result">
        <a className="accordion-title">
          <strong>
            P.O.# 1337123-245
          </strong>
          Payless
        </a>
      </li>
    )
  }

  nestedList() {
    return (
      <li className="result" data-accordion-item="data-accordion-item">
        <a className="accordion-title">
          Acme Manufacturing Company1
        </a>
        <ul className="po-list">
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
    )
  }

  render() {
    let listType = this.props.searhType === 'partner' ? this.nestedList() : this.list();

    return (
      <article className="results">
        <ul className="results-list">
          {listType}
        </ul>
      </article>
    )
  }
}
