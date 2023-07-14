import { useContext } from 'react';

import {  Home, About, Rezume, Courses, Comments, Contact } from '../../pages';
import { TabPanel, } from "../"
import PortfolioContext from "../../context/PortfolioContext"

import "./ContentsTabList.css"

const ContentsTabList = () => {
    const { value, } = useContext(PortfolioContext)
    return (
        <>


            <TabPanel value={value} index={0}>
                <Home />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <About />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Rezume />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Courses />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Comments />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <Contact />
                {/* <Logins /> */}
            </TabPanel>


        </>
    );
}

export default ContentsTabList;
