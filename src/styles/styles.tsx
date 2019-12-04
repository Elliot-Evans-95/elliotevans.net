import styled from '@emotion/styled';
import NavLink from 'gatsby-link';

export const Title = styled.h1`
  font-size: 1.25rem;
  margin-top: 0;

  @media (min-width: 30em) {
    margin-top: 0.67em;
    font-size: 1.5rem;
  }
`;

export const SubHeading = styled.h3`
  font-size: 1rem;

  @media (min-width: 30em) {
    font-size: 1.25rem;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  padding-bottom: 1em;
  flex-direction: column;
  padding: 2rem 0;
  align-items: center;
`;

export const TextContainer = styled.section`
  background: rgba(74, 84, 89, 0.2);
  position: relative;
  padding: 0.5rem 1rem;
  margin-bottom: -17px;

  ::before {
    content: ' ';
    position: absolute;
    display: block;
    border: 0.5rem solid #0078d7;
    height: calc(100% - 1em);
    left: -2em;
    top: 0;
    border-radius: 5px;
  }
`;

export const EEFooter = styled.footer`
  grid-area: footer;

  background: rgba(0, 120, 215, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1;
`;

export const Main = styled.main`
  grid-area: main;

  padding: 1rem;

  @media (min-width: 0em) {
    padding: 0;
    // width: 80vw;
    width: 92vw;
    margin: 0 auto;
  }

  @media (min-width: 45em) {
    padding: 0;
    width: 50vw;
    margin: 0 auto;
  }
`;

export const PostMain = styled.main`
  grid-area: main;
  flex: 1 0 auto;
  padding: 1rem;
  width: 50vw;
  background: rgba(0, 0, 0, 0.25);
  margin: 2rem;
  border-radius: 1rem;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

  p {
    text-align: justify;
  }
`;

export const AppNavigation = styled.nav`
  z-index: 10;

  grid-area: nav;

  font-size: 1rem;

  color: #0078d7;

  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
  height: 100%;
  align-items: center;

  @media (min-width: 30em) {
    justify-content: flex-end;
  }

  > ul {
    padding: 0;
    margin: 0;
  }
`;

export const NavItems = styled.li`
  display: inline-block;
  margin: 0 1em;
`;

export const MyFace = styled.img`
  width: 7em;
  height: 7em;
  border-radius: 50%;
  box-shadow: 0 4px 28px rgba(0, 0, 0, 0.25), 0 1px 10px rgba(0, 0, 0, 0.22);
`;

export const StyledLink = styled(NavLink)`
  color: #0078d7;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const HeaderGroup = styled.div`
  padding-left: 1rem;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  z-index: 5;
`;

export const WorkNavigation = styled.nav`
  grid-area: work-nav;

  background: #0078d7;
`;

export const WorkHeaderContent = styled.header`
  grid-area: work-header;

  background: #0063b1;
`;

export const WorkContentContent = styled.section`
  grid-area: work-content;

  background: rgba(76, 74, 72, 0.6);
`;

export const EECite = styled.cite`
  display: inline-block;
  background: #0078d7;
  padding: 0.5rem 1rem;
  margin-left: 212px;
  margin-bottom: 1rem;
  width: 212px;
  text-align: right;

  z-index: 5;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em 0;
  color: white;
  text-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

export const InputBox = styled.div`
  display: flex;
  padding: 1em 2em;
  flex-direction: column;
  align-items: center;
`;

export const AltCardContainer = styled.section`
  display: flex;
  flex-direction: column;

  position: relative;
  padding: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3), 0 8px 6px rgba(0, 0, 0, 0.22);
  margin: 1.75rem 0 2rem 0;
  border-radius: 1rem;

  p:first-of-type {
    order: 2;
  }

  p:nth-of-type(2) {
    order: 3;
  }

  p:nth-of-type(3) {
    order: 4;
  }

  @media (min-width: 45em) {
    margin: 6rem 0;

    p:first-of-type {
      width: 60%;
    }
  }
`;

export const AltCardImage = styled.img`
  width: 100%;
  order: 1;
  border-radius: 2rem;

  @media (min-width: 45em) {
    width: 50%;
    position: absolute;
    max-width: 12em;
    right: -2em;
    top: -4em;
    box-shadow: 0 4px 28px rgba(0, 0, 0, 0.25), 0 1px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const FormSubmitLabel = styled.label`
  padding: 1em 3.6em;
  text-align: right;
`;

export const FormSubmitSubmit = styled.input`
  border-radius: 5px;
  background: #C73042;
  padding: 0.25rem 1rem;
  border: 0;
  color: white;
  font-size 16px;
  line-height: 24px;
  
  transition: all 300ms cubic-bezier(0.25,0.8,0.25,1);
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  
  &:hover {
    box-shadow: 0 4px 28px rgba(0,0,0,0.25), 0 1px 10px rgba(0,0,0,0.22);
  }
`;

export const InputField = styled.input`
  background: #d8d8d8;
  border-radius: 1rem;
  outline: 0;
  border: 0;
  padding: 0.5rem;
  width: 100%;
  margin: 1rem 0;
`;

export const TextAreaField = styled.textarea`
  background: #d8d8d8;
  border-radius: 1rem;
  outline: 0;
  border: 0;
  padding: 0.5rem;
  width: 100%;
  margin: 1rem 0;
`;

export const InputLabel = styled.label`
  width: 80%;
  text-transform: capitalize;
  color: white;
`;

export const BlogCard = styled.section`
  background: rgba(74, 84, 89, 0.2);
  position: relative;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 1rem;
  margin: 10rem 0;

  ::before {
    content: ' ';
    position: absolute;
    display: block;
    border: 0.5rem solid #0078d7;
    height: calc(100% - 1em);
    left: -2em;
    top: 0;
    border-radius: 5px;
  }

  :first-of-type {
    margin-top: 6rem;
  }

  :last-child {
    margin-bottom: 6rem;
  }
`;

export const Cite = styled.cite`
  display: inline-block;
  background: #0078d7;
  padding: 0.5rem 1rem;
  //width: 212px;
  width: 101px;
  //text-align: right;
  text-align: center;
  z-index: 5;
  border-radius: 5px;
  font-size: 14px;

  position: absolute;
  right: 0;
  bottom: -17px;

  @media (min-width: 45em) {
    right: -38px;
  }
`;

export const BlurImageContainer = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h5,
  p {
    z-index: 10;
    width: 75%;
  }

  div:nth-of-type(3) {
    width: 200px;
    height: 100px;
    background: white;
    filter: blur(5px);
    position: absolute;
    top: 1rem;
    border: 1em solid white;
    box-shadow: 0 4px 28px rgba(0, 0, 0, 0.25), 0 1px 10px rgba(0, 0, 0, 0.22);
  }

  div:nth-of-type(4) {
    width: 100px;
    height: 100px;
    background: white;
    filter: blur(10px);
    position: absolute;
    left: 50%;
    top: 50%;
    border: 1em solid white;
    box-shadow: 0 4px 28px rgba(0, 0, 0, 0.25), 0 1px 10px rgba(0, 0, 0, 0.22);
  }

  div:nth-of-type(5) {
    width: 50px;
    height: 50px;
    background: white;
    filter: blur(15px);
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    border: 1em solid white;
    box-shadow: 0 4px 28px rgba(0, 0, 0, 0.25), 0 1px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const MainProjectImage = styled.img`
  max-width: 400px;
  width: 100%;
  border: 1em solid white;
  box-shadow: 0 4px 28px rgba(0, 0, 0, 0.25), 0 1px 10px rgba(0, 0, 0, 0.22);
`;
