import React from "react";
import PropTypes from "prop-types";
import styles from "./friendStyle.module.css"


class FriendItem extends React.Component{

    render(){

        return(
            <div>
                 <li className={styles.item}>
    <span className={this.props.isOnline ? styles.isOnline : styles.isOffline}>
      {this.props.isOnline}
    </span>
    <img className={styles.avatar} src={this.props.avatar} alt="" width="48" />
    <p className={styles.name}>{this.props.name}</p>
  </li>
            </div>
        )
    }
}

FriendItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };
  
  export default FriendItem;