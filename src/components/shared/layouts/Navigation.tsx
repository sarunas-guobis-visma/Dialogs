import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Link} from "react-router-dom";

function samePageLinkNavigation(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
) {
    if (
        event.defaultPrevented ||
        event.button !== 0 || // ignore everything but left-click
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        event.shiftKey
    ) {
        return false;
    }
    return true;
}

interface LinkTabProps {
    label?: string;
    to?: string;
    selected?: boolean;
}

function LinkTab(props: LinkTabProps) {
    return (
        <Tab
            component={Link}
            {...props as any}
        />
    );
}

export default function Navigation() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        // event.type can be equal to focus with selectionFollowsFocus.
        if (
            event.type !== 'click' ||
            (event.type === 'click' &&
                samePageLinkNavigation(
                    event as React.MouseEvent<HTMLAnchorElement, MouseEvent>,
                ))
        ) {
            setValue(newValue);
        }
    };

    return (
        <Box sx={{width: '100%'}}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="nav tabs example"
                role="navigation"
            >
                <LinkTab label="State" to="/dialogs/state"/>
                <LinkTab label="Inverse of control" to="/dialogs/inverseControl"/>
                <LinkTab label="Dialog manager" to="/dialogs/modalManager"/>
                <LinkTab label="Location" to="/dialogs/location"/>
            </Tabs>
        </Box>
    );
}
