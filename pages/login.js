import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setJwtToken } from "../reducers/user"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const jwtToken=  useSelector((state) => state.user.jwtToken)
    const dispatch = useDispatch();

    const updateJwtToken = () => {
        const makeid = (length) => {
            var result = ""
            var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+-=";
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result
        }
        dispatch(setJwtToken(makeid(5)))
    }

    return (
      <div>
        <div>{jwtToken}</div>
        <input placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
        <br/>
        <input placeholder="password" value={password} onChange={e => setPassword(e.target.value)}/>
        <br/>
        <button>Login</button>
        <button onClick={e => updateJwtToken()}>update jwtToken</button>
      </div>
    )
  }