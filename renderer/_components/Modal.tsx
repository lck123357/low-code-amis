import { Modal, Form, DatePicker, InputNumber, Input } from 'antd'
import React, { FC } from 'react'

const { Item } = Form
const { RangePicker } = DatePicker

const valueTypeMap = {
  date: <DatePicker />,
  dateRange: <RangePicker />,
  digit: <InputNumber />,
  input: <Input />
}

type ModalProps = {
  visible: boolean,
  FormItems: Array<Object>
}

const CommonModal: FC<ModalProps> = ({
  visible = false,
  onCancel = console.log,
  info = {},
  FormItems = []
}) => {

  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      title='编辑'
    >
      <Form initialValues={info}>
        {
          FormItems?.map(({
            title,
            dataIndex,
            valueType = 'input'
          }) => {
            return (
              <Item label={title} name={dataIndex}>
                {
                  valueTypeMap[valueType]
                }
              </Item>
            )
          })
        }
      </Form>
    </Modal>
  )
}

export default CommonModal
