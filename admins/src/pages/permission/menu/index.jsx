import React, { useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Tag, Popconfirm, message } from 'antd';
import ProTable, { } from '@ant-design/pro-table';
import { FormattedMessage } from 'umi';
import CreateForm from './components/CreateForm';
import { PageContainer } from '@ant-design/pro-layout';
import { addMenu, queryMenuList, deleteMenu } from './service';



export default () => {
    const [createModalVisible, handleModalVisible] = useState(false);
    const actionRef = useRef();
    const columns = [
        {
            dataIndex: 'index',
            valueType: 'indexBorder',
            width: 48,
        },
        {
            title: '菜单名称',
            dataIndex: 'menuName',
            copyable: true,
            ellipsis: true,
            width: 150,
            search: false,
        },
        {
            title: 'URL',
            dataIndex: 'menuUrl',
            copyable: true,
            ellipsis: true,
            search: false,
            width: 200,
        },
        {
            title: '图标',
            dataIndex: 'fileUrl',
            ellipsis: true,
            search: false,
            width: 150,
        },
        {
            title: <FormattedMessage id="pages.menu.list.menuStatus" defaultMessage="状态" />,
            dataIndex: 'menuStatus',
            hideInForm: true,
            width: 150,
            valueEnum: {
                0: {
                    text: (
                        <FormattedMessage id="pages.menu.list.disable" defaultMessage="禁用" />
                    ),
                    status: 'Default',
                },
                1: {
                    text: (
                        <FormattedMessage id="pages.menu.list.default" defaultMessage="启用" />
                    ),
                    status: 'Success',
                },
            },
        },
        {
            title: '是否热门',
            key: 'isHot',
            dataIndex: 'isHot',
            width: 150,
            render: (state) => {
                return <span>{state ? '是' : "否"}</span>
            }
        },
        {
            title: '创建时间',
            key: 'gmtCreate',
            dataIndex: 'gmtCreate',
            valueType: 'date',
        },
        {
            title: '操作',
            valueType: 'option',
            render: (text, record, _, action) => [
                <a key="editable" onClick={() => { action.startEditable?.(record.id) }}> 编辑 </a>,
                <Popconfirm title='确认删除吗?' onConfirm={() => confirm(record.id)} okText="是" cancelText="否">
                    <a href={record.url} target="_blank" rel="noopener noreferrer" key="view"> 删除 </a>
                </Popconfirm>,
                <a href={record.url} target="_blank" rel="noopener noreferrer" key="view"> 查看 </a>,
                <a href={record.url} target="_blank" rel="noopener noreferrer" key="view"> 禁用 </a>
            ]
        },
    ];
    /**
    * 增加菜单
    * @param data
    */
    const confirm = async (id) => {
        try {
            let dataInfo = await deleteMenu({ id });
            const { success, errorMsg } = dataInfo;
            if (success) {
                message.success('删除成功');
                if (actionRef.current) {
                    actionRef.current.reload();
                }
            } else {
                message.error(errorMsg);
            }
            handleModalVisible(false)
            return true;
        } catch (error) {
            message.error('删除成功');
            return false;
        }
    }

    const handleSubmitChange = async (data) => {
        const hide = message.loading('正在创建');
        try {
            let dataInfo = await addMenu({ ...data, menuStatus: data.menuStatus ? 1 : 0 });
            const { success, errorMsg } = dataInfo;
            if (success) {
                message.success('添加成功');
                if (actionRef.current) {
                    actionRef.current.reload();
                }
            } else {
                message.error(errorMsg);
            }
            handleModalVisible(false)
            hide();
            return true;
        } catch (error) {
            hide();
            message.error('创建失败请重试！');
            return false;
        }
    }


    return (
        <PageContainer>
            <ProTable
                columns={columns}
                actionRef={actionRef}
                request={(params) => queryMenuList({ ...params })}
                editable={{
                    type: 'multiple',
                }}
                rowKey="id"
                search={false}
                pagination={{
                    pageSize: 10,
                }}
                dateFormatter="string"
                headerTitle="菜单列表"
                toolBarRender={() => [
                    <Button type="primary" onClick={() => handleModalVisible(true)}>
                        <PlusOutlined /> <FormattedMessage id="pages.searchTable.new" defaultMessage="新建" />
                    </Button>,
                ]}
            />
            <CreateForm onCancel={() => handleModalVisible(false)} modalVisible={createModalVisible} submit={handleSubmitChange}>
            </CreateForm>
        </PageContainer>

    );
};
