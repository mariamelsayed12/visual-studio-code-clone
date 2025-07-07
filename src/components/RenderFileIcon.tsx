import { extentionIconPathes } from "../Consts";
import File from "./File"
import IconImage from "./IconImage"
import { FolderOpen } from 'lucide-react';


interface IProps{
    filename:string
    isFolder?:boolean
    isopen?:boolean

}


const RenderFileIcon = ({filename,isFolder,isopen}:IProps) => {
    const extention=filename.split('.').pop()// split=> to separet elname from their extention w men khelal el extention a7ot el icon
                                               // pop()=> 3lshan tedeny akher 7aga f el array elly hia extention


if(extention && Object.prototype.hasOwnProperty.call(extentionIconPathes,extention)){
    const iconPath=isFolder? isopen? `${extentionIconPathes[extention]}-opened.svg`:
                    `${extentionIconPathes[extention]}.svg` :
                    `${extentionIconPathes[extention]}.svg`
    return  <IconImage src={iconPath}/>
}

// // file
//     if(extention==="tsx") return <IconImage src=""/>
//     if(extention==="jsx") return <IconImage src=""/>
//     if(extention==="html") return <IconImage src=""/>
//     if(extention==="js") return <IconImage src=".svg"/>

// //folder
// if(extention ==="node_modules "&& isFolder ) {
//     return  isopen?(
//         <IconImage src="src/icons/folder-type-node-opened.svg"/>
//         ):(
//     <IconImage src="src/icons/folder-type-node.svg"/>
//     );
// }
// if(extention ==="public"&& isFolder ) 
//         return  isopen?(
//             <IconImage src="src/icons/folder-public-open.svg"  />
//             ):(
//         <IconImage src="src/icons/folder-public.svg"/>
//         )
// if(extention ==="src" && isFolder ) 
//         return isopen?(
//                 <IconImage src="src/icons/folder-type-src-opened.svg"  />
//                 ):(
//             <IconImage src="src/icons/folder-type-src.svg"/>
//             )
// if(extention ==="components" && isFolder ) 
//         return  isopen?(
//             <IconImage src="src/icons/folder-type-component-opened.svg"  />
//                 ):(
//                     <IconImage src="src/icons/folder-type-component.svg"/>
//                 )

if (isFolder && isopen)return  <FolderOpen className="w-8 h-8 fill-yellow-400" color="yellow-400" />
if (isFolder && !isopen)return  <IconImage src="src/icons/folder.svg "/>
return <File/>

}

export default RenderFileIcon