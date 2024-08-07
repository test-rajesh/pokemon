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
    "Feature-Policy",
    "geolocation 'self'; microphone 'none'"
  );
  return response;
};
