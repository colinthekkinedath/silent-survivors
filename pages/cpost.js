import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })
import CreatePost from "../components/CreatePost";


export default function cpost() {
  return (
  <div>
    <CreatePost />
  </div>
  );
}