import { PlusOutlined } from '@ant-design/icons';
import { Button, Tooltip, message, Drawer, Tag, Popconfirm } from 'antd';
import React, { useState, useRef } from 'react';
import { useIntl, FormattedMessage, history } from 'umi';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import ProDescriptions from '@ant-design/pro-descriptions';
import { queryRule } from './service'
import styles from './index.less'
import { classfilyList } from '@/const/index'
import moment from 'moment';


const TableList = () => {
  const [createModalVisible, handleModalVisible] = useState(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState(false);
  const [stepFormValues, setStepFormValues] = useState({});
  const actionRef = useRef();
  const [row, setRow] = useState();
  const [selectedRowsState, setSelectedRows] = useState([]);
  const intl = useIntl();
  const columns = [
    {
      title: (
        <FormattedMessage
          id="pages.article.list.textName.nameLabel"
          defaultMessage="文章名称"
        />
      ),
      dataIndex: 'title',
      tip: '文章名称是唯一的 key',
      width: 200,
      fixed: 'left',
      formItemProps: {
        rules: [
          {
            required: true,
            message: (
              <FormattedMessage id="pages.searchTable.ruleName" defaultMessage="用户名为必填项" />
            ),
          },
        ],
      },
      render: (dom, entity) => {
        return <Tooltip title={dom}>
          <a onClick={() => setRow(entity)}>{dom}</a>
        </Tooltip>

      },
    },
    {
      title: "文章内容",
      dataIndex: 'content',
      width: 500,
      render: (content) => {
        return <div className={styles.table_content}><span>{content}</span></div>
      }
    },
    {
      title: "文章图片",
      width: 150,
      dataIndex: 'img',
    },
    {
      title: "文章标签",
      width: 100,
      dataIndex: 'tag',
      render: (tag) => {
        return <Tag color="magenta">{tag}</Tag>
      }
    },
    {
      title: "被收藏量",
      width: 200,
      dataIndex: 'collection_num',
    },
    {
      title: "所属模块",
      width: 150,
      dataIndex: 'classify',
      render: (classify) => {
        let items = classify && classfilyList.find(item => item.key === classify);
        return <span>{items.name}</span>
      }
    },
    {
      title: "创建时间",
      width: 200,
      dataIndex: 'gmtCreate',
      render: (gmtCreate) => {
        return <span>{moment(gmtCreate).format('YYYY-MM-DD hh:mm:ss')}</span>
      }
    },
    {
      title: "最后修改时间",
      width: 200,
      dataIndex: 'gmtModified',
      render: (_, row) => {
        return <span>{row.gmtModified ? moment(row.gmtModified).format('YYYY-MM-DD hh:mm:ss') : ""}</span>
      }
    },
    {
      title: "作者",
      width: 100,
      dataIndex: 'user_name',
    },
    {
      title: '操作',
      width: 200,
      fixed: 'right',
      valueType: 'option',
      render: (text, record, _, action) => [
        <a key="editable" onClick={() => { action.startEditable?.(record.id) }}> 编辑 </a>,
        <Popconfirm title='确认删除吗?' onConfirm={() => confirm(record.id)} okText="是" cancelText="否">
          <a href={record.url} target="_blank" rel="noopener noreferrer" key="view"> 删除 </a>
        </Popconfirm>,
        <a href={record.url} target="_blank" rel="noopener noreferrer" key="view"> 查看 </a>,
      ]
    },
  ];
  return (
    <PageContainer>
      <ProTable
        headerTitle={intl.formatMessage({
          id: 'pages.searchTable.title',
          defaultMessage: '查询表格',
        })}
        actionRef={actionRef}
        rowKey="key"
        scroll={{ x: 1300 }}
        toolBarRender={() => [
          <Button type="primary" onClick={() => {
            history.push({ pathname: '/article/add' })
          }}>
            <PlusOutlined /> <FormattedMessage id="pages.searchTable.new" defaultMessage="新建" />
          </Button>,
        ]}
        request={(params) => queryRule({ ...params })}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => setSelectedRows(selectedRows),
        }}
      />
      {stepFormValues && Object.keys(stepFormValues).length ? (
        <UpdateForm
          onSubmit={async (value) => {
            const success = await handleUpdate(value);
            if (success) {
              handleUpdateModalVisible(false);
              setStepFormValues({});
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          onCancel={() => {
            handleUpdateModalVisible(false);
            setStepFormValues({});
          }}
          updateModalVisible={updateModalVisible}
          values={stepFormValues}
        />
      ) : null}
    </PageContainer>
  );
};

export default TableList;
