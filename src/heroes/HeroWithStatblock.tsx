import styles from "./HeroWithStatblock.module.scss";

interface HeroWithStatblockProps {
  hero: React.ReactNode;
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
  const { value, die, hooks } = trait;
  return (
    <section>
      <strong>{name}</strong>: {value} {die && <>({die})</>}
      <small>
        <ul>
          {hooks.map((hook: string) => (
            <li>{hook}</li>
          ))}
        </ul>
      </small>
    </section>
  );
}

export default function HeroWithStatblock(
  props: HeroWithStatblockProps
): React.ReactNode {
  const { hero, frontmatter } = props;

  return (
    <div className={"grid"}>
      <div className={styles.hero}>{hero}</div>
      <div className={styles.statblock}>
        <article>
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
    </div>
  );
}
