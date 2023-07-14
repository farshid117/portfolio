import React from 'react';

const AboutPersonalInfo = ({ mounting }) => {
    return (
        <>
            <div className="row text-white">
                <div className="col-12 col-md-6 ">
                    <div className="mb-md-3">
                        <label htmlFor="Input1" className="form-label">نام و نام‌خانوادگی</label>
                        <input type="text" className="form-control" id="Input1" placeholder="علیرضا خیاط‌پور" readOnly />
                    </div>
                    <div className="mb-md-3">
                        <label htmlFor="Input3" className="form-label">شهر</label>
                        <input type="text" className="form-control" id="Input3" placeholder="شیراز / تهران" readOnly />
                    </div>

                </div>
                <div className="col-12 col-md-6 ">
                    <div className="mb-md-3">
                        <label htmlFor="Input2" className="form-label">سن</label>
                        <input type="text" className="form-control" id="Input2" placeholder="38 سال" readOnly />
                    </div>
                    <div className="mb-md-3">
                        <label htmlFor="Input4" className="form-label">آدرس ایمیل</label>
                        <input type="email" className="form-control" id="Input" placeholder="alireza_khayatpour@yahoo.com" readOnly />
                    </div>

                </div>
            </div>
            <div className="row flex-column justify-content-center align-items-center text-white ">
                <div className="col-12 col-md-6">
                    <div className="mb-md-3">
                        <label htmlFor="Input5" className="form-label">شماره موبایل</label>
                        <input type="text" className="form-control" id="Input5" placeholder="09170431514" readOnly />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="mb-md-3">
                        <label htmlFor="Textarea1" className="form-label">مختصری درباره من</label>
                        <textarea className="form-control p-3" id="Textarea1" rows={4} readOnly placeholder='برنامه نویس حوزه وب اپلیکیشن هستم.هم در حوزه فرانت اند و هم بک اند دستی برآتش دارم.(MERN FullStack) بالای دو سال سابقه کار دارم و عاشق چالش های کاری و دوست دار یادگیری هستم.' />
                    </div>
                </div>
            </div>

        </>




    );
}

export default AboutPersonalInfo;
