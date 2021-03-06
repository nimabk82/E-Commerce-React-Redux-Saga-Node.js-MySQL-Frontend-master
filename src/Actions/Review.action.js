import {
  CREATE_REVIEW,
  SAVE_REVIEWS,
  APPEND_REVIEW,
  SUCCESSFUL,
  FAILED,
  SAVE_PRODUCT_ID,
  ADD_RATING,
} from "./Action.types";

export const createReview = (review) => {
  return {
    type: CREATE_REVIEW,
    review: review,
  };
};

export const saveReviews = (data) => {
  return {
    type: SAVE_REVIEWS,
    data: data, // a list of reviews
  };
};

export const appendReview = (data) => {
  return {
    type: APPEND_REVIEW,
    data: data, // a single reviews
  };
};

export const successful = () => {
  return {
    type: SUCCESSFUL,
  };
};

export const failed = () => {
  return {
    type: FAILED,
  };
};

export const saveProductId = (id) => {
  return {
    type: SAVE_PRODUCT_ID,
    id: id,
  };
};

//TODO check reducer
export const addRating = (type, data) => {
  return {
    type: ADD_RATING,
    ratingType: type,
    data: data,
  };
};
