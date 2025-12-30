import styles from "./VillainStats.module.scss";

interface VillainStatsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  frontmatter: { [key: string]: any };
}

export default function VillainStats(props: VillainStatsProps) {
  const { frontmatter } = props;

  return (
    <div className={styles.statblock}>
      <article>
        <p>
          {frontmatter.description && (
            <>
              <strong>Pitch</strong>: {frontmatter.description}
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
        {frontmatter.dialogue && (
          <blockquote>
          {frontmatter.dialogue.map((quip: string) => <p key={quip}>"{quip}"</p>)}
          </blockquote>
        )}
      </article>
    </div>
  );
}
