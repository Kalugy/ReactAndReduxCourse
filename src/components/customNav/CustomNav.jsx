import { NavigationProvider } from '../../context/Navigation';
import Accordion from '../dropdown/Accordeon';
import Sidebar from './SideBar';
import Route from './Route';
import Select from '../dropdown/Select';
import ButtonPage from './ButtonPage';
const CustomNav = () => {
    return(
        <NavigationProvider>
            <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
                <Sidebar />
                <div className="col-span-5">
                    <Route path="/customnav">
                        <Accordion />
                    </Route>
                    <Route path="/customnav/select">
                        <Select />
                    </Route>
                    <Route path="/customnav/buttons">
                        <ButtonPage />
                    </Route> 
                </div>
                </div>
        </NavigationProvider>
    )
}

export default CustomNav