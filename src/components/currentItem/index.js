import React, {Component} from 'react';
import CurrentDay from "./currentDay";
import OtherDay from "./otherDay";

class CurrentItem extends Component {
    render() {
        const {currentDayInfo: { all, otherDaysList}} = this.props;



        return (
            <div className="main-box">
                <CurrentDay item={all.data} isLoading={all.isLoading}/>
                <OtherDay items={otherDaysList.data} isLoading={otherDaysList.isLoading}/>
            </div>
        );
    }
}

export default CurrentItem;