import * as React from "react";
import {Link} from "gatsby";
import Head from "../components/head";
import "../styles/styles.css";
import * as cssVars from "../styles/variables.module.css";
import * as styles from "./layout.module.css";

export default function Layout(props) {
    return (
        <div className={[cssVars.root, styles.root].join(" ")}>
            <Head
                title="Cloud Native Sustainability Week in Seoul"
                description="Cloud Native Sustainability Week 행사 소개"/>
            <main className={styles.main}>{props.children}</main>
            <footer className={styles.footer}>
                <Link to="https://www.facebook.com/groups/InfraEngineer/">
                    IT 인프라 엔지니어 그룹
                </Link>
                <Link to="https://www.facebook.com/groups/openstack.kr/">
                    OpenStack 한국 커뮤니티
                </Link>
                <Link to="https://ubuntu-kr.org/">
                    우분투 한국 커뮤니티
                </Link>
            </footer>
        </div>
    );
}
