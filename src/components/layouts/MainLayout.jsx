import { ThemeProvider, CacheProvider } from '@emotion/react'
import rtlPlugin from "stylis-plugin-rtl"
import createCache from "@emotion/cache"
import { prefixer } from "stylis"

import { lightTheme, darkTheme } from "../Theme"

//todo : Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

/* MainLayout is Wraper for AppContainer */
const MainLayout = ({mode, children  }) => {
    const theme = mode === "dark" ? darkTheme : lightTheme

    return (
        <>
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme} dir="rtl"
                    breakpoints={['xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
                    minBreakpoint="xs"
                >
                    

                        {children} {/*AppContainer content: HelmetProvider + PortfolioContext.Provider + App.js content*/}
                        
                    
                </ThemeProvider>
            </CacheProvider>
        </>
    );
}

export default MainLayout;