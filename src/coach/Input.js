import { Modal, Button } from "react-bootstrap";
import {useRef, useState} from 'react' ;
function Input(props) {
  // const [show, setShow] = useState(false);

  //  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const nomRef = useRef();
  const prenomRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const numeroRef = useRef();
  const [typeEmployee, setTypeEmployee] = useState();
  const [shift, setShift] = useState();
  const checkEmployeeType = e =>{
    setTypeEmployee(e.target.value);
  }
  const checkShift = e => {
    setShift(e.target.value);
  }
    const submit = async () => {
    const coachData = {
      nom : nomRef.current.value,
      prenom : prenomRef.current.value,
      email : emailRef.current.value ,
      password : passwordRef.current.value,
      numero : numeroRef.current.value,
      shift : shift,
      typeEmployee : typeEmployee
    }
    props.onHide() ;
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}employee/createEmployee`, {
        method: "POST",
        body: JSON.stringify(coachData),
        headers: {
             "Content-Type": "application/json",
           },
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log("erreur mateb3athch el coach raw");
    }
  }
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.show}
        onHide={props.onHide}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton style={{ textAlign: "center" }}>
          <Modal.Title id="contained-modal-title-vcenter">
            <h4>Créer un compte pour un nouveau employé</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row mb-2">
            <div className="col-md-5">
              <input type="text" id="nom" placeholder="Nom" ref={nomRef}/>
            </div>
            <div className="col-md-5">
              <input type="text" id="prenom" placeholder="prenom"ref={prenomRef}  />
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-md-5">
              <div className="mb-2">
                <input type="radio" value="Coach" name="gender" onClick = {checkEmployeeType}  /> {" "} Coach
                <input
                  type="radio"
                  value="Superviseur"
                  name="gender"

                  style={{ marginLeft: "40px" }}
                  onClick = {checkEmployeeType}
                />{" "}
                Superviseur
              </div>
            </div>
            <div className="col-md-5">
              <input
                type="number"
                id="phone"
                placeholder="Numéro de Télépone"
                ref={numeroRef}
              />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-5">
              <input type="email" id="email" placeholder="Adresse Email" ref={emailRef} />
            </div>
            <div className="col-md-5">
              <input type="password" id="Password" placeholder="Password" ref={passwordRef}/>
            </div>
          </div>
          <div className="row">
            <h6 className="ml-3">Shift : </h6>
            <div className="mb-2">
              <input type="radio" value="1" name="shift 1" onClick = {checkShift}/> {" "}de 7h à 16h
              <input
                type="radio"
                value="2"
                name="shift 2"
                onClick = {checkShift}
                style={{ marginLeft: "40px" }}
              />{" "}de 16h à 1h
              <input
                type="radio"
                value="3"
                name="shift 3"
                style={{ marginLeft: "40px" }}
                onClick = {checkShift}
              />{" "}
              de 1h à 10h
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Annuler
          </Button>
          <Button className="btn btn-success grow mx-2" onClick={submit}>Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Input;
