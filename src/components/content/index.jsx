import * as React from "react";
import {GatsbyImage} from "gatsby-plugin-image";
import * as styles from "./content.module.css";

export default function Content({primaryText, content, image, orientation = "default",}) {
    const orientationStyle = orientation === "default" ? "" : styles.reverse;

    return (
        <div className={`${styles.contentContainer} ${orientationStyle}`}>
            <div className={styles.copyColumn}>
                <div className={styles.copyContainer}>
                    <h4 className={styles.primaryText}>
                        {primaryText}
                    </h4>
                    <p className={styles.secondaryText}>
                        {content}
                    </p>
                </div>
            </div>
            <div className={styles.imageColumn}>
                <GatsbyImage alt="Image" image={image}/>
            </div>
        </div>
    );
}
