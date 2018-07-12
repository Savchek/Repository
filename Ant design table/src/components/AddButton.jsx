import React, { Component } from 'react';
import { Button, Modal, Form, Input } from 'antd';

const FormItem = Form.Item;


const CollectionCreateForm = Form.create()(
  class extends Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          style={{top: 0}}
          visible={visible}
          title="Adding"
          okText="Add"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <FormItem label="Name">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input the name!' }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem label="Age">
              {getFieldDecorator('age', {
                rules: [{ required: true, message: 'Please input the age!' }],
              })(
                <Input type='number'/>
              )}
            </FormItem>
            <FormItem label="Address">
              {getFieldDecorator('address', {
                rules: [{ required: true, message: 'Please input the address!' }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem label="Task">
              {getFieldDecorator('task', {
                rules: [{ required: true, message: 'Please input the task!' }],
              })(
                <Input type='number'/>
              )}
            </FormItem>
            <FormItem label="Description">
              {getFieldDecorator('description', {
                rules: [{ required: true, message: 'Please input the description!' }],
              })(
                <Input.TextArea />
              )}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);

class AddButton extends Component {
   state = {
    visible: false,
  }

  showModal = () => {
    this.setState({ visible: true });
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      this.props.onClick(values);
      form.resetFields();
      this.setState({ visible: false });
    });
  }

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }

  render() {
    return (
      <div>
        <Button style={{top: -48}} type="primary" onClick={this.showModal}>Add</Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default AddButton