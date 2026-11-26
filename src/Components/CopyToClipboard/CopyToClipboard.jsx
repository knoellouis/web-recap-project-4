import { useEffect, useState } from "react";

export default function CopyToClipboard({ hex }) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const intervalId = setTimeout(() => {
        setIsCopied(false);
      }, 3000);

      return () => clearTimeout(intervalId);
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
    <button type="button" onClick={() => handleCopy(hex)} disabled={isCopied}>
      {isCopied ? "Copied" : "Copy"}
    </button>
  );
}
