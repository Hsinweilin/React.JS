interface Props {
  children: string;
  color?: string;
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    //it's the actual button object that can have build in onClick, Button is just another component, need props to have actions
    <>
      <button className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
