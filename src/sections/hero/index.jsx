import * as React from "react";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import Section from "../../components/section";
import * as styles from "./hero.module.css";
import {graphql, useStaticQuery} from "gatsby";

export default function Hero({heading, secondaryHeading, content}) {
    const heroImageQuery = useStaticQuery(graphql`
        {
            file(relativePath: {eq: "hero-illustration.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        width: 480
                    )
                }
            }
        }
    `);

    return (
        <Section>
            <div className={styles.root}>
                <div className={styles.content}>
                    <h2 className={styles.secondaryHeading}>
                        {secondaryHeading}
                    </h2>
                    <h1 className={styles.heading}>
                        {heading}
                    </h1>
                    <p>
                        {content}
                    </p>
                </div>
                <div className={styles.image}>
                    <GatsbyImage alt="Image" image={getImage(heroImageQuery?.file)} />
                </div>
            </div>
        </Section>
    );
}
