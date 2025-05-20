export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center h-full py-20">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-sm-8 offset-sm-2 text-center">
            <div className="relative">
              <h1 className="relative text-[200px] leading-[200px] tracking-tighter-less text-shadow font-bold">
                <span>4</span>
                <span>0</span>
                <span>4</span>
              </h1>
              <span className="absolute top-0 -ml-14 font-semibold">Oops!</span>
            </div>
            <h5 className="font-semibold -mr-6 mt-2">Page not found</h5>
            <p className="mt-5 mb-10 text-sm text-neutral-500">
              We are sorry, but the page you requested was not found.
            </p>
            <a href="/" mat-flat-button className="link link-hover text-primary">
              Go to home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
