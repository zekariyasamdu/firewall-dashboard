import SignupForm from "@/components/forms/SignupForm";
import Particles from "@/components/ui/Particles";

export default function Signup() {
    return (
    <div className="w-screen relative h-screen flex justify-center">
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
      <div className="w-xl h-fit mt-65 absolute">
         <SignupForm/>
      </div>
    </div>
  );
}