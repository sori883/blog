import { css } from '@emotion/react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { Link as Scroll } from 'react-scroll';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import gfm from 'remark-gfm';

import { imageLoader, pathBuilder } from 'lib/ImageLoader';

type Props = {
  markdown:  string;
}

const H2 = ({ ...props }) => {
  return (
    <h2 id={`${props.children}`}>{props.children}</h2>
  );
};

const IMG = ({ ...props }) => {
  const { src, alt } = props;
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center' }}
    >
      <Link href={pathBuilder(src)}
        target='_blank'
        css={css`
        &&& {
          border: 1px solid;
        }
    `}
      >
        <Image
          loader={imageLoader}
          src={src}
          alt={alt}
          width={300}
          height={300}
        />
      </Link>
    </Box>
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

const CodeBlock = ({ ...props }) => {
  const match = /language-(\w+)/.exec(props.className || '');
  return !props.inline && match ? (
    <SyntaxHighlighter language={match[1]} PreTag="div" {...props}>
      {String(props.children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={props.className} {...props}>
      {props.children}
    </code>
  );
};

export function View({markdown}: Props): JSX.Element {
  return (
    <div className='articleEntry'>
      <ReactMarkdown
        components={{
          h2: H2,
          img: IMG,
          code: CodeBlock
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