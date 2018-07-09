import { createStore, combineReducers, applyMiddleware } from 'redux'
import { HashRouter as Router, Route } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import React from 'react'
import '../index.css';
import 'antd/dist/antd.css';
import { Table, Icon, Divider, Modal, Button } from 'antd';












const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name'
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Task',
  dataIndex: 'task',
  key: 'task',
}, {
  title: 'Description',
  dataIndex: 'description',
  key: 'description',
}];

var data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  task: '1',
  description: 'Task description',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  task: '2',
  description: 'Task description',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  task: '3',
  description: 'Task description',
}, {
  key: '4',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  task: '4',
  description: 'Task description',
}, {
  key: '5',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  task: '5',
  description: 'Task description',
}, {
  key: '6',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  task: '6',
  description: 'Task description',
}, {
  key: '7',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  task: '7',
  description: 'Task description',
}, {
  key: '8',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  task: '8',
  description: 'Task description',
}, {
  key: '9',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  task: '9',
  description: 'Task description',
}];

class Add extends React.Component {
  state = {
    visible: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

   

   handleAdd = () => {
    document.getElementById('if-empty').innerHTML = '';
      let val = {
        key: '',
        name: '',
        age: '',
        address: '',
        task: '',
        description: ''
      }

      val.key = Object.keys(data).length+1;
      val.name = document.getElementById('name').value;
      val.age = document.getElementById('age').value;
      val.address = document.getElementById('address').value;
      val.task = document.getElementById('task').value;
      val.description = document.getElementById('description').value;

      if(val.name && val.age && val.address && val.task && val.description){
        data.push(val);

        this.setState({ visible: false });
        ReactDOM.render(<Table columns={columns} dataSource={data} />, document.getElementById('root'));
      }
      else{
        document.getElementById('if-empty').innerHTML = 'There should be no empty fields';
      }

    
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  render() {
    const { visible} = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Add
        </Button>
        <Modal
          id='modal'
          visible={visible}
          title="Adding"
          onAdd={this.handleAdd}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>Return</Button>,
            <Button key="submit" type="primary" onClick={this.handleAdd}>
              Submit
            </Button>,
          ]}
        >
          <p>Name: </p>
          <input id='name' type='text'></input><br />
          <p>Age: </p>
          <input id='age' type='number'></input><br />
          <p>Address: </p>
          <input id='address' type='text'></input><br />
          <p>Task: </p>
          <input id='task' type='number'></input><br />
          <p>Description: </p>
          <input id='description' type='text'></input><br />
          <p id='if-empty'></p>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<Add />, document.getElementById('container'));

ReactDOM.render(<Table columns={columns} dataSource={data} />, document.getElementById('root'));