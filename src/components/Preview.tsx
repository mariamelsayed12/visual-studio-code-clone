import OpenedFilesBar from './OpenedFilesBar';
import FileSyntaxHighlighter from './FileSyntaxHighliter';
import { RootState } from '../app/store';
import { useSelector } from 'react-redux';

const Preview = () => {  
    const { clickedFile } = useSelector((state: RootState) => state.fileTree);

    return (
        <>
            <OpenedFilesBar />
            <FileSyntaxHighlighter content={clickedFile.fileContent || ''} />
        </>
    );
};

export default Preview;
