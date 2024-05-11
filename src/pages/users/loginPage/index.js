import { Button, Form, Input, Tabs} from "antd";
import { memo } from "react";
import { AiOutlineFacebook, AiOutlineGoogle, AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import "./style.scss"

const LoginForm = () => {
    return (
        <div className="login__form__container">
            <Form
                name="normal_login"
                className="login__form"
                initialValues={{
                    remember: true,
                }}
            >
                <Form.Item
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
                    className="input__login"
                    name="password"
                    rules={[
                        {
                            require: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input 
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
            children: <></>,
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

