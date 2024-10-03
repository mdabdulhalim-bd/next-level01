import Image from "next/image";
import Heading from './../components/Heading';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-4 p-24">
      home_ Page
      <h1 className="text-7xl bg-red-400 px-4 py-2 rounded-lg">Welcome to our JS</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi suscipit sit labore reprehenderit nihil expedita, molestiae rerum dolore reiciendis! Ipsa deserunt mollitia 
      </p>
      <Heading></Heading>
    </main>
  );
}

