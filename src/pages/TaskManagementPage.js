import React, { useState } from 'react';
import { Card, Button, Modal, Form, Input, Select } from 'antd';

const { Option } = Select;

const TaskManagementPage = () => {
    const [tasks, setTasks] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleCreateTaskGroup = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        // 创建任务组的逻辑
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>任务管理</h1>
            <Button type="primary" onClick={handleCreateTaskGroup} style={{ marginBottom: '20px' }}>
                创建任务组
            </Button>
            <Card title="任务组列表">
                <p>暂无任务组</p>
            </Card>

            <Modal title="创建任务组" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form>
                    <Form.Item label="任务组名称" name="groupName" rules={[{ required: true, message: '请输入任务组名称' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="任务类型" name="taskType" rules={[{ required: true, message: '请选择任务类型' }]}>
                        <Select>
                            <Option value="create">创建环境</Option>
                            <Option value="delete">删除环境</Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default TaskManagementPage;