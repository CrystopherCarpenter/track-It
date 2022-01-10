import { useLocation } from "react-router";
import React from 'react';
import { FooterNavBar, FooterLink, Progressbar } from './style';
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useContext } from "react";
import UserContext from "../../Context/UserContext";

function Footer() {
        const { pathname } = useLocation();
        const { progress } = useContext(UserContext);
        const isHomePage = pathname === `/` || pathname === `/cadastro`;

        return (!isHomePage && (
                <FooterNavBar>
                        <Link to="/habitos"><FooterLink>Hábitos</FooterLink></Link>
                        <Link to="/hoje">
                                <Progressbar>
                                        <CircularProgressbar
                                                value={progress}
                                                text={`Hoje`}
                                                background
                                                styles={buildStyles({
                                                        backgroundColor: "#52B6FF",
                                                        textColor: "#fff",
                                                        pathColor: "#fff",
                                                        trailColor: "transparent"
                                                })}
                                        />
                                </Progressbar>
                        </Link>
                        <Link to="/historico"><FooterLink>Histórico</FooterLink></Link>
                </FooterNavBar>
        )
        );
}

export default Footer;
