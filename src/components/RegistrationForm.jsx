import { DevTool } from "@hookform/devtools";   // devTool para React Hook Form
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";

// context shit
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function RegistrationForm() {
    // hooks
    const navigate = useNavigate();
    const form = useForm();

    const { register, control, handleSubmit, formState: { errors } } = form;    // the formState thing is the same as destructuring it separately afterwards:
    // const { errors } = formState;
    // The "errors" object contain errors for every field that has field validation.

    const { changeUsername } = useContext(UserContext);     // [CONTEXT] desestruturando do contexto UserContext (que guarda um estado p/ nome de usuário p/ ser usado em toda a aplicação) a função changeUsername, p/ mudar tal estado
    
    const onSubmit = (data) => {
        console.log(data);

        changeUsername(data.username);  // modificando o estado 'username' do UserContext.jsx p/ o username definido no formulário

        navigate("/");
    };

    return (
        <>  
            <form onSubmit={handleSubmit(onSubmit)} noValidate /* noValidate: prevents browser validation, allowing React Hook Form to handle the validation of the fields */>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" {...register("email", {
                        required: "Email is required!",
                        pattern: {
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: "Invalid email format"
                        }
                    })} />
                </div>
                <p className="error">{errors.email?.message  /* se der ruim, solta mensagem */}</p>

                <div>
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" {...register("username", {
                        required: "Username is required!"
                        /* required: {
                            value: true,
                            message: "Username is required!"
                        }   // could pass it like this as well */
                    })} />
                </div>
                <p className="error">{errors.username?.message}</p>

                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" {...register("password", {
                        required: "Password is required!",
                        minLength: {
                            value: 5,
                            message: "Password must have a minimum of 6 digits"
                        }
                    })} />
                </div>
                <p className="error">{errors.password?.message}</p>

                <div>
                    <label htmlFor="terms-of-service">
                        <input type="checkbox" id="terms-of-service" {...register("terms-of-service", {
                            required: "You must agree with our Terms of Service"
                        })} /> I agree with the Terms of Service
                    </label>
                </div>
                <p className="error">{errors["terms-of-service"]?.message}</p>

                <div>
                    <label htmlFor="newsletter">
                        <input type="checkbox" id="newsletter" {...register("newsletter")} /> Subscribe to our weekly newsletter
                    </label>
                </div>

                <button>Register</button>
            </form>
            <DevTool control={control} />
        </>
    )
}