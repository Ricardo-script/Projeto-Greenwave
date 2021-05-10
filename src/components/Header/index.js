import React from 'react';
import {Content, HeaderTop, Logo, HeaderDown} from './styles';
import logo from '../../assets/logo.png';
import fundo from '../../assets/headerDown.jpg';

export default function Header(){
    return(
        <Content>
             <HeaderTop>
                <Logo>
                    <img src={logo} alt="logo" />
                </Logo>
                <h1>Controle Operacional</h1>
            </HeaderTop>
            <HeaderDown>
                <img src={fundo} alt="fundo" />
            </HeaderDown>
        </Content>
    );
}