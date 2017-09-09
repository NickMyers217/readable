import React from 'react';

const PostForm = ({ title, author, categories, category, body, onFieldChange, addNewPost }) => (
  <div>
    <div className='modal-body'>
      <form>
        <div className='form-row'>
          <div className='col'>
            <input
              type='text'
              className='form-control'
              value={title}
              placeholder='Post title'
              onChange={(e) => onFieldChange('title', e.target.value)} />
          </div>
          <div className='col'>
            <input
              type='text'
              className='form-control'
              value={author}
              placeholder='Your name'
              onChange={(e) => onFieldChange('author', e.target.value)} />
          </div>
          <div className='col'>
            <select
              className='form-control'
              value={!category || category === '' ? 'Category...' : category}
              onChange={(e) => onFieldChange('category', e.target.value)} >
              <option disabled>Category...</option>
              {categories.map(({ name, path }) => <option key={path}>{name}</option>)}
            </select>
          </div>
        </div>
        <br />
        <div className='form-group'>
          <textarea
            className='form-control'
            value={body}
            placeholder='Write your wonderful post here!'
            rows='3'
            onChange={(e) => onFieldChange('body', e.target.value)} >
          </textarea>
        </div>
      </form>
    </div>
    <div className='modal-footer'>
      <button type='button' className='btn btn-secondary' data-dismiss='modal'>Close</button>
      <button
        type='button'
        className='btn btn-primary'
        onClick={() => addNewPost(title, body, author, category)}>
        Submit
      </button>
    </div>
  </div>
);

export default PostForm;