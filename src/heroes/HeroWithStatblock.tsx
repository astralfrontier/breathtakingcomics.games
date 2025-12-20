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
  const { value, hooks } = trait;
  return (
    <section>
      <strong>{name}</strong>: {value}
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
          <p>
            {frontmatter.pitch && (
              <>
                <strong>Pitch</strong>: {frontmatter.pitch}
                <br />
              </>
            )}
            {frontmatter.inspiration && (
              <>
                <strong>Inspiration</strong>: {frontmatter.inspiration}
                <br />
              </>
            )}
            {frontmatter.motivation && (
              <>
                <strong>Motivation</strong>: {frontmatter.motivation}
                <br />
              </>
            )}
            {frontmatter.tier && (
              <>
                <strong>Tier</strong>: {frontmatter.tier}
                <br />
              </>
            )}
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
    </div>
  );
}
