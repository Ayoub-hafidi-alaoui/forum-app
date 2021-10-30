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
               <SearchBarWrapper>
                   <SearchBar>
                       <SearchIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png" alt="search"/>
                       <SearchInput placeholder="Search ..."/>
                   </SearchBar>
               </SearchBarWrapper>
               <SideIcons>
                   <NotificationIcon src="data:image/png;base64,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" alt="Notification"/>
                   <ProfilIcon src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAAD09PSGhoa0tLT39/etra11dXX7+/uWlpbq6urFxcXl5eXX19fCwsLKysptbW2Li4vf398wMDBLS0ufn59FRUVgYGA8PDx/f38oKCju7u6cnJylpaXZ2dm5ubkfHx9TU1MSEhINDQ1oaGgrKys/Pz83NzdaWlpPT09s6zRTAAAIhUlEQVR4nO2d6XbiOgyAJ6GEsKZAKWtZ20Lf/wWndJmpZGez5Ej0+Pt5z8UjN7a1WJL//AkEAoFAIBAIBAKB2yHuJ+P56/4URdFpv5iPk6wtLRIf6WR2H1k4dp4mqbRwDGTLqW16X5xbmbSANHrdVcH0Pll119JiOjOcl07vk/lQWlQnhpeK87tyub05Dp5rzO/K80Ba5Hp0a87vSlda6BoMXxwmGEXTm1mqG6f5XdlIi16Jdp0TBjO/AUtnsCdM8F07TqQnUEZGmt8V5UbOiDzBKBpJT6KIogmuOrO7bLCOe5Ms2XSOtznFfu7sWn38/6ajZe6OVTvFYY7Ayzw9l3VyfqFUMfbsK28TF/xmbTd+TipNuPRsk7Vb5uO2rXM8a3SNbab2vIrr17M5Wc/e5a1NYhHzjvDbxKu0DgxMGafVN9PAEunQthXfzBVa6/emMfvgSVJHzHW2rDnCUvc6jU9YvFbtMVrGFIvUTNMY0nUcBjGCqnWXgUfWtD34jaE19IQZsfF1dvNj2/hEVfMRDU3h6sVu8UA9VjndwbvwyXmkGRqp/nnlhRhZ3BRF9giH2usI29wxrdEreJ3u2KSkcOA8HtChdWGSkQRWFbTToYdG06Awnjg/ofERNZhuD1AkqkswgcMdWGQkkUKJ6B7BAg4o7+yj+Br98ENHs3yAGIVZ6AoshgPKX9YcgDxuJjcEOsPiGzGFV4UzhiHh5dyL9EZEVjfHzRGya6TjNTDOfeRQ0GsYMJCOf++ANDzRI6hhpU1TeJTyxHGhr8+xtSnAEBmPP9fyMKY70Ix0931/Av1gl6AWJzBAxrNnoFVzzzKmO3CGPFebI8UzNG56ndA8Q55VulM8Qx5/NVE1Q6gteJLvxmBM6bAwlIbnZIcaaMwypjswSsMTGoPuE4+OdQdmeU05Irjo+kLayUeuDsdFgweHjMIahvQ5VD5UhywOGQkYGuM4+KDhvWAYkQZMo5kyjAhLNKTVoZGjQN81KCRcNSfHHyhdj669oIaNtgwyEoECRerGo4OuUqirCoW8pW22Kygv+JU4HLq24PHHiKBlRVOJOI+aSUYaKF/rTBkLJ6lqWKRm8jPFVEbXreLh4C9QAgXhZhrfmGvJT8TJGO5yoftk8Xj3P3AprKurj1O+V6xSUjCyS93OeKNcQ0OawhdYNKcrsQke5MQupztmNVB9Vxhn0igrnTlg6fZ1v6JZ1aciH+ofxgqLjvWcgq1ZcCMdvkBYKl/qLDJL0Zu6wudXU8bqvuLY/DHVgufHPCii6LHaSp1go+iKlvTgH+wsYkbj8lyR1PIBFVkzP7FKWmqHY1u77gJvlJxGEbN8S7w3M0pRPlBYufaJbT9dmY9sk4x3eb0zHhuXvCr2IssPHjb9n0U+cbZ5sH++SGl55Rcpdn8gL/POeDxeXorbZmhxCu2kh0Lhq3BQ/AU/sDa9qoF8FL8Ul9Y0/5FPmK1AP/cIKeUofR1akbVr/5aL+F1hZWzF2eUoClqUE9dthPVux+io4qpOZlZ3F3FQEvutRT/PiDN5uJETxqBi0737W/x+38SbRcn0FjNNRelOTGa5yuM4f1IWbnIlHm46uE773NkMb/7rIdbZLkme3kl22e2o9kAgEAgEAoFAIKCF3jbb7XZ3mPf/lm0V3vTWIO3tNp3yWM35eXM30H5XYTLIxofyAM0PDq3RDX3PrFs9yvaTx9t4ziO3N3A17lWleplszQ6W9cltrCxOOym+Aa7OY6IxRhV3aQ31IcextljVmmN5Qpaazta12V2VZY5qviPu58jHRoUlMHJ7cqUae3nlsa76ppMrlZqee8TtOrsekuXqcbUPeDof7jvLFmTZuT+cq2VtzMW0Y3layaKVZMWHfi9LWmVXjNFJqEbPnk/6zWqeVLe+hslz8RN0EvmmcVHSzKI1rJtZ0R6Oi77lpfGVOij4m7dcq5O3BZbDS8Od6fIfPXqkZWjv8pNUGnUecT3eP57pns8wN9mowdJ8e/b5u/vKk3cwyXOiG9OMOXboG19zgMnB/k80lJtpTyBd8VqQfbu120ipUE6BBLcXYC80aWKhWi3RqY/uFVvrM7veUzStL6v5qpq3Bg48+1PG+wx+/82RzfL12u3E9vDYwqexMbDUqBx9BnAssWzfvZot5q/HoiGLJvbfP9Viq3praWo5RptQwZanaT0dqJaHx5oxoywa2M/eNyt9m7ITzSl6qRI2bYzmQkTmFD04/eYTnE1GFsw/L/8FlWEJN1tkZpTEcfS+AxgORdN1kMbNHbObYVTbr5oORa+NwBCvaWMskubvaY2DgFXvG6NLFEIamp/zr4w3gUxjFWyiMh4FRuxQ5nrWOAz44os4GC1VCokNY7burbhDldzjNjhczHVjg8eVe/kFG/9vPMPig1TySQ3sLPIcp9jvlczmQc9d8ehE3MtQtkc69jI4TCsUwxd+OLONMq843tlZ8Q9JAf3BGVor4nNGumq+zX7WoLizfAMn5AzT4+0oBiyfaoZOviN1PGSScrz+RwUZ4FTjFC1S+TQz43KIaoDAEOJeQ65gChUGMbCIDEEdzafRuqKZychf0VEtgM4Gmi8HbdKVtDL8pA2NEJJtil4Z1dLsD70aQjkckO6Rf03jE5SwRNHRqGOn9KOn36Dzj5JnBiPdZPOBDXi9TwltwhxgPe3w4EakGFpwNUi/D/Yf5AcTRoID6dCGVzKuGaIu3Tq04RXkJLqnRKJAKaOIVKBg7mFTqHc09b6FiT3uehoqi04aayGF1qT7ZSl/yZ0f3F0e3zVNXLjby1xVr75xv0i0vAagEnc3P789ty7cH9GypiEr5PfP0D176PfP8Fa0hbv7lFvepAyCk8/ZJsEfe/cJWh450gipnmxSXLyqgRW1YO4u/6UNBZwetEQ4A4FAIBAIBAKBwC/nL37RZ/saFNHXAAAAAElFTkSuQmCC" alt="profil" />
               </SideIcons>
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
const SearchBarWrapper=styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70%;
`
const SearchBar=styled.div`
    background-color:#f3f3f3;
    height: 60% ;
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 4px;
    width: 40%;
    margin: 10px;

`
const SearchIcon=styled.img`
    height: 30px;
    width: auto;
    object-fit: contain;
    margin-right: 4px;
`
const SearchInput=styled.input`
    border: none ;
    outline: none ;
    font-size: 14px;
    background: none;
`
const SideIcons=styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height:100%;
`
const NotificationIcon=styled.img`
    width: 40px;
`
const ProfilIcon=styled.img`
    width: 40px;
`