import React, { PureComponent } from 'react';

import Heading from '../../../doit-ui/Heading';
import InlineList from '../../../doit-ui/InlineList';

import CoinDashlet from './CoinDashlet';

class CoinOverview extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Heading level={3}>코인 동향</Heading>
        <InlineList>
          <CoinDashlet name="비트코인" priceLabel="73,258,000원" />
          <CoinDashlet name="클레이튼" priceLabel="4,400원" />
          <CoinDashlet name="메디블록" priceLabel="307원" />
        </InlineList>
      </React.Fragment>
    );
  }
}

export default CoinOverview;
