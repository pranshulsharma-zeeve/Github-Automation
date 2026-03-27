import { NextRequest, NextResponse } from "next/server";

const GENERIC_AUTH_ERROR = "Invalid username/email or password";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const identifier = typeof body?.identifier === "string" ? body.identifier : "";
    const password = typeof body?.password === "string" ? body.password : "";

    if (!identifier || !password) {
      return NextResponse.json({ message: GENERIC_AUTH_ERROR }, { status: 401 });
    }

    const authServiceLoginUrl = process.env.AUTH_SERVICE_LOGIN_URL;

    if (!authServiceLoginUrl) {
      return NextResponse.json({ message: GENERIC_AUTH_ERROR }, { status: 500 });
    }

    if (
      process.env.NODE_ENV === "production" &&
      !authServiceLoginUrl.startsWith("https://")
    ) {
      return NextResponse.json({ message: GENERIC_AUTH_ERROR }, { status: 500 });
    }

    const authResponse = await fetch(authServiceLoginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ identifier, password }),
      cache: "no-store",
    });

    if (!authResponse.ok) {
      return NextResponse.json({ message: GENERIC_AUTH_ERROR }, { status: 401 });
    }

    return NextResponse.json({ authenticated: true }, { status: 200 });
  } catch {
    return NextResponse.json({ message: GENERIC_AUTH_ERROR }, { status: 500 });
  }
}
