import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import styles from './index.module.css';

export default function Home() {
    return (
        <Layout title="Home" description="ApiGeneratR - A CQRS API developer experience framework">
            <main className={styles.page}>
                <section className={styles.hero}>
                    <img
                        src={useBaseUrl('/img/Icon.svg')}
                        alt="ApiGeneratR Logo"
                        className={styles.logo}
                    />

                    <h1 className={styles.title}>ApiGeneratR</h1>

                    <p className={styles.subtitle}>
                        A developer experience framework
                    </p>

                    <p className={styles.kicker}>
                        100% automated • 100% custom • 0% Risk
                    </p>
                </section>

                <section className={styles.actions}>
                    <Link className={`button button--lg ${styles.actionButton} ${styles.blueButton}`} to="/docs/Setup/GlobalConfigurations">
                        🚀 Project Setup
                    </Link>

                    <Link className={`button button--lg ${styles.actionButton} ${styles.purpleButton}`} to="/docs/Quickstart%20Guide/BasicComponents">
                        ⏱️ Quickstart Guide
                    </Link>

                    <Link className={`button button--lg ${styles.actionButton} ${styles.cyanButton}`} to="/docs/Customization/ToDo">
                        🤓 Customization
                    </Link>
                </section>
            </main>
        </Layout>
    );
}