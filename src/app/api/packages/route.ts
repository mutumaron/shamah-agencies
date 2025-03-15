import { supabase } from "@/lib/supabaseClient";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "6");
  const typeFilter = searchParams.get("type");
  const searchQuery = searchParams.get("search");
  const destinationFilter = searchParams.get("destination");
  const start = (page - 1) * limit;
  const end = start + limit - 1;

  let query = supabase.from("package").select("*", { count: "exact" });

  // if (destinationFilter) {
  //   query = query.ilike("param", `%${destinationFilter.toLocaleLowerCase()}%`);
  // }

  let orConditions: string[] = [];

  if (typeFilter && typeFilter !== "All") {
    orConditions.push(`title.ilike.%${typeFilter}%`);
    orConditions.push(`type.ilike.%${typeFilter}%`);
  }

  if (searchQuery) {
    orConditions.push(`title.ilike.%${searchQuery}%`);
    orConditions.push(`type.ilike.%${searchQuery}%`);
  }
  if (destinationFilter) {
    orConditions.push(`title.ilike.%${destinationFilter}%`);
    orConditions.push(`param.ilike.%${destinationFilter}%`);
  }
  if (orConditions.length > 0) {
    // Supabase expects conditions separated by commas, which means OR between them.
    query = query.or(orConditions.join(","));
  }

  try {
    const { data, error, count } = await query.range(start, end);
    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response(JSON.stringify({ data, count }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
