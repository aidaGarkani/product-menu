import React, { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import Typography from "@mui/material/Typography";
import "./List.css";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { prodsSorter } from "../utils/helpers";

const List = ({ items }) => {
  const [open, toggleOpen] = React.useState(false);
  const [selectedSort, setSelectedSort] = useState("name");
  useEffect(() => {}, [selectedSort]);
  return (
    <Box className="list" minHeight={"500"}>
      <Typography
        className="list-title"
        gutterBottom
        variant="h5"
        component="div"
      >
        Products:
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          autoFocus
          id="demo-simple-select"
          value={selectedSort}
          label="Filter By"
          onChange={(e) => setSelectedSort(e.target.value)}
          sx={{
            width: 300,
            borderRadius: 1,
            color: { color: "white" },
            input: {
              color: "white",
            },
            boxShadow: "0 1px 8px rgba(254, 254, 254, 0.5)",
          }}
        >
          <MenuItem value="name">By Name</MenuItem>
          <MenuItem value="priceh">By Price (High to Low)</MenuItem>
          <MenuItem value="pricel">By Price (Low to High)</MenuItem>
        </Select>
      </FormControl>
      <Box
        display="flex"
        sx={{
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {prodsSorter(selectedSort, items).map((prod) => (
          <ItemCard key={prod.id} product={prod} />
        ))}
      </Box>
      <Dialog open={open} onClose={() => toggleOpen(false)}>
        <form onSubmit={() => toggleOpen(false)}>
          <DialogTitle>
            This product is not available with this price!
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              We can inform you once we add it!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="secondary" onClick={() => toggleOpen(false)}>
              Cancel
            </Button>
            <Button color="secondary" type="submit">
              Inform Me
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
};

export default List;
