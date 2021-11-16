import React from "react";
import {Route} from 'react-router-dom';
import SideBar from "./sidebar";
import Users from './users';
import Posts from "./posts";

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <SideBar></SideBar>
      <Route path="/admin/users" component={Users}></Route>
      <Route path="/admin/posts" component={Posts}></Route>
    </div>
  );
};

export default Dashboard;
