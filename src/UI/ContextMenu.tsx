import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setOpenedFilesAction } from "../app/features/fileTreeSlice";
import { RootState } from "../app/store";

interface Iprops{
  setshowMenu:(val:boolean)=>void
  positions:{
    x:number,
    y:number,
  }
}

const ContextMenu = ({ setshowMenu,positions:{x,y}}:Iprops) => {
  const menuRef=useRef<HTMLDivElement>(null)
  const dipatch=useDispatch()

  const {openedFiles,tabIdToRemove} =useSelector((state:RootState)=>state.fileTree)


  useEffect(()=>{

    console.log(menuRef.current)  // btgblna element nfso (element elly fi)
    const handleClickedOutSide=(event:MouseEvent)=>{
      if(menuRef.current && !menuRef.current.contains(event?.target as Node)){ // line da 3lshan ataked dymen eno 7ta elref fi el div

        setshowMenu(false)
      }
      console.log('outside')

    }
    window.addEventListener('click',handleClickedOutSide)

    // b3ml cleanup for event i used
    return ()=>{
      window.removeEventListener('click',handleClickedOutSide)
    }
  },[setshowMenu])


  //handler
  const onClose=()=>{
    const filtered= openedFiles.filter(file=>file.id!=tabIdToRemove)
    dipatch(setOpenedFilesAction(filtered))
    setshowMenu(false)


  }

const  onCloseAll=()=>{
  dipatch(setOpenedFilesAction([]))
  setshowMenu(false)


}
  return (
    <div  ref={menuRef}>
        <ul className='bg-white text-black w-fit px-7 py-2 rounded-md'
        style={
          {
            position:"absolute",
            left:x,
            top:y
          }
        }
        >
            <li onClick={onClose} className="cursor-pointer">
                Close
            </li>
            <li onClick={onCloseAll} className="cursor-pointer">
                Close All
            </li>
        </ul>
        </div>

  )
}

export default ContextMenu