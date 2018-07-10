import React, { Component } from 'react';
import { Modal, Button } from 'antd';

class AddButton extends Component {
  state = {
    isError: false,
    visible: false,
    name: '',
    age: '',
    address: '',
    task: '',
    description: ''
  }

  toggleModal = () => {
    this.setState({
      visible: !this.state.visible,
       name: '',
      age: '',
      address: '',
      task: '',
      description: ''
    });
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
      isError: false
    });
  }

   handleAdd = () => {
    const { isError, visible, ...dataForm } = this.state;

    if (Object.values(dataForm).every(item => item)) {
      this.props.onClick(dataForm);
      this.toggleModal();
    } else {
      this.setState({
        isError: true
      });
    }
  }

  render() {
    const { isError, visible, name, age, address, task, description } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.toggleModal}>
          Add
        </Button>
        <Modal
          id='modal'
          visible={visible}
          title="Adding"
          onCancel={this.toggleModal}
          footer={[
            <Button key="back" onClick={this.toggleModal}>Return</Button>,
            <Button key="submit" type="primary" onClick={this.handleAdd}>
              Submit
            </Button>
          ]}
        >
          <p>Name: </p>
          <input type='text' name='name' value={name} onChange={this.handleChange}/><br />
          <p>Age: </p>
          <input type='number' name='age' value={age} onChange={this.handleChange} /><br />
          <p>Address: </p>
          <input type='text' name='address' value={address} onChange={this.handleChange}/><br />
          <p>Task: </p>
          <input type='number' name='task' value={task} onChange={this.handleChange}/><br />
          <p>Description: </p>
          <textarea name='description' onChange={this.handleChange} value={description}></textarea>
          {isError && <p>There should be no empty fields</p>}
        </Modal>
      </div>
    );
  }
}


export default AddButton