import "./custom-button.styles.scss";
const CustomButton = ({ children, ...otherButtonProps }) => (
  <button className="custom-button" {...otherButtonProps}>
    {children}
  </button>
  //   <button className="custom-button" type={type} >
  //     {vlaue}
  //   </button>
);

export default CustomButton;
