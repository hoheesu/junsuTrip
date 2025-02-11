'use client';
// import { useLoadStore } from '../../settings/stores/load-store';
// import { useAccessTokenStore } from '../../settings/stores/access-token-store';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { Modal } from 'antd';
const WithLoginCheck = (Component: any) => (Props: any) => {
  const router = useRouter();
  // const { isLoaded } = useLoadStore();
  // const { accessToken } = useAccessTokenStore();
  useEffect(() => {
    if (localStorage.getItem('accessToken') === null) {
      Modal.error({
        title: '로그인 후 이용 가능합니다.',
      });
      void router.push('../../login');
    }
  }, []);
  return <Component {...Props} />;
};
export default WithLoginCheck;
