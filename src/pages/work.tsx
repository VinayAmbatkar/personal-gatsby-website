import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/react"
import { WorkHeroComponent } from "../components/common/hero"
import { withTheme } from "../hoc/theme"
import { withSound } from "../hoc/sound"
import { Curvy } from "../components/homepage/curvy"
import { Center } from "../components/common/center"
import { Footer } from "../components/common/footer"
import SEO from "../components/seo"

const work = [
  {
    name: "Crusher",
    date: "2021",
    background: `linear-gradient(180deg, #759CE8 0%, #9F8FFF 100%)`,
    image: "/images/work/crusher.jpg",
    position: "Founder",
    desc: `Testing is hard and frustrating. We're building open-source no-code web testing. It's like testing on steroid.<br/>
    Developer don't need to create framework, write boring scripts. <br/>Testing which earlier took several day, now is 5 mins job.<br/>
    `,
    tags: "figma,engineering, product, open source, kubernetes, terraform",
    rightAligned: false,
  },
  {
    name: "Headout",
    date: "2019-21",
    background: `linear-gradient(180deg, #F253B2 0%, #FF9D7E 100%)`,
    image: "/images/work/headout.jpg",
    position: "Full stack engineer",
    desc: `Worked as full stack dev for US based travel startup processing over 10mn$ GMV/month. <br/>
    Worked on executed crucial project e2e to increase CVR, onboard new supply partner, improve performance and architecting system.<br/>
    Worked solo and on team e2e across frontend, backend and devops.
   `,
    tags: "React,Next, Tailwind, Styled Component, Docker, AWS, Kotlin, Java, Spring, Webpack",
    rightAligned: true,
  },
  {
    name: "Consulting",
    date: "2021",
    position: "Full stack engineer",
    background: `linear-gradient(180deg, #FFEE59 0%, #AADC6A 100%)`,
    image: "/images/work/consulting.jpg",
    desc: `Consulted YC startups in dev tool spaces and one 500 startup. Worked on Webpack, Ant Design and devops.<br/>
    For detailed outlook on what I did, get in touch with me.
    `,
    tags: "Frontend,Backend, React, Webpack, Javascript, NextJS",
    rightAligned: false,
  },
  {
    name: "Social API",
    date: "2017",
    position: "Open source contributor",
    background: `linear-gradient(180deg, #5CC8A8 0%, #B38FFF 100%)`,
    image: "/images/work/social_api.jpg",
    desc: `Built open-ended ecosystem of Login + Auto posting integration for Drupal
    <br/>
    Created framework to add new social network < 5 mins
    <br/>
    Added support for over 30+ network. Currently used by 6000 > websites.
    `,
    tags: "PHP,oAuth,Symfony,Drupal, Doctrine",
    rightAligned: true,
  },
  {
    name: "Sveet.io",
    date: "2018",
    position: "Cofounder",
    background: `linear-gradient(180deg, #759CE8 0%, #9F8FFF 100%)`,
    image: "/images/work/sveet.jpg",
    desc: `Ordering in cafes sucks, right? We built mobile PWA to order and deliver food to your table in 5 mins<br/>
        For business, a loyalty system to retarget visitors for cafes/QSR.<br/>
        Integrated with different POS across cafe, theatres and hotels.<br/>
        Piloted in 3 cafes and processed 4000+ ordered. <br/>
   `,
    tags: "React,Go, Socket.io, PWA, Design, Sentry, Gin",
    rightAligned: false,
  },
  {
    name: "Rizort",
    date: "2019",
    position: "Full stack engineer",
    background: `linear-gradient(180deg, #F253B2 0%, #FF9D7E 100%)`,
    image: "/images/work/rizort.jpg",
    desc: `Designed and built E2E conceirge app in <10 days.<br/>
        Created vacation experience UI and revamped checkout page in early stages.<br/>
        Worked closely with experience founders.<br/>
        Built e2e system to automatically adjust price based on competitor analysis for 2000+ entities
   `,
    tags: "Frontend,Backend, Data Modelling, ELT",
    rightAligned: true,
  },
  {
    name: "Tapnar",
    date: "2015",
    position: "Founder",
    background: `linear-gradient(180deg, #FFEE59 0%, #AADC6A 100%)`,
    image: "/images/work/tapnar.jpg",
    desc: `Created social network to ceate and share meme from youtube + 50 social network.<br/>
    Used FFMPEG to create memes, added support for font overlay and effects.
    Built other system on PHP+MySQL.
    `,
    tags: "FFmpeg, Imagemagick, Jquery, PHP, MySQL",
    rightAligned: false,
  },
]

