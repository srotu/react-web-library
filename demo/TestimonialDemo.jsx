import Testimonial from "../components/Testimonial/Testimonial";
import profilePng from "../components/assets/photo.png";

export default function TestimonialDemo() {
    return (
        <div>
            <Testimonial
                profilePng={profilePng}
                quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit."
                author="May Andersons"
                role="Workcation, CTO"
            />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: 20 }}>
                <Testimonial
                    profilePng={profilePng}
                    quote="This product has significantly improved our workflow and efficiency. Highly recommended!"
                    author="Jane Doe"
                    role="CEO, Example Corp"
                /><Testimonial
                    profilePng={profilePng}
                    quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit."
                    author="May Andersons"
                    role="Workcation, CTO"
                />
            </div>
        </div>
    );
}