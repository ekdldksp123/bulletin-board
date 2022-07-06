import { useMemo } from "react";
import { createPortal } from "react-dom";
import { PortalProps } from "../../types/portal";

/**
 * 
 * @author vinchaekim
 * @param PortalProps { elementId, child }
 * @since 2022.07.07
 * scroll 방지 portal   
 * 
 */

export const Portal:React.FC<PortalProps> = ({elementId, child}:PortalProps) => {
    const rootElement = useMemo(() => document.getElementById(elementId),[elementId]) as HTMLElement;
    return createPortal(child, rootElement);
}