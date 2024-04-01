import React from 'react';
import { Box, Stack, Typography, List, ListItem, ListItemText, ListItemButton,
    Accordion, AccordionSummary, AccordionDetails,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/material/styles';
import useDialog from '../hooks/useDialog';

const StyledListItem = styled(ListItem)(({ theme }) => ({
    color: theme.palette.text.darkBlue,
}));

const Home = () => {
    const [DialogComponent, openDialog] = useDialog();

    return (
        <Box sx={{ mx: 8 }}>
            <Stack spacing={2}>
                <Typography variant="h5" component="h1" color="text.darkBlue">
                    Life Strategy
                </Typography>
                <Typography variant="body1" component="h1" color="text.darkBlue">
                    Is an integrated set of choices and actions that enables a person to achieve
                    the best possible outcomes in order to have the desired life.
                </Typography>
                <Typography variant="h5" component="h1" color="text.darkBlue">
                    Design your desired Life
                </Typography>
                <Typography variant="h5" component="h1" color="text.darkBlue">
                    Create your Life Strategy
                </Typography>
            </Stack>
        </Box>
    );
};

export default Home;
