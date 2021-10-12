import React from "react";
import profStyle from './Profile.module.css'
import defaultImage from '../../resources/defaultAvatar.jpg'
import PropTypes, { object, string } from 'prop-types'

class Profile extends React.Component {
    
    static defaultProps = {
        userName: "User name",
        avatar: defaultImage,
        tag: "@user tag",
    location: "Earth",
    stats:[0,0,0]
    };

    render() {
        return (
            <div className={profStyle.profile}>
                <div className={profStyle.description}>
                    <img src={this.props.avatar} alt="User pisture" className={profStyle.avatar} />
                    <p className={profStyle.name}>{this.props.userName}</p>
                    <p className={profStyle.tag}>@{this.props.tag}</p>
                    <p className={profStyle.location}>{this.props.location}</p>
                </div>

                <ul className={profStyle.stats}>
                    <li className={profStyle.item}>
                        <span className={profStyle.label}>Followers</span>
                        <span className={profStyle.quantity}>{this.props.stats.followers}</span>
                    </li>
                    <li className={profStyle.item}>
                        <span className={profStyle.label}>Views</span>
                        <span className={profStyle.quantity}>{this.props.stats.views}</span>
                    </li>
                    <li className={profStyle.item}>
                        <span className={profStyle.label}>Likes</span>
                        <span className={profStyle.quantity}>{this.props.stats.likes}</span>
                    </li>
                </ul>
            </div>
        )
    }



}

Profile.propTypes = {
    userName: PropTypes.string.isRequired,
    avatar:string,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats:object
};

export default Profile;