import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../../../components/shared/button";
import { Link } from "gatsby";
import { useForm } from "react-hook-form";

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger,
        reset,
    } = useForm();

    const [user, setUser] = useState();

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = (data) => {
        console.log("data", data);

        if (data.email === "admin@gmail.com" && data.password === "admin") {
            window.location = "https://coincodex.com/convert/load/tether/";
        } else {
        }
        reset();
    };

    const onError = (errors) => {
        console.log(errors, alert("Enter all inputs :)"));
    };

    return (
        <form
            className="form-login mt-10"
            action="#"
            onSubmit={handleSubmit(onSubmit, onError)}
        >
            <div className="single-fild">
                <input
                    className="px-6 h-14 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    onChange={(e) => onInputChange(e)}
                    {...register("email", {
                        required: "Email is Required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                        },
                    })}
                    onKeyUp={() => {
                        trigger("email");
                    }}
                />
                {errors.email && (
                    <small className="text-danger">
                        {errors.email.message}
                    </small>
                )}
            </div>
            <div className="single-fild">
                <input
                    className="px-6 h-14 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={(e) => onInputChange(e)}
                    {...register("password", {
                        required: "password is Required",
                        pattern: {
                            value: /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/,
                            message: "Invalid password",
                        },
                    })}
                    onKeyUp={() => {
                        trigger("password");
                    }}
                />
                {errors.password && (
                    <small className="text-danger">
                        {errors.password.message}
                    </small>
                )}
            </div>
            <div className="button text-center">
                <Button className="text-white" type="submit">
                    Login
                    <StaticImage
                        className="align-middle ml-3 transition-all group-hover:ml-5"
                        src="../../../data/images/icons/arrrow-icon.webp"
                        alt=""
                    />
                </Button>
            </div>
            <div className="account-text mt-5 text-center">
                <p>
                    Do not have any account,{" "}
                    <Link
                        to="/register"
                        className="text-yellow-400 font-semibold"
                    >
                        Signup here
                    </Link>
                </p>
            </div>
        </form>
    );
};

export default LoginForm;
