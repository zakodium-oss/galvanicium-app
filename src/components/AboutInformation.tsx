/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const aboutInformationCss = {
  root: css`
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
  `,
  link: css`
    color: rgb(80, 80, 80);
    &:hover {
      color: rgb(0, 188, 212);
    }
  `,
  separator: css`
    border-bottom: 1px solid gray;
    width: 15px;
    height: 1px;
    margin: 10px 0px;
  `,
};

export function AboutInformation() {
  return (
    <div css={aboutInformationCss.root}>
      <p>
        <img src="/logo/icon.svg" width="100" />
      </p>
      <span css={aboutInformationCss.separator} />
      <p>
        <a
          css={aboutInformationCss.link}
          href="https://www.galvanicium.org"
          target="_blank"
          rel="noreferrer"
        >
          Documentation ( https://www.galvanicium.org )
        </a>
      </p>
      <p>
        <a
          css={aboutInformationCss.link}
          href="https://github.com/zakodium-oss/galvanicium-app"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ( https://github.com/zakodium-oss/galvanicium-app )
        </a>
      </p>
      <span css={aboutInformationCss.separator} />
      <p>
        <img src="/images/zakodium.svg" width="250" />
      </p>
      <p>
        <img src="/images/bigmap.jpg" width="100" />
      </p>
    </div>
  );
}
