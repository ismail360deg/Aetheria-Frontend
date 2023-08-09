import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaBook, FaMoneyBill, FaMoneyCheck, FaUser, FaUtensils } from "react-icons/fa";

const AdminHome = () => {
    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure();

    const {data : stats = {}} = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure('admin-stats'); 
            return res.data;
        }
    })

    return (
        <div className="w-full m-4">
                <h2 className="text-3xl">Hi, Welcome back {user.displayName}</h2>     
                <div className="stats shadow">
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <FaMoneyBill/>
    </div>
    <div className="stat-title">Revenue</div>
    <div className="stat-value">${stats.revenue}</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
     <FaUser/>
    </div>
    <div className="stat-title">Users</div>
    <div className="stat-value">{stats.users}</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  <div className="stat">
    <div className="stat-figure text-secondary">
    <FaUtensils/>
    </div>
    <div className="stat-title">Menu Items</div>
    <div className="stat-value">{stats.menuItems}</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
    <FaBook/>
    </div>
    <div className="stat-title">Orders</div>
    <div className="stat-value">{stats.orders}</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>       
        </div>
    );
};

export default AdminHome;