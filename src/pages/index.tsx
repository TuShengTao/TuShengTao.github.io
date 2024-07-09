import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import config from "./languages.json";
import styles from './index.module.css';
import useIsBrowser from "@docusaurus/useIsBrowser";
import React, { useEffect } from 'react';


function HomepageHeader({dataSource}) {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header  className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container" >
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{dataSource.slogan.description}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
              {dataSource.common.getStart}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
    const isBrowser = useIsBrowser();
    const pathname = isBrowser && location.pathname
    const language =
        isBrowser && location.pathname.indexOf("/zh-CN/") === 0 ? "zh-CN" : "en";
    const dataSource = config?.[language];

    useEffect(() => {
        if (isBrowser) {
            const nav = document.getElementsByTagName('nav')[0];
            const classList = nav && nav.classList;
            if (!classList) return;
            if (pathname === '/' || pathname === '/zh-CN/') {
                classList.add('index-nav');
            } else {
                classList.remove('index-nav');
            }
        }
    }, [isBrowser, pathname])
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader dataSource={dataSource}/>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
