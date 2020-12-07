import React, { useState } from 'react';
import { Card, Form, Input, Select, Divider, Button, Row, Col, Upload, message } from 'antd';
import useForm from 'rc-form-hooks';
import { PageContainer } from '@ant-design/pro-layout';
import { PlusOutlined, InboxOutlined } from '@ant-design/icons';
import styles from './index.less';
import { getBase64 } from '../../../utils/utils'
import { tagList } from '../../../const/index';
import { insetAricle } from '../service'
const { Dragger } = Upload;
const { Option } = Select;
const formItemLayout = {
    labelCol: {
        xs: { span: 20 },
        sm: { span: 3 },
    },
    wrapperCol: {
        xs: { span: 20 },
        sm: { span: 18 },
    },
};

const buttonItemLayout = {
    wrapperCol: { span: 21, offset: 3 },
}
const Announce = () => {
    let index = 0;
    const { getFieldDecorator, validateFields, resetFields } = useForm();
    const [items, setItems] = useState(tagList);
    const [imgUrl, setImgUrl] = useState("");
    const [name, setName] = useState('')

    const onNameChange = event => {
        let name = event.target.value;
        setName(name);
    };

    const addItem = () => {
        setItems([...items, name || `New item ${index++}`]);
    };

    const props = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };


    const handleSubmitChange = (e) => {
        e.preventDefault();
        validateFields().then(values => {
            const { img } = values;
            if (img) {
                getBase64(img.file.originFileObj, imgUrl => {
                    setImgUrl(imgUrl);
                })
            }
            submitInfo({ ...values, img: imgUrl ? imgUrl : "" })
        }).catch(errorInfo => {
            message.error(errorInfo.message)
        });
    }

    const submitInfo = async (data) => {
        try {
            let dataInfo = await insetAricle(data);
            const { success, errorMsg } = dataInfo;
            if (success) {
                message.success('添加成功');
                resetFields();
            } else {
                message.error(errorMsg);
            }
            return true;
        } catch (error) {
            message.error('发表失败请重试！');
        }
    }


    return (
        <PageContainer>
            <Card className={styles.container}>
                <Form>
                    <Form.Item label='文章标题' {...formItemLayout}>
                        {getFieldDecorator('title', {
                            rules: [{ required: true, message: '请输入文章标题' }],
                            initialValue: '',
                        })(
                            <Input style={{ width: 240 }} placeholder="请输入文章标题" label="文章标题" allowClear />
                        )}
                    </Form.Item>
                    <Form.Item label='文章简介' {...formItemLayout}>
                        {getFieldDecorator('introduction', {
                            rules: [{ required: true, message: '请输入文章简介' }],
                            initialalue: '',
                        })(
                            <Input.TextArea rows={6} placeholder="请输入文章简介" label="文章简介" allowClear />
                        )}
                    </Form.Item>
                    <Form.Item label='文章内容' {...formItemLayout}>
                        {getFieldDecorator('content', {
                            rules: [{ required: true, message: '请输入文章内容' }],
                            initialValue: '',
                        })(
                            <Input.TextArea rows={8} placeholder="请输入文章内容" label="文章内容" />
                        )}
                    </Form.Item>
                    <Form.Item label='文章标签' {...formItemLayout}>
                        {getFieldDecorator('tag', {
                            rules: [{ required: true, message: '请选择文章标签' }],
                            initialValue: '',
                        })(
                            <Select
                                style={{ width: 240 }}
                                allowClear
                                placeholder="请选择文章标签"
                                dropdownRender={menu => (
                                    <div>
                                        {menu}
                                        <Divider style={{ margin: '4px 0' }} />
                                        <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                                            <Input style={{ flex: 'auto' }} value={name} onChange={onNameChange} />
                                            <a
                                                style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                                                onClick={addItem}
                                            >
                                                <PlusOutlined />
                                                <span>新增</span>
                                            </a>
                                        </div>
                                    </div>
                                )}
                            >
                                {items.map(item => (
                                    <Option key={item}>{item}</Option>
                                ))}
                            </Select>
                        )}
                    </Form.Item>
                    <Form.Item label='文章分类' {...formItemLayout}>
                        {getFieldDecorator('classify', {
                            rules: [{ required: true, message: '请选择文章分类' }],
                            initialValue: '',
                        })(
                            <Select
                                style={{ width: 240 }}
                                placeholder="请选择文章分类"
                                allowClear
                                dropdownRender={menu => (
                                    <div>
                                        {menu}
                                    </div>
                                )}
                            >
                                {items.map(item => (
                                    <Option key={item}>{item}</Option>
                                ))}
                            </Select>
                        )}
                    </Form.Item>
                    <Form.Item label='图片上传' {...formItemLayout}>
                        {getFieldDecorator('img', {
                            rules: [{ required: false, message: '请选择文章分类' }],
                            initialValue: '',
                        })(
                            <Dragger {...props} style={{ width: 440 }}>
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">点击上传图片</p>
                                <p className="ant-upload-hint">
                                    支持单次或批量上传。严禁上传公司数据或其他波段文件
                                </p>
                            </Dragger>,
                        )}
                    </Form.Item>
                    <Form.Item {...buttonItemLayout}>
                        <Row>
                            <Col><Button type="primary" htmlType="submit" onClick={handleSubmitChange}>发表</Button></Col>
                            <Col offset={1}><Button type="default" onClick={() => { resetFields() }}>重置</Button></Col>
                        </Row>
                    </Form.Item>
                </Form>
            </Card>
        </PageContainer >
    )
}

export default Announce;
