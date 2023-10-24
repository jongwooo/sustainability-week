import * as React from "react";
import {graphql, useStaticQuery} from "gatsby";
import {getImage} from "gatsby-plugin-image";
import useSiteMetaData from "../../hooks/useSiteMetaData";
import Section from "../../components/section";
import Content from "../../components/content";
import * as styles from "./contents.module.css";

export default function Contents() {
    const {about, session1, session2, session3, sponsors} = useSiteMetaData();
    const {aboutTitle, aboutContent} = about;
    const {session1Title, session1Content} = session1;
    const {session2Title, session2Content} = session2;
    const {session3Title, session3Content} = session3;
    const {sponsorTitle, sponsorContent} = sponsors;

    const data = useStaticQuery(graphql`
        {
            heroImage: file(relativePath: {eq: "sustainability-week.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        width: 480
                    )
                }
            }
            session1Image: file(relativePath: {eq: "session1.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        width: 480
                    )
                }
            }
            session2Image: file(relativePath: {eq: "session2.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        width: 480
                    )
                }
            }
            session3Image: file(relativePath: {eq: "session3.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        width: 480
                    )
                }
            }
            sponsorImage: file(relativePath: {eq: "sponsors.png"}) {
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
            <div className={styles.contents}>
                <Content
                    primaryText={aboutTitle}
                    content={aboutContent}
                    image={getImage(data?.heroImage)}
                    orientation="default"/>
                <Content
                    primaryText={session1Title}
                    content={session1Content}
                    image={getImage(data?.session1Image)}
                    orientation="reverse"/>
                <Content
                    primaryText={session2Title}
                    content={session2Content}
                    image={getImage(data?.session2Image)}
                    orientation="default"/>
                <Content
                    primaryText={session3Title}
                    content={session3Content}
                    image={getImage(data?.session3Image)}
                    orientation="reverse"/>
                <Content
                    primaryText={sponsorTitle}
                    content={sponsorContent}
                    image={getImage(data?.sponsorImage)}
                    orientation="default"/>
            </div>
        </Section>
    );
}

