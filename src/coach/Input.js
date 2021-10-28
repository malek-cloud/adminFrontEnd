import { Modal, Button } from "react-bootstrap";
function Input(props) {
  // const [show, setShow] = useState(false);

  //  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

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
              <input type="text" id="nom" placeholder="Nom" />
            </div>
            <div className="col-md-5">
              <input type="text" id="prenom" placeholder="prenom" />
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-md-5">
              <div className="mb-2">
                <input type="radio" value="Coach" name="gender" /> Coach
                <input
                  type="radio"
                  value="Superviseur"
                  name="gender"
                  style={{ marginLeft: "40px" }}
                />{" "}
                Superviseur
              </div>
            </div>
            <div className="col-md-5">
              <input
                type="number"
                id="phone"
                placeholder="Numéro de Télépone"
              />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-5">
              <input type="email" id="nom" placeholder="Adresse Email" />
            </div>
            <div className="col-md-5">
              <input type="password" id="Password" placeholder="Password" />
            </div>
          </div>
          <div className="row">
            <h6 className="ml-3">Shift : </h6>
            <div className="mb-2">
              <input type="radio" value="1" name="shift" /> {" "}de 7h à 16h
              <input
                type="radio"
                value="2"
                name="shift"
                style={{ marginLeft: "40px" }}
              />{" "}de 16h à 1h
              <input
                type="radio"
                value="3"
                name="shift"
                style={{ marginLeft: "40px" }}
              />{" "}
              de 1h à 10h
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Annuler
          </Button>
          <Button className="btn btn-success grow mx-2">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Input;
