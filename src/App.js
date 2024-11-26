import './App.scss';
import Header from './components/Header/Header';
import MainBanner from './components/MainBanner/MainBanner';
import PopularPosts from './components/PopularPosts/PopularPosts';

function App() {
  return (
    <div className="appContainer">
      <Header />
      <MainBanner />
      <PopularPosts />
    </div>
  );
}

export default App;
