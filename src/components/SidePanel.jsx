import React from 'react';
import { Card, Button } from 'antd';

const SidePanel = ({ favorites, onApplyFavorite, onFavorite }) => {
    return (
        <div style={{ padding: '20px' }}>
            <Card title="典型配置">
                {/* 典型配置列表 */}
                <div style={{ padding: '10px' }}>
                    <Button onClick={onApplyFavorite}>应用</Button>
                    <Button onClick={onFavorite}>收藏</Button>
                </div>
            </Card>
            <Card title="用户收藏">
                {/* 用户收藏列表 */}
                {favorites.map((favorite) => (
                    <div key={favorite} style={{ padding: '10px' }}>
                        <Button onClick={() => onApplyFavorite(favorite)}>应用</Button>
                    </div>
                ))}
            </Card>
            <Card title="典型配置的详细说明">
                {/* 典型配置的详细说明 */}
                <p>这里是典型配置的详细说明。</p>
            </Card>
            <Card title="导入导出">
                {/* 导入导出按钮 */}
                <Button>导入</Button>
                <Button>导出</Button>
            </Card>
        </div>
    );
};

export default SidePanel;