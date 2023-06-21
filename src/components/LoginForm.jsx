import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const navigate = useNavigate();
    const form = useForm();
    const { register, control, handleSubmit, formState: { errors } } = form;

    const onSubmit = (data) => {
        console.log(data);
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