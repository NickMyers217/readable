import * as uuid from 'uuid';
import * as moment from 'moment';

/**
 * A constructor function for a Post object
 * @param {String} title 
 * @param {String} body 
 * @param {String} author 
 * @param {String} category 
 */
const Post = function (title, body, author, category) {
  this.id = `Post-${uuid()}`;
  this.timestamp = moment().format();
  this.title = title;
  this.body = body;
  this.author = author;
  this.category = category;
  this.voteScore = 0;
  this.deleted = false;
};

export default Post;