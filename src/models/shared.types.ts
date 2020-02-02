import { IAboutNode } from './about.types';
import { IHomeNode } from './home.types';
import { IContactNode, IProjectNode } from './contact.types';

export interface IHeader {
  icon: string;
  heading: string;
  subHeading: string;
}

export type IEdge = {
  node: IHomeNode & IAboutNode & IContactNode & IProjectNode;
};