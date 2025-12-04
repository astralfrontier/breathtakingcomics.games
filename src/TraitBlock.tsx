interface TraitBlockProps {
  children?: React.ReactNode;
  name: string;
  value: string;
  die?: string;
  hooks: string[];
}

export default function TraitBlock(props: TraitBlockProps) {
  const { name, value, die, hooks } = props;
  return (
    <section>
      <strong>{name}</strong>: {value} {die && <>({die})</>} &mdash;{" "}
      {hooks.join("; ")}
    </section>
  );
}
