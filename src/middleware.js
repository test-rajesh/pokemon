import { NextResponse } from "next/server";

export async function middleware(request) {
  const response = NextResponse.next();
  const headersList = request.headers;
  const userLocationCountry = headersList.get("cloudfront-viewer-country-name");

  if (userLocationCountry) {
    return NextResponse.redirect(
      new URL(`/country/${userLocationCountry}`, request.url)
    );
  }
  return response;
}

export const config = {
  matcher: ["/"],
};
