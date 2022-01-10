import { useLocation } from "react-router";
import React from 'react';
import { FooterNavBar, FooterButton } from './style';
import { Link } from "react-router-dom";

function Footer() {
        const { pathname } = useLocation();
        const isHomePage = pathname === `/` || pathname === `/cadastro`;

        return (!isHomePage && (
                <FooterNavBar>
                        <Link to="/habitos"><FooterButton>Hábitos</FooterButton></Link>
                        <Link to="/hoje"><FooterButton>Hoje</FooterButton></Link>
                        <Link to="/historico"><FooterButton>Histórico</FooterButton></Link>
                </FooterNavBar>
        )
        );
}

export default Footer;