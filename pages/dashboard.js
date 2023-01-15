import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })
import Dashboard from "../components/Dashboard";


export default function Dash() {
  return (
  <div>
    <Dashboard />
  </div>
  );
}