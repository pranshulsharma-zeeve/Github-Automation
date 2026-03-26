"use client";

import { FormEvent, useState } from "react";

export function LoginForm() {
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("Invalid username/email or password");
  };

  return (
    <section className="w-full max-w-md rounded-2xl bg-white/95 p-6 shadow-lg ring-1 ring-slate-200 sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <div
          aria-hidden="true"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white"
        >
          LF
        </div>
        <div>
          <h1 className="text-xl font-semibold text-slate-900">Login Flow</h1>
          <p className="text-sm text-slate-600">Sign in to continue</p>
        </div>
      </div>

      <form className="space-y-4" noValidate onSubmit={handleSubmit}>
        <div>
          <label
            className="mb-1 block text-sm font-medium text-slate-800"
            htmlFor="identifier"
          >
            Username or Email
          </label>
          <input
            autoComplete="username"
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
            id="identifier"
            name="identifier"
            placeholder="name@example.com"
            required
            type="text"
          />
        </div>

        <div>
          <label
            className="mb-1 block text-sm font-medium text-slate-800"
            htmlFor="password"
          >
            Password
          </label>
          <input
            autoComplete="current-password"
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
            id="password"
            name="password"
            required
            type="password"
          />
        </div>

        <div aria-live="polite" className="min-h-6 text-sm text-red-600" role="alert">
          {errorMessage}
        </div>

        <button
          className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
          type="submit"
        >
          Login
        </button>
      </form>
    </section>
  );
}
