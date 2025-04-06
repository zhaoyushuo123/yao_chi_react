import React, { useState, useEffect } from 'react';
import { Card, Spin, Button } from 'antd';

const TemplateManagementPage = () => {
    const [templates, setTemplates] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 模拟从数据库获取模板信息
        setTimeout(() => {
            setTemplates([
                { id: 1, name: '模板1', description: '这是一个示例模板' },
                { id: 2, name: '模板2', description: '这是一个示例模板' },
            ]);
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) {
        return <Spin tip="加载中..." />;
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>用户配置模板管理</h1>
            <Button type="primary" style={{ marginBottom: '20px' }}>
                创建新模板
            </Button>
            <Card title="模板列表">
                <ul>
                    {templates.map((template) => (
                        <li key={template.id}>
                            <strong>{template.name}</strong>: {template.description}
                        </li>
                    ))}
                </ul>
            </Card>
        </div>
    );
};

export default TemplateManagementPage;