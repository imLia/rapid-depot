import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Logo from './logo/Logo';
import SearchBox from './search/box/SearchBox';
import SearchResult from './search/result/SearchResult';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchStatus: false,
      searchType: ''
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    let selectedSearhType = ReactDOM.findDOMNode(e.currentTarget).getAttribute('data-id');
    let searhType = '';

    if (selectedSearhType === 'partnerResults') {
      searhType = 'partner';
    } else if (selectedSearhType === 'search-by-po') {
      searhType = 'po';
    } else if (selectedSearhType === 'search-by-sku') {
      searhType = 'sku';
    }

    this.setState({
      searchStatus: true,
      searhType
    });
  }

  render() {
    let _class = `inbound-search-results-component ${this.state.searchStatus && 'slowFade'}`;
    let searhType = this.state.searhType;

    return <section className="container">
      <Logo />
      <SearchBox search={this.handleSearch} />
      <SearchResult className={_class} searhType={searhType} />
    </section>
  }
}
