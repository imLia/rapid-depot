import React, {Component} from 'react';

import ResultHeader from './ResultHeader';
import ResultList from './ResultList';

export default class SearchResult extends Component {
  render() {
    let searhType = this.props.searhType === 'partner' ? 'partnerResults' : 'poResults';

    return <div className={this.props.className} id={searhType}>
      <section className="search-results">
        <ResultHeader />
        <ResultList searhType={this.props.searhType} />
      </section>
    </div>
  }
}