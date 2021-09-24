import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

const Topbar = () => {
	return (
		<div className="topbar">
			<div className="topbarWrapper">
				<div className="topLeft">
					<span className="logo">Netflix-Admin</span>
				</div>
				<div className="topRight">
					<div className="topbarIconContainer">
						<NotificationsNone />
						<span className="topIconBadge">200</span>
					</div>
					<div className="topbarIconContainer">
						<Language />
						<span className="topIconBadge">2</span>
					</div>
					<div className="topbarIconContainer">
						<Settings />
					</div>

					<img
						src="https://avatars.githubusercontent.com/u/47697586?s=400&u=848712c71bcc4c5d723d5bf4f2aba78608f43709&v=4"
						alt=""
						className="topAvatar"
					/>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
