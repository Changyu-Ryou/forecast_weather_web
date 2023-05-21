export const ROUTE_PATHS = {
  HOME: '/home',

  BottomSheet: {
    ShirineDetail: '/shrine/:shrineName',
  },
};

export const buildRoutePath = {
  BottomSheet: {
    ShirineDetail: (name: string) =>
      ROUTE_PATHS.BottomSheet.ShirineDetail.replace(':shrineName', name),
  },
};
