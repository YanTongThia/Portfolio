import './App.css';
import './output.css';
import picture from './img/dog-puppy-on-garden-royalty-free-image-1586966191.jpg';
import background from './img/Earthly.jpg';
import reactlogo from './img/logo192.png';
// import linkedinlogo from './img/linkedin.png';
// import GitHublogo from './img/github.png';
// import WebsiteLogo from './img/coding.png';

function Button({text}) {
  return (
    <button className='max-w-md w-60 h-12 bg-yellow-200 rounded-3xl '>{text}
    </button>
  );
}

function Picture() {
  return (
    <>
    <div className='p-0 m-0'>
      <div className='w-36 h-36 rounded-full overflow-hidden'>
          <img className='object-contain w-full h-full' src={picture} alt={'Profile'}/>
        </div>
        <p className='text-center text-xl text-white font-bold py-2'>Thia Yan Tong</p>
    </div>
    </>
  );
}

function Remarks() {
  return <p className='text-white py-2 border-2 border-red-500'>Powered By <img className='w-8 h-8 inline' src={reactlogo} alt={'React Logo'}></img></p>;
}

function App() {
  return (
    <>
      <div className='grid place-items-center h-screen border-2 border-red-500' style={{ backgroundImage: `url(${background})`,backgroundSize:"contain"}}>
        <div className='flex flex-col place-items-center h-full w-full p-5 border-2 border-red-500'>
          <Picture />
          <div className='flex flex-col place-items-center gap-2 border-2 border-red-500'>
            <Button text={'LinkedIn'}/>
            <Button text={'GitHub'}/>
            <Button text={'Website'}/>
          </div>
        </div>
        <Remarks />
      </div>
      
    </>
    
  );
}

export default App;
