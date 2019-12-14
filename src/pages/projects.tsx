import * as React from 'react';
import { graphql } from 'gatsby';
import { Main } from '../styles/styles';
import Footer from '../components/footer';

// default style stuff
import '../styles/index.css';

// home stuff
import Navigation from '../components/navigation';
import { Home } from '../components/home/home';
import Blobs from '../blobs/blobs';
import Banner from '../components/banner';
import Projects from '../components/projects/projects';

interface IndexPageProps {
  location: Location;
  data: {
    allMarkdownRemark: {
      edges: Array<IEdge>;
    };
    allFile: IHeaderQuery;
  };
}

interface IHeaderQuery {
  edges: Array<IHeaderNode>;
}

interface IHeaderNode {
  node: {
    id: string;
    childSiteJson: {
      id: string;
      header: IHeader;
    };
  };
}

export interface IEdge {
  node: INode;
}

export interface INode {
  excerpt: string;
  timeToRead: number;
  frontmatter: {
    date: string;
    title: string;
  };
  id: string;
}

export interface IHeader {
  icon: string;
  heading: string;
  subHeading: string;
}

export default class extends React.Component<IndexPageProps, {}> {
  constructor(props: any, context: any) {
    super(props, context);
  }

  public render() {
    console.log(this.props);
    return (
      <div className={'appGrid'}>
        <Navigation />
        <React.StrictMode>
          <Main>
            <Blobs props={this.props.location.pathname} />
            <Banner
              header={
                this.props.data.allFile.edges[0].node.childSiteJson.header
              }
            />
            <Projects props={this.props.data.allMarkdownRemark.edges} />
          </Main>
        </React.StrictMode>
        <Footer />
      </div>
    );
  }
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark (
      sort: { order: DESC, fields: [frontmatter___date]},
      filter: {fileAbsolutePath: {regex: "/projects/"}}
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          timeToRead
        }
      }
    }
    allFile(
      filter: { name: { eq: "header" }, sourceInstanceName: { eq: "site" } }
    ) {
      edges {
        node {
          id
          childSiteJson {
            id
            header {
              icon
              heading
              subHeading
            }
          }
        }
      }
    }
  }
`;

// export const pageQuery = graphql`
//   query {
//     allMarkdownRemark {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "DD MMMM, YYYY")
//           }
//           excerpt
//           timeToRead
//         }
//       }
//     }
//     allFile(
//       filter: { name: { eq: "header" }, sourceInstanceName: { eq: "data" } }
//     ) {
//       edges {
//         node {
//           id
//           childDataJson {
//             id
//             header {
//               icon
//               heading
//               subHeading
//             }
//           }
//         }
//       }
//     }
//   }
// `;
