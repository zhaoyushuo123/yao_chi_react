import React from 'react';
import { Layout } from 'antd';
import FormRender from 'form-render';
import SidePanel from '../components/SidePanel';
const { Content } = Layout;
const { Sider } = Layout;

const PacificNASForm = () => {
    const [formData, setFormData] = React.useState({});
    const [favorites, setFavorites] = React.useState([]);

    // 表单 Schema
    const schema = {
        type: 'object',
        properties: {
            clusterName: {
                type: 'string',
                title: '集群名称',
                required: true,
            },
            businessCategory: {
                type: 'string',
                title: '业务大类',
                enum: ['NAS', 'BLOCK', 'DME'],
                'x-component': 'Select',
                required: true,
            },
            platform: {
                type: 'string',
                title: '平台',
                enum: ['x86', 'arm'],
                'x-component': 'Select',
                required: true,
            },
            clusterRole: {
                type: 'string',
                title: '集群角色',
                enum: ['默认集群', '复制集群', '9000纳管本端集群', '9000纳管远端集群'],
                'x-component': 'Select',
                required: true,
            },
            storageService: {
                type: 'array',
                title: '增值服务',
                items: {
                    type: 'string',
                    enum: ['开启元数据服务', '开启复制集群服务', '开启分级服务', '开启dpc docker多集群服务'],
                    'x-component': 'Checkbox.Group',
                },
            },
            nodeConfig: {
                type: 'array',
                title: '节点配置',
                items: {
                    type: 'object',
                    properties: {
                        nodeType: {
                            type: 'string',
                            title: '节点大类',
                            enum: ['存储', '客户端'],
                            'x-component': 'Radio.Group',
                            required: true,
                        },
                        nodeName: {
                            type: 'string',
                            title: '节点名称',
                            required: true,
                        },
                        nodeCount: {
                            type: 'number',
                            title: '节点数量',
                            minimum: 1,
                            required: true,
                        },
                    },
                },
            },
        },
    };

    // 提交表单
    const handleSubmit = (values) => {
        console.log('Form submitted with values:', values);
        // 这里可以添加表单提交逻辑
    };

    // 收藏配置
    const handleFavorite = (name) => {
        if (!favorites.includes(name)) {
            setFavorites([...favorites, name]);
        }
    };

    // 应用收藏
    const handleApplyFavorite = (name) => {
        // 这里可以添加应用收藏的逻辑
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content style={{ padding: '20px' }}>
                <FormRender
                    schema={schema}
                    formData={formData}
                    onChange={setFormData}
                    onSubmit={handleSubmit}
                />
            </Content>
            <Sider width={300} style={{ background: 'white' }}>
                <SidePanel
                    favorites={favorites}
                    onApplyFavorite={handleApplyFavorite}
                    onFavorite={handleFavorite}
                />
            </Sider>
        </Layout>
    );
};

export default PacificNASForm;