import { Button, Form, Input, Tabs} from "antd";
import { memo } from "react";
import { AiOutlineAudit, AiOutlineFacebook, AiOutlineGoogle, AiOutlineLock, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import "./style.scss"

const LoginForm = () => {
    return (
        <div className="login__form__container">
            <Form
                name="loginForm"
                className="login__form"
                initialValues={{
                    remember: true,
                }}
            >
                <Form.Item
                    label="Tên đăng nhập"
                    className="input__login"
                    name="username"
                    rules={[
                        {
                            require: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input 
                        prefix={<AiOutlineUser/> }
                        placeholder="UserName"
                    />
                </Form.Item>
                <Form.Item
                    label="Mật khẩu"
                    className="input__login"
                    name="password"
                    rules={[
                        {
                            require: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input.Password 
                        prefix={<AiOutlineLock/> }
                        placeholder="Password"
                    />
                    
                </Form.Item>            
                <div className="forgotPass">
                    Quên mật khẩu
                </div>
                <div className="action__container">
                    <Button className="btn__login btn__normal">
                        <AiOutlineUser />
                        <p>Đăng nhập tài khoản</p>
                    </Button>
                    <Button className="btn__login btn__fb">
                        <AiOutlineFacebook />
                        <p>Đăng nhập với Facebook</p>
                    </Button>
                    <Button className="btn__login btn__gg">
                        <AiOutlineGoogle />
                        <p>Đăng nhập với Google</p>
                    </Button>
                </div>
            </Form>
        </div>
    )
}

const RegisterFrom = () => {
    return (
        <div className="register__form__container">
            <Form
                name="registerForm"
                className="register__form"
                initialValues={{
                    remember: true,
                }}
            >
                <Form.Item
                    label="Tên đăng nhập"
                    className="input__register"
                    name="username"
                    rules={[
                        {
                            require: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input 
                        prefix={<AiOutlineUser/> }
                        placeholder="Vui lòng nhập tài khoản."
                    />
                </Form.Item>
                <Form.Item
                    label="Mật khẩu"
                    className="input__register"
                    name="password"
                    rules={[
                        {
                            require: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input.Password 
                        prefix={<AiOutlineLock /> }
                        placeholder="Vui lòng nhập mật khẩu."
                    />
                </Form.Item>
                <Form.Item
                    label="Xác nhận mật khẩu"
                    className="input__register"
                    name="password_confirm"
                    rules={[
                        {
                            require: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input.Password 
                        prefix={<AiOutlineLock /> }
                        placeholder="Vui lòng xác nhận mật khẩu."
                    />
                </Form.Item>
                <Form.Item
                    label="Tên hiện thị"
                    className="input__register"
                    name="displayname"
                    rules={[
                        {
                            require: true,
                            message: 'Please input your Displayname!',
                        },
                    ]}
                >
                    <Input 
                        prefix={<AiOutlineAudit /> }
                        placeholder="Vui lòng nhập tên hiện thị."
                    />
                </Form.Item>
                <Form.Item
                    label="Email"
                    className="input__register"
                    name="email"
                    rules={[
                        {
                            require: true,
                            message: 'Please input your Email!',
                        },
                    ]}
                >
                    <Input 
                        prefix={<AiOutlineMail /> }
                        placeholder="Vui lòng nhập email."
                    />
                </Form.Item>
                <div className="action__container">
                    <Button className="btn__login btn__normal">
                        <AiOutlineUser/>
                        Đăng ký tài khoản
                    </Button>
                </div>
            </Form>
        </div>
    )
}

const LoginPage = () => {
    const items = [
        {
            key: "1",
            label: `Đăng nhập`,
            children: <LoginForm />,
        },
        {
            key: "2",
            label: `Đăng ký`,
            children: <RegisterFrom />,
        },
    ]

    return (
        <div className="login">
            <div className="login__container">
                <Tabs defaultActiveKey="1" items={items}/>
            </div>
        </div>
    )
}

export default memo(LoginPage);

