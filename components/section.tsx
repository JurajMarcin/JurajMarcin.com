import React, { ReactNode, RefObject } from 'react';

export interface SectionProps {
  ref: RefObject<HTMLDivElement> | undefined;
  key: string | undefined,
}

const section = ({ className, children }: { className?: string, children?: ReactNode }) => (
  { ref, key }: SectionProps,
) => <section className={className} ref={ref} key={key}>{children}</section>;

export default section;
