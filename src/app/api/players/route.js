import { NextResponse } from "next/server";
import { CountryModel, IdsMapModel } from "@/models";
import { getPlayerDataValidation } from "@/validations";
import { getFilters, queryParamsToObject } from "@/utils/server";

// Main handler for GET requests
export async function GET(request) {
  try {
    // Parse the URL and extract query parameters
    const { searchParams } = new URL(request.url);
    const queryParams = queryParamsToObject(searchParams);
    const validatedQueryParams = await getPlayerDataValidation.validateAsync(
      queryParams
    );
    const filters = getFilters({ ...validatedQueryParams });
    const countries = await IdsMapModel.findAll({
      where: filters.condition,
      include: filters.include,
      limit: 20,
    });
    // if (!countries) {
    //   return NextResponse.json({ error: "User not found" }, { status: 404 });
    // }

    // // Return the response
    return NextResponse.json({
      message: "reaching!!",
      countries,
    });
  } catch (error) {
    console.error("Error in GET handler:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
