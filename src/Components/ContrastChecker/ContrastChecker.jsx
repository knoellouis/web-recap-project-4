import useSWR from "swr";
import "./ContrastChecker.css";

// passes all arguments to fetch (...args) and turns the response into JSON.
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

// When hex changes, the URL changes, and SWR fetches again by itself. No useEffect needed

export default function ContrastChecker({ hex, contrastText }) {
  //takes a key (here the URL) and a fetcher function. It fetches, caches by key, and gives you data, error and isLoading
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
    // CSS style by state e.g. .contrast-badge[data-level="fail"]
    <div className="contrast-badge" data-level={level}>
      <span className="contrast-ratio">{data.ratio}</span>
      <span>{labels[level]}</span>
    </div>
  );
}
