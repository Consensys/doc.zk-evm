import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageCards from "@site/src/components/HomepageCards";
import StopwatchIcon from "../../static/img/icon_stopwatch.svg";
import LineaLogo from "../../static/img/Linea_logo_white.svg";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.introductionBlock)}>
      <div className="container">
        <h1 className={clsx("hero__title", styles.forceColor, styles.title)}>
          <LineaLogo className={styles.logo} />
          Docs
        </h1>
        <p
          className={clsx(
            "hero__subtitle",
            styles.forceColor,
            styles.subtitle,
          )}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx(
              "button button--secondary button--lg",
              styles.bannerButton,
            )}
            to="/build-on-linea">
            Start building
            <StopwatchIcon className={styles.icon} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  // const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome`}
      description="An open-source, client-agnostic, Ethereum transaction signer that separates private key management from transaction validation by signing transactions using a private key that can be secured in a variety of cloud providers, or encrypted on a local disk.">
      <HomepageHeader />
      <main style={{ backgroundColor: "#121212" }}>
        <HomepageCards />
      </main>
    </Layout>
  );
}
