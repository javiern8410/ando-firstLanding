import React, { useState, useEffect } from "react";
import Slider from 'infinite-react-carousel';
import SingleComment from './SingleComment';
import { db } from "../../firebase";
import './clients.scss';

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
                    <Slider {...settings}>
                        {!loading &&
                            comments.length > 0 &&
                            comments.map((comment, index) => {
                                return <SingleComment comment={comment} key={index} />;
                            })
                        }
                    </Slider>
                )
            }
        </div>
    );
};

export default Clients;
