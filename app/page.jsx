import Hero from "./components/Hero";
import Intro from "./components/intro/Intro";
import Proyectos from "./components/proyectos/Proyectos";


export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-3">
      <Hero />
      {/* <Intro /> */}
      
      <Proyectos />
    </main>
  );
}
