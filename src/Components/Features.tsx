import Section from "./Section";

function Features() {
  const features = [
    {
      id: 1,

      title: "Create project",
      description: "Deploy your new project in one-click.",
    },
    {
      id: 2,

      title: "Create project",
      description: "Deploy your new project in one-click.",
    },
    {
      id: 3,
      title: "Create project",
      description: "Deploy your new project in one-click.",
    },
    {
      id: 4,
      title: "Create project",
      description: "Deploy your new project in one-click.",
    },
    {
      id: 5,
      title: "Create project",
      description: "Deploy your new project in one-click.",
    },
    {
      id: 6,
      title: "Create project",
      description: "Deploy your new project in one-click.",
    },
  ];

  const renderFeatures = () => {
    return features.map((feature) => {
      return <li key={feature.id}>{feature.title}</li>;
    });
  };

  return (
    <Section height="100vh" title="features">
      <div className="features-bkg"></div>
      <ul className="features-list">{renderFeatures()}</ul>
    </Section>
  );
}

export default Features;
