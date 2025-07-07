import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFile } from '../../interfaces';

interface IClickedFile{
    activeTabId:string|null,
    filename:string,
    fileContent:string|undefined
}
interface InitialState{
    openedFiles:IFile[],
    clickedFile:IClickedFile,
    // activeTabId:string |null
    tabIdToRemove:string | null

}
const initialState:InitialState={
    openedFiles:[],
    clickedFile:{
        activeTabId:null,
        filename:"",
        fileContent:""
    },
    tabIdToRemove:null
};

const fileTreeSlice=createSlice({
    name:"fileTree",
    initialState,
    reducers:{
        setOpenedFilesAction:(state,actionpayload:PayloadAction<IFile[]>)=>{
            state.openedFiles=actionpayload.payload
        },
        setClickedFileAction:(state,action:PayloadAction<IClickedFile>)=>{
            state.clickedFile=action.payload
        },
        // setActiveTapIdAction:(state,action:PayloadAction<string>)=>{
        //     state.activeTabId=action.payload
        // }
        setTabIdToRemoveAction:(state,action:PayloadAction<string|null>)=>{
            state.tabIdToRemove=action.payload
        }
    }

})

export const{setOpenedFilesAction,setClickedFileAction,setTabIdToRemoveAction} =fileTreeSlice.actions

export default fileTreeSlice.reducer


