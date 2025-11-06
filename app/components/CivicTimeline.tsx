const timeline = [
  {
    year: 'Civic Knowledge',
    title: 'Learn how institutions work',
    description:
      'Schools, libraries, and trusted media help people understand constitutions, elections, courts, and how policies emerge.'
  },
  {
    year: 'Civic Identity',
    title: 'See yourself as a civic actor',
    description:
      'People connect personal experiences to public issues, develop a sense of belonging, and identify causes that matter.'
  },
  {
    year: 'Civic Engagement',
    title: 'Participate and collaborate',
    description:
      'Citizens vote, volunteer, communicate with officials, organize community projects, and deliberate with neighbors.'
  },
  {
    year: 'Civic Impact',
    title: 'Shape collective outcomes',
    description:
      'Policies change, resources shift, and communities thrive when civic participation is sustained and inclusive.'
  }
];

export function CivicTimeline() {
  return (
    <section className="section" aria-labelledby="journey-heading">
      <header className="section__header">
        <span className="section__eyebrow">Civic Journey</span>
        <h2 className="section__title" id="journey-heading">
          From Awareness to Impact
        </h2>
        <p className="section__description">
          Civic life is a cycle. We learn, identify challenges, act with others, and evaluate the results—then begin again
          with deeper insight and stronger communities.
        </p>
      </header>
      <div className="timeline" role="list">
        {timeline.map((entry) => (
          <article className="timeline__item" role="listitem" key={entry.title}>
            <p className="timeline__year">{entry.year}</p>
            <h3 className="timeline__title">{entry.title}</h3>
            <p className="timeline__description">{entry.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
