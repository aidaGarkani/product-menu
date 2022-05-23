import React from 'react';
import ItemCard from '../components/ItemCard';
import Typography from '@mui/material/Typography';
import './List.css';
import Box from '@mui/material/Box';
import Filter from '../UI/Filter'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';


const List = ({ items }) => {
    const [open, toggleOpen] = React.useState(false);
    return (
        <Box className='list'
            minHeight={"500"}
        >
            <Typography className='list-title' gutterBottom variant="h5" component="div">
                Products:
            </Typography>
            <Typography className='list-title' component="div">
                <Filter items={items} />
            </Typography>
            <Box display="flex"
                sx={{
                    flexWrap: 'wrap',
                    justifyContent: 'space-between'
                }}>
                {items.map((prod) => (
                    <ItemCard key={prod.id} product={prod} />
                )
                )}
            </Box>
            <Dialog open={open} onClose={() => toggleOpen(false)}>
                <form onSubmit={() => toggleOpen(false)}>
                    <DialogTitle>This product is not available with this price!</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            We can inform you once we add it!
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button color="secondary" onClick={() => toggleOpen(false)}>Cancel</Button>
                        <Button color="secondary" type="submit">Inform Me</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </Box>
    );
}

export default List;
