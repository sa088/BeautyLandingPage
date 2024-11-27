import './App.scss';
import Header from './components/Header/Header';
import LatestPosts from './components/LatestPosts/LatestPosts';
import MainBanner from './components/MainBanner/MainBanner';
import PopularPosts from './components/PopularPosts/PopularPosts';

function App() {
  return (
    <div className="appContainer">
      <Header />
      <MainBanner />
      <PopularPosts />
      <LatestPosts />
    </div>
  );
}

export default App;
