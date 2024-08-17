import { NextResponse } from "next/server";
import { headers } from "./middlewares";

export async function middleware(request) {
  try {
    let response = NextResponse.next();
    response = headers(response);
    return response;
  } catch (err) {
    console.log(err, "error in middleware.js");
  }
}

export const config = {
  matcher: "/:path*",
};
