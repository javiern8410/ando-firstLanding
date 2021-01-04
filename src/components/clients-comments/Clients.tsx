import React, { useState, useEffect } from "react";
import SingleComment from './SingleComment';
import { db } from "../../firebase";
import './clients.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

const captureSettings = {
    arrows: false,
    arrowsBlock: false,
    duration: 100,
    dots: true
};

const offerSettings = {
    arrows: false,
    arrowsBlock: false,
    duration: 100,
    dots: true,
};

SwiperCore.use([Navigation, Pagination]);

const Clients: React.FunctionComponent<any> = ({ page }) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);


    const getSettings = (page: string) => {
        switch (page) {
            case "offer":
                return offerSettings
            default:
                return captureSettings
        }
    };

    const settings = getSettings(page)

    const getComments = async () => {
        try {
            setLoading(true);
            const fbComents: any = [];
            const data = await db.collection("comments").get();
            data.docs.forEach((comment) => {
                fbComents.push({ ...comment.data() });
            });
            setComments(fbComents);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getComments();
    }, []);

    return (
        <div className="clients-comments">
            {loading && (
                <div className="spinner">
                    <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                </div>
            )}
            {!loading &&
                comments.length > 0 && (

                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        loop={true}
                    >
                        {!loading &&
                            comments.length > 0 &&
                            comments.map((comment, index) => {
                                return <SwiperSlide key={index}> <SingleComment comment={comment} /> </SwiperSlide>;
                            })
                        }
                    </Swiper>
                )
            }
        </div>
    );
};

export default Clients;
