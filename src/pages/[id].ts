import { APIRoute } from "astro";

export const prerender = false;
export const GET: APIRoute = ({ params }) => {
  return new Response(JSON.stringify(`${params.id} : hello`), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
