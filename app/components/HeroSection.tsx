import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <span className="hero__pill">Civic Compass</span>
      <h1 id="hero-heading">What Is Civics?</h1>
      <p className="hero__lede">
        Civics is the study and practice of how people participate in shaping their communities and governments.
        It blends knowledge about democratic institutions with the skills and values citizens need to solve problems
        together.
      </p>
      <div className="hero__cta">
        <Link className="button button--primary" href="#pillars">
          Explore the essentials
        </Link>
        <Link className="button button--secondary" href="#quiz">
          Test your civics IQ
        </Link>
      </div>
    </section>
  );
}
