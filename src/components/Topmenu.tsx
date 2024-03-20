import TopMenuItem from "./TopMenuItem"
import HomeIcon from '@mui/icons-material/Home';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MinorCrashIcon from '@mui/icons-material/MinorCrash';

export default function TopMenu(){

    return (
        <div className="h-[60px] bg-black/[0.6] fixed top-0 left-0 right-0 z-30 border-solid border-20 border-t border-b border-black
        flex flex-row justify-between items-center ">
            <div className="flex flex-row sm:ml-3 ml-0">
                <TopMenuItem title="Car catalogs" item='Cars' pageRef='/cars'/>
                <TopMenuItem  title='Shop catalogs' item='Shops' pageRef='/shops'/>                
            </div>
            <div className="flex flex-row mr-3 sm:mr-0">
                <TopMenuItem title='Home page' item={<HomeIcon sx={{ color: '#FFF' }} fontSize="large" />} pageRef="/"/>
                <TopMenuItem title='User page' item={ <PermIdentityIcon sx={{ color: '#FFF' }} fontSize="large"/>} pageRef="/user"/>
                <TopMenuItem title='Make Reservation' item={<MinorCrashIcon sx={{ color: '#F00' }} fontSize="large"/>} pageRef='/reservation'/>                
            </div>
        </div>
    )
}