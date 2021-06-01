import { Component } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I Alreader have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />

          {/* <CustomButton type="submit" value="Submit Form" /> */}
          <CustomButton type="submit">Sign In</CustomButton>

          {/* <input type="submit" value="Submit Form" /> */}
        </form>
        {/* <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            required
          />
          <label htmlFor="">Email</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="">Password</label>

          <input type="submit" value="Submit Form" />
        </form> */}
      </div>
    );
  }
}

export default SignIn;
