import React from 'react';
import { Modal } from 'antd';
import { useIntl } from 'umi';
import ProForm, { ProFormText, ProFormUploadButton, ProFormSwitch } from '@ant-design/pro-form';

const CreateForm = (props) => {
  const { modalVisible, onCancel, submit } = props;
  const intl = useIntl();
  return (
    <Modal
      destroyOnClose
      title={intl.formatMessage({
        id: 'pages.searchTable.createForm.newmenu',
        defaultMessage: '新建菜单',
      })}
      visible={modalVisible}
      onCancel={() => onCancel()}
      footer={null}
    >
      <ProForm
        onFinish={async values => {
          const { fileUrl } = values;
          const { thumbUrl } = fileUrl && fileUrl[0] ? fileUrl[0] : "";
          submit({ ...values, fileUrl: thumbUrl })
        }}
      >
        <ProFormText name="menuName" width="m" label="菜单名称" rules={[{ required: true, message: '请输入菜单名称!' }]} placeholder="请输入名称" />
        <ProFormText name="menuOrder" width="m" label="菜单序号" rules={[{ required: true, message: '请输入菜单序号!' }]} placeholder="请输入序号" />
        <ProFormText name="menuUrl" width="m" label="菜单地址" rules={[{ required: true, message: '请输入菜单地址!' }]} placeholder="请输入菜单地址" />
        <ProFormUploadButton
          name="fileUrl"
          label="菜单图标"
          max={2}
          action="/upload.do"
          extra={<span style={{ color: 'red' }}>*只能上传jpg、png格式的图片</span>}
        />
        <ProFormSwitch initialValue={true} name="isHot" label="是否热门" />
        <ProFormSwitch initialValue={true} name="menuStatus" label="开启状态" />
      </ProForm>
    </Modal>
  );
};

export default CreateForm;
