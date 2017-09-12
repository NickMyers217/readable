import * as uuid from 'uuid';

/**
 * A constructor function for a Post object
 * @param {String} title 
 * @param {String} body 
 * @param {String} author 
 * @param {String} category 
 */
export const Post = function (title, body, author, category) {
  this.id = `${uuid()}`;
  this.timestamp = Date.now();
  this.title = title;
  this.body = body;
  this.author = author;
  this.category = category;
  this.voteScore = 0;
  this.deleted = false;
};

/**
 * A constructor function for a Comment object
 * @param {String} parentId 
 * @param {String} body 
 * @param {String} author 
 */
export const Comment = function (parentId, body, author) {
  this.parentId = parentId;
  this.id = `${uuid()}`;
  this.timestamp = Date.now();
  this.body = body;
  this.author = author;
  this.voteScore = 0;
  this.deleted = false;
  this.parentDeleted = false;
};
