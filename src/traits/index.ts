import traitDataRaw from "./traits.yaml";

export interface TraitData {
  type: string;
  name: string;
  examples: string[];
  catchphrase: string;
  description: string;
  hooks: string[];
  drives: string[];
}

export function randomValue(maxValue: number) {
  return Math.floor(Math.random() * maxValue);
}

export function randomElement<T>(elements: T[]): T {
  return elements[randomValue(elements.length)];
}

const traitData = traitDataRaw as TraitData[];

export function randomTraitByType(
  type: string,
  existingTrait?: TraitData | undefined
) {
  const traitsByType = traitData.filter(
    (trait) => trait.type == type && trait.name != existingTrait?.name
  );
  return randomElement(traitsByType);
}

export default traitData as TraitData[];
