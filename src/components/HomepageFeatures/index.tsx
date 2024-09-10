import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useIsBrowser from "@docusaurus/useIsBrowser";
import config from "@site/src/pages/languages.json";
import {useEffect} from "react";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};



function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
    const isBrowser = useIsBrowser();
    const pathname = isBrowser && location.pathname

    const language =
        isBrowser && location.pathname.indexOf("/en/") === 0 ? "en" :"zh-CN" ;
    const dataSource = config?.[language];

    useEffect(() => {
        if (isBrowser) {
            const nav = document.getElementsByTagName('nav')[0];
            const classList = nav && nav.classList;
            if (!classList) return;
            if (pathname === '/' || pathname === '/en/') {
                classList.add('index-nav');
            } else {
                classList.remove('index-nav');
            }
        }
    }, [isBrowser, pathname])

    const FeatureList: FeatureItem[] = [
        {
            title: dataSource.feature[0].title,
            Svg: require('@site/static/img/easy-use.svg').default,
            description: (
                <>
                    {dataSource.feature[0].description}
                </>
            ),
        },
        {
            title: dataSource.feature[1].title,
            Svg: require('@site/static/img/safe-reliable.svg').default,
            description: (
                <>
                    {dataSource.feature[1].description}
                </>
            ),
        },
        {
            title: dataSource.feature[2].title,
            Svg: require('@site/static/img/easy-use.svg').default,
            description: (
                <>
                    {dataSource.feature[2].description}
                </>
            ),
        },
    ];
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
