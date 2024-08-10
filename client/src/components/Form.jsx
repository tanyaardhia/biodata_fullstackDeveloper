export default function Form({
  register,
  onSubmit,
  handleSubmit,
  errors,
  isSubmitting,
  title,
  subTitle,
}) {
  return (
    <>
      <div>
        <div className="h-screen w-screen flex justify-center items-center">
          <div className="bg-gradient-to-r from-[#5B99C2] to-[#1A4870] rounded-[20px] p-4">
            <div className="border-[10px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg p-4 sm:p-6 md:p-8 lg:p-10">
              <div className="flex flex-col justify-center items-center my-5">
                <h1 className="mx-10 font-bold dark:text-gray-400 text-3xl text-center cursor-default">
                  {title}
                </h1>
                <h1 className="">{subTitle}</h1>
              </div>

              <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 dark:text-gray-400 text-sm block"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    className={`border p-2 dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 shadow-md placeholder:text-sm focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    type="text"
                    placeholder="email"
                    {...register("email", {
                      required: "Email is required",
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="mb-1 dark:text-gray-400 text-sm block"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    className={`border p-2 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 placeholder:text-sm focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full ${
                      errors.password ? "border-red-500" : ""
                    }`}
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div>
                  <button
                    className="bg-gradient-to-r dark:text-gray-300 from-[#5B99C2] to-[#1A4870] shadow-lg p-2 text-white rounded-lg w-full hover:scale-105 hover:from-[#1A4870] hover:to-[#5B99C2] transition duration-300 ease-in-out mt-2"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : title}
                  </button>
                </div>
              </form>
              <div className="text-gray-500 flex text-center flex-col mt-3 items-center text-xs">
                <p className="cursor-default">
                  Don't have an account?
                  <a
                    className="group text-blue-400 transition-all duration-100 ease-in-out ml-1"
                    href={title === "LOG IN" ? "/register" : "/login"}
                  >
                    <span className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      {title === "LOG IN" ? "Sign Up" : "LOG IN"}
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
