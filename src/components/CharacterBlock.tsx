import FrontmatterBlock from "@/components/FrontmatterBlock.tsx"

import styles from "./CharacterBlock.module.scss";

interface CharacterBlockProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  frontmatter: { [key: string]: any };
}

// Return true if the entry has any character-relevant attributes
export function shouldShowCharacterBlock(props: CharacterBlockProps): boolean {
  const { frontmatter } = props;

  return (
    frontmatter.inspiration ||
    frontmatter.motivation ||
    frontmatter.dialgue
  ) ? true : false;
}

export default function CharacterBlock(props: CharacterBlockProps) {
  const { frontmatter } = props;

  return (
    <div className={styles.statblock}>
      <article>
        <p>
          <FrontmatterBlock label="Pitch" value={frontmatter.description} />
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
