import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })
import Landing from "../components/Landing";


export default function Home() {
  return (
  <div>
    <Landing />
  </div>
  );
}