import { Table } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import onPersonListSearch from './redux/actions';

const columns = [{
  title: 'Name',
  dataIndex: 'name'
}, {
  title: 'Age',
  dataIndex: 'age'
}, {
  title: 'Email',
  dataIndex: 'email'
}, {
  title: 'Address',
  dataIndex: 'address'
}];

class BasicTableView extends React.Component {
  state = {
    selectedRowKeys: []
  };

  componentWillMount() {
    this.props.onPersonListSearch();
  }

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { selectedRowKeys } = this.state;
    const { table } = this.props;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      hideDefaultSelections: true,
      selections: [{
        key: 'all-data',
        text: 'Select All Data',
        onSelect: () => {
          this.setState({
            selectedRowKeys: [...Array(46).keys()] // 0...45
          });
        }
      }, {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          this.setState({ selectedRowKeys: newSelectedRowKeys });
        }
      }, {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          this.setState({ selectedRowKeys: newSelectedRowKeys });
        }
      }],
      onSelection: this.onSelection
    };
    return (
      <Table rowSelection={rowSelection} columns={columns} dataSource={table.list} />
    );
  }
}
function mapStateToProps(state) {
  return {
    table: state.table
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onPersonListSearch: bindActionCreators(onPersonListSearch, dispatch)
  };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BasicTableView));
