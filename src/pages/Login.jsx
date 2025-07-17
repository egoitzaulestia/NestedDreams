import "../assets/styles/layout/_login.scss";

import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../context/UserContext/UserContext";

import { Layers, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Form, Input, Button } from "antd";

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Values", values);
    login(values);

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo);
  };

  return (
    <div className="page-wrap">
      <section className="card-section">
        <div className="card-row">
          <section className="card">
            <div>
              <div className="card-icon-container">
                <Layers />
              </div>
              <h2 className="card-title">Enter the Dream</h2>
              <p className="card-description">
                Welcome back to the nested layers of discovery
              </p>

              <Form
                name="login"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input
                    className="input"
                    placeholder="Email address"
                    prefix={<Mail size={16} className="text-grey-400" />}
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password
                    className="input"
                    placeholder="Password"
                    prefix={<Lock size={16} className="text-grey-400" />}
                    iconRender={(visible) =>
                      visible ? (
                        <Eye size={16} className="text-grey-400" />
                      ) : (
                        <EyeOff size={16} className="text-grey-400" />
                      )
                    }
                  />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" block>
                    Enter
                  </Button>
                </Form.Item>
              </Form>
            </div>

            <p className="card-description">New to NestedDreams?</p>

            <p>
              <Link className="card-description" to="/register">
                Create an account
              </Link>
            </p>
            <p>
              <Link className="card-description" to="/">
                ← Back to home
              </Link>
            </p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Login;
