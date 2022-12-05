import { Button, TextField } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TitlebarBelowImageList from "./TitlebarBelowImageList";

function DigimonSearch(props) {
  const params = useParams();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState(
    params.searchTerm ? params.searchTerm : ""
  );
  const [fullResult, setFullResult] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [displayResult, setDisplayResult] = useState([]);

  const [selectedButton, setSelectedButton] = useState("");

  const levelsArray = [
    "Fresh",
    "In Training",
    "Rookie",
    "Champion",
    "Ultimate",
    "Mega",
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleButtonFilter = (event) => {
    console.log(event.target.value);
    let newSearchResult = [...searchResult];
    newSearchResult = newSearchResult.filter((digimon) => {
      return digimon.level
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setDisplayResult(newSearchResult);
    setSelectedButton(event.target.value);
  };

  const filterResult = (fullResult) => {
    const newSearchResult = [...fullResult];
    return newSearchResult.filter((digimon) => {
      return digimon.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(searchTerm);

    let newResult = [...fullResult];

    if (!searchTerm) {
      navigate(`/`);
    } else {
      navigate(`/search/${searchTerm}`);
      newResult = filterResult(newResult);
    }
    console.log(newResult);

    setSearchResult(newResult);
    setDisplayResult(newResult);
    setSelectedButton("");
  };

  //https://digimon-api.vercel.app/api/digimon
  //https://digimon-api.vercel.app/api/digimon/name/agumon
  //https://digimon-api.vercel.app/api/digimon/level/rookie
  useEffect(() => {
    console.log("Initial load");
    const url = "https://digimon-api.vercel.app/api/digimon";
    console.log(url);
    fetch(url).then((response) => {
      if (response.ok) {
        response.json().then((json) => {
          setFullResult(json);
          setSearchResult(searchTerm ? filterResult(json) : json);
          setDisplayResult(searchTerm ? filterResult(json) : json);
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
          placeholder="Digimon Name"
          autoFocus={true}
          sx={{ bgcolor: "background.paper" }}
          value={searchTerm}
          onChange={handleSearchChange}
        ></TextField>{" "}
        <Button variant="contained" onClick={handleSubmit} size="large">
          Search
        </Button>
      </form>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        margin={1}
      >
        <Stack spacing={1} direction="row">
          <label>Filter level by: </label>
          {levelsArray.map((level, index) => {
            return (
              <Button
                key={index}
                variant={selectedButton === level ? "contained" : "outlined"}
                size="small"
                value={level}
                onClick={handleButtonFilter}
              >
                {level}
              </Button>
            );
          })}
        </Stack>
      </Box>

      <TitlebarBelowImageList digimons={displayResult} />
    </div>
  );
}

export default DigimonSearch;
