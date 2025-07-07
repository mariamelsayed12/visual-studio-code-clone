import { useSelector } from 'react-redux'
import './App.css'
import RecursiveComponent from './components/FileComponent'
import ReasizablePanel from './components/ReasizablePanel'
import { fileTree } from './data/Filetree'
import { RootState } from './app/store'
import WelcomeTap from './components/WelcomeTap'
import Preview from './components/Preview'

function App() {
  const {openedFiles} =useSelector(({fileTree}:RootState)=>fileTree)




  return (

    
  <div className='bg-black text-white' >
    <div className='flex h-screen'>
      
      <ReasizablePanel  showleftpanel={true}   
                      leftPanel={<div className='w-64  p-2  '>
                        <RecursiveComponent fileTree={fileTree}/>
                        </div>
                        }

                      rightPanel={openedFiles.length?<Preview/>:<WelcomeTap/>}  />
            {/* <OpenedFilesBar/> */}

    </div>
      
  </div>
    
  )
}

export default App
