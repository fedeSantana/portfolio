import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";
import sketch from "~/sketches/O_model.p5js";

type IndexData = {
  resources: Array<{ name: string; url: string }>;
  demos: Array<{ name: string; to: string }>;
};

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = () => {
  let data: IndexData = {
    resources: [
      {
        name: "Remix Docs",
        url: "https://remix.run/docs",
      },
      {
        name: "React Router Docs",
        url: "https://reactrouter.com/docs",
      },
      {
        name: "Remix Discord",
        url: "https://discord.gg/VBePs6d",
      },
    ],
    demos: [
      {
        to: "demos/actions",
        name: "Actions",
      },
      {
        to: "demos/about",
        name: "Nested Routes, CSS loading/unloading",
      },
      {
        to: "demos/params",
        name: "URL Params and Error Boundaries",
      },
    ],
  };

  // https://remix.run/api/remix#json
  return json(data);
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!",
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let data = useLoaderData<IndexData>();

  return (
    <>
      <div className="content">
        <div className="banner">
          <div className="banner__leftSide">
            <h1 className="banner__title">
              I'm Fede, frontend developer and creative developer
            </h1>
            <p className="banner_description">
              I specialize in rapidly building software companies and web
              applications. I talk about my journey on Twitter, commit code to
              Github, and take shots on Dribbble.
            </p>
          </div>
          <div className="banner_animation" id="p5-container"></div>
        </div>
        <div className="TwoColumns">
          <div className="posts">
            <div className="posts__header">
              <p className="posts__tutorials">TUTORIALS</p>
            </div>
            <ul className="posts__list">
              <li className="posts__element">
                <a
                  className="posts__link"
                  href="/pages/HablemosDeCircunferencias.html"
                >
                  <img
                    className="posts_icon"
                    src="/static/icons_64px/heart.png"
                  />
                  <div className="posts__text">
                    <h3>
                      Hablemos de <del> circulos </del> circunferencias
                    </h3>
                    <p>2 min read</p>
                  </div>
                </a>
              </li>
              <li className="posts__element">
                <a className="posts__link" href="google.com">
                  <img
                    className="posts_icon"
                    src="/static/icons_64px/heart.png"
                  />
                  <div className="posts__text">
                    <h3>Hablemos de las otras funciones: las matemáticas</h3>
                    <p>2 min read</p>
                  </div>
                </a>
              </li>
              <li className="posts__element">
                <a className="posts__link" href="google.com">
                  <img
                    className="posts_icon"
                    src="/static/icons_64px/heart.png"
                  />
                  <div className="posts__text">
                    <h3>Género y matemática: repensemos las categorías</h3>
                    <p>2 min read</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="resources">
            <div className="resources__header">Videos</div>
            <ol className="resources__list">
              <li className="card__element">
                <a
                  className="card__link"
                  href="https://www.youtube.com/watch?v=JE_vG-pMQrQ"
                >
                  <img className="card__image" src="/static/examplePost.png" />
                  <h4 className="card__title">
                    Taller de Programación Artística Nerdearla 101
                  </h4>
                </a>
              </li>
              <li className="card__element">
                <a
                  className="card__link"
                  href="https://www.youtube.com/watch?v=JE_vG-pMQrQ"
                >
                  <img className="card__image" src="/static/examplePost.png" />
                  <h4 className="card__title">
                    Taller de Programación Artística Nerdearla 101
                  </h4>
                </a>
              </li>
              <li className="card__element">
                <a
                  className="card__link"
                  href="https://www.youtube.com/watch?v=JE_vG-pMQrQ"
                >
                  <img className="card__image" src="/static/examplePost.png" />
                  <h4 className="card__title">
                    Taller de Programación Artística Nerdearla 101
                  </h4>
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js"></script>
      <script src={sketch} />
    </>
  );
}