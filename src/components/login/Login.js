import React from 'react';
import './Style.css';
import { FaUser } from 'react-icons/fa';
import { RiLockFill } from 'react-icons/ri';
import { Button, Form, Input, message } from 'antd';
import axios from '../../api';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuth }) => {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            const response = await axios.post('/user/postLogin', {
                username: values.username,
                password: values.password
            });

            const token = response?.data?.token;
            localStorage.setItem('token', token);
            setIsAuth(true);
            navigate('/home');
        } catch (error) {
            message.error(error?.response?.data?.msg);
        }
    };

    return (
        <div className="container">
            <h2>Welcome Back</h2>
            <Form
                className="basic"
                onFinish={onFinish}
                onFinishFailed={(errorInfo) => console.log('Failed:', errorInfo)}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input prefix={<FaUser />} placeholder="Username" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password prefix={<RiLockFill />} placeholder="Password" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;