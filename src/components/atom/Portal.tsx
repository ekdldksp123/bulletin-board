import { useMemo } from 'react';
import { createPortal } from 'react-dom';
import { PortalProps } from '../../types/portal';

/**
 *
 * @author vinchaekim
 * @param PortalProps { elementId, child }
 * @since 2022.07.07
 *
 * 포탈을 사용하면 앱 내부에 자식으로 dom을 추가하는게 아닌 아예 다른 지역에 dom을 추가하기 때문에
 * 디버깅도 편하고 무엇보다 모달같이 현재 창과 관련이 없는 새로운 창을 띄우는데 최적 기능이라고 한다!
 *
 */

export const Portal: React.FC<PortalProps> = ({ elementId, child }: PortalProps) => {
  const rootElement = useMemo(() => document.getElementById(elementId), [elementId]) as HTMLElement;
  return createPortal(child, rootElement);
};
