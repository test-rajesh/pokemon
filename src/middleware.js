import { NextResponse } from "next/server";
import { headers } from "./middlewares";

export function middleware(request) {
  let response = NextResponse.next();
  response = headers(response);
  return response;
}

export const config = {
  matcher: "/:path*",
};
