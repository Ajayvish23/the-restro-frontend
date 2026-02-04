import HeroSection from "../components/HeroSection.jsx";
import AboutSection from "../components/AboutSection.jsx";
import SpecialsSection from "../components/SpecialsSection.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import BottomSection from "../components/BottomSection.jsx";

export default function Home({user}){
    return(
        <div>
            <HeroSection></HeroSection>
            <AboutSection></AboutSection>
            <SpecialsSection user={user}></SpecialsSection>
            <TestimonialsSection></TestimonialsSection>
            <BottomSection></BottomSection>
        </div>
    )
}