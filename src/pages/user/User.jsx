import {
	CalendarToday,
	LocationSearching,
	MailOutline,
	PermIdentity,
	PhoneAndroid,
	Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./user.css";

const User = () => {
	return (
		<div className="user">
			<div className="userTitleContainer">
				<h1 className="userTitle">Edit User</h1>
				<Link to="/newUser">
					
				<button className="userAddButton">Create</button>
				</Link>
			</div>

			<div className="userContainer">
				<div className="userShow">
					<div className="userShowTop">
						<img
							src="https://avatars.githubusercontent.com/u/47697586?s=400&u=848712c71bcc4c5d723d5bf4f2aba78608f43709&v=4"
							alt=""
							className="userShowImg"
						/>

						<div className="userShowTopTitle">
							<span className="userShowUsername">
								Bhanu Prasad
							</span>
							<span className="userShowUserTitle">
								Software Engineer
							</span>
						</div>
					</div>
					<div className="userShowBottom">
						<span className="userShowTitle">Account Details</span>
						<div className="userShowInfo">
							<PermIdentity className="userShowIcon" />
							<span className="userShowInfoTitle">
								Bhanu Prasad
							</span>
						</div>
						<div className="userShowInfo">
							<CalendarToday className="userShowIcon" />
							<span className="userShowInfoTitle">
								15.07.2000
							</span>
						</div>
						<span className="userShowTitle">Account Details</span>

						<div className="userShowInfo">
							<PhoneAndroid className="userShowIcon" />
							<span className="userShowInfoTitle">
								+1 123 456 67
							</span>
						</div>
						<div className="userShowInfo">
							<MailOutline className="userShowIcon" />
							<span className="userShowInfoTitle">
								bhanu@prasad.com
							</span>
						</div>
						<div className="userShowInfo">
							<LocationSearching className="userShowIcon" />
							<span className="userShowInfoTitle">
								Hyderabad | India
							</span>
						</div>
					</div>
				</div>
				<div className="userUpdate">
					<span className="userUpdateTitle">Edit</span>

					<form className="userUpdateForm">
						<div className="userUpdateLeft">
							<div className="userUpdateItem">
								<label>Username</label>
								<input
									type="text"
									placeholder="bhanu prasad"
									className="userUpdateInput"
								/>
							</div>
							<div className="userUpdateItem">
								<label>Full Name</label>
								<input
									type="text"
									placeholder="bhanu prasad"
									className="userUpdateInput"
								/>
							</div>
							<div className="userUpdateItem">
								<label>Email</label>
								<input
									type="text"
									placeholder="bhanu@prasad.com"
									className="userUpdateInput"
								/>
							</div>
							<div className="userUpdateItem">
								<label>Phone</label>
								<input
									type="text"
									placeholder="+1 123 456 67"
									className="userUpdateInput"
								/>
							</div>
							<div className="userUpdateItem">
								<label>Address</label>
								<input
									type="text"
									placeholder="Hyderabad | India"
									className="userUpdateInput"
								/>
							</div>
						</div>
						<div className="userUpdateRight">
							<div className="userUpdateUpload">
								<img
									src="https://avatars.githubusercontent.com/u/47697586?s=400&u=848712c71bcc4c5d723d5bf4f2aba78608f43709&v=4"
									alt=""
									className="userUpdateImg"
								/>
								<label htmlFor="file">
									<Publish className="userUpdateIcon" />
								</label>
								<input
									type="file"
									name=""
									id="file"
									style={{ display: "none" }}
								/>
							</div>

							<button className="userUpdateButton">Update</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default User;
