import "../assets/styles/layout/_home.scss";
import { Layers, Sparkles, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { UserContext } from "../context/UserContext/UserState";
import { Form, Input, Button } from "antd";

const Login = () => {
  const { login } = useContext(UserContext);

  const onFinish = (values) => {
    console.log("Values", values);
    login(values);
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
              <p className="card-description">New to NestedDreams?</p>
              <p className="card-description">Create an account</p>
              <p className="card-description">← Back to home</p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );

  // return (
  //   <div className="container">
  //     <Form
  //       name="basic"
  //       labelCol={{ span: 8 }}
  //       wrapperCol={{ span: 16 }}
  //       initialValues={{ remember: true }}
  //       onFinish={onFinish}
  //       onFinishFailed={onFinishFailed}
  //       autoComplete="off"
  //     >
  //       <Form.Item
  //         label="Email"
  //         name="email"
  //         rules={[{ required: true, message: "Please input your email" }]}
  //       >
  //         <Input />
  //       </Form.Item>
  //       <Form.Item
  //         label="Password"
  //         name="password"
  //         rules={[{ required: true, message: "Please input your password" }]}
  //       >
  //         <Input.Password />
  //       </Form.Item>
  //       <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
  //         <Button type="primary" htmlType="submit">
  //           Submit
  //         </Button>
  //       </Form.Item>
  //     </Form>
  //     <h1>Login</h1>
  //   </div>
  // );
};

export default Login;
