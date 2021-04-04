import React, { PureComponent } from 'react';
/*
9-1, 9-2 참조 코드
import axios from 'axios';
*/
/*
9-3 참조 코드
import Api from '../../Api';
*/
import Heading from '../../../doit-ui/Heading';
import Card from '../../../doit-ui/Card';

import TransactionSearchFilter from './TransactionSearchFilter';

// import TransactionSearchFilterContainer from '../../containers/main/TransactionSearchFilterContainer';
import TransactionTable from './TransactionTable';
// import TransactionPaginationContainer from '../../containers/main/TransactionPaginationContainer';

class TransactionList extends PureComponent {
  state = {
    transactions: [
      {
        id: 'btx_01',
        name: '비트코인(BTC)',
        totalPrice: '123,123,000,000원',
        currentPrice: '75,399,000원',
        datetime: '2021/04/03 08:23:22',
      },
    ],
  };

  componentDidMount() {
    /*
    9-2 참조 코드
    axios.get('http://localhost:4000/transactions')
      .then(response => this.setState({ transactions: response.data }));
    */
    /*
    9-2 참조 코드
    axios.get('http://localhost:4000/transactions', { params: { code: 'BTX' } })
      .then(response => this.setState({ transactions: response.data }));
    */
    /*
    9-3 참조 코드
    Api.get('/transactions')
      .then(({ data }) => this.props.setTransactionList(data));
    */
    /*
    10-2 참조 코드
    this.props.requestTransactionList();
    */
  }

  render() {
    const { transactions } = this.state;

    // const { transactions, loading } = this.props;
    return (
      <div>
        <Heading level={3}>거래 현황</Heading>
        <Card vertical={4} horizontal={4}>
          {/* <TransactionSearchFilterContainer /> */}
          <TransactionSearchFilter />
        </Card>
        <Card>
          {/* <TransactionTable transactions={transactions} isLoading={loading} /> */}
          <TransactionTable transactions={transactions} />
        </Card>
        {/* <TransactionPaginationContainer /> */}
      </div>
    );
  }
}

// TransactionList.defaultProps = {
//   transactions: [],
//   requestTransactionList: () => {},
// };

export default TransactionList;
