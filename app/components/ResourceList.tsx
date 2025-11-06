const resources = [
  {
    title: 'iCivics Learning Hub',
    href: 'https://www.icivics.org/'
  },
  {
    title: 'National Conference on Citizenship',
    href: 'https://ncoc.org/'
  },
  {
    title: 'CivXNow Coalition',
    href: 'https://civxnow.org/'
  },
  {
    title: 'U.S. Government Basics (USA.gov)',
    href: 'https://www.usa.gov/branches-of-government'
  }
];

export function ResourceList() {
  return (
    <section className="section" aria-labelledby="resource-heading">
      <header className="section__header">
        <span className="section__eyebrow">Keep Learning</span>
        <h2 className="section__title" id="resource-heading">
          Trusted Civic Education Resources
        </h2>
        <p className="section__description">
          Explore organizations, lesson libraries, and public datasets to stay informed and take action.
        </p>
      </header>
      <ul className="resources">
        {resources.map((resource) => (
          <li key={resource.href}>
            <a href={resource.href} target="_blank" rel="noreferrer">
              <span>{resource.title}</span>
              <span aria-hidden>→</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
