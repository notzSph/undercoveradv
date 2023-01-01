import { useEffect, useState } from 'react';
import { BehaviorSubject } from 'rxjs';
import { Layout } from '../share/utils/types.utils';

const layout = new BehaviorSubject<Layout>({
  isLargeLayout: false,
  isMobile: false,
  isTablet: false,
})

// Called to set listener in browser
export function useLayoutListener(): void {

  useEffect(() => {
    const handleResize = () => {
      layout.next({
        isLargeLayout: window.innerWidth >= 1024,
        isMobile: window.innerWidth >= 768 && window.innerWidth < 1024,
        isTablet: window.innerWidth < 768,
      })
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
}

export function useLayout(): Layout {
  const [isLargeLayout, setIsLargeLayout] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const sub = layout.subscribe(({ isLargeLayout, isTablet, isMobile }) => {
      setIsLargeLayout(isLargeLayout);
      setIsTablet(isTablet);
      setIsMobile(isMobile);
    })
    return () => sub.unsubscribe();
  }, []);
  return { isLargeLayout, isTablet, isMobile }
}

