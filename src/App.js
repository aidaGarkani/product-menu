import { useState, useEffect } from "react";
import './App.css';
import List from './components/List'
import SearchBar from './UI/SearchBar'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchData, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://staging.flowerchimp.com/asset/json/products.json"
    )
      .then((res) => res.json())
      .then(data => setData(data.products));
  }, []);

  return (
    <div className="app">
      <AppBar >
        <Toolbar className="appBar">
          <Box
            className="app-logo"
            component="img"
            alt="App logo."
            src={'https://limitless.my/wp-content/uploads/2021/12/logo.svg'}
          />
          <Typography variant="h6" component="div">
            <SearchBar
              setSearch={setSearch}
              searchData={searchData}
              items={data} />
          </Typography>
        </Toolbar>
      </AppBar>

      {
        data.length > 0 &&
        <List items={data.filter(item => item.title.includes(searchData) || item.price.includes(searchData))} />
      }
    </div>
  );
}

export default App;
