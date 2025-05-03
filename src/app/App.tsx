import { withProviders } from './providers';
import { Routing } from '../pages';

const App = () => <Routing />;

const AppWithProviders = withProviders(App);
export default AppWithProviders;
