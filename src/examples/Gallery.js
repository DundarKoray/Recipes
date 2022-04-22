import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            width: 200
            height: 200
          )
        }
      }
    }
  }
`

const Gallery = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const nodes = data.allFile.nodes

  return (
    <Wrapper>
      {nodes.map((node, index) => {
        return (
          <article key={index} className="item">
            <GatsbyImage
              image={node.childImageSharp.gatsbyImageData}
              className="gallery-img"
              alt="food image"
            />
            <p>{node.name}</p>
          </article>
        )
      })}
      <h2>Gallery</h2>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;

  .item {
    margin-right: 1rem;
  }

  .gallery-img {
    border-radius: 1rem;
  }
`

export default Gallery
