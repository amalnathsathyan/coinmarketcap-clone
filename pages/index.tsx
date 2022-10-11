import type { NextPage } from 'next'
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div>{/* {<Trending/>} */}</div>
      <div>{/* {<CMCTable/>} */}</div>
    </div>
  );
}

export default Home
