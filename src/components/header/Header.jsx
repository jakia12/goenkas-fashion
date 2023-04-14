
import TopNav from '../topNav/TopNav'
import MainNav from '../mainNav/MainNav'

const Header = () => {
    return (
        <>
            <div className="hidden md:block">
                <TopNav />
            </div>
            <MainNav />
        </>
    )
}

export default Header