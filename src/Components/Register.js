import React from "react";
import {Modal} from "react-bootstrap";


const Register = ({ register,handleRegister  }) => {
	

	return (
		<Modal show={register} onHide={handleRegister}>
			<Modal.Body>
				<form>
					<div className="row">
						<label for="phoneNumber" className="form-label">Phone Number</label>
						<input type="text" name="phoneNumber"  className="form-control"   />
						<label for="password" className="form-label">Password</label>
						<input type="password" name="password" className="form-control" />
					</div>
					<button type="submit" className="btn btn-success"
					style={{ marginTop: "30px",marginLeft: "40%" }}>Sign up</button>
				</form>
			</Modal.Body>
		</Modal>
	);

}

export default Register;
