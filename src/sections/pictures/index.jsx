import * as React from "react";
import {graphql, useStaticQuery} from "gatsby";
import Picture from "../../components/picture";
import * as styles from "./pictures.module.css";

export default function Pictures() {
    const data = useStaticQuery(graphql`
        {
            pic1: file(relativePath: {eq: "picture1.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        width: 480
                    )
                }
            }
            pic2: file(relativePath: {eq: "picture2.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        width: 480
                    )
                }
            }
            pic3: file(relativePath: {eq: "picture3.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        width: 480
                    )
                }
            }
            pic4: file(relativePath: {eq: "picture4.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        width: 480
                    )
                }
            }
            pic5: file(relativePath: {eq: "picture5.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        width: 480
                    )
                }
            }
            pic6: file(relativePath: {eq: "picture6.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        width: 480
                    )
                }
            }
        }
    `);

    return (
        <>
            <h3 className={styles.picturesTitle}>행사 현장</h3>
            <div className={styles.pictures}>
                <Picture
                    image={data.pic1}
                />
                <Picture
                    image={data.pic2}
                />
                <Picture
                    image={data.pic3}
                />
                <Picture
                    image={data.pic4}
                />
                <Picture
                    image={data.pic5}
                />
                <Picture
                    image={data.pic6}
                />
            </div>
        </>
    );
}
