export const addBall = ball => {
  if (ball < 4) {
    return ball + 1;
  }
};

export const addStrike = strike => {
  if (strike < 3) {
    return strike + 1;
  }
};

export const addFoul = strike => {
  if (strike === 0) {
    return strike + 1;
  } else if (strike === 1) {
    return strike + 2;
  } else if (strike === 2) {
    return 0;
  }
};

export const addHit = hit => {
  return hit + 1;
};
