import React, { PureComponent } from 'react';

import Api from '../../Api';

import Heading from '../../../doit-ui/Heading';
import Card from '../../../doit-ui/Card';

import TransactionSearchFilter from './TransactionSearchFilter';

// import TransactionSearchFilterContainer from '../../containers/main/TransactionSearchFilterContainer';
import TransactionTable from './TransactionTable';
// import TransactionPaginationContainer from '../../containers/main/TransactionPaginationContainer';

class TransactionList extends PureComponent {
  componentDidMount() {
    // axios
    //   .get('http://localhost:4000/transactions')
    //   .then((response) => this.setState({ transactions: response.data }));

    // Api.get('/transactions', { params: { code: 'BTC' } }).then((response) =>
    //   this.setState({ transactions: response.data }),
    // );

    Api.get('/transactions').then(({ data }) => this.props.setTransactionList(data));

    /*
    10-2 참조 코드
    this.props.requestTransactionList();
    */
  }

  render() {
    const { transactions, loading } = this.props;
    return (
      <div>
        <Heading level={3}>거래 현황</Heading>
        <Card vertical={4} horizontal={4}>
          <TransactionSearchFilter />
        </Card>
        <Card>
          <TransactionTable transactions={transactions} />
        </Card>
      </div>
    );
  }
}

TransactionList.defaultProps = {
  transactions: [],
  requestTransactionList: () => {},
};

export default TransactionList;
