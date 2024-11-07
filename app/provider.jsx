"use client";

import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { UserDetailContext } from './_context/UserDetailContext';

function Provider({ children }) {
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState(null); // Updated state name to avoid confusion with context

  useEffect(() => {
    if (user) {
      verifyUser();
    }
  }, [user]);

  const verifyUser = async () => {
    try {
      const dataResult = await axios.post('/api/verify-user', {
        user: user,
      });
      setUserDetail(dataResult.data.result);
      console.log(dataResult.data);
    } catch (error) {
      console.error('Error verifying user:', error);
    }
  };

  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      <div>{children}</div>
    </UserDetailContext.Provider>
  );
}

export default Provider;