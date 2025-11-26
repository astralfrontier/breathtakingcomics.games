import { useParams } from "react-router";

function Villain() {
  const { villain } = useParams();

  return (
    <>
      <p>Villain: {villain}</p>
    </>
  );
}

export default Villain;
