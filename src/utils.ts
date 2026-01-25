/**
 * A function you can pass to .sort(), to sort entries by name, skipping "the " as a prefix.
 * 
 * @param a any object that has a '.data.name' property
 * @param b any object that has a '.data.name' property
 * @returns 
 */
export function sortByName(a: any, b: any) {
  const na = a.data.name.toLowerCase().replace(/^the +/, '');
  const nb = b.data.name.toLowerCase().replace(/^the +/, '');
  if (na < nb) {
    return -1;
  }
  if (na > nb) {
    return 1;
  }
  return 0;
}

export function tooltipText(description: string | undefined, maxLength: number = 80) {
  if (!description) {
    return description;
  } else if (description.length > maxLength) {
    return `${description.substring(0, maxLength)}...`
  } else {
    return description;
  }
}