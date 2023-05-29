export const ROUTE_PATHS = {
  HOME: '/home',

  BottomSheet: {
    ShirineDetail: '/shrine/:shrineName',
    CaveDetail: '/cave/:caveName',
  },
};

export const buildRoutePath = {
  BottomSheet: {
    ShirineDetail: (name: string) =>
      ROUTE_PATHS.BottomSheet.ShirineDetail.replace(':shrineName', name),
    CaveDetail: (name: string) => ROUTE_PATHS.BottomSheet.CaveDetail.replace(':caveName', name),
  },
};
