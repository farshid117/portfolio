import {useRef, useEffect} from 'react';
import Typed from 'typed.js';

const HomeTypedText = () => {
    /* todo : react-typed */
    const nameEl = useRef(null)
    const infoEl = useRef(null)

    const strings = [
        "توسعه دهنده فول استک",
        "مدرس برنامه نویسی تحت وب ",
        "برنامه نویس فریلنسر",
        "بلاگر برنامه نویسی "
    ]

    useEffect(() => {
        const typedName = new Typed(nameEl.current, {
            strings: ["کارشناس مهندسی نرم افزار"],
            typeSpeed: 50,
            backSpeed: 20,
            backDelay: 10,
            showCursor: false
        })
        const typedInfo = new Typed(infoEl.current, {
            strings: strings,
            startDelay: 1700,
            typeSpeed: 80,
            backSpeed: 50,
            backDelay: 0,
            showCursor: false,
            loop: true
        })
        return () => {
            typedName.destroy()
            typedInfo.destroy()
        };
    }, []);
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <span className="h1 text-warning d-block fw-bold mb-3 myname" >علیرضا خیاط‌پور</span>
                    <span className="h4 d-block fw-bold " style={{ color: "#4a148c" }} ref={nameEl}></span>
                </div>
            </div>
            <div className="row">
                <div className="col-12 mt-3">
                    <span style={{ color: "#4a148c" }}>.</span>
                    <span className="h4  info" ref={infoEl}></span>
                </div>
            </div>
        </>

    );
}

export default HomeTypedText;
