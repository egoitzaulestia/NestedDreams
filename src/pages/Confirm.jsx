import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { message, Spin } from "antd";

const API_URL = "http://localhost:3000";

const Confirm = () => {
  const { emailToken } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async () => {
      try {
        await axios.get(`${API_URL}/users/confirm/${emailToken}`);
        message.success("Your email is confirmed! you can now log in");
      } catch (err) {
        console.error(err);
        message.error(
          err.response?.data?.message || "Confirmation failed or link expired."
        );
      } finally {
        setTimeout(() => navigate("/login"), 1500);
      }
    };
  }, [emailToken, navigate]);

  return <div>Confirm</div>;
};

export default Confirm;
