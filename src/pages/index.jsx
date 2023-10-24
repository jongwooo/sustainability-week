import * as React from "react";
import Layout from "../layout";
import Page from "../components/page";
import Hero from "../sections/hero";
import Container from "../components/container";
import useSiteMetaData from "../hooks/useSiteMetaData";
import Contents from "../sections/contents";
import Pictures from "../sections/pictures";

export default function LandingPage() {
    const {hero} = useSiteMetaData();
    const {heroHeading, heroSecondaryHeading, heroContent} = hero;
    return (
        <Layout>
            <Page>
                <Container>
                    <Hero
                        heading={heroHeading}
                        secondaryHeading={heroSecondaryHeading}
                        content={heroContent}/>
                    <Contents/>
                    <Pictures/>
                </Container>
            </Page>
        </Layout>
    );
}
