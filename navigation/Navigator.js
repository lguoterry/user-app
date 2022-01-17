import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AnalyzerScreen from '../screens/AnalyzerScreen';
import DataScreen from '../screens/DataScreen';
import FilterScreen from '../screens/FilterScreen';
import Colors from '../constants/Colors';
const Navigator = createStackNavigator(
    {
        Analyzer: AnalyzerScreen,
        Data: DataScreen,
        Filter: FilterScreen,
    },
    {
        defaultNavigationOptions: {
            headerTitle: '',
            headerStyle: {
                backgroundColor: Colors.primary,
            },
        }
    }
);
export default createAppContainer(Navigator);