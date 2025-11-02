const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const getPagination = (page, limit) => {
  const pageNum = page ? parseInt(page) : 1;
  const limitNum = limit ? parseInt(limit) : 10;
  const offset = (pageNum - 1) * limitNum;
  
  return { limit: limitNum, offset };
};

const getPaginationMeta = (totalItems, page, limit) => {
  const currentPage = page ? parseInt(page) : 1;
  const itemsPerPage = limit ? parseInt(limit) : 10;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  return {
    totalItems,
    itemsPerPage,
    currentPage,
    totalPages,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1
  };
};

const generateToken = (length = 32) => {
  return crypto.randomBytes(length).toString('hex');
};

const generateOTP = (length = 6) => {
  let otp = '';
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  return otp;
};

const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

module.exports = {
  getPagination,
  getPaginationMeta,
  generateToken,
  generateOTP,
  slugify
};