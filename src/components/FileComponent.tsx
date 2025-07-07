import { IFile } from "../interfaces"
import { ChevronRight} from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { useState } from "react";
import RenderFileIcon from "./RenderFileIcon";
import {  useDispatch, useSelector } from 'react-redux'
import {  setClickedFileAction, setOpenedFilesAction } from "../app/features/fileTreeSlice";
import { RootState } from "../app/store";
import { doesFileObjectExist } from "../Util/functions";


interface IProps{
    fileTree:IFile
}

const RecursiveComponent = ({fileTree}:IProps) => {
    const dispatch = useDispatch()
    const {openedFiles} =useSelector((state:RootState)=>state.fileTree)

    const[isOpen,setIsOpen]=useState(false)

    // handlers
    const toggle =()=>setIsOpen(prev=>!prev)

    const onFileClicked=()=>{
        const exists =doesFileObjectExist(openedFiles,fileTree.id)
        if(exists){
            dispatch(setClickedFileAction({filename:fileTree.name,fileContent:fileTree.content,activeTabId:fileTree.id}))
            return
        }
        dispatch(setOpenedFilesAction([...openedFiles,fileTree]))
        // dispatch(setActiveTapIdAction(fileTree.id))
        
    }


    return (
    <div className='ml-3   cursor-pointer'>
        <div className="flex mb-3  cursor-pointer">
        <span className='flex '>
        {fileTree.isFolder? (
            <div onClick={toggle} className="flex ">
                {
                isOpen? <ChevronDown/>:<ChevronRight/>
            } 
            
            <div className="mr-2 flex gap-1"  >
            <RenderFileIcon filename={fileTree.name} isFolder={true} isopen={isOpen}/>
            <span className='text-2xl  '>{fileTree.name}</span>
        </div>               
        </div>
        ):(
            <div className="mr-2 flex gap-1 pl-7" onClick={onFileClicked} >
                    <RenderFileIcon filename={fileTree.name} /> 
                    <span className='text-2xl  '>{fileTree.name}</span>
            </div>
        )
        }
        </span>
        </div>
        {
                isOpen&&fileTree.children&& fileTree.children.map((file,idx) =>(
                <RecursiveComponent fileTree={file} key={idx}  />
                ))
        }
        </div>

    
    )
}


export default RecursiveComponent