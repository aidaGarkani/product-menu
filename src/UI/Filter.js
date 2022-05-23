
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import './Filter.css'


const Filter = ({ items, setSearch, searchData }) => {
    const [open, toggleOpen] = React.useState(false);
    console.log(searchData)
    const handleClose = () => {
        setDialogValue({
            price: '',
        });

        toggleOpen(false);
    };

    const [dialogValue, setDialogValue] = React.useState({
        price: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearch({
            price: dialogValue.price,
        });
        handleClose();
    };

    return (
        <div >
            <React.Fragment>
                <TextField
                    className='searchBar'
                    id="outlined-basic"
                    label="Filter with price"
                    variant="outlined"
                    value={searchData}
                    onChange={e => setSearch(e.target.value)}
                    sx={{
                        width: 30,
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
                <Dialog open={open} onClose={handleClose}>
                    <form onSubmit={handleSubmit}>
                        <DialogTitle>This product is not available with this price!</DialogTitle>
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

export default Filter;
