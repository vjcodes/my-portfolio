import About from "../components/About";
import Banner from "../components/Banner";
import ContactSection from "../components/ContactSection";
import ExperienceSection from "../components/ExperienceSection";
import ExpertiseSection from "../components/ExpertiseSection";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <ExpertiseSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
};

export default Home;
