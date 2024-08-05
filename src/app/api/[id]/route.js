import { applyCommonMiddleware } from "@/middlewares/common2";
import { createEdgeRouter } from "next-connect";
import { NextResponse } from "next/server";

const router = applyCommonMiddleware();
router.get((req, ctx) => {
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
