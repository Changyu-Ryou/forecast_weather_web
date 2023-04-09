export const ROUTE_PATHS = {
  HOME: '/home',
  MY: '/my',
  ON_BOARD: '/onboard',
  ON_BOARD_INPUT: '/onboard/goal',
  NOT_FOUND: '/not-found',
  ARRIVE_CARD: '/arrive-card',
  BOTTOMSHEET: {
    EDIT_GOAL: '/bottomsheet/edit-goal',
  },
};

export const buildRoutePath = {
  arriveCard: (id: string) => `/arrive-card/${id}`,
};
