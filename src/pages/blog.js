import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'



const BlogPage = () => {
  // const markdownData = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date
  //           }
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  const contentfulData = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "YYYY-MM-DD")
          }
        }
      }
    }  
  `)

  return (
    <div>
      <Layout>    
        <Head title="Blog" />
        <h1>Blog</h1>
        <p>Post will show up here later on.</p>
        <ol className={blogStyles.posts}>
          {contentfulData.allContentfulBlogPost.edges.map((edge) => {
            return (
              <li className={blogStyles.post}>
                <Link to={`/blog/${edge.node.slug}`}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                </Link>
             </li>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}

export default BlogPage