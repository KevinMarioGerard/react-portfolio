import * as React from 'react';

type ExperienceItemProps = {
    /**
     * job title
     */
    title: string;

    /**
     * company name
     */
    company: string;

    /**
     * company website link
     */
    companyWebsite?: string;

    /**
     * start date
     */
    startDate: string;

    /**
     * end date
     */
    endDate: string;

    /**
     * job description
     */
    description?: Array<string>;
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({
    title,
    company,
    companyWebsite,
    startDate,
    endDate,
    description = [],
}) => {
    return (
        <div className="experience__item__container">
            <h3 className="experience__item__header">
                <span className="experience__item__title">{title}</span>
                <span className="experience__item__company">
                    &nbsp;@&nbsp;
                    {companyWebsite ? (
                        <a href={companyWebsite}>{company}</a>
                    ) : (
                        <span>{company}</span>
                    )}
                </span>
            </h3>
            <span className="experience__item__duration">
                {startDate}&nbsp;-&nbsp;{endDate}
            </span>
            <div className="experience__item__description">
                <ul>
                    {description.map(desc => (
                        <li>{desc}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

ExperienceItem.displayName = 'Experience.Item';

export default ExperienceItem;
