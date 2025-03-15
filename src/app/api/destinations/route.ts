import { supabase } from "@/lib/supabaseClient";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "6");
  const locationFilter = searchParams.get("location");
  const searchQuery = searchParams.get("search");
  const start = (page - 1) * limit;
  const end = start + limit - 1;

  let query = supabase.from("destination").select("*", { count: "exact" });

  if (locationFilter && locationFilter !== "All") {
    query = query.ilike("param", `%${locationFilter}%`);
  }
  if (searchQuery) {
    query = query.or(
      `title.ilike.%${searchQuery}%,param.ilike.%${searchQuery}%`
    );
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
