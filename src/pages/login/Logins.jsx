import { useCallback } from "react"
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import { login } from "../../constants/particles"

import "./Logins.css"


const Logins = () => {
    // TODO: react-particles setting
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
        /* await loadPolygonPath(tsParticles); */

    }, []);

    return (
        <div className="z-n1 p-4 p-md-0">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={login}
                className="particles"
            />
            <form className="z-3 loginFrom ">
                <h4>فرم ثبت نام</h4>

                <label htmlFor="username loginLabel">موبایل</label>
                <input className="inputs" type="text" placeholder="شماره موبایل" id="username" />

                <label htmlFor="password loginLabel">پسورد</label>
                <input className="inputs" type="password" placeholder="پسورد" id="password" />

                <button className="loginBtn">ثبت نام</button>
                <div className="social">
                    <div className="go">
                        <i className="fab fa-google" />
                        <span>Google</span>
                    </div>
                    <div className="fb">
                        <i className="fab fa-facebook" />
                        <span>Facebook</span>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Logins;
