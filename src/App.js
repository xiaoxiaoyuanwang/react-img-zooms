import logo from './logo.svg';
import './styles/index.css';
import ImgZoom from './components/ImgZoom/ImgZoom'
function App() {
  return (
    <div className="App" >
      <ImgZoom dataSource={{url: logo}} />
    </div>
  );
}

export default App;
