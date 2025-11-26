import { useParams } from "react-router";

function Support() {
  const { support } = useParams();

  return (
    <>
      <p>Support: {support}</p>
    </>
  );
}

export default Support;
