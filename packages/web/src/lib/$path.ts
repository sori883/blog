export const pagesPath = {
  _slug: (slug: string | number) => ({
    $url: (url?: { hash?: string }) => ({ pathname: '/[slug]' as const, query: { slug }, hash: url?.hash })
  }),
  "about": {
    $url: (url?: { hash?: string }) => ({ pathname: '/about' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
