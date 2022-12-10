import { useMemo, useState } from "react";
import BannerDT from "./assets/images/bg-header-desktop.svg";
import BannerMB from "./assets/images/bg-header-mobile.svg";
import Filter from "./components/Filter/Filter";
import ListingCard from "./components/ListingCard/ListingCard";
import dataList from "./data/data.json";

function App() {
  const [data, setData] = useState(dataList);
  const [tags, setTags] = useState([]);

  const filteredListing = useMemo(() => {
    return tags.length > 0
      ? data.filter(({ role, level, languages, tools }) => {
          const filtered = [...languages, ...tools, role, level].filter((r) =>
            tags.includes(r)
          );
          return filtered.length > 0;
        })
      : data;
  }, [tags, data]);

  function clearTags() {
    setTags([]);
  }

  function selectTags(tag) {
    tags.includes(tag)
      ? setTags(tags.filter((el) => el !== tag))
      : setTags([...tags, tag]);
  }

  return (
    <div className="App">
      <header className="banner">
        <picture>
          <source srcSet={BannerDT} media="(min-width: 900px)" />
          <img src={BannerMB} alt="" />
        </picture>
      </header>
      <h1></h1>
      {tags?.length > 0 && (
        <section className="container">
          <Filter tags={tags} clearTags={clearTags} selectTags={selectTags} />
        </section>
      )}
      <main className="container listings">
        {filteredListing?.map((obj) => (
          <ListingCard key={obj.id} listing={obj} selectTags={selectTags} />
        ))}
      </main>
    </div>
  );
}

export default App;
