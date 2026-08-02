import { siteConfig } from "@/lib/site";

/**
 * JSON-LD structured data describing who this site is about.
 *
 * Meta tags tell a crawler what a page *says*; schema.org tells it what the page
 * *means*. A `Person` graph is what lets Google connect the name, the job title,
 * the skills and the social profiles into a single entity, which is the
 * prerequisite for a knowledge panel and for ranking on a name search.
 *
 * Rendered as a plain script tag from a Server Component, so it costs nothing
 * on the client and is present in the initial HTML where crawlers read it.
 */
export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.name,
        url: siteConfig.url,
        image: `${siteConfig.url}/sohaib.JPG`,
        jobTitle: siteConfig.jobTitle,
        email: `mailto:${siteConfig.email}`,
        description: siteConfig.description,
        knowsAbout: [...siteConfig.skills],
        address: {
          "@type": "PostalAddress",
          addressCountry: siteConfig.location.countryCode,
        },
        // `sameAs` is how a crawler confirms these profiles are the same person.
        sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.title,
        description: siteConfig.description,
        publisher: { "@id": `${siteConfig.url}/#person` },
        inLanguage: "en",
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteConfig.url}/#webpage`,
        url: siteConfig.url,
        name: siteConfig.title,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${siteConfig.url}/#person` },
        inLanguage: "en",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // The payload is built entirely from our own constants, never from user
      // input, so there is no injection surface here.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
