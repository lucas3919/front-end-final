const Box = {
  backgroundColor: "#C00",
  padding: "20px 0px",
  color: "#FFF",
  textAlign: "center",
  display: "block",
  width: "100%"  
}  

const ErrorMessage = ({errorMessage}) => {

  return (
    <div style={Box}>
      <span>{errorMessage}</span>
    </div>
  )
}

export default ErrorMessage;