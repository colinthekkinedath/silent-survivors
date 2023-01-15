import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })
import About from "../components/About";


export default function Dash() {
  return (
  <div>
    <About />
  </div>
  );
}