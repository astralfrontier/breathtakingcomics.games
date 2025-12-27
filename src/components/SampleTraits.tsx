import { groupBy } from "ramda";
import traitData from "../traits";
import type { TocItem } from "rehype-mdx-toc";
import ArticleWithToc from "../ArticleWithToc";
import slugify from "slugify";

const slug = (value: string) => slugify(value, { lower: true });

const groupedTraits = groupBy((trait) => trait.type, traitData);

function buildTocFromTraits(): TocItem[] {
  const elements: TocItem[] = [];

  ["Position", "Past", "Personality", "Powers", "Problems"].forEach(
    (traitType) => {
      const slugged = slug(traitType);
      elements.push({
        depth: 1,
        value: traitType,
        numbering: [],
        id: slugged,
        href: `#${slugged}`,
      });

      groupedTraits[traitType.toLowerCase()]!.forEach((element) => {
        const slugged = slug(element.name);
        elements.push({
          depth: 2,
          value: element.name,
          numbering: [],
          id: slugged,
          href: `#${slugged}`,
        });
      });
    }
  );

  return elements;
}

function SampleTraitsArticle() {
  return (
    <>
      <p>
        All of the traits here are examples. You can create your own original
        traits, or adapt the ones you find here.
      </p>
      {["Position", "Past", "Personality", "Powers", "Problems"].map(
        (traitType) => (
          <>
            <h1 id={slug(traitType)}>{traitType} Traits</h1>
            {groupedTraits[traitType.toLowerCase()]!.map((trait) => (
              <>
                <h2 id={slug(trait.name)}>{trait.name}</h2>
                <p>&quot;{trait.catchphrase}&quot;</p>
                <p>Examples:</p>
                <ul>
                  {trait.examples.map((example) => (
                    <li>{example.replaceAll("**", "")}</li>
                  ))}
                </ul>
                <p>{trait.description}</p>
                <p>Sample Hooks:</p>
                <ul>
                  {trait.hooks.map((hook) => (
                    <li>{hook}</li>
                  ))}
                </ul>
                <p>Sample Drives:</p>
                <ul>
                  {trait.drives.map((drive) => (
                    <li>{drive}</li>
                  ))}
                </ul>
              </>
            ))}
          </>
        )
      )}
    </>
  );
}

const toc = buildTocFromTraits();

export default function SampleTraits() {
  return <ArticleWithToc article={<SampleTraitsArticle />} toc={toc} />;
}
