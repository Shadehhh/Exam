import { Checkbox, IconButton } from '@material-ui/core'
import {
    ArrowDropDown as ArrowDropDownIcon,
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
    Inbox as InboxIcon,
    KeyboardHide as KeyboardHideIcon,
    LocalOffer as LocalOfferIcon,
    MoreVert as MoreVertIcon,
    People as PeopleIcon,
    Redo as RedoIcon,
    Settings as SettingsIcon
    } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import './EmailList.css'
import EmailRow from './EmailRow'
import { db } from './firebase'
import Section from './Section'

function EmailList() {

    const [emails, setEmails] = useState([]);

    useEffect(() => {
        db.collection('emails').orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => setEmails(snapshot.docs.map(doc => (
            {
                id: doc.id,
                data: doc.data(),
            }
        ))))
    }, []);

    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emailList__settingRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>
            <div className="emailList__sections">
                <Section Icon={InboxIcon} title='Primary' color='red' selected />
                <Section Icon={PeopleIcon} title='Social' color='blue' />
                <Section Icon={LocalOfferIcon} title='Promotions' color='green' />
            </div>

            <div className="emailList__list">
                {emails?.map(({id, data: {to, subject, message, timestamp}}) => (
                    <EmailRow
                        id={id}
                        key={id}
                        title={to}
                        time={new Date(timestamp?.seconds * 1000).toUTCString()}
                        description={message}
                        subject={subject}
                    />
                ))}
            </div>
        </div>
    )
}

export default EmailList
