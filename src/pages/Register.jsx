import "../assets/styles/layout/_login.scss";

import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../context/UserContext/UserContext";

import { Layers, User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Form, Input, Button } from "antd";

const Register = () => {
  // const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Values", values);
    // login(values);

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
              <h2 className="card-title">Begin Your Journey</h2>
              <p className="card-description">
                Create an account to unlock the first layer
              </p>

              <Form
                name="register"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                >
                  <Input
                    className="input"
                    placeholder="Your name"
                    prefix={<User size={16} className="text-grey-400" />}
                  />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email!" },
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
                      message: "Please enter your password!",
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

            <p className="card-description">Already have an account?</p>
            <p>
              <Link to="/login" className="card-description">
                Sign in instead
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

export default Register;
