import { css } from '@emotion/react';
import ReactMarkdown from 'react-markdown';
import { Link as Scroll } from 'react-scroll';
import gfm from 'remark-gfm';

type Props = {
  markdown:  string;
}

const H2 = ({ ...props }) => {
  return (
    <h2 id={`${props.children}`}>{props.children}</h2>
  );
};

const ankerLink = ({ ...props }) => {
  return (
    <li>
      <Scroll
        css={css`
        &&& {
          cursor: pointer;
        }
    `}
        to={`${props.children}`} smooth={true} duration={600}>
        {props.children}
      </Scroll>
    </li>
  );
};

export function View({markdown}: Props): JSX.Element {
  return (
    <div className='articleEntry'>
      <ReactMarkdown
        components={{
          h2: H2,
        }}
        remarkPlugins={[gfm]}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

export function Resume({markdown}: Props): JSX.Element {
  return (
    <>
      <ul>
        <ReactMarkdown
          allowedElements={['h2']}
          components={{
            h2: ankerLink,
          }}
        >
          {markdown}
        </ReactMarkdown>
      </ul>
    </>
  );
}