function WorkList(): JSX.Element {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {work.map(item => (
        <div css={[workItem, item.rightAligned && workItemReverse]}>
          <div
            css={[workItemImage, item.rightAligned && workItemImageReverse]}
            style={{ background: item.background }}
          >
            <img
              loading="lazy"
              src={item.image}
              style={{
                width: "90%",
                height: "76%",
                borderBottomRightRadius: 16,
                borderTopRightRadius: 16,
                objectFit: "cover",
              }}
            />
          </div>
          <div css={workItemDesc}>
            <div id={"top-section"}>
              <div id={"name"}>{item.name}</div>
              <div id={"date"}>{item.date}</div>
            </div>
            <div>{item.position}</div>

            <div
              id={"content-section"}
              dangerouslySetInnerHTML={{ __html: item.desc }}
            ></div>
            <br />
            <div style={{ textDecoration: "underline", cursor: "pointer" }}>
              Read case study
            </div>

            <div id={"tags-section"}>
              {item.tags.split(",").map(tag => (
                <div id={"tag"}>{tag}</div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const Content = ({}) => {
  return (
    <div css={mainContainerCSS}>
      <Center>
        <WorkList />
      </Center>

      <Center>
        <div css={pastWorkCss}>View my other projects</div>
      </Center>
      <Center>
        <div css={interestedInWorking}>Interested in working?</div>
        <div css={buttonContainer}>
          <Link to={"/about_me"}>
            <div css={[pinkButton, normalButton]}>My Services</div>
          </Link>

          <a href={"mailto:hello@himanshud.com"}>
            <div css={pinkButton}>Contact</div>
          </a>
        </div>
      </Center>
    </div>
  )
}

const interestedInWorking = css`
  font-weight: 800;
  font-size: 18rem;
  margin: 60rem 0 24rem 0;
`

const buttonContainer = css`
  display: flex;
  margin: 0rem 0 20rem 0;
  flex-wrap: wrap;
  a {
    text-decoration: none;
  }
`

const normalButton = css`
  background: var(--workNormalBG);
  color: var(--workNormalCOLOR);
  text-decoration: none;
  border: 1px solid var(--workNormalBORDER);
`

const pinkButton = css`
  text-decoration: none;
  font-family: "Cera Pro";
  margin-right: 20rem;
  background: var(--newsLetterJoinBackground);
  border: 2rem solid var(--newsLetterJoinBorder);
  color: #fff;
  padding: 6rem 18rem;
  min-width: 206rem;
  text-align: center;
  border-radius: 8rem;
  font-style: normal;
  font-weight: 900;
  font-size: 15rem;

  @media only screen and (max-width: 500px) {
    margin-top: 20px;
  }
`

const pastWorkCss = css`
  margin-top: 48rem;
  color: var(--primaryPink);
  font-weight: 700;
  text-decoration: underline;
  text-align: right;
  cursor: pointer;
`

const workItemReverse = css`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  margin-top: 56rem;

  height: 550rem;

  @media (max-width: 600px) {
    display: block;
  }
`

const workItem = css`
  display: flex;
  width: 100%;
  margin-top: 72rem;

  height: 550rem;
  @media (max-width: 600px) {
    display: block;
  }
`
const workItemImageReverse = css`
  border-radius: 32rem;
  margin-top: 72rem;
  justify-content: space-between;
`

const workItemImage = css`
  flex: 1;
  height: 460rem;
  border-radius: 32rem;
  background-size: cover;
  max-width: 660px;
  display: flex;
  align-items: center;
  box-shadow: 1px 5px 24px -1px #cccccc1f;

  @media only screen and (max-width: 500px) {
    height: 320rem;
    > img {
      max-width: 100%;
    }
  }
`

const workItemDesc = css`
  flex: 1;
  margin-left: 56rem;
  margin-right: 56rem;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 600px) {
    margin-left: 8rem;
    margin-right: 8rem;
    margin-bottom: 48rem;
  }

  #top-section {
    display: flex;
    @media (max-width: 600px) {
      margin-top: 30px;
    }
    margin-top: -100px;
    justify-content: space-between;

    #name {
      font-size: 28px;
      line-height: 63px;
      font-weight: 900;
      line-height: 1;
      margin-bottom: 6px;
      letter-spacing: -0.02em;
    }
  }

  #tags-section {
    margin-top: 24rem;
    display: flex;
    flex-wrap: wrap;
    #tag {
      background: var(--tagBackground);
      color: var(tagColor);
      border: 1px solid var(--tagBackground);
      box-sizing: border-box;
      border-radius: 4px;
      display: flex;
      font-size: 11.6px;
      padding: 3px 12px;
      margin-right: 16px;
      margin-bottom: 10px;
    }
  }

  #content-section {
    margin-top: 24rem;
  }
`

const mainContainerCSS = css`
  background: var(--primaryBackground);
  margin-top: -36rem;
  padding-bottom: 136rem;
  padding-top: 28rem;
  position: relative;
  color: var(--mainTextColor);
  flex-wrap: wrap;
`

const WorkPage = () => {
  return (
    <>
      <SEO title={"Past Work | Himanshu Dixit"} />
      <WorkHeroComponent />
      <Content />
      <Curvy isHeroBackground={true} />
      <Footer />
    </>
  )
}

export default withSound(withTheme(WorkPage))

export const pageQuery = null
