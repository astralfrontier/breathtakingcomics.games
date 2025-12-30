interface FrontmatterBlockProps {
  label: string;
  value: string | null | undefined;
}

export default function FrontmatterBlock(props: FrontmatterBlockProps) {
  const { label, value } = props;
  return (
    value && (
      <>
        <strong>{label}</strong>: {value}
        <br />
      </>
    )
  )
}
