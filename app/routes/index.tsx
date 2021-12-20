import { useEffect } from "react";
import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";
import heart from "../images/examplePost.png";
import example from "../images/examplePost.png";
import { getPosts, Post } from "~/post";
import invariant from "tiny-invariant";

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader

export const loader: LoaderFunction = () => {
  return getPosts();
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Federico Santana Portfolio",
    description:
      "¿Buscas un frontend developer? No busques más, he aquí su candidato.",
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let data = useLoaderData<Post[]>();

  console.log(data);

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

          <div className="banner_animation" id="p5-container">
            <iframe
              title="Inline Frame Example"
              width="400"
              height="400"
              src="/p5/o_model"
              scrolling="no"
            ></iframe>
          </div>
        </div>
        <div className="TwoColumns">
          <div className="posts">
            <div className="posts__header">
              <p className="posts__tutorials">TUTORIALS</p>
            </div>
            <ul className="posts__list">
              {data.map((element) => {
                return (
                  <li className="posts__element">
                    <a className="posts__link" href={`posts/` + element.slug}>
                      <img className="posts_icon" src={element.icon} />
                      <div className="posts__text">
                        <h3>{element.title}</h3>
                        <p> {element.time} min read</p>
                      </div>
                    </a>
                  </li>
                );
              })}
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
                  <img className="card__image" src={example} />
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
                  <img className="card__image" src={example} />
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
                  <img className="card__image" src={example} />
                  <h4 className="card__title">
                    Taller de Programación Artística Nerdearla 101
                  </h4>
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
