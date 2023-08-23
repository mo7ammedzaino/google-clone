import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import Search from "./Search.jsx";

import "./SearchPage.css";
import SearchIcon from "@mui/icons-material/Search";

import {
  Description,
  Image,
  LocalOffer,
  Room,
  MoreVert,
} from "@mui/icons-material";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  // const { data } = useGoogleSearch(term);
  // console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img className="searchPage__logo" src="img/logo.png" alt="Google" />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <Description />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <Image />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage__option">
                <LocalOffer />
                <Link to="/shopping">shopping</Link>
              </div>
              <div className="searchPage__option">
                <Room />
                <Link to="/map">maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVert />
                <Link to="/more">more</Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {true && (
  <div className="searchPage__results">
    <p className="searchPage_resultCount">
      About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
    </p>
    {data?.items.map(item => (
      <div className='searchPage result' key={item.link}>
        <a href={item.link}>{item.displayLink}</a>
        <a className="searchPage__resultTitle" href={item.link}>
          <h2>{item.title}</h2>
        </a>
        <p className="searchPage__resultSnippet">{item.snippet}</p>
      </div>
    ))}
  </div>
)} */}
    </div>
  );
}

export default SearchPage;
