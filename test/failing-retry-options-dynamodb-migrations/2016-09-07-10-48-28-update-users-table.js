"use strict";

exports.retry = {
  maxAttempts: 3,
  delay: 100,
  factor: 2,
  jitter: true,
};

// This is only used for testing:
exports.timesRun = 0;

exports.up = (dynamodb) => {
  exports.timesRun++;
  return Promise.reject(new Error("This migration failed!"));
};
