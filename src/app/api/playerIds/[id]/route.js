import { applyEdgeMiddleware } from "@/middlewares";
import { NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";

const router = createEdgeRouter();
applyEdgeMiddleware(router);
router.get((req, ctx) => {
  const url = new URL(req.url);
  const queryParams = new URLSearchParams(url.search);
  const queryParamsObject = Object.fromEntries(queryParams.entries());
  console.log(queryParamsObject);

  const { id } = ctx.params;
  const users = [{ name: "rajesh", id: 4324 }];
  const user = users.find((user) => user.id == id);
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json({ user });
});

export async function GET(request, ctx) {
  return router.run(request, ctx);
}
