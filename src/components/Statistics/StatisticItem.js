import React from "react";
import PropTypes from "prop-types";
import styles from "./styleStatistics.module.css";


class StatisticItem extends React.Component{

    render(){

        return(
            <li className={styles.item}>
    <span className={styles.label}>{this.props.label}</span>
    <span className={styles.percentage}>{this.props.percentage}%</span>
  </li>
        )
    }
}

StatisticItem.propTypes = {
    label : PropTypes.string.isRequired,
    percentage : PropTypes.number.isRequired
}

export default StatisticItem;