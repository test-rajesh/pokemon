import { NextResponse } from "next/server";
import { CountryModel, IdsMapModel } from "@/models";

// Middleware-like function (can be used before your main handler)
async function handleMiddleware(req) {
  // Example middleware logic
  console.log("Middleware executed");

  // If you want to halt the request based on some condition, you can return a response here
  // if (someCondition) {
  //   return NextResponse.json({ error: "Not allowed" }, { status: 403 });
  // }

  // Otherwise, return null to proceed
  return null;
}

// Main handler for GET requests
export async function GET(request) {
  try {
    // Run the middleware logic first
    const middlewareResponse = await handleMiddleware(request);
    if (middlewareResponse) return middlewareResponse;

    // Now handle the main GET request logic
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      request.ip ||
      request.socket.remoteAddress;

    console.log(`Client IP: ${ip}`);

    // Fetch data from the database
    const countries = await IdsMapModel.findAll({ limit: 20 });
    if (!countries) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Return the response
    return NextResponse.json({ ip, countries });
  } catch (error) {
    console.error("Error in GET handler:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
