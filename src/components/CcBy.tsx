import Cc from "@/assets/cc.svg?url"
import By from "@/assets/by.svg?url"

export default function CcBy() {
  return (
    <article>
      <p>
        <a href="https://breathtakingcomics.games/">Breathtaking Comics</a> © 2026
        by <a href="https://astralfrontier.org">Bill Garrett</a> is licensed under{" "}
        <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>{" "}
        <img
          src={Cc}
          alt=""
          style={{ maxWidth: "1em", maxHeight: "1em", marginLeft: ".2em" }}
        />
        <img
          src={By}
          alt=""
          style={{ maxWidth: "1em", maxHeight: "1em", marginLeft: ".2em" }}
        />
      </p>
      <p>
        <strong>Note:</strong> Images credited to specific artists are not included
        in this license, and are used with permission.
        Check the credits for each image before using it.</p>
    </article>
  );
}
