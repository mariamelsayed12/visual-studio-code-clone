import {  setClickedFileAction, setOpenedFilesAction, setTabIdToRemoveAction } from "../app/features/fileTreeSlice";
import { RootState } from "../app/store";
import { IFile } from "../interfaces"
import RenderFileIcon from "./RenderFileIcon"
import { X } from 'lucide-react';
import {  useDispatch, useSelector } from 'react-redux'


interface IProps{
    file:IFile
}
const OpendFileBarTab = ({file}:IProps) => {
    const dispatch=useDispatch()
    const {
        openedFiles,
        clickedFile:{
        activeTabId
    }} =useSelector((state:RootState)=>state.fileTree)

    // handlers
    const onclick=()=>{
        const {id,name,content}=file;
            dispatch(setClickedFileAction({filename:name,fileContent:content,activeTabId:id}))
            // dispatch(setActiveTapIdAction(id))
            
    }

    const onRemove=(id:string)=>{
    const filtered=  openedFiles.filter(file=>file.id !=id)
    const lastTab=filtered[filtered.length-1]
    if(!lastTab){  // m3nha keda eno mafish file khalse fi elbar
        dispatch(setOpenedFilesAction([]))
        dispatch(setClickedFileAction({activeTabId:null,fileContent:"",filename:""}))

    }
    dispatch(setOpenedFilesAction(filtered))
    dispatch(setClickedFileAction({activeTabId:lastTab.id,fileContent:lastTab.content,filename:lastTab.name}))

    console.log(filtered)

    }
    return (
        <div className={`flex items-center border-t-2 p-2 ${
            file.id === activeTabId?" border-[#cf6ccf]":"border-transparent"
        }`} 
            onClick={onclick}
        onContextMenu={e=>{
            e.preventDefault()
            dispatch(setTabIdToRemoveAction(file.id))
        }

        }
        
        >
            <span>
                <RenderFileIcon filename={file.name}/>
            </span>
            <div>

            </div>
            <span className="cursor-pointer flex justify-between mx-2 ">{file.name}</span>
            <span className="ml-2" onClick={e=>{
                                        e.stopPropagation() // btkhely lma atos 3liha msh bt3ml 7aga
                                        onRemove(file.id)
                                            }}>
                <X className="cursor-pointer" />
            </span>
        </div>
    )
}

export default OpendFileBarTab