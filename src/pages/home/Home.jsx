import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import { userData } from '../../dummyData';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import './home.css';

const Home = () => {
	return (
		<div className="home">

			<FeaturedInfo />
			<Chart title="User Analytics" data={userData} dataKey="Active User" grid={true} />
			
			<div className="homeWidgets">
				<WidgetSm />
				<WidgetLg/>
			</div>
			
		</div>
	)
}

export default Home
