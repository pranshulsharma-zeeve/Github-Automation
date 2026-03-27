"use client";

import { FormEvent, useState } from "react";

export function LoginForm() {
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const identifier = String(formData.get("identifier") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    if (!identifier) {
      setErrorMessage("Username or email is required");
      return;
    }

    if (!password) {
      setErrorMessage("Password is required");
      return;
    }

    if (identifier.includes("@")) {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier);
      if (!isValidEmail) {
        setErrorMessage("Please enter a valid email address");
        return;
      }
    }

    setErrorMessage("Invalid username/email or password");
  };

  return (
    <section className="w-full max-w-md rounded-xl bg-white/95 p-4 shadow-lg ring-1 ring-slate-200 sm:rounded-2xl sm:p-8">
      <div className="mb-6 flex items-start gap-3 sm:items-center">
        <div
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white sm:h-11 sm:w-11"
        >
          LF
        </div>
        <div className="min-w-0">
          <h1 className="text-lg font-semibold text-slate-900 sm:text-xl">Login Flow</h1>
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
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200 sm:text-sm"
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
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200 sm:text-sm"
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
          className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-base font-medium text-white transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 sm:text-sm"
          type="submit"
        >
          Login
        </button>
      </form>
    </section>
  );
}
