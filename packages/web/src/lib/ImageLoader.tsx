type LoaderProps = {
  src: string;
  width: number;
  quality?: number | undefined;
}

export const imageLoader = ({ src, width, quality }: LoaderProps): string => `http://localhost:9000/develop/${src}?w=${width}&q=${quality || 75}`;
