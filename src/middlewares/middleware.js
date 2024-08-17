export const headers = (response) => {
  // response.headers.set("Content-Security-Policy", "default-src 'self'");
  response.headers.set("X-DNS-Prefetch-Control", "off");
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=15552000; includeSubDomains"
  );
  response.headers.set("X-Download-Options", "noopen");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Permitted-Cross-Domain-Policies", "none");
  response.headers.set("Referrer-Policy", "no-referrer");
  response.headers.set("Cross-Origin-Resource-Policy", "same-origin");
  response.headers.set("Cross-Origin-Embedder-Policy", "require-corp");
  response.headers.set(
    "Permissions-Policy",
    "geolocation=(self), microphone=()"
  );
  response.headers.set("Expect-CT", "max-age=86400, enforce");
  response.headers.set(
    "Permissions-Policy",
    "geolocation=(self), microphone=()"
  );

  return response;
};

// async function applyEdgeMiddleware(request, ctx) {
//   console.log("JWT Middleware executed");

//   // Extract the Authorization header
//   const authHeader = request.headers.get("Authorization");

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return NextResponse.json(
//       { error: "Authorization token missing or malformed" },
//       { status: 401 }
//     );
//   }

//   const token = authHeader.split(" ")[1]; // Get the token part

//   try {
//     // Verify the JWT token
//     const decoded = jwt.verify(token, SECRET_KEY);

//     // Optionally, attach the decoded user data to the context
//     ctx.user = decoded;

//     // Continue with the request processing by returning null
//     return null;
//   } catch (error) {
//     console.error("JWT verification failed:", error.message);

//     // Handle specific JWT errors
//     if (error.name === "TokenExpiredError") {
//       return NextResponse.json({ error: "Token expired" }, { status: 401 });
//     } else if (error.name === "JsonWebTokenError") {
//       return NextResponse.json({ error: "Invalid token" }, { status: 401 });
//     } else {
//       return NextResponse.json(
//         { error: "Authentication failed" },
//         { status: 401 }
//       );
//     }
//   }
// }
