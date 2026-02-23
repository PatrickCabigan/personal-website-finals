import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  titleClassName?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  title,
  className = '',
  titleClassName = '',
}) => {
  return (
    <section className={`mb-12 ${className}`}>
      {title && (
        <h2 className={`text-xl text-genshin-accent tracking-wider text-center mb-6 ${titleClassName}`}>
          {title}
        </h2>
      )}
      <div className="card">
        {children}
      </div>
    </section>
  );
};

export default Section;