import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = ({ params }) => {
  const id = params.id;
  return new Response(JSON.stringify(`${id} : hello`), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
