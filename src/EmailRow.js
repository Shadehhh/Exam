import { Checkbox, IconButton } from '@material-ui/core'
import {
    LabelImportantOutlined as LabelImportantOutlinedIcon,
    StarBorderOutlined as StarBorderOutlinedIcon
        } from '@material-ui/icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import './EmailRow.css'
import { selectMail } from './features/mailSlice'

function EmailRow({ title, subject, id, description, time}) {
    const history = useHistory();
    const dispatch = useDispatch();
    const openMail = () => {
        dispatch(selectMail({
            title,
            subject,
            id,
            description,
            time
        }));
        history.push('/mail')
    }

    return (
        <div onClick={openMail} className="emailRow">
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            </div>

            <h3 className="emailRow__title">
                {title}
            </h3>

            <div className="emailRow__message">
                <h4>{subject}{' '}
                <span className="emailRow__description">
                -{description}
                </span>
                </h4>
            </div>

            <p className="emailRow__time">
                {time}
            </p>
        </div>
    )
}

export default EmailRow
