import type { TocItem } from "rehype-mdx-toc";

export interface TocProps {
  toc: TocItem[];
}

export default function Toc(props: TocProps) {
  const { toc } = props;

  return (
    <aside>
      <nav>
        <ul>
          {toc.map((tocItem: TocItem) => (
            <li key={tocItem.id}>
              <a href={tocItem.href}>
                {tocItem.depth > 1 ? (
                  <small>{tocItem.value}</small>
                ) : (
                  tocItem.value
                )}
              </a>
            </li>
          ))}
        </ul>
        {toc.length > 0 &&
          <ul>
            <li><a href={toc[0].href}>Top</a></li>
          </ul>
        }
      </nav>
    </aside>
  );
}
