import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function LoginForm() {
    const navigate = useNavigate();
    const form = useForm();
    const { register, control, handleSubmit, formState: { errors } } = form;

    const { changeUsername } = useContext(UserContext);     // [CONTEXT] desestruturando do contexto UserContext (que guarda um estado p/ nome de usuário p/ ser usado em toda a aplicação) a função changeUsername, p/ mudar tal estado

    const onSubmit = (data) => {
        console.log(data);

        changeUsername(data.username);  // modificando o estado 'username' do UserContext.jsx p/ o username logado

        navigate("/");
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" {...register("username", {
                        required: {
                            value: true,
                            message: "Username is required!"
                        }
                    })}/>
                </div>
                <p className="error">{errors.username?.message}</p>

                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" {...register("password", {
                        required: {
                            value: true,
                            message: "Password is required!"
                        }
                    })} />
                </div>
                <p className="error">{errors.password?.message}</p>

                <button>Login</button>
            </form>
            {/* <DevTool control={control} /> */}
        </>
    )
}