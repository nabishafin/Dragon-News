import moment from 'moment';
import headlogo from '../assets/logo.png'
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center py-6'>
            <img src={headlogo} alt="" />
            <p className='py-2  text-2xl text-gray-400 text-center'>Journalism Without Fear or Favour</p>
            <p className='py-2  text-2xl text-center'>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            <div className='flex items-center justify-center gap-2 bg-gray-300 p-2 mt-3'>
                <p className='p-2 bg-[#D72050] text-white'>Latest</p>
                <Marquee pauseOnClick='true'>
                    <Link>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, adipisci consectetur deserunt dicta quaerat saepe cum praesentium molestias et iste quas fugiat mollitia accusantium corporis corrupti. Sapiente obcaecati laudantium amet. </Link>
                    {/* <Link>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, adipisci consectetur deserunt dicta quaerat saepe cum praesentium molestias et iste quas fugiat mollitia accusantium corporis corrupti. Sapiente obcaecati laudantium amet. </Link>
                    <Link>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, adipisci consectetur deserunt dicta quaerat saepe cum praesentium molestias et iste quas fugiat mollitia accusantium corporis corrupti. Sapiente obcaecati laudantium amet. </Link> */}
                </Marquee>
            </div>
        </div>
    );
};
export default Header;