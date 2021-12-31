import React, { useState } from 'react'
import { LocalStorageKeys } from '../apis/localStorageKeys'
import Content from './Content'
import Menu from './Menu'
import NewMenu from './NewMenu'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Homepage.css'

const Homepage = (props) => {
	let user = localStorage.getItem(LocalStorageKeys.UserInfo)
	let user_email = localStorage.getItem(LocalStorageKeys.UserEmail)
    if (!user) {
        window.location.replace('/sign-in')
    }
	return (
		<div id="homepage">
			<div className="col-sm-2">
				<NewMenu selected={props.model} id="newmenu" />
			</div>
			<div className="col-sm-10">
				<div>
					<Content {...props} user_email={user_email} id="content" />
				</div>
			</div>
		</div>
	)
}


export default Homepage