import { useState } from "react";
import "./App.css";
import List from "./components/List";
import SearchBar from "./UI/SearchBar";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useFetchProducts from "./hooks/useFetchProducts";

function App() {
  const { loading, error, data } = useFetchProducts();
  const [searchData, setSearch] = useState("");

  if (loading) return <h1>Loading...</h1>;
  if (error) return alert(error);

  return (
    <div className="app">
      <AppBar>
        <Toolbar className="appBar">
          <Box
            className="app-logo"
            component="img"
            alt="App logo."
            src={"https://limitless.my/wp-content/uploads/2021/12/logo.svg"}
          />
          <Typography variant="h6" component="div">
            <SearchBar
              setSearch={setSearch}
              searchData={searchData}
              items={data}
            />
          </Typography>
        </Toolbar>
      </AppBar>
      {!loading && (
        <List
          items={data.filter(
            (item) =>
              item.title.toLowerCase().includes(searchData) ||
              item.price.includes(searchData)
          )}
        />
      )}
    </div>
  );
}

export default App;
