import { Link } from "react-router-dom";

export default function ResetPasswordPage() {
  return (
    <div className="mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0 w-full">
      <h1 className="text-left text-3xl">Forgot password?</h1>
      <p className="mt-2 mb-8 text-left text-neutral-500 text-sm">
        Enter your email to receive a reset link
      </p>

      <form className="space-y-2">
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

        <div className="form-control w-full flex flex-col mt-6">
          <button className="btn btn-primary">Reset Password</button>
        </div>
      </form>
      <div className="py-12 text-center">
        <p className="whitespace-nowrap">
          <span className="inline-block me-1 text-neutral-600 dark:text-neutral-400 font-light">
            Remember your password?
          </span>
          <Link to="/signin" className="link link-hover text-primary">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
