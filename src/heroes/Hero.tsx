import { useParams } from "react-router";

function Hero() {
  const { hero } = useParams();

  return (
    <>
      <p>Hero: {hero}</p>
    </>
  );
}

export default Hero;
