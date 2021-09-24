import { Visibility } from "@mui/icons-material";
import "./widgetSm.css";

const WidgetSm = () => {
	return (
		<div className="widgetSm">
			<span className="widgetSmTitle">New Join Members</span>

			<ul className="widgetSmList">
				<li className="widgetSmListItem">
					<img
						src="https://avatars.githubusercontent.com/u/47697586?s=400&u=848712c71bcc4c5d723d5bf4f2aba78608f43709&v=4"
						alt=""
						className="widgetSmImg"
					/>

					<div className="widgetSmUser">
						<span className="widgetSmUsername">Bhanu Prasad</span>
						<span className="widgetSmUserTitle">
							Software Engineer
						</span>
					</div>
					<button className="widgetSmButton">
						<Visibility className="widgetSmIcon" />
						Display
					</button>
				</li>
				<li className="widgetSmListItem">
					<img
						src="https://avatars.githubusercontent.com/u/47697586?s=400&u=848712c71bcc4c5d723d5bf4f2aba78608f43709&v=4"
						alt=""
						className="widgetSmImg"
					/>

					<div className="widgetSmUser">
						<span className="widgetSmUsername">Bhanu Prasad</span>
						<span className="widgetSmUserTitle">
							Software Engineer
						</span>
					</div>
					<button className="widgetSmButton">
						<Visibility className="widgetSmIcon" />
						Display
					</button>
				</li>
				<li className="widgetSmListItem">
					<img
						src="https://avatars.githubusercontent.com/u/47697586?s=400&u=848712c71bcc4c5d723d5bf4f2aba78608f43709&v=4"
						alt=""
						className="widgetSmImg"
					/>

					<div className="widgetSmUser">
						<span className="widgetSmUsername">Bhanu Prasad</span>
						<span className="widgetSmUserTitle">
							Software Engineer
						</span>
					</div>
					<button className="widgetSmButton">
						<Visibility className="widgetSmIcon" />
						Display
					</button>
				</li>
				<li className="widgetSmListItem">
					<img
						src="https://avatars.githubusercontent.com/u/47697586?s=400&u=848712c71bcc4c5d723d5bf4f2aba78608f43709&v=4"
						alt=""
						className="widgetSmImg"
					/>

					<div className="widgetSmUser">
						<span className="widgetSmUsername">Bhanu Prasad</span>
						<span className="widgetSmUserTitle">
							Software Engineer
						</span>
					</div>
					<button className="widgetSmButton">
						<Visibility className="widgetSmIcon" />
						Display
					</button>
				</li>
			</ul>
		</div>
	);
}

export default WidgetSm
