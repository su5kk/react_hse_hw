import React from "react";
import { connect } from "react-redux";
import styles from './item.module.scss'
import classnames from 'classnames/bind'
import { handleCompletedChange, handleButtonText } from "../../actions/task";

const cx = classnames.bind(styles)

const mapStateToProps = (state) => ({
  completed: state.task.completed,
  theme: state.theme.theme,
  buttonText: state.task.buttonText
})

const mapDispatchToProps = (dispatch) => ({
  dispatchOnCompletedChange: (newCompleted) => {console.log(newCompleted); dispatch(handleCompletedChange(newCompleted))},
  dispatchOnButtonChange: (newButtonText) => dispatch(handleButtonText(newButtonText))
})

const ItemComponent = ({
  completed,
  theme,
  dispatchOnCompletedChange,
  dispatchOnButtonChange,
  buttonText
}) => {
    const onCompletedChange = () => {
        console.log(completed)
      dispatchOnCompletedChange(!completed)
      if (completed === false) {
        dispatchOnButtonChange("Tap to complete")
      } else {
        dispatchOnButtonChange("Tap to uncomplete")
      }
    }
    return (
        <button
            onClick={onCompletedChange} 
            className={cx("btn", {[`btn-theme-${theme}`]: true})}>{buttonText}
        </button>
    );
}

export const CompleteButton = connect(mapStateToProps, mapDispatchToProps)(ItemComponent);
