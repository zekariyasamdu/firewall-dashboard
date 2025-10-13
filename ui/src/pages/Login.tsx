import Squares from "@/components/ui/Squares";
import LoginForm from "../components/forms/LoginForm";
import Particles from "@/components/ui/Particles";
export const Login = () => {
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
      <div className="w-96 h-96 mt-60 absolute">
        <LoginForm />
      </div>
    </div>
  );
};
