import { Link } from "react-router-dom";

export default function SignUpPage() {
  return (
    <div className="mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0 w-full">
      <h1 className="text-left text-3xl">Create Account</h1>
      <p className="mt-2 mb-8 text-left text-neutral-500 text-sm">Join us today!</p>

      <form className="space-y-2">
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="form-control w-full flex flex-col">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              type="text"
              placeholder="John"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full flex flex-col">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              type="text"
              placeholder="Doe"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="form-control w-full flex flex-col">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email@example.com"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full flex flex-col">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full flex flex-col mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>

      <div className="divider my-8">Or</div>

      <div className="grid gap-3 grid-cols-2 text-sm">
        <button className="btn bg-white text-black border gap-2 font-light">
          <img
            className="w-5 h-5"
            src="/auth/google-logo.svg"
            alt="Sign up with Google"
          />
          Log in with Google
        </button>
        <button className="btn bg-white text-black border gap-2 font-light">
          <img
            className="w-5 h-5"
            src="/auth/facebook-logo.svg"
            alt="Sign up with Facebook"
          />
          Log in with Facebook
        </button>
      </div>

      <div className="py-12 text-center">
        <p className="whitespace-nowrap">
          <span className="inline-block me-1 text-neutral-600 dark:text-neutral-400 font-light">
            Already have an account?
          </span>
          <Link to="/signin" className="link link-hover text-primary">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
