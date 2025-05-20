export default function ProfilePage() {
  return (
    <div className="hero-content flex flex-col">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Profile</h1>
        <p className="py-6">Manage your account settings.</p>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="avatar flex justify-center">
            <div className="size-32 rounded-full">
              <img src="https://randomuser.me/api/portraits/men/41.jpg" />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              value="John Doe"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              value="john@example.com"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Update Profile</button>
          </div>
          <div className="text-center mt-4">
            <a href="/reset-password" className="link link-hover">
              Change Password
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
