import { Button } from "antd";
import { Link } from "react-router-dom";

const CheckEmail = () => {
  return (
    <div className="page-wrap">
      <section className="card-section">
        <div className="card-row">
          <section className="card">
            <h2 className="card-title">Almost there!</h2>
            <p className="card-description">
              Thanks for signing up! We’ve sent a confirmation link to your
              inbox.
              <br />
              Please click the link in that email to activate your account.
            </p>
            <Link to="/login">
              <Button type="primary" block>
                Go to Login
              </Button>
            </Link>
          </section>
        </div>
      </section>
    </div>
  );
};

export default CheckEmail;
