import styled from "styled-components"

import SvgInstagram from "../assets/instagram.svg";
import SvgLinkedin from "../assets/linkedin.svg";
import SvgTwitter from "../assets/twitter.svg";

const Name = styled.h1`
  font-size: 30px;
  text-align: center;
  letter-spacing: 6px;
  margin-left: 3px;
  margin-top: 200px;
  font-weight: 700;
`

const Tagline = styled.h2`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  a {
    border-bottom: 1px solid #FF3355;
    &:hover {
      color: #FF3355;
    }
  }
`

const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`

const SocialListItem = styled.li`
  margin: 12px;
  svg {
    width: 36px;
    height: 36px;
    fill: #444;
    &:hover {
      fill: #FF3355;
    }
  }
`

export default function Home() {
  return (
    <>
      <Name>JAYANT SINGH</Name>
      <Tagline>
        Founder <a href="https://ekaisoft.com" target="_blank">Ekaisoft</a>
        {' '}-{' '}
        Engineer <a href="https://sublist.app" target="_blank">Sublist</a>
      </Tagline>

      <SocialList>
        <SocialListItem>
          <a href="https://www.linkedin.com/in/jayantsinghxyz" target="_blank">
            <SvgLinkedin />
          </a>
        </SocialListItem>
        <SocialListItem>
          <a href="https://twitter.com/jayantsinghxyz" target="_blank">
            <SvgTwitter />
          </a>
        </SocialListItem>
        <SocialListItem>
          <a href="https://www.instagram.com/jayantsinghxyz/" target="_blank">
            <SvgInstagram />
          </a>
        </SocialListItem>
      </SocialList>
    </>
  )
}
