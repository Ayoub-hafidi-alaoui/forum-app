import React from 'react'
import styled from 'styled-components'
function Header() {
    return (
       <Wrapper>
           <ContentWrapper> 
               <LogoWrapper>
                   <Logo src="https://www.ptvgroup.com/fileadmin/_processed_/5/e/csm_Header-Developer-Zone_810d67bc5f.jpg" alt="developer"/>
                   <LogoTitle>Developer</LogoTitle>
               </LogoWrapper>
           </ContentWrapper>
       </Wrapper>
    )
}

export default Header

const Wrapper=styled.div`
    background-color: white ;
    width: 100%;
    height: 70px;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    z-index: 1;
    box-shadow : 0px 2px 4px rgba(0,0,0,0.1);
`
const ContentWrapper=styled.div`
    width:1270px;
    height: 90%;
    display:flex;
    align-items: center;
`
const LogoWrapper=styled.div`
    display: flex;
    height: 60%;
    width: 20%;
    justify-content: space-between;
`
const Logo=styled.img`
    height: 100%;
    width: auto;

`
const LogoTitle=styled.div`
    font-family: 'bebas-neue-pro';
    font-size: 34px;
    font-weight: 600;
`