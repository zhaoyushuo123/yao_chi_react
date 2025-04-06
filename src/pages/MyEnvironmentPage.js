import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Spin } from 'antd';

const MyEnvironmentPage = () => {
    const [environments, setEnvironments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 模拟从数据库获取环境信息
        setTimeout(() => {
            setEnvironments([
                { id: 1, name: '环境1', status: '运行中' },
                { id: 2, name: '环境2', status: '已停止' },
                { id: 3, name: '环境3', status: '运行中' },
            ]);
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) {
        return <Spin tip="加载中..." />;
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>我的环境</h1>
            <Row gutter={16}>
                {environments.map((env) => (
                    <Col span={8} key={env.id}>
                        <Card title={env.name} style={{ marginBottom: '16px' }}>
                            <p>状态: {env.status}</p>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default MyEnvironmentPage;