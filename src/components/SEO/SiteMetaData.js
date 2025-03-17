import Head from "next/head";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import getSiteMetaData from "utils/getSiteMetaData";

const {
  title: siteTitle,
  description: siteDescription,
  keywords: siteKeywords,
  author: siteAuthor,
  url: siteUrl,
} = getSiteMetaData();

const defaultCoverImage = "img/profile.png";

const SiteMetaData = ({ title, description, author, image, keywords }) => {
  const { pathname } = useRouter();

  const metaDescription = description || siteDescription;
  const metaTitle = title || `${title} | ${siteTitle}`;
  const metaAuthor = author || siteAuthor;
  const metaUrl = `${siteUrl}${pathname}` || siteUrl;
  const coverImage = image || defaultCoverImage;
  const imageUrl = coverImage;
  const metaKeywords = keywords || siteKeywords;

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta name="author" content={metaAuthor} />
      </Head>
      <Head>
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Sushan Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:image" content={imageUrl} />
      </Head>
      <Head>
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:site" content="@sushanyadav99" />
        <meta name="twitter:creator" content={metaAuthor} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={imageUrl} />
      </Head>
    </>
  );
};

SiteMetaData.defaultProps = {
  title: siteTitle,
  description: siteDescription,
  author: siteAuthor,
  image: defaultCoverImage,
  keywords: siteKeywords,
};

SiteMetaData.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  image: PropTypes.string,
  keywords: PropTypes.string,
};

export default SiteMetaData;
