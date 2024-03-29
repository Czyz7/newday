import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Web Design UX/UI",
    Svg: require("@site/static/img/ux_ui_dev.svg").default,
    description: (
      <>
        Are you seeking a modern, clean and accessible website? Our team of
        experienced <code>UX/UI</code> designers will rebuild and refresh your
        website.
      </>
    ),
  },
  {
    title: "Web Development (Coding)",
    Svg: require("@site/static/img/dev_code.svg").default,
    description: (
      <>
        Does the website you want have features that go beyond "drag and drop"
        site builders? Our <code>Full Stack Engineers</code> will develop a
        solution.
      </>
    ),
  },
  {
    title: "CMS Build (WordPress, etc)",
    Svg: require("@site/static/img/c_m_s.svg").default,
    description: (
      <>
        CMS platforms offer almost, if not every feature coding does, without
        the stress. Leave that to our <code>WordPress</code> and{" "}
        <code>Shopify Engineers</code>.
      </>
    ),
  },
  {
    title: "SEO",
    Svg: require("@site/static/img/seo_o.svg").default,
    description: (
      <>
        Much like coding, SEO can be time intensive and changes every day. Save
        time and effort while the Accessible Web Design team takes care of it.
      </>
    ),
  },
  {
    title: "Website Management",
    Svg: require("@site/static/img/web_manage.svg").default,
    description: (
      <>
        Looking to create more time focusing on your business instead of
        worrying about managing your website? Let our team of competent site
        managers take care of that.
      </>
    ),
  },
  {
    title: "Website Analytics",
    Svg: require("@site/static/img/web_analytics.svg").default,
    description: (
      <>
        Our Engineers will meticulously scour all of the data and metrics for
        your site and relay it back to you in an easy to understand way.
        Ensuring you&apos;re at the top of your game.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
