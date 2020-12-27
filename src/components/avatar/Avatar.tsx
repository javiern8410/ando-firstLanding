import React from 'react';
import './avatar.scss';

const Avatar: React.FunctionComponent<any> = ({ name, avatar }) => {
    const getName = () => {
        return name
            .split(' ')
            .map( (item:any) => item.charAt(0) )
            .slice(0,2)
            .join('');
    }

    let avatarUrl = null;
    if(avatar) {
        avatarUrl = require(`../../images/clients/${avatar}`);
    }

    return (
            <div className='avatar'>
                {
                    avatar ? (
                        <img src={avatarUrl} alt={name} width="300px" loading="lazy" />
                    ):(
                        <span>
                            {getName()}
                        </span>
                    )
                }
            </div>
    );
};

export default Avatar;
