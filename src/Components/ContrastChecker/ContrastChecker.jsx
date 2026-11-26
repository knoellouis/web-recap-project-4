import useSWR from "swr";
import "./ContrastChecker.css";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function ContrastChecker({ hex, contrastText }) {
  const { data, error, isLoading } = useSWR(
    `https://webaim.org/resources/contrastchecker/?fcolor=${contrastText.replace("#", "")}&bcolor=${hex.replace("#", "")}&api`,
    fetcher,
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  function ratioResults(data) {
    const colorData = {
      pass: { text: "passed", color: "green", textColor: "white" },
      inBetween: { text: "not quite", color: "orange", textColor: "black" },
      fail: { text: "failed", color: "red", textColor: "black" },
    };
    if (data.AA === "pass" && data.AALarge === "pass") {
      return colorData.pass;
    } else if (data.AA === "fail" && data.AALarge === "pass") {
      return colorData.inBetween;
    } else if (data.AA === "fail" && data.AALarge === "fail") {
      return colorData.fail;
    }
  }

  return (
    <div
      style={{
        backgroundColor: ratioResults(data).color,
        color: ratioResults(data).textColor,
      }}
    >{`Overall contrast score: ${data.ratio} - ${ratioResults(data).text}!`}</div>
  );
}
