import { createContext, ReactNode, RefObject } from 'react';
import { SectionProps } from '../components/section';

export type NavSections = { [hash: string]: NavSection };

export interface NavSection {
  name: string,
  ref: RefObject<HTMLDivElement>,
  component: (props: SectionProps) => ReactNode,
}

const NavContext = createContext<{ hash: string, navigate:(sectionName: string) => void }>({ hash: '', navigate: () => {} });

export default NavContext;
