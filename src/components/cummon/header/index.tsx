import axios from "axios";
import { useEffect, useState, useTransition } from "react";
import { HeaderComponent, FindWrapper } from "./styles";

export const Header = () => {
  const [searchText, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);

  console.log("%crender", "background: #222; color: #ff0000")

  useEffect(() => {
    console.log("%crequest", "background: #222; color: #0077ff")
    if (!searchText) {
      setData(null);
      return;
    }
    setLoading(true);
    if (searchText) {
      axios
        .post("http://localhost:5000/api/find", { search: searchText })
        .then((res) => {
          setData(res.data);
        })
        .finally(() => setLoading(false));

    }
  }, [searchText]);

  return (
    <HeaderComponent>
      Header
      <input
        type="text"
        placeholder="search"
        value={searchText}
        onChange={(e) => setSearch(e.target.value)}
      />
      {searchText && loading ? (
        <span>loading...</span>
      ) : data ? (
        <FindWrapper>
          {" "}
          {data.map((e: any) => (
            <div key={e.url}>{e.name}</div>
          ))}
        </FindWrapper>
      ) : null}
    </HeaderComponent>
  );
};
