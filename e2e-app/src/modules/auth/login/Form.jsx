'use client'

import Link from "next/link";
import Input from "./Input";
import { useForm } from "react-hook-form";
import useLogin from "@/hooks/useLogin";
import { useRouter } from 'next/navigation'

const Form = () => {
    const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login, loading, error } = useLogin();

  const onSubmit = async (data) => {

    try {
      await login(data.username, data.password).then(()=>{
        router.push('/')
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <Input
        inputType={"username"}
        labelTitle={"Your Name"}
        placeHolder={"mor_2314"}
        required={true}
        register={register}
        name="username"
        errors={errors}
      />
      <Input
        inputType={"password"}
        labelTitle={"Password"}
        placeHolder={"83r5^_"}
        required={true}
        register={register}
        name="password"
        errors={errors}
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="remember" className="text-gray-500">
              Remember me
            </label>
          </div>
        </div>
        <Link
          href="/login"
          className="text-sm font-medium text-primary-600 hover:underline"
        >
          Forgot password?
        </Link>
      </div>
      <button
        type="submit"
        className={`w-full text-white ${loading ? 'opacity-50 cursor-not-allowed' : ''} bg-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
      >
        {loading ? "Logging in..." : "Sign In"}
      </button>
      <p className="text-sm font-light text-gray-500">
        Don’t have an account yet?{" "}
        <Link href="#" className="font-medium text-primary-600 hover:underline">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default Form;
