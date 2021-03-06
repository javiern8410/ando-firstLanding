import React, { useState } from "react";
import SingleComment from './SingleComment';
import './clients.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

const initialState = [
    {
        avatar: "7a123123dasd123128.jpg",
        comment: "100% Recomendados, excelente producto, buen soporte y atención inmediata.",
        name: "Alberto Perez.",
        position: "CTO Viajes Falabela"
    },
    {
        avatar: "marketing07007071.jpg",
        comment: "Muy buen servicio, excelente para crecer en el negocio.",
        name: "Martha A. Sánchez.",
        position: "Comunity Manager at Infinity Sales"
    },
    {
        avatar: "officeback342342.jpg",
        comment: "Sistema eficiente con todo lo que necesita una agencia.",
        name: "John Smeltzer.",
        position: "Account Manager at Activate Soft"
    }
]

SwiperCore.use([Navigation, Pagination]);

const Clients: React.FunctionComponent<any> = ({ page }) => {
    const [comments, setComments] = useState(initialState);
    const [loading, setLoading] = useState(false);

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
