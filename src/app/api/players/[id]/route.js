import { NextResponse } from "next/server";

export async function GET(request, ctx) {
  try {
    // const middlewareResponse = await applyEdgeMiddleware(request, ctx);
    if (middlewareResponse) return middlewareResponse;

    const url = new URL(request.url);
    const queryParams = new URLSearchParams(url.search);
    const queryParamsObject = Object.fromEntries(queryParams.entries());
    console.log(queryParamsObject);

    const { id } = ctx.params;

    const users = [{ name: "Rajesh", id: 4324 }];
    const user = users.find((user) => user.id == id);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error("Error in GET handler:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
