import ListingCard from "./components/ListingCard/ListingCard";
import BannerDT from "./assets/images/bg-header-desktop.svg";
import BannerMB from "./assets/images/bg-header-mobile.svg";
import data from "./data/data.json";

function App() {
  return (
    <div className="App">
      <div className="banner">
        <picture>
          <source srcSet={BannerDT} media="(min-width: 900px)" />
          <img src={BannerMB} alt="" />
        </picture>
      </div>
      <h1></h1>
      <div className="container listings">
        {data?.map((obj) => (
          <ListingCard key={obj.id} listing={obj} />
        ))}
      </div>
    </div>
  );
}

export default App;
