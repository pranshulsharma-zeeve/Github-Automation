export default function LoginFormShell() {
  return (
    <section className="mx-auto w-full max-w-md rounded-xl bg-white p-6 shadow-md sm:p-8">
      <header className="mb-6 text-center">
        <div
          aria-hidden="true"
          className="mx-auto mb-3 h-12 w-12 rounded-full bg-slate-900"
        />
        <h1 className="text-2xl font-semibold text-slate-900">Login Flow</h1>
        <p className="mt-1 text-sm text-slate-600">Sign in to continue</p>
      </header>

      <form noValidate>
        <div className="space-y-4">
          <div>
            <label
              className="mb-1 block text-sm font-medium text-slate-700"
              htmlFor="identifier"
            >
              Username or email
            </label>
            <input
              autoComplete="username"
              className="block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              id="identifier"
              name="identifier"
              type="text"
            />
          </div>

          <div>
            <label
              className="mb-1 block text-sm font-medium text-slate-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              autoComplete="current-password"
              className="block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              id="password"
              name="password"
              type="password"
            />
          </div>

          <div
            aria-live="polite"
            className="min-h-6 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
            role="alert"
          />

          <button
            className="w-full rounded-md bg-slate-900 px-4 py-2 font-medium text-white transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </section>
  );
}
