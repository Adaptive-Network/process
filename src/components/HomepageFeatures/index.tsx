import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import { useColorMode } from "@docusaurus/theme-common";

type FeatureItem = {
  Title: string;
  LightSVG: React.ComponentType<React.ComponentProps<"svg">>;
  DarkSVG: React.ComponentType<React.ComponentProps<"svg">>;
  Description: string;
};

const FeatureList: FeatureItem[] = [
  {
    Title: "Builds a Connection with Our Audience",
    LightSVG: require("/img/share_light.svg").default,
    DarkSVG: require("/img/share_dark.svg").default,
    Description:
      "Sharing our creative process allows our audience to connect with us on a more personal level. It humanizes us and makes the work more relatable. People often appreciate the effort, thoughts, and struggles behind a finished product, and showing the process helps them understand and relate to our journey.",
  },
  {
    Title: "Demystifies our Creative Process",
    LightSVG: require("/img/sparkles_light.svg").default,
    DarkSVG: require("/img/sparkles_dark.svg").default,
    Description:
      "Demystifying the creative process helps break down the misconception that creativity is a mysterious, innate talent reserved for a select few. By showing our work, we are revealling the incremental steps, revisions, and challenges involved in creating that stuff that we do and make. This can inspire others to embark on their creative journeys.",
  },
  {
    Title: "Fosters a Generous Creative Community",
    LightSVG: require("/img/rocket-launch_light.svg").default,
    DarkSVG: require("/img/rocket-launch_dark.svg").default,
    Description:
      "By freely sharing our ideas, techniques, and insights, we contribute to the collective knowledge of the community. As we like to say: 'sharing is caring'.",
  },
];

function Feature({
  Title: title,
  LightSVG,
  DarkSVG,
  Description,
}: FeatureItem) {
  const theme = useColorMode();
  if (theme.isDarkTheme) {
    return (
      <div className={clsx("col col--4")}>
        <div className="text--center margin-bottom--lg">
          <DarkSVG className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md margin-bottom--lg">
          <Heading as="h2" className="margin-bottom--lg">
            {title}
          </Heading>
          <p>{Description}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={clsx("col col--4")}>
        <div className="text--center margin-bottom--lg">
          <LightSVG className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md margin-bottom--lg">
          <Heading as="h2" className="margin-bottom--lg">
            {title}
          </Heading>
          <p>{Description}</p>
        </div>
      </div>
    );
  }
}

export default function HomepageFeatures(): JSX.Element {
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
