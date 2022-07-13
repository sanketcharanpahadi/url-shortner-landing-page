import { useEffect, useRef, useState } from "react";

export default function Shorten(props) {
  const used = useRef(true);
  const [isCopied, setIsCopied] = useState(false);
  const [loading, setLoading] = useState("loading...");

  const clipboardHandler = (e) => {
    if (props.sUrl.length !== 0) {
      navigator.clipboard.writeText(props.sUrl);
      setIsCopied(true);

      e.target.classList.remove("bg-primary-cyan");
      e.target.classList.add("bg-dark-violet");
      e.target.classList.add("text-white");
    }
  };

  useEffect(() => {
    const getShortUrl = async () => {
      try {
        const response = await fetch(
          `https://api.shrtco.de/v2/shorten?url=${props.oUrl}`
        );
        const data = await response.json();
        props.shortLinkHandler(
          data.result["short_link"],
          props.link,
          true,
          props.link.id
        );
      } catch (error) {
        setLoading("Not a Valid URL");
      }
    };
    if (used.current && !props.link.shorted) {
      getShortUrl();
    }

    return () => {
      used.current = false;
    };
  }, [used, props]);

  return (
    <div className="shorten-link w-11/12 mx-auto md:w-3/4 md:flex md:justify-between md:bg-white md:items-center md:rounded-lg">
      <p className="original-link bg-white mb-[1px] px-4 py-3 rounded-t-md">
        {props.oUrl}
      </p>
      <div className="shortened bg-white py-3 px-4 rounded-b-md md:flex md:justify-between md:items-center md:gap-6">
        <p className="mb-2 text-primary-cyan">
          {props.sUrl.length === 0 ? loading : props.sUrl}
        </p>
        <button
          type="submit"
          className="copy w-full bg-primary-cyan text-white font-bold py-2 rounded-md md:w-28 md:py-2 md:text-lg md:rounded-lg md:px-2 mb-2"
          onClick={clipboardHandler}
        >
          {isCopied ? "Copied!" : "copy"}
        </button>
      </div>
    </div>
  );
}
