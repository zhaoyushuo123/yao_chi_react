import React from 'react';
import { Card, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ marginBottom: '20px' }}>欢迎来到管理系统</h1>
            <Row gutter={16}>
                <Col span={6}>
                    <Card title="我的环境" style={{ height: '200px' }}>
                        <Link to="/my-environment">
                            <Button type="primary" block>
                                查看环境
                            </Button>
                        </Link>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="环境创建" style={{ height: '200px' }}>
                        <Link to="/environment-creation">
                            <Button type="primary" block>
                                创建环境
                            </Button>
                        </Link>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="任务管理" style={{ height: '200px' }}>
                        <Link to="/task-management">
                            <Button type="primary" block>
                                管理任务
                            </Button>
                        </Link>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="用户配置模板管理" style={{ height: '200px' }}>
                        <Link to="/template-management">
                            <Button type="primary" block>
                                管理模板
                            </Button>
                        </Link>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default HomePage;