import { Outlet } from "react-router-dom";

function Dashboard() {
    return (
      <div>
        <h1>Dashboard</h1>
  
        {/* This element will render either <DashboardMessages> when the URL is
            "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
        */}
        <Outlet />
      </div>
    );
  }

export default Dashboard;