import { applyCommonMiddleware } from "@/middlewares";
import { CountryModel, IdsMapModel } from "@/models";
import { NextResponse } from "next/server";
import { createRouter } from "next-connect";

let router = createRouter();
router
  .use((req, res, next) => {
    console.log("reacjomg");
    return next();
  })
  .get(async (req) => {
    try {
      let countries = await IdsMapModel.findAll({ limit: 20 });
      if (!countries) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      return NextResponse.json({ countries });
    } catch (error) {
      console.error("Error in GET handler:", error);
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }
  });

export async function GET(request) {
  return router.run(request);
}
