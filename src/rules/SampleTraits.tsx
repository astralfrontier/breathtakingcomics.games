import { groupBy } from "ramda";
import traitData from "../traits";
import { useMemo } from "react";

function SampleTraits() {
  const groupedTraits = useMemo(
    () => groupBy((trait) => trait.type, traitData),
    []
  );

  return (
    <>
      <p>
        All of the traits here are examples. You can create your own original
        traits, or adapt the ones you find here.
      </p>
      {["Position", "Past", "Personality", "Powers", "Problems"].map(
        (traitType) => (
          <>
            <h1>{traitType} Traits</h1>
            {groupedTraits[traitType.toLowerCase()]!.map((trait) => (
              <>
                <h3>{trait.name}</h3>
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

export default SampleTraits;
