import "./custom-button.styles.scss";
const CustomButton = ({ children, isGoogleButton, ...otherButtonProps }) => (
  <button
    className={`${isGoogleButton ? "google-sign-in" : ""} custom-button`}
    {...otherButtonProps}
  >
    {children}
  </button>
  //   <button className="custom-button" type={type} >
  //     {value}
  //   </button>
);

export default CustomButton;
