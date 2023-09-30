import styled from "styled-components";

export const ContainerUser = styled.div`
 margin: auto;
margin-top: 100px;
margin-bottom: 100px;
width: 300px;
height: 400px;
color: black;
`

export const Description = styled.div`
padding-top: 15px;
padding-bottom: 15px;
width: 100%;
background-color: #fff999;
`

export const Avatar = styled.img`
display: block;
    margin-left: auto;
    margin-right: auto ;

width: 80px;
height: 80px;

`

export const Name = styled.p`
font-size: 24px;
text-align: center;
`

export const Tag = styled.p`
font-size: 20px;
 text-align: center;
`

export const Stats = styled.ul`
display: flex;
gap: px;
margin: 0;
padding: 0;

background-color: #859632;
`

export const ElemStats = styled.li`
text-decoration: none;
display: flex;
flex-wrap: wrap;
border: 1px solid #fff822 ;
font-size: 18px;
justify-content: center;
align-items: center;
width: calc((300px)/3);
height: 80px;
`

export const Label = styled.span`
width: 98px;
text-align: center;
`

export const Quantity = styled.span`
width:98px;
font-weight: 700;
text-align: center;
`