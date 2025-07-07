import { ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

interface Iprops{
    defaultLayout?: number[] | undefined; // size for panel
    leftPanel:ReactNode,
    rightPanel:ReactNode,
    showleftpanel:boolean,

} 

const ReasizablePanel = ({showleftpanel,leftPanel,rightPanel,  defaultLayout = [30, 70],}:Iprops) => {
    
    const onLayout = (sizes: number[]) => {
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
        };
    return (
<PanelGroup direction="horizontal" onLayout={onLayout} autoSaveId="condition">

    { showleftpanel && (
        <>
        {/* collapsible =>3lashan elpanel kanet btt7rk 3ks el7raka */}
        <Panel defaultSize={defaultLayout[0]} collapsible>   
            {leftPanel}
        </Panel>
        <PanelResizeHandle   className="border-r border-[#ffffff1f] w-2"/>
        </>
    )}
    <Panel  defaultSize={defaultLayout[1]}>
    {rightPanel}
    </Panel>
    </PanelGroup>
    )
}

export default ReasizablePanel