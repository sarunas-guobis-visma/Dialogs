import {Outlet, useLocation} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import {Container} from "@mui/material";
import Navigation from "./Navigation";


export const BaseLayout = () => {
    const location = useLocation();

    return (
        <Container maxWidth="lg">
            <Navigation/>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <Outlet/>
            </CSSTransition>
        </Container>
    )
}