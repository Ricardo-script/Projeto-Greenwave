import styled from 'styled-components';

export const Container = styled.main`
    
`;

export const HeaderTable = styled.nav`
    width: 100%;
    height: 40px;
    background: #232341;
    display: flex;
    width: 90%;
    margin: 10px auto;
    align-items: center;

    @media(max-width:1280px){
        height:140px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

   
    span{
        color: #FFF;
        margin-left: 220px;
        color:#BDBDBD;

        @media(max-width: 1280px){
            margin-left: 90px;
        }

         &:nth-of-type(1){
            @media(max-width: 375px){
                margin-left: 0;
                margin: 0 auto;
            } 
         }
        
        &:nth-of-type(2){
            margin-left: 150px;
            color: #BDBDBD;

            @media(max-width: 1100px){    
                margin-left: 100px;
            }

            @media(max-width: 950px){
                margin-left: 11px;
            }
        }
    }

    .filtro{
        margin-left: 10px;

        span{
            @media(max-width: 375px){
                position: absolute;
                top: -15px;
                right: 0;
            }
        }
        
        @media(max-width: 375px){
            display: flex;
            flex-direction: column;
            margin: 0 auto;
            position: relative;
        }

        select{
            width: 250px;
            height: 25px;
            outline: none;
            color:#848484;

            @media(max-width: 375px){
                width: 300px;
                margin-top: 15px;
                margin-bottom: 15px;
            }
            
        }

        button{
            border: 0;
            width: 200px;
            height: 26px;
            border-radius: 4px;
            background:#47475F;
            margin-left: 30px;
            cursor: pointer;
            color:#BDBDBD;

            @media(max-width: 375px){
                margin: 0 auto;
                height: 33px;
            }

            &:hover{
                background:#549638;
            }

            &:active{
                position: relative;
                top: 1px;
            }

        }
    }
`;

export const AreaTable = styled.section`
    width: 90%;
    height: 482px;
    overflow-y: scroll;
    margin: 0 auto;
    margin-bottom: 100px;

    @media(max-width:950px){
        width:97%;

    }

    &::-webkit-scrollbar {
        width: 20px;
    }

    &::-webkit-scrollbar-track-piece {
        background-color: #EEE;
        border-left: 1px solid #CCC;
    }

    &::-webkit-scrollbar-thumb:vertical,
    &::-webkit-scrollbar-thumb:horizontal {
        background-color: #549635;
        border-radius:5px;
    }

    &::-webkit-scrollbar-thumb:vertical:hover,
    &::-webkit-scrollbar-thumb:horizontal:hover {
        background-color: #717171;
    }

    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
        @media(max-width: 375px){
            width: 1000px;
        }
    }

    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
        font-size: 13px;

        @media(max-width: 375px){
            font-size: 10px;
        }
    }

    tr:nth-child(even) {
        background-color: #dddddd;
    }
    
`;