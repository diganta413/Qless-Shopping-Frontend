import React,{ useState  } from "react";
import Register from "../Components/Register";

const HomePage = () => {
	const [register,setregister] = useState(false)
	const [login,setlogin] = useState(false)

	const handleRegister = () => {
		setregister(!register)
	}

	return (
		<div className="HomePage d-flex flex-column justify-content-center align-items-center">
			<h1 style={{ marginTop: "10%",fontSize: "100px"  }} >QLess Shopping</h1>
			<button className="btn btn-success" style={{ fontSize: "50px",
					padding: "1% 5%",marginTop: "100px",width: "50%"  }} >Log in </button>
			<button className="btn btn-outline-primary" style={{ fontSize: "50px",
					padding: "1% 5%",marginTop: "60px",width: "50%"  }} onClick={handleRegister} >Sign up </button>
			<Register register={register} handleRegister={handleRegister} />
		</div>
	);
}


export default HomePage;

