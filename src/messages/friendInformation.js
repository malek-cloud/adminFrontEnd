import "./conversationScreen.css";
import "./friendInformation.css";
function FriendInformation() {
  return (
    <div className="friendInformationWrapper">
      <div className="friend">Demi Lovato</div>
      <div>
        <img className="friendImage" src="images/profile.jpg" alt="" />
      </div>
      <div>
      <div className="scroll">
        <div className="informations">Informations :</div>
        <p className="alignDetail">
          <span>
          <span className="question">Date de Naissance : </span>
          <span className="answer">{" "} 01/03/1996</span>
          </span>
        </p>
        <p className="alignDetail">
          <span>
          <span className="question">Date de création de compte : </span>
          <span className="answer">{" "} 02/03/2022</span>
          </span>
        </p>
        <p className="alignDetail">
          <span><div className="question">Numéro de téléphone : </div>
          <div className="answer">{" "}56889754</div></span>
        </p>
        <p className="alignDetail">

              
          <span><div className="question">Résumé : </div>
          <div className="answer">
            {" "} {" "}
            Resize the browser window to see the effect. When the screen is less
            than 600px wide, make the two columns stack on top of each other
            instead of next to each other.
          </div></span>
        </p>
      </div>
      </div>
    </div>
  );
}
export default FriendInformation;
