import FrontmatterBlock from "@/components/FrontmatterBlock.tsx"
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
          <FrontmatterBlock label="Pitch" value={frontmatter.description} />
          <FrontmatterBlock label="Tier" value={frontmatter.tier} />
          <FrontmatterBlock label="Inspiration" value={frontmatter.inspiration} />
          <FrontmatterBlock label="Motivation" value={frontmatter.motivation} />
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
