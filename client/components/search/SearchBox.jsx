import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import TabHeader from './TabHeader';
import TabContent from './TabContent';

export default class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      partnerTab: 'tabs-title is-active',
      poTab: 'tabs-title',
      skuTab: 'tabs-title',

      partnerContent: 'tabs-panel is-active',
      poContent: 'tabs-panel',
      skuContent: 'tabs-panel'
    }

    this.switchTab = this.switchTab.bind(this);
  }

  switchTab(e) {
    e.preventDefault();

    let tabName = ReactDOM.findDOMNode(e.currentTarget).getAttribute('data-name');
    let tabObj = {
      partnerTab: 'tabs-title',
      poTab: 'tabs-title',
      skuTab: 'tabs-title',
      partnerContent: 'tabs-panel',
      poContent: 'tabs-panel',
      skuContent: 'tabs-panel'
    }

    if (tabName === 'partner') {
      tabObj['partnerTab'] += ' is-active';
      tabObj['partnerContent'] += ' is-active';
    } else if (tabName === 'po') {
      tabObj['poTab'] += ' is-active';
      tabObj['poContent'] += ' is-active';
    } else if (tabName === 'sku') {
      tabObj['skuTab'] += ' is-active';
      tabObj['skuContent'] += ' is-active';
    }

    this.setState(tabObj);
  }

  render() {
    let tabObj = {
      partnerTab: this.state.partnerTab,
      poTab: this.state.poTab,
      skuTab: this.state.skuTab,
      switchTab: this.switchTab,

      partnerContent: this.state.partnerContent,
      poContent: this.state.poContent,
      skuContent: this.state.skuContent,
      search: this.props.search
    }

    return (
       <div className="inbound-search-component">
          <nav>
            <TabHeader tabHeaderObj={tabObj} />
            <TabContent tabContentObj={tabObj} />
          </nav>
        </div>
    )
  }
}