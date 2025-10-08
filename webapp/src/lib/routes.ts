const getRouteParams = <T extends Record<string, boolean>>(object: T) => {
  return Object.keys(object).reduce((acc, key) => ({ ...acc, [key]: `:${key}` }), {}) as Record<keyof T, string>
}

export const getAllIdeasRoute = () => '/'

export const viewIdeaRouteParams = getRouteParams({ideaNick: true})
export type ViewRouteParams = typeof viewIdeaRouteParams
export const getViewIdeaRoute = ({ideaNick}: ViewRouteParams) => `/ideas/${ideaNick}`

export const getNewIdeaRoute = () => '/ideas/new'

// export const viewRouteParams = {ideaNick: ':ideaNick'}
// export type ViewRouteParams = {ideaNick: string}
// export const getViewIdeaRoute = ({ideaNick}: {ideaNick: string}) => `/ideas/${ideaNick}`