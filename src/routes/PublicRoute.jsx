import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {Shimmer} from '../components/Shimmer';

export const PublicRoute = ({ children }) => {
  const { uid, loading } = useSelector((store) => store.user);

  if (loading) return <Shimmer/>;
  if (uid) return <Navigate to="/home" replace />;

  return children;
};
