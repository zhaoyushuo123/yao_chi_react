import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
    return (
        <div className="home-container">
            <div className="module-grid">
                <Link to="/my-environment" className="module-card-link">
                    <div className="module-card">
                        <div className="module-icon" style={{ background: '#ff6b6b', borderRadius: '15px' }}>
                            <i className="fas fa-server" style={{ color: 'white', fontSize: '36px', lineHeight: '80px', textAlign: 'center' }}></i>
                        </div>
                        <h2 className="module-title">我的环境</h2>
                        <p className="module-description">查看和管理您的云端资源环境，随时掌控资源使用情况。</p>
                    </div>
                </Link>
                <Link to="/environment-creation" className="module-card-link">
                    <div className="module-card">
                        <div className="module-icon" style={{ background: '#9c27b0', borderRadius: '15px' }}>
                            <i className="fas fa-plus-circle" style={{ color: 'white', fontSize: '36px', lineHeight: '80px', textAlign: 'center' }}></i>
                        </div>
                        <h2 className="module-title">环境创建</h2>
                        <p className="module-description">快速创建新的云端环境，灵活配置资源，满足您的业务需求。</p>
                    </div>
                </Link>
                <Link to="/task-management" className="module-card-link">
                    <div className="module-card">
                        <div className="module-icon" style={{ background: '#2196f3', borderRadius: '15px' }}>
                            <i className="fas fa-tasks" style={{ color: 'white', fontSize: '36px', lineHeight: '80px', textAlign: 'center' }}></i>
                        </div>
                        <h2 className="module-title">任务管理</h2>
                        <p className="module-description">高效管理您的任务组和子任务，轻松跟踪任务进度。</p>
                    </div>
                </Link>
                <Link to="/template-management" className="module-card-link">
                    <div className="module-card">
                        <div className="module-icon" style={{ background: '#4caf50', borderRadius: '15px' }}>
                            <i className="fas fa-file-alt" style={{ color: 'white', fontSize: '36px', lineHeight: '80px', textAlign: 'center' }}></i>
                        </div>
                        <h2 className="module-title">用户配置模板管理</h2>
                        <p className="module-description">创建和管理您的配置模板，快速部署一致的环境。</p>
                    </div>
                </Link>
                <Link to="/pacific-remote" className="module-card-link">
                    <div className="module-card">
                        <div className="module-icon" style={{ background: '#ff9800', borderRadius: '15px' }}>
                            <i className="fas fa-wifi" style={{ color: 'white', fontSize: '36px', lineHeight: '80px', textAlign: 'center' }}></i>
                        </div>
                        <h2 className="module-title">pacific遥控器</h2>
                        <p className="module-description">远程控制和管理您的pacific环境，轻松实现资源调配。</p>
                    </div>
                </Link>
                <Link to="/physical-machine" className="module-card-link">
                    <div className="module-card">
                        <div className="module-icon" style={{ background: '#673ab7', borderRadius: '15px' }}>
                            <i className="fas fa-microchip" style={{ color: 'white', fontSize: '36px', lineHeight: '80px', textAlign: 'center' }}></i>
                        </div>
                        <h2 className="module-title">物理机管理</h2>
                        <p className="module-description">全面管理您的物理机资源，确保高效运行和维护。</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;