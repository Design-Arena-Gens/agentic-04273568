const steps = [
  {
    title: 'Spot the issue',
    description: 'Recognize a public problem by listening to your neighbors and paying attention to local data.'
  },
  {
    title: 'Map decision makers',
    description: 'Identify who has authority—from school boards to city councils—and learn how to contact them.'
  },
  {
    title: 'Gather voices',
    description: 'Collect stories, evidence, and partners. Civic work accelerates when diverse perspectives are invited in.'
  },
  {
    title: 'Take strategic action',
    description: 'Vote, testify, launch mutual aid, or build campaigns to shift policy and culture toward shared goals.'
  }
];

export function EngagementPlaybook() {
  return (
    <section className="section" aria-labelledby="engagement-heading">
      <header className="section__header">
        <span className="section__eyebrow">How to Participate</span>
        <h2 className="section__title" id="engagement-heading">
          A Playbook for Everyday Civic Action
        </h2>
        <p className="section__description">
          Civics is more than voting every few years. Use this cycle to stay informed, make a plan, and keep momentum.
        </p>
      </header>
      <div className="grid grid--two" role="list">
        {steps.map((step) => (
          <article className="card" role="listitem" key={step.title}>
            <h3 className="card__title">{step.title}</h3>
            <p className="card__body">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
