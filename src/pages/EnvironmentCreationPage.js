import React from 'react';
import { Card } from 'antd';

const EnvironmentCreationPage = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>环境创建</h1>
            <Card title="选择产品">
                <p>这里将展示不同的产品，点击进入对应的表单页面。</p>
            </Card>
        </div>
    );
};

export default EnvironmentCreationPage;