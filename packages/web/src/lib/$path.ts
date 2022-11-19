export const pagesPath = {
  "about": {
    $url: (url?: { hash?: string }) => ({ pathname: '/about' as const, hash: url?.hash })
  },
  "itsme": {
    $url: (url?: { hash?: string }) => ({ pathname: '/itsme' as const, hash: url?.hash })
  },
  "posts": {
    _slug: (slug: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/posts/[slug]' as const, query: { slug }, hash: url?.hash })
    })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
