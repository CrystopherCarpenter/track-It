import { useLocation } from "react-router";
import React from 'react';
import { FooterNavBar, FooterButton } from './style';

function Footer() {
        const { pathname } = useLocation();
        const isHomePage = pathname === `/` || pathname === `/cadastro`;

        return (!isHomePage && (
                <FooterNavBar>
                        <FooterButton>Hábitos</FooterButton><FooterButton>Hoje</FooterButton><FooterButton>Histórico</FooterButton>
                </FooterNavBar>
        )
        );
}

export default Footer;