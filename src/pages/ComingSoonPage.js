import React from 'react';
import { Card } from 'antd';

const ComingSoonPage = ({ title }) => {
    return (
        <div style={{ padding: '40px', textAlign: 'center' }}>
            <Card style={{ width: '600px', margin: '0 auto' }}>
                <h1>{title}</h1>
                <p>敬请期待...</p>
            </Card>
        </div>
    );
};

export default ComingSoonPage;