import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/EnvironmentCreationPage.css';

const EnvironmentCreationPage = () => {
    return (
        <div className="environment-creation-container">
            <h1 className="page-title">环境创建</h1>
            <div className="product-container">
                <div className="product-grid">
                    <Link to="/create/oceanstor-block" className="product-card-link">
                        <div className="product-card first-card block-card">
                            <div className="product-icon" style={{ background: '#2196f3', borderRadius: '15px' }}>
                                <i className="fas fa-server" style={{ color: 'white', fontSize: '36px', lineHeight: '80px', textAlign: 'center' }}></i>
                            </div>
                            <h2 className="product-title">OceanStor pacific BLOCK</h2>
                            <p className="product-description">高性能块存储解决方案，适用于企业级应用。</p>
                        </div>
                    </Link>
                    <Link to="/create/oceanstor-nas" className="product-card-link">
                        <div className="product-card middle-card nas-card">
                            <div className="product-icon" style={{ background: '#f44336', borderRadius: '15px' }}>
                                <i className="fas fa-server" style={{ color: 'white', fontSize: '36px', lineHeight: '80px', textAlign: 'center' }}></i>
                            </div>
                            <h2 className="product-title">OceanStor pacific NAS</h2>
                            <p className="product-description">高性能文件存储解决方案，适用于大规模数据管理。</p>
                        </div>
                    </Link>
                    <Link to="/create/dorado" className="product-card-link">
                        <div className="product-card middle-card dorado-card">
                            <div className="product-icon" style={{ background: '#ff9800', borderRadius: '15px' }}>
                                <i className="fas fa-magnet" style={{ color: 'white', fontSize: '36px', lineHeight: '80px', textAlign: 'center' }}></i>
                            </div>
                            <h2 className="product-title">Dorado</h2>
                            <p className="product-description">全闪存存储解决方案，提供极致性能和可靠性。</p>
                        </div>
                    </Link>
                    <Link to="/create/oceandisk" className="product-card-link">
                        <div className="product-card last-card oceandisk-card">
                            <div className="product-icon" style={{ background: '#333333', borderRadius: '15px' }}>
                                <i className="fas fa-hdd" style={{ color: 'white', fontSize: '36px', lineHeight: '80px', textAlign: 'center' }}></i>
                            </div>
                            <h2 className="product-title">OceanDisk</h2>
                            <p className="product-description">云端存储解决方案，灵活扩展，高效管理。</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EnvironmentCreationPage;