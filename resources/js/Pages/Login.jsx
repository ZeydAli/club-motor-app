import { useForm, usePage } from "@inertiajs/react";
import React from "react";

export default function Login() {
  const { errors } = usePage().props;

  const { data, setData, post } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    post("/login", {
      data,
      onError: (errors) => {
        console.log(errors);
      },
    });
  };
  return (
    <>
      <div className="flex flex-col items-center mt-40">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6 w-96"
          action="#"
          method="POST"
        >
          {errors.loginError && (
            <div className="text-red-500">{errors.loginError}</div>
          )}
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            {errors.email && <div className="text-red-500">{errors.email}</div>}
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
            {errors.password && (
              <div className="text-red-500">{errors.password}</div>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-zinc-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-zinc-800/80"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
