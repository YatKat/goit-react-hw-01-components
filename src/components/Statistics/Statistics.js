import React from "react";
import PropTypes from "prop-types";
import style from "../Statistics/styleStatistics.module.css";
import StatisticItem from "../Statistics/StatisticItem"


class Statistics extends React.Component{
    render(){
        return(
            <div>
            <section className={style.statistics}>
    {this.props.title && <h2 className={style.title}>{this.props.title}</h2>}
    <ul className={style.list}>
      {this.props.stats.map(({ id, label, percentage }) => (
        <StatisticItem key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  </section>
            </div>
        )
    }
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.array
}

export default Statistics;