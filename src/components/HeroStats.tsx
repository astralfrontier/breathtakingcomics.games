import FrontmatterBlock from "@/components/FrontmatterBlock.tsx"

import styles from "./HeroStats.module.scss";

interface HeroStatsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  frontmatter: { [key: string]: any };
}

interface TraitBlockProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  trait: { [key: string]: any };
}

function TraitBlock(props: TraitBlockProps) {
  const { name, trait } = props;
  const { value, hooks } = trait;
  return (
    <section>
      <strong>{name}</strong>: {value}
      <small>
        <ul>
          {hooks.map((hook: string) => (
            <li key={hook}>{hook}</li>
          ))}
        </ul>
      </small>
    </section>
  );
}

export default function HeroStats(props: HeroStatsProps) {
  const { frontmatter } = props;

  return (
    <div className={styles.statblock}>
      <article>
        <p>
          <FrontmatterBlock label="Pitch" value={frontmatter.description} />
          <FrontmatterBlock label="Tier" value={frontmatter.tier} />
          <FrontmatterBlock label="Inspiration" value={frontmatter.inspiration} />
          <FrontmatterBlock label="Motivation" value={frontmatter.motivation} />
        </p>
        <TraitBlock name="Position" trait={frontmatter.traits.position} />
        <TraitBlock name="Past" trait={frontmatter.traits.past} />
        <TraitBlock
          name="Personality"
          trait={frontmatter.traits.personality}
        />
        <TraitBlock name="Powers" trait={frontmatter.traits.powers} />
        <TraitBlock name="Problems" trait={frontmatter.traits.problems} />
      </article>
    </div>
  );
}
