import './App.css';
import './output.css';
import picture from './img/7f90a998-8715-42fb-ad65-1e793b13171f.jpg';
import background from './img/Deep_Sea_Space.jpg';
// Background Gradient Credits To: https://uigradients.com/#DeepSeaSpace
import reactlogo from './img/logo192.png';
import linkedinlogo from './img/linkedin.png';
// LinkedInlogo Credits To: https://www.flaticon.com/authors/riajulislam
import GitHublogo from './img/github.png';
// GitHublogo Credits To: https://www.flaticon.com/authors/ruslan-babkin


function Link({text, onclick}) {
  return (
    <button className='max-w-md w-60 h-10 bg-orange-300 rounded-3xl text-slate-700 text-center font-bold' onClick={onclick}>{text}
    </button>
  );
}

function Picture() {
  return (
    <>
    <div className='p-0 m-0  flex flex-col'>
      <div className='w-28 h-28 rounded-full overflow-hidden self-center '>
          <img className='object-contain w-full h-full' src={picture} alt={'Profile'}/>
        </div>
        <p className='text-center text-xl text-white font-bold py-2'>Thia Yan Tong</p>
    </div>
    </>
  );
}

function Icon({type, onclick}) {
  if(type === 'linkedin'){
    return <button className='w-12 h-12 inline' onClick={onclick}><img className='w-10 h-10 inline' src={linkedinlogo} alt={'LinkedIn Logo'}></img></button>
  } else {
    return <button className='w-12 h-12 inline' onClick={onclick}><img className='w-10 h-10 inline' src={GitHublogo} alt={'GitHub Logo'}></img></button>
  }
}

function Remarks() {
  return <p className='text-white py-2 '>Powered By <img className='w-8 h-8 inline' src={reactlogo} alt={'React Logo'}></img></p>;
}

function App() {  
  const NavigateToNTUTools = () => {
    window.location.href = 'https://github.com/YanTongThia/NTU-Tools';
  }
  const NavigateToAB0403Project = () => {
    window.location.href = 'https://github.com/YanTongThia/AB0403-Project';
  }
  const NavigateToPortfolio = () => {
    window.location.href = 'https://github.com/YanTongThia/Portfolio';
  }
  const LinkedIn = () => {
    window.location.href = 'https://www.linkedin.com/in/thia-yan-tong/';
  }
  const GitHubHome = () => {
    window.location.href = 'https://github.com/YanTongThia';
  }

  return (
    <>
      <div className='grid place-items-center h-screen overflow-hidden' style={{ backgroundImage: `url(${background})`,backgroundSize:"contain"}}>
        <div className='flex flex-col place-items-center h-full w-full p-5 gap-4'>
          <Picture />
          <div className='flex flex-col place-items-center gap-2 '>
            <Link text={'NTU-Tools'} onclick={NavigateToNTUTools}/>
            <Link text={'AB0403-Project'} onclick={NavigateToAB0403Project}/>
            <Link text={'Portfolio'} onclick={NavigateToPortfolio}/>
          </div>
          <div className='flex flex-row py-2 gap-2'>
            <Icon type={'linkedin'} onclick={LinkedIn} />
            <Icon type={'github'} onclick={GitHubHome}/>
          </div>
        </div>
        <Remarks />
      </div>
      
    </>
    
  );
}

export default App;
