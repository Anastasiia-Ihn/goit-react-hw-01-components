import styled from "styled-components";

export const ContainerUser = styled.div`
 margin-left: auto;
    margin-right: auto;

width: 300px;
height: 300px;
background-color: #865896;
color: black;
`

export const Description = styled.div`
width: 100%;
height: 100%;
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

// export const Location = styled.p`
// font-size: 20px;
// align-items: center;
// `

export const Stats = styled.ul`
display: flex;
gap: 5px;
margin: 0;
padding: 0;

background-color: #859632;

`

export const ElemStats = styled.li`
text-decoration: none;
display: flex;
flex-wrap: wrap;
font-size: 18px;

width: calc((300px - 10px)/3);
`

export const Label = styled.span`
text-align: center;
`

export const Quantity = styled.span`
font-weight: 800;`