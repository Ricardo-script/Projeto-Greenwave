import styled from 'styled-components';

export const Content = styled.section`
    width: 100%;
`;
export const HeaderTop = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    border-bottom: 5px solid #dddddd;

    h1{
        color: #549635;
        display: flex;
        align-items: center;
        margin-left: 20%;
        font-size: 45px;

        @media(max-width: 595px){
            display:none;
        }
    }
`;

export const HeaderDown = styled.div`
 
    img{
        width: 100%;
        height: auto;
    }
`;

export const Logo = styled.div`
    width:220px;
    height: auto;
    display: flex;
    margin-left: 50px;

    @media(max-width: 595px){
        margin: 0 auto;
    }

    img{
        width:100%;
        height: auto;
    }

`;