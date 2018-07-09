import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Modal, Button } from 'antd';

class Add extends React.Component {
  state = {
    loading: false,
    visible: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

   handleOk = () => {
    var val = {
        name: '',
        age: '',
        address: '',
        task: '',
        description: ''
      }

      val.name = document.getElementById('name').value;
      val.age = document.getElementById('age').value;
      val.address = document.getElementById('address').value;
      val.task = document.getElementById('task').value;
      val.description = document.getElementById('description').value;

      data.push(val);

    this.setState({ visible: false });
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Add
        </Button>
        <Modal
          id='modal'
          visible={visible}
          title="Title"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>Return</Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
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
          <input id='description' type='text'></input>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<Add />, document.getElementById('container'));

export default Add