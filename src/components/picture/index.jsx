import * as React from "react";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import * as styles from "./picture.module.css";

export default function Picture({image}) {
    return (
        <div className={styles.picture}>
            <GatsbyImage
                image={getImage(image)}
                alt="Image"
            />
        </div>
    );
}
