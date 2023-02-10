
import {Link} from 'react-router-dom';
import {GrUserAdmin} from 'react-icons/gr';
import { useUserContext } from '../context/UserContext';
import CartStatus from './CartStatus';
export default function Header() {
    const {user,login,logout} = useUserContext();
    return (
        <header className=' text-red-800 font-serif bg-zinc-50 fixed z-20  w-full p-5 flex 2xl:flex-row flex-col '>
                    <Link to='/'>
                      <div className='cursor-pointer text-3xl sm:text-4xl lg:text-5xl p-1 font-semibold '>Mood</div>
                    </Link>
                    <div className='w-full flex items-center 2xl:justify-around  justify-between '>
                        <ul className='flex flex-col justify-center lg:flex-row lg:gap-10 lg:text-xl cursor-pointer font-bold'>
                             <Link to='/shop/all'><li>ALL</li></Link>
                             <Link to='/shop/glasses'><li>Glasses</li></Link>
                             <Link to='/shop/sun'><li>Sunglasses</li></Link>
                        </ul>
                        <div className='flex gap-3 items-center ml-3 font-bold text-sm  lg:text-lg cursor-pointer'>
                            {user&& <img className='w-6 h-6 rounded-full  invisible lg:visible border-blue-100 border-4 ' src={user.photoURL} alt="" />}
                            {user&&<p className='invisible lg:visible'>{user.displayName}</p>}
                            {!user&&<button onClick={login}>Login</button>}
                            {user&&<button onClick={logout}>Logout</button>}
                            {user&&<Link to='/cart'><CartStatus/></Link>}
                            {(user&&user.isAdmin)?<Link to='/shop/admin'><p className=' text-red-800'><GrUserAdmin/></p></Link>:''}
                        </div>
                    </div> 
        </header>
    );
}

