import {FaHome} from 'react-icons/fa'
import {MdMiscellaneousServices} from 'react-icons/md'
import {MdLocalLibrary} from 'react-icons/md'
import {IoNotificationsSharp} from 'react-icons/io5'
import {MdPrivacyTip} from 'react-icons/md'


const links=[
    {id:1, path:'/', text:'Home', icons:<FaHome/>},
    {id:2, path:'/services', text:'Services', icons:<MdMiscellaneousServices/>},
    {id:3, path:'/reports', text:'Reports', icons:<MdLocalLibrary/>},
    {id:4, path:'/profile', text:'Profile', icons:<IoNotificationsSharp/>},
    {id:5, path:'/privacy', text:'Privacy policy', icons:<MdPrivacyTip/>}
    
]


export default links;