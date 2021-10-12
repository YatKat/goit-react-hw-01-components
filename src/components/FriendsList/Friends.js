import React from "react";
import PropTypes from "prop-types";
import FriendItem from "../FriendsList/FriendItem"

class Friends extends React.Component{

    render(){

        return(
            <div> 
                <ul>
                {this.props.friends.map(({ avatar, name, isOnline, id }) => (
                    <FriendItem  
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}/>
                    )
                )
            }
                </ul>
            </div>
        )
    }



}

Friends.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          avatar: PropTypes.string,
          name: PropTypes.string.isRequired,
          isOnline: PropTypes.bool.isRequired,
        }),
      ).isRequired,
}

export default Friends;
















//this.state.data.map((item,i) => <li key={i}>Test</li>)