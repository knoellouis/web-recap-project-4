import useSWR from "swr";
import "./ContrastChecker.css";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

const labels = {
  pass: "Passed",
  almost: "Almost there, Large text only",
  fail: "Failed",
};

function getLevel(data) {
  if (data.AA === "pass") return "pass";
  if (data.AALarge === "pass") return "almost";
  return "fail";
}

export default function ContrastChecker({ hex, contrastText }) {
  const { data, error, isLoading } = useSWR(
    `https://webaim.org/resources/contrastchecker/?fcolor=${contrastText.replace("#", "")}&bcolor=${hex.replace("#", "")}&api`,
    fetcher,
  );

  if (error)
    return (
      <div className="contrast-badge" data-level="error">
        Check failed
      </div>
    );
  if (isLoading)
    return (
      <div className="contrast-badge" data-level="loading">
        Checking contrast…
      </div>
    );

  const level = getLevel(data);

  return (
    <div className="contrast-badge" data-level={level}>
      <span className="contrast-ratio">{data.ratio}</span>
      <span>{labels[level]}</span>
    </div>
  );
}
