import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Navigate } from "../../types/types";
import useSelectors from "../../hooks/useSelector";

const withRestrictions = (Component: React.ComponentType) => {
  return () => {
    const { user } = useSelectors();
    const navigate: Navigate = useNavigation();
    useEffect(() => {
      if (!user) {
        return navigate.navigate("Home");
      }
    }, [user]);

    if (!user) {
      return null;
    }

    return (
      <>
        <Component />
      </>
    );
  };
};

export default withRestrictions;
