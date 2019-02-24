import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Layout from "../../components/layout";
import ServicesNav from "../../pages/services/nav";
import Card from "../../components/card/card";

import styles from "../page.module.scss";
import { notDeepEqual } from "assert";

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query AuthQuery {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/auth/" } }) {
          edges {
            node {
              frontmatter {
                title
                path
                url
                logo
                tags
              }
              html
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <ServicesNav />
        <main className={styles.grid}>
          {data.allMarkdownRemark.edges.map(({ node }, i) => {
            console.log(node);
            return (
              <Card
                logo={node.frontmatter.logo}
                title={node.frontmatter.title}
                key={node.frontmatter.title}
                html={node.html}
                url={node.frontmatter.url}
              />
            );
          })}
        </main>
      </Layout>
    )}
  />
);
