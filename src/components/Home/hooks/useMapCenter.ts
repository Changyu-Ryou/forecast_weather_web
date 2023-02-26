import React, { ReactElement, useCallback, useEffect } from 'react';

interface Props {
  mapRef: React.MutableRefObject<null | kakao.maps.Map>;
  loading: boolean;
  error: boolean;
}
export const GangnamPositon = {
  lat: 37.4978,
  lng: 127.0282,
};

function useMapCenter({ mapRef, loading, error }: Props) {
  const checkInfo = useCallback(() => {
    if (!mapRef.current) return false;
    mapRef.current?.setCenter(new kakao.maps.LatLng(GangnamPositon.lat, GangnamPositon.lng));
    return true;
  }, [mapRef]);

  useEffect(() => {
    if (loading || error) return;

    let timer: NodeJS.Timer;
    if (!mapRef.current) {
      timer = setInterval(() => {
        const result = checkInfo();
        if (result) clearInterval(timer);
      }, 500);
    } else checkInfo();

    return () => clearInterval(timer);
  }, [checkInfo, error, loading, mapRef]);
}

export default useMapCenter;
