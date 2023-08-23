import "./index.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";

function Search({ hideButtons = false, value, onChange, onSubmit }) {
  return (
    <form className="search" /*hideButtons={hideButtons}*/>
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input value={value} onChange={(e) => onChange(e.target.value)} />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={onSubmit} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined"> I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonsHiddens"
            type="submit"
            onClick={onSubmit}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search__buttonsHiddens" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
