import React, { useEffect, useState } from "react"
import { css } from "@emotion/react"
import { addMember } from "../../utils/api"
import { validateEmail } from "../../utils/common"

export function SubscribeForm(): JSX.Element {
  const [email, setEmail] = useState("")
  const [emailSent, setEmailSent] = useState(false)
  const onSubmit = () => {
    if (!validateEmail(email)) {
      alert("Please enter valid email.")
      return
    }
    addMember(email, email).then(() => {
      setEmailSent(true)
    })
  }
  return (
    <div css={newsLetterInputContainerCSS}>
      {!emailSent && (
        <>
          <div css={newsLetterInputParentCSS}>
            <input
              css={newsLetterInputCSS}
              placeholder={"Your Email"}
              value={email}
              onChange={e => {
                setEmail(e.target.value)
              }}
            />
          </div>
          <div css={newsLetterJoinButtonCSS} onClick={onSubmit}>
            Join
          </div>
        </>
      )}
      {emailSent && <div>❤️ ❤️ Welcome to the family.</div>}
    </div>
  )
}

const newsLetterInputContainerCSS = css`
  display: flex;
  margin-top: 52rem;
  align-items: center;
  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`
const newsLetterInputParentCSS = css`
   ;
`
const newsLetterJoinButtonCSS = css`
  font-family: "Cera Pro";
  margin-left: 20rem;
  background: var(--newsLetterJoinBackground);
  border: 2rem solid var(--newsLetterJoinBorder);
  padding: 6rem 20rem;
  min-width: 236rem;
  text-align: center;
  border-radius: 4rem;
  font-style: normal;
  font-weight: 900;
  font-size: 18rem;
  cursor: pointer;
  color: #fff;
  @media (max-width: 600px) {
    margin-left: 0rem;
    margin-top: 20rem;
  }
`
const newsLetterInputCSS = css`
  background: var(--newsLetterInputBackground);
  border: 2px solid var(--newsLetterInputBorder);
  border-radius: 8rem;
  padding: 8rem 20rem;
  min-width: 340rem;
  font-family: Cera Pro;
  font-style: normal;
  font-size: 15rem;
  font-weight: 500;
  color: var(--contrastColor);
  &:focus {
    outline: none;
  }
`
