import * as React from 'react';

type SectionHeaderProps = {
    /**
     * Section title
     */
    title: string;

    /**
     * Section header icon
     */
    icon?: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, icon = '' }) => (
    <>
        <div className="section__header">
            <i className={`section__header__icon ${icon}`} />
            <span className="section__title">{title.toUpperCase()}</span>
        </div>
        <hr className="separator" />
    </>
);

SectionHeader.displayName = 'Section.Header';

const SectionContent: React.FC = ({ children }) => (
    <div className="section__content">{children}</div>
);

SectionContent.displayName = 'Section.Content';

type SectionProps = {
    /**
     * Section id
     */
    id: string;
};

type Statics = {
    Header: typeof SectionHeader;
    Content: typeof SectionContent;
};

const Section: React.FC<SectionProps> & Statics = ({ id, children }) => (
    <section className="section__container" id={id}>
        {children}
    </section>
);

Section.displayName = 'Section';

Section.Header = SectionHeader;
Section.Content = SectionContent;

export default Section;
