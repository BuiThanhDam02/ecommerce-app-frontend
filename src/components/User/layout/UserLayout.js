import SlideNav from "../components/SlideNav";
import { Route, Routes } from "react-router-dom";
import Profile from "../components/Profile";
import Changepassword from "../components/Changepassword";
import Order from "../components/HistoryOrder";
import "./UserLayout.scss";

const UserLayout = () => {
  return (
    <div className="profile">
      <div className="container">
        <div className="profile-content">
          <div className="profile-sidenav">
            <SlideNav />
          </div>
          <div className="profile-outlet">
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="changepassword" element={<Changepassword />} />
              <Route path="order" element={<Order />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
