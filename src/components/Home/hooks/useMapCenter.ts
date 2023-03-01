import React, { useCallback, useEffect } from 'react';

interface Props {
  mapRef: React.MutableRefObject<null | kakao.maps.Map>;
  loading: boolean;
  error: boolean;
  setCurrentLocationIconHandler?: (position: CureentPositionType) => void;
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
      },
      {
        enableHighAccuracy: false,
      }
    );
  });

export const moveToMyLocation = async ({
  mapEl,
  setCurrentLocationIconHandler,
}: {
  mapEl: kakao.maps.Map;
  setCurrentLocationIconHandler?: (position: CureentPositionType) => void;
}) => {
  try {
    const postion = await getCurrentPostion();
    if (!postion) return false;
    mapEl?.panTo(new kakao.maps.LatLng(postion.lat, postion.lng));
    setCurrentLocationIconHandler?.(postion);
    return true;
  } catch (e) {
    console.log("Can't get location");
    return false;
  }
};

function useMapCenter({ mapRef, loading, error, setCurrentLocationIconHandler }: Props) {
  const checkInfo = useCallback(async () => {
    if (!mapRef.current) return false;
    const result = await moveToMyLocation({ mapEl: mapRef.current, setCurrentLocationIconHandler });
    if (!result)
      mapRef.current?.setCenter(new kakao.maps.LatLng(GangnamPositon.lat, GangnamPositon.lng));
    return true;
  }, [mapRef]);

  useEffect(() => {
    if (loading || error) return;

    let timer: NodeJS.Timer;
    if (!mapRef.current) {
      timer = setInterval(async () => {
        const result = await checkInfo();
        if (result) clearInterval(timer);
      }, 500);
    } else checkInfo();

    return () => clearInterval(timer);
  }, [checkInfo, error, loading, mapRef]);
}

export default useMapCenter;
