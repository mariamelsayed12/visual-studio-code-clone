import { IFile } from "../interfaces";
import { v4 as uuid } from 'uuid';


export const fileTree:IFile={
    id:uuid(),
    name:"VS Code Clone ",
    isFolder:true,

    children:[
        {
            id:uuid(),
            name:"node_modules",
            isFolder:true,
            children:[
                {
                    id:uuid(),

                name:".vite",
                isFolder:true,
                children:[{
                    id:uuid(),
                        name:"react.js",
                        isFolder:false,
                        content:`import { IFile } from "../interfaces";
export const doesFileObjectExist=(arr:IFile[],id:string)=>{
        return arr.some(obj =>obj.id===id)
        };`
                    },
                
                ]
                },
                    ]
        },
        {
            id:uuid(),
            name:"public",
            isFolder:true,
            children:[
                {
                    id:uuid(),
                    name:"index.html",
                    isFolder:false,
                    content:`<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
</head>
<body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
</body>
</html>`
                }
            ]
        },
        {
            id:uuid(),
            name:"src",
            isFolder:true,
            children:[
                {
                    id:uuid(),
                    name:"components",
                    isFolder:true,
                    children:[{
                        id:uuid(),
                            name:"Input.tsx",
                            isFolder:false,
                            content:`import { InputHTMLAttributes,Ref, forwardRef } from "react";
interface IProps extends InputHTMLAttributes<HTMLInputElement> {}
const Input = forwardRef(({ ...rest }:IProps, ref:Ref<HTMLInputElement>) => {
    return (
    <input
        ref={ref}
        className="border-[1px]  
            border-gray-300 shadow-lg focus:border-[#FFFFFF]
            focus:outline-none focus:ring-1
            focus:ring-[#FFFFFF] rounded-lg px-3 py-3 text-md  bg-[#FFFFFF]"
        {...rest}
    />
);
});

export default Input;`
                        },
                    
                    ]
                }
            ]
        }
    ],

};