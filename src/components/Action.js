function Action() {
  return <div
      className="col-md-3 bg-body mt-4   bg-body"
      style={{
        height: "44vh",
        boxShadow: "0px 0px 15px -2px 	#B0B0B0",
        borderRadius: "15px",
        right :"25px",
        position : "fixed",
        width :  "43vh" ,
        
        
      }}
    >
     <div style = {{position : "fixed"}}>
     <table className="table table-hover">
        <tbody>
          <tr>
            <td className="text-success ">
              <h6>Nos Articles</h6>
            </td>
          </tr>
          <tr>
            <td className="text-success ">
              <h6>Ecrire un Article</h6>
            </td>
          </tr>
          <tr>
            <td className="text-success ">
              <h6>Créer un Compte pour Employer</h6>
            </td>
          </tr>

          <tr>
            <td className="text-success ">
              <h6>Qui est Connecté</h6>
            </td>
          </tr>
          <tr>
            <td className="text-success ">
              <h6>Personnes Inscrites</h6>
            </td>
          </tr>
          <tr>
            <td className="text-success ">
              <h6>Feedbacks</h6>
            </td>
          </tr>
        </tbody>
      </table>
     </div>
      
    </div>;
}
export default Action;
