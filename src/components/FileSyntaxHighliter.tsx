
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Iprops {
    content:string
}


const FileSyntaxHighliter = ({content}:Iprops) => {
  return (
    <div>
        <SyntaxHighlighter language="javascript" style={atomDark}
        customStyle={{
            backgroundColor:"transparent",
            width:"100%",
            overflow:"hidden",
            fontSize:"1.5rem",
            
        }}
        showLineNumbers
        >
            {String(content)}
        
        </SyntaxHighlighter>

    </div>
  )
}

export default FileSyntaxHighliter



