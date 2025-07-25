import "../assets/styles/layout/_login.scss";

import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../context/UserContext/UserContext";

import { Layers, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Form, Input, Button, message } from "antd";

const Login = () => {
  const [form] = Form.useForm();
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      await login(values);
      // Success: go to products
      navigate("/products");
    } catch (err) {
      const msg = err.response?.data?.message || "Login failed";

      message.error(msg);

      // We pin the error onto both fields
      form.setFields([
        { name: "email", errors: [msg] },
        { name: "password", errors: [msg] },
      ]);
    }
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
                form={form}
                name="login"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
              >
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                    {
                      type: "email",
                      message: "That doen't look like a valid email.",
                    },
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
                    {
                      min: 6,
                      message: "Password must be at least 6 characters.",
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
              <Link to="/register" className="card-description">
                Create an account
              </Link>
            </p>
            <p>
              <Link to="/" className="card-description">
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
