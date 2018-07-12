import React, { Component } from 'react';
import { Button, Modal, Form, Input, DatePicker } from 'antd';

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
            <FormItem label="Date">
              {getFieldDecorator('date', {
                //rules: [{ required: true, message: 'Must be filled!' }],
              })(
                <DatePicker />
              )}
            </FormItem>
            <FormItem label="Username">
              {getFieldDecorator('username', {
               // rules: [{ required: true, message: 'Must be filled!' }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem label="Daily plan">
              {getFieldDecorator('dailyPlan', {
                //rules: [{ required: true, message: 'Must be filled!' }],
              })(
                <Input.TextArea />
              )}
            </FormItem>
            <FormItem label="Future plan">
              {getFieldDecorator('futurePlan', {
               // rules: [{ required: true, message: 'Must be filled!' }],
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

      console.log('Received values of form: ', values, "+", values.date._d);
      //var datef = values.date._d;
      delete values.date;
      //var shit = datef.push(values);
      console.log("Values after delete", values);
      //this.props.onClick(values);  
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