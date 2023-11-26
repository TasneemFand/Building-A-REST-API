import express from "express";
import auth from './auth';

const router = express.Router();

/** create a new router object to handle requests */
export default (): express.Router => {
  auth(router);
  return router;
};
