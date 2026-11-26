import { useEffect, useState } from "react";

export default function CopyToClipboard({ hex }) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  }, [isCopied]);

  async function handleCopy(hex) {
    try {
      await navigator.clipboard.writeText(hex);
      setIsCopied(true);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <button type="button" onClick={() => handleCopy(hex)}>
      {isCopied ? "Copied" : "Copy"}
    </button>
  );
}
