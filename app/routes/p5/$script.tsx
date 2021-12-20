import { LoaderFunction, useLoaderData } from "remix";
import invariant from "tiny-invariant";
import { getSketch } from "~/p5sketch";

export const loader: LoaderFunction = async ({ params, request }) => {
  invariant(params.script, "expected params.script");

  return new Response(await getSketch(params.script));
};

export const handle = {
  withoutlayout: true,
};

export default function Index() {
  const p5script = useLoaderData();

  return (
    <div>
      <script src="https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js"></script>
      <script dangerouslySetInnerHTML={{ __html: p5script }}></script>
    </div>
  );
}
