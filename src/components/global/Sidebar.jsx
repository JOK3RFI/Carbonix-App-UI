import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "reactstrap";

const Sidebar = (props) => {
    let history = useHistory();
    const toggleSidebar = () => {
        let sidebar = document.getElementsByClassName("sidebar")[0];
        let mainContent = document.getElementsByClassName("main-content")[0];
        sidebar.classList.toggle("hide");
        mainContent.classList.toggle("hide");
    }
    const monitorNavbar = () => {
        let sidebar = document.getElementsByClassName("sidebar")[0];
        let mainContent = document.getElementsByClassName("main-content")[0];
        if (window.innerWidth < 991.98) {
            sidebar.classList.remove("hide");
            sidebar.classList.add("collapse");
            mainContent.classList.remove("hide");
        }
        else {
            sidebar.classList.remove("collapse");
        }
    }
    useEffect(() => {
        window.addEventListener("resize", monitorNavbar)
        return () => {
            window.removeEventListener("resize", monitorNavbar)
        }
    })
    useEffect(()=>{
        monitorNavbar();
    },[])
    return (<>
        <div className="sidebar bg-site-secondary">
            <div className="theme-nav-items">
                <Link to="/farming" className={`theme-nav-item ${history.location.pathname == "/farming" ? "active" : ""}`}>
                    <i className="fa fa-tractor"></i>
                    <span className="ml-3">Yield Farming</span>
                </Link>
                <Link to="/governance" className={`theme-nav-item ${history.location.pathname == "/governance" ? "active" : ""}`}>
                    <i className="fa fa-university"></i>
                    <span className="ml-3">Governance</span>
                </Link>
                <Link to="/smartyield"  className={`theme-nav-item ${history.location.pathname == "/smartyield" ? "active" : ""}`}>
                    <i className="fa fa-file-contract"></i>
                    <span className="ml-3">SMART Yield</span>
                </Link>
                <Link to="#" className="theme-nav-item">
                    <i className="fa fa-hat-cowboy-side"></i>
                    <span className="ml-3">SMART Exposure</span>
                </Link>
                <Link to="#" className="theme-nav-item">
                    <i className="fa fa-file-contract"></i>
                    <span className="ml-3">SMART Alpha</span>
                </Link>
                <Link to="#" className="theme-nav-item custom-navbar-toggler" onClick={e => toggleSidebar()}>
                    <i className="fa show-icon fa-arrow-left"></i>
                    <i className="fa hide-icon fa-arrow-right"></i>
                    <span className="ml-3">Hide Menu</span>
                </Link>
                <div className="d-sm-flex d-lg-none">
                    <Button block color="outline-site-primary">Ethereum Mainnet</Button>
                    <Button block color="site-primary" className="ml-0 ml-sm-4 mt-3 mt-sm-0">Connect Wallet</Button>
                </div>
            </div>
        </div>
    </>);
}

export default Sidebar;