const pillars = [
  {
    id: 'knowledge',
    title: 'Civic Knowledge',
    description:
      'Understanding the structures of government, the Constitution, rights and responsibilities, and how policies are made.'
  },
  {
    id: 'skills',
    title: 'Civic Skills',
    description:
      'Practicing the abilities to deliberate, advocate, organize, vote, and collaborate with others to address shared problems.'
  },
  {
    id: 'values',
    title: 'Civic Values',
    description:
      'Cultivating democratic habits like respect, empathy, justice, and a commitment to the common good and rule of law.'
  }
];

export function EssentialPillars() {
  return (
    <section className="section" id="pillars" aria-labelledby="pillars-heading">
      <header className="section__header">
        <span className="section__eyebrow">Core Components</span>
        <h2 className="section__title" id="pillars-heading">
          Three Pillars of Civics Education
        </h2>
        <p className="section__description">
          Civics blends information, experience, and ethics. These pillars work together to help people understand their
          power and use it responsibly.
        </p>
      </header>
      <div className="grid grid--three" role="list">
        {pillars.map((pillar, index) => (
          <article className="card" role="listitem" key={pillar.id}>
            <div className="card__badge">{index + 1}</div>
            <h3 className="card__title">{pillar.title}</h3>
            <p className="card__body">{pillar.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
