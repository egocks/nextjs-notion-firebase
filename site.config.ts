import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: process.env.NOTION_ROOT_PAGE_ID || '',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: process.env.NOTION_SPACE_ID || null,

  // basic site info (required)
  name: process.env.SITE_NAME || '',
  domain: process.env.SITE_DOMAIN || '',
  author: process.env.SITE_AUTHOR || '',

  // open graph metadata (optional)
  description: process.env.SITE_DESCRIPTION || '',

  // social usernames (optional)
  twitter: process.env.SOCIAL_TWITTER || '',
  github: process.env.SOCIAL_GITHUB || '',
  linkedin: process.env.SOCIAL_LINKEDIN || '',
  mastodon: process.env.SOCIAL_MASTODON || undefined,
  newsletter: process.env.SOCIAL_NEWSLETTER || undefined,
  youtube: process.env.SOCIAL_YOUTUBE || undefined,

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: process.env.DEFAULT_PAGE_ICON || null,
  defaultPageCover: process.env.DEFAULT_PAGE_COVER || null,
  defaultPageCoverPosition: process.env.DEFAULT_PAGE_COVER_POSITION ? 
    parseFloat(process.env.DEFAULT_PAGE_COVER_POSITION) : 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: process.env.ENABLE_PREVIEW_IMAGES !== 'false',

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: process.env.ENABLE_REDIS === 'true',

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: process.env.PAGE_URL_OVERRIDES ? 
    JSON.parse(process.env.PAGE_URL_OVERRIDES) : null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  navigationStyle:  process.env.NAVIGATION_STYLE === 'default' ? 'default': 'custom',
  navigationLinks: process.env.NAVIGATION_LINKS ? 
    JSON.parse(process.env.NAVIGATION_LINKS) : undefined
})
