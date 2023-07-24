import React from 'react';

const SignUp = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row items-center">
          <div className="card flex-shrink-0 w-1/2 border-t-4  border-green-800 border-b-4 border-b-red-400 bg-gradient-to-t from-[#c9ded955] to-[#2cbeb494]  shadow-2xl">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body rounded-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    {...register("name", { required: true })}
                    name="name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <p className="text-red-600">Name is required</p>
                  )}
                </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  {...register("email", { required: true })}
                  name="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Confirm Password
                  </span>
                </label>
                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                <label className="label">
                  <a
                    href="#"
                    className="label-text font-semibold-alt link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">PhotoUrl</span>
                </label>
                <input
                  type="text"
                  placeholder="PhotoUrl"
                  {...register("photoURL", { required: true })}
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary border-none bg-orange-500 hover:bg-lime-600"
                  type="submit"
                  value="SignUp"
                />
              </div>
              <p className="text-center mt-5">
                Already have an Account?{" "}
                <Link
                  to={"/login"}
                  className="text-green-900 text-2xl font-bold"
                >
                  LogIn
                </Link>
              </p>
            </form>
              <SocialLogIn />
          </div>
          <div className="text-center w-1/2 lg:text-left lg:w-1/2">
            <img src={registration} alt="" />
            <h1 className="text-5xl font-bold text-green-600">
              Well Come to Our Captured Moments
            </h1>
            <p className="py-4">
              Please Registration and join our Community to see Our Works & Our
              Features. If you like a course, enroll in any instructor's class
              of your choice and take your hobby photography one step further
              and become a professional photographer.
            </p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default SignUp;