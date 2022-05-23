import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { findByLabelText } from '@testing-library/react';
import './Search.css'


const filter = createFilterOptions();
const SearchBar = ({ items, setSearch, searchData }) => {
    // const [value, setValue] = React.useState(null);
    const [open, toggleOpen] = React.useState(false);
    console.log(searchData)
    const handleClose = () => {
        setDialogValue({
            title: '',
            price: '',
        });

        toggleOpen(false);
    };

    const [dialogValue, setDialogValue] = React.useState({
        title: '',
        price: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearch({
            title: dialogValue.title,
            price: parseInt(dialogValue.price, 10),
        });
        handleClose();
    };

    return (
        <div >
            <React.Fragment>
                {
                    items.length > 1 && <TextField
                        className='searchBar'
                        id="outlined-basic"
                        label="Search products"
                        variant="outlined"
                        value={searchData}
                        onChange={e => setSearch(e.target.value)}
                        sx={{
                            display: 'flex',
                            width: 70,
                            "& .MuiInputLabel-root": { color: "white" },
                            "& .MuiOutlinedInput-root.Mui-focused": {
                                "& > fieldset": {
                                    borderColor: "white"
                                }
                            },
                            borderRadius: 1,
                            "color": { color: 'white' },
                            input: {
                                color: "white"
                            }
                        }} />
                }
                <Dialog open={open} onClose={handleClose}>
                    <form onSubmit={handleSubmit}>
                        <DialogTitle>This product is not available!</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                We can inform you once we add it!
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button color="secondary" onClick={handleClose}>Cancel</Button>
                            <Button color="secondary" type="submit">Inform Me</Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </React.Fragment>
        </div>
    );
}

export default SearchBar;
