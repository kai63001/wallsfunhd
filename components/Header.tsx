import { NextSeo } from "next-seo";
const Header = (props) => (
  <NextSeo
    title={props.title ? props.title + " | Wallsfunhd" : "Wallsfunhd"}
    description={props.des ? props.des : "Wallsfunhd"}
    openGraph={{
        type: 'website',
        locale: 'en_IE',
        url: 'https://www.url.ie/',
        site_name: 'SiteName',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
  />
);

export default Header;;