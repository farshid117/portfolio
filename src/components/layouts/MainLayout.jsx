import { ThemeProvider, CacheProvider } from '@emotion/react'
import rtlPlugin from "stylis-plugin-rtl"
import createCache from "@emotion/cache"
import { prefixer } from "stylis"
import { HelmetProvider } from "react-helmet-async"

import { lightTheme, darkTheme } from "../Theme"

//todo : Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const MainLayout = ({mode, children  }) => {

    const theme = mode === "dark" ? darkTheme : lightTheme

    return (
        <>
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme} dir="rtl"
                    breakpoints={['xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
                    minBreakpoint="xs"
                >
                    <HelmetProvider>

                        {children} {/* PortfolioContext.Provider + App.js content*/}
                        
                    </HelmetProvider>
                </ThemeProvider>
            </CacheProvider>
        </>
    );
}

export default MainLayout;