import { Routes, Route } from 'react-router-dom';
import BasicTable from './components/BasicTable';
import Image from './components/Image';


function Routing() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Image />}/>
                <Route path='/quan-ly' element={<BasicTable />} />
            </Routes>
        </>
    );
}
export default Routing;