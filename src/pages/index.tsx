import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { useColorMode } from "@docusaurus/theme-common";
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "animate.css/animate.min.css";
import Icon from "../components/LandingPage";

function Description() {
  const theme = useColorMode();

  return (
    <div>
      <Icon />
      <div className="container row padding-xl">
        <div className="padding--md margin--lg col col--5">
          <h3>Why share our process?</h3>
          <p className="margin-top--lg">
            One of the core focusses of The Adaptive Network is capacity
            development. We aspire to share knowledge with as many people as
            possible and to educate as many people as possible through the work
            that we do. We don't believe in operating behind close doors as this
            only increases the <i>information asymmetry</i> that exists in the
            world.
          </p>
        </div>
        <div className="padding--md margin--lg col col--5">
          <h3>Why share our process?</h3>
          <p className="margin-top--lg">
            One of the core focusses of The Adaptive Network is capacity
            development. We aspire to share knowledge with as many people as
            possible and to educate as many people as possible through the work
            that we do. We don't believe in operating behind close doors as this
            only increases the <i>information asymmetry</i> that exists in the
            world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <Description />
      </main>
    </Layout>
  );
}
