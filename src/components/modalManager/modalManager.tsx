import {createModalManager} from "@neeppy/modal-manager";
import {Dialog} from "@mui/material";

const {store, modal} = createModalManager({
    defaultVariant: 'default',
    variants: {
        default: ({settings, children}) => (
            <Dialog open={settings.open}>
                {children}
            </Dialog>
        ),
    },
});

export {store, modal};