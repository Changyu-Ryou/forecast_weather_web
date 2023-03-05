import React, { useCallback, useEffect } from 'react';

interface Props {
  mapRef: React.MutableRefObject<null | kakao.maps.Map>;
  loading: boolean;
  error: boolean;
  setCurrentLocationIconHandler?: (position: CureentPositionType) => void;
  currentPosition: CureentPositionType;
}
export const GangnamPositon = {
  lat: 37.4978,
  lng: 127.0282,
};

export type CureentPositionType =
  | {
      lat: number;
      lng: number;
    }
  | undefined;

const getCurrentPostion = async (): Promise<CureentPositionType> =>
  new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      function (pos) {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        resolve({ lat, lng });
      },
      function () {
        reject(undefined);
      }
    );
  });

export const moveToMyLocation = async ({
  mapEl,
  setCurrentLocationIconHandler,
  panToMyLocation = false,
}: {
  mapEl: kakao.maps.Map;
  setCurrentLocationIconHandler?: (position: CureentPositionType) => void;
  panToMyLocation?: boolean;
}) => {
  try {
    const postion = await getCurrentPostion();
    if (!postion) return false;
    panToMyLocation && mapEl?.panTo(new kakao.maps.LatLng(postion.lat, postion.lng));
    setCurrentLocationIconHandler?.(postion);
    return true;
  } catch (e) {
    console.log("Can't get location");
    return false;
  }
};

function useInitMapCenter({
  mapRef,
  loading,
  error,
  setCurrentLocationIconHandler,
  currentPosition,
}: Props) {
  const checkInfo = useCallback(async () => {
    if (!mapRef.current) return false;
    mapRef.current?.setCenter(new kakao.maps.LatLng(GangnamPositon.lat, GangnamPositon.lng));
    return true;
  }, [mapRef]);

  useEffect(() => {
    if (loading || error) return;
    checkInfo();
    const moveToMyLocationTimer = setTimeout(() => {
      if (currentPosition) {
        mapRef.current?.panTo(new kakao.maps.LatLng(currentPosition.lat, currentPosition.lng));
      }
    }, 1000);

    return () => clearTimeout(moveToMyLocationTimer);
  }, [checkInfo, error, loading, mapRef]);

  const checkMyLocation = useCallback(async () => {
    if (!mapRef.current) return false;
    const watchId = navigator.geolocation.watchPosition(function (position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      setCurrentLocationIconHandler?.({ lat, lng });
    });
    return () => navigator.geolocation.clearWatch(watchId);
  }, [mapRef, setCurrentLocationIconHandler]);

  useEffect(() => {
    checkMyLocation();
  }, [checkMyLocation]);
}

export default useInitMapCenter;
