import { useEffect, useState } from 'react'
import ReactGA from 'react-ga4'
import { useLocation } from 'react-router-dom'

/**
 * uri 변경 추적 컴포넌트
 * uri가 변경될 때마다 pageview 이벤트 전송
 */
const RouteChangeTracker = () => {
    const tagetId = process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID ?? ''
    const location = useLocation()
    const [initialized, setInitialized] = useState(false)

    // localhost는 기록하지 않음
    useEffect(() => {
        if (!window.location.href.includes('localhost')) {
            ReactGA.initialize(tagetId)
            setInitialized(true)
        }
    }, [])

    // location 변경 감지시 pageview 이벤트 전송
    useEffect(() => {
        if (initialized) {
            ReactGA.set({ page: location.pathname })
            ReactGA.send('pageview')
        }
    }, [initialized, location])

    return <></>
    // 개발용
    //   useEffect(() => {
    //     ReactGA.initialize(tagetId);
    //     ReactGA.set({ page: location.pathname });
    //     ReactGA.send("pageview");
    //   }, [location]);
}

export default RouteChangeTracker
