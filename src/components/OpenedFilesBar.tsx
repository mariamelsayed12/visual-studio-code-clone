import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import OpendFileBarTab from './OpendFileBarTab'
import ContextMenu from '../UI/ContextMenu'
import { useState } from 'react'



const OpenedFilesBar = () => {
    const {openedFiles} =useSelector((state:RootState)=>state.fileTree)
    const [showMenu,setshowMenu]=useState(false)
    const[menuPOsition,setMenuPOsition]=useState<{x:number,y:number}>({x:0,y:0})
    return (
    <div>
        <div className=' flex items-center gap-3 '
        // معناها لما احب اضغت ايه الي المفروض يحصل
        onContextMenu={(e)=>{
            e.preventDefault()  // bmn3 el defualte behavour el khas bl browser nfnso
            setMenuPOsition({x:e.clientX,y:e.clientY})  // e.clientX,e.clientY => btgbly makan elmouse feen plzbt
            setshowMenu(true)
            }
        }>
        {openedFiles.map((file)=><OpendFileBarTab key={file.id} file={file}/>)}
        </div>
        {showMenu&&<ContextMenu positions={menuPOsition} setshowMenu={setshowMenu}/>}

    </div>

)
}

export default OpenedFilesBar