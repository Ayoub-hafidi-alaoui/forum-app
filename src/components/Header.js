import React from 'react'
import styled from 'styled-components'
function Header() {
    return (
       <Wrapper>
           <ContentWrapper>
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
const ContentWrapper=styled.div``
