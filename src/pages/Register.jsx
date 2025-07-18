import "../assets/styles/layout/_login.scss";

import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../context/UserContext/UserContext";

import {
  Layers,
  User as UserIcon,
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
import { Form, Input, Button, message } from "antd";

const Register = () => {
  const { register } = useContext(UserContext);
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      // Call register only once
      const { message: msg } = await register(values);
      navigate("/check-email");
      message.success(
        msg || "Thanks! Check your email to confirm, then log in.",
        1.5
      );
    } catch (err) {
      if (err.response?.status === 400 && err.response.data.errors) {
        form.setFields(
          err.response.data.errors.map((e) => ({
            name: e.path,
            errors: [e.message],
          }))
        );
        // don’t navigate
        return;
      }
      message.error(err.response?.data?.message || "Registration failed");
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
              <h2 className="card-title">Begin Your Journey</h2>
              <p className="card-description">
                Create an account to unlock the first layer
              </p>

              <Form
                form={form}
                name="register"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
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
                    prefix={<UserIcon size={16} className="text-grey-400" />}
                  />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email!" },
                    {
                      type: "email",
                      message: "That doesn't look like a valid email",
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
                      message: "Please enter your password!",
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
                    Create Account
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
