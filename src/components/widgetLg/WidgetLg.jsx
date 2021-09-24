import "./widgetLg.css";

const WidgetLg = () => {

	const Button = ({ type }) => {
		return <button className={"widgetLgButton " + type}>{type}</button>
	}
	return (
		<div className="widgetLg">
			<h3 className="widgetLgTitle">Latest Transactions</h3>
			<table className="widgetLgTable">
				<tr className="widgetLgTr">
					<th className="widgetLgTh">Customer</th>
					<th className="widgetLgTh">Date</th>
					<th className="widgetLgTh">Amount</th>
					<th className="widgetLgTh">Status</th>
				</tr>
				<tr className="widgetLgTr">
					<td className="widgetLgUser">
						<img
							src="https://avatars.githubusercontent.com/u/47697586?s=400&u=848712c71bcc4c5d723d5bf4f2aba78608f43709&v=4"
							alt=""
							className="widgetLgImg"
						/>

						<span className="widgetLgName">Bhanu Prasad</span>
					</td>

					<td className="widgetLgDate">23 Sep 2021</td>
					<td className="widgetLgAmount">$122.00</td>
					<td className="widgetLgStatus">
						<Button type="Approved" />
					</td>
				</tr>
				<tr className="widgetLgTr">
					<td className="widgetLgUser">
						<img
							src="https://avatars.githubusercontent.com/u/47697586?s=400&u=848712c71bcc4c5d723d5bf4f2aba78608f43709&v=4"
							alt=""
							className="widgetLgImg"
						/>

						<span className="widgetLgName">Bhanu Prasad</span>
					</td>

					<td className="widgetLgDate">23 Sep 2021</td>
					<td className="widgetLgAmount">$122.00</td>
					<td className="widgetLgStatus">
						<Button type="Declined" />
					</td>
				</tr>
				<tr className="widgetLgTr">
					<td className="widgetLgUser">
						<img
							src="https://avatars.githubusercontent.com/u/47697586?s=400&u=848712c71bcc4c5d723d5bf4f2aba78608f43709&v=4"
							alt=""
							className="widgetLgImg"
						/>

						<span className="widgetLgName">Bhanu Prasad</span>
					</td>

					<td className="widgetLgDate">23 Sep 2021</td>
					<td className="widgetLgAmount">$122.00</td>
					<td className="widgetLgStatus">
						<Button type="Pending" />
					</td>
				</tr>
				<tr className="widgetLgTr">
					<td className="widgetLgUser">
						<img
							src="https://avatars.githubusercontent.com/u/47697586?s=400&u=848712c71bcc4c5d723d5bf4f2aba78608f43709&v=4"
							alt=""
							className="widgetLgImg"
						/>

						<span className="widgetLgName">Bhanu Prasad</span>
					</td>

					<td className="widgetLgDate">23 Sep 2021</td>
					<td className="widgetLgAmount">$122.00</td>
					<td className="widgetLgStatus">
						<Button type="Approved" />
					</td>
				</tr>
			</table>
		</div>
	);
};

export default WidgetLg;
