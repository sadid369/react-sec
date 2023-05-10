const BasicButton = () => {
  const handleClick = (event) => {
    console.log(event);
    alert("Clicked");
  };
  return <button onClick={handleClick}>Button</button>;
};

export default BasicButton;
