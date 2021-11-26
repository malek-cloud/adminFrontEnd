import  { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/authContext";

const CurrentUser = () =>{
      
      const auth = useContext(AuthContext);
      const [employ, setEmployee] = useState(null);
      useEffect(() => {
            try {
                  const a = auth.EmployeeId;
                  console.log(a);
                  fetch(`${process.env.REACT_APP_BACKEND_URL}employee/employee/:${a}`)
                    .then((response) => response.json())
                    .then((data) => {
                      console.log("emplyee data mte3i" + data);
                      setEmployee(data.employee);
                      auth.employee = employ ;
                    });
                } catch (err) {} ;
           
          
        }, []);
      
  return employ ;

}
export default CurrentUser ;