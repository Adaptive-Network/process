import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { useColorMode } from "@docusaurus/theme-common";
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "animate.css/animate.min.css";
import Icon from "../components/LandingPage";
import HomepageFeatures from "../components/HomepageFeatures";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  function HomePage() {
    return (
      <div>
        <Icon />
        <div className="margin-vert--xl text--center">
          <h1 className="margin-vert--xl">
            Why Document and Share our Process?
          </h1>
          <HomepageFeatures />
        </div>
      </div>
    );
  }
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <HomePage />
      </main>
    </Layout>
  );
}
