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

    const theme = mode === "dark" ? darkTheme: lightTheme

    return (
        <>
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                    <HelmetProvider>

                        {children}
                        
                    </HelmetProvider>
                </ThemeProvider>
            </CacheProvider>
        </>
    );
}

export default MainLayout;