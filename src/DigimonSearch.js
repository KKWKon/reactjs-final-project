import { Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TitlebarBelowImageList from "./TitlebarBelowImageList";

function DigimonSearch(props) {
  const params = useParams();
  const [searchTerm, setSearchTerm] = useState(
    params.searchTerm ? params.searchTerm : ""
  );
  const [fullResult, setFullResult] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let newResult = [...fullResult];

    if (!searchTerm) {
      navigate(`/`);
    } else {
      navigate(`/search/${searchTerm}`);
      newResult = newResult.filter((digimon) => {
        return digimon.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }
    console.log(newResult);

    setSearchResult(newResult);
  };

  useEffect(() => {
    console.log("Initial load");
    const url = "https://digimon-api.vercel.app/api/digimon";
    console.log(url);
    fetch(url).then((response) => {
      if (response.ok) {
        response.json().then((json) => {
          console.log(json);
          setFullResult(json);
          setSearchResult(json);
        });
      }
    });
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="search"
          label="Search"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={handleSearchChange}
        ></TextField>{" "}
        <Button variant="contained" onClick={handleSubmit} size="large">
          Search
        </Button>
      </form>
      <TitlebarBelowImageList digimons={searchResult} />
    </div>
  );
}

export default DigimonSearch;
