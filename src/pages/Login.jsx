// import { useContext } from "react";
// import { UserContext } from "../context/UserContext/UserState";
// import { Form, Input, Button } from "antd";

// const Login = () => {
//   const { login } = useContext(UserContext);

//   const onFinish = (values) => {
//     console.log("Values", values);
//     login(values);
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log(errorInfo);
//   };

//   return (
//     <div className="container">
//       <Form
//         name="basic"
//         labelCol={{ span: 8 }}
//         wrapperCol={{ spain: 16 }}
//         initialValues={{ remeber: true }}
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//         autoComplete="off"
//       >
//         <Form.Item
//           label="Email"
//           name="email"
//           rules={[{ required: true, message: "Please input your email" }]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item
//           label="Password"
//           name="password"
//           rules={[{ required: true, message: "Please input your password" }]}
//         >
//           <Input.Password />
//         </Form.Item>
//         <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
//           <Button type="primary" htmlType="submint">
//             Submit
//           </Button>
//         </Form.Item>
//       </Form>
//       <h1>Login</h1>
//     </div>
//   );
// };

// export default Login;

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
    <div className="container">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <h1>Login</h1>
    </div>
  );
};

export default Login;
