import express from "express";
import authentication from './auth';

const router = express.Router();

/** create a new router object to handle requests */
export default (): express.Router => {
  authentication(router);
  return router;
};
