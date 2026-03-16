import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro">
                        Docusaurus Tutorial - 5min ⏱️
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    return (
        <Layout title="Home" description="ApiGeneratR - A CQRS API developer experience framework">
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '85vh',
                backgroundColor: '#0d1117'
            }}>
                <header style={{
                    padding: '5rem 1rem',
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #17072b 0%, #172d67 100%)',
                    color: 'white',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                }}>
                    <img
                        src={useBaseUrl('/img/Icon.svg')}
                        alt="ApiGeneratR Logo"
                        style={{width: '160px', marginBottom: '1.5rem', filter: 'drop-shadow(0 0 10px #22ddd2)'}}
                    />
                    <h1 style={{fontSize: '4rem', fontWeight: '900', color: '#22ddd2'}}>ApiGeneratR</h1>
                    <p style={{
                        fontSize: '1.6rem',
                        fontWeight: '300',
                        maxWidth: '800px',
                        margin: '0 auto',
                        color: '#fff'
                    }}>
                        A developer experience framework
                    </p>
                    <p style={{
                        marginTop: '1.5rem',
                        fontSize: '1.1rem',
                        color: '#22ddd2',
                        textTransform: 'uppercase',
                        letterSpacing: '2px'
                    }}>
                        100% automated • 100% custom • 0% Risk
                    </p>
                </header>

                <main style={{
                    padding: '5rem 2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '2rem',
                    flexWrap: 'wrap',
                    flexGrow: 1
                }}>
                    <Link className="button button--lg"
                          style={{
                              backgroundColor: '#2e73ea',
                              color: 'white',
                              border: 'none',
                              padding: '1.2rem 2.5rem',
                              fontSize: '1.2rem',
                              boxShadow: '0 4px 14px 0 rgba(46, 115, 234, 0.39)'
                          }}
                          to="/Framework.ApiGeneratR/docs/Setup/GlobalConfigurations">
                        🚀 Project Setup
                    </Link>

                    <Link className="button button--lg"
                          style={{
                              backgroundColor: '#8c15e9',
                              color: 'white',
                              border: 'none',
                              padding: '1.2rem 2.5rem',
                              fontSize: '1.2rem',
                              boxShadow: '0 4px 14px 0 rgba(140, 21, 233, 0.39)'
                          }}
                          to="/Framework.ApiGeneratR/docs/Quickstart%20Guide/BasicComponents">
                        ⏱️ Quickstart Guide
                    </Link>

                    <Link className="button button--lg"
                          style={{
                              backgroundColor: '#22ddd2',
                              color: '#17072b',
                              border: 'none',
                              padding: '1.2rem 2.5rem',
                              fontSize: '1.2rem',
                              boxShadow: '0 4px 14px 0 rgba(34, 221, 210, 0.39)'
                          }}
                          to="/Framework.ApiGeneratR/docs/Customization/ToDo">
                        🤓 Customization
                    </Link>
                </main>
            </div>
        </Layout>
    );
}