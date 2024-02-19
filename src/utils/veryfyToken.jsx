import { jwtDecode } from "jwt-decode";

const veryfyToken = (token)=>{
    return jwtDecode(token);
}

export default veryfyToken