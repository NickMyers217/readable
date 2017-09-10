import React from 'react';

const PostForm = ({
  formMode,
  id='',
  title,
  author,
  categories,
  category,
  body,
  onFieldChange,
  addNewPost,
  editPost
}) => (
  <div>
    <div className='modal-header'>
      <h5 className='modal-title'>
        {formMode === 'create' ? 'Add a new post!' : 'Edit post'}
      </h5>
      <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
        <span aria-hidden='true'>&times;</span>
      </button>
    </div>
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
          {formMode === 'create' &&
            <div className='col'>
              <input
                type='text'
                className='form-control'
                value={author}
                placeholder='Your name'
                onChange={(e) => onFieldChange('author', e.target.value)} />
            </div>}
          {formMode === 'create' &&
            <div className='col'>
              <select
                className='form-control'
                value={!category || category === '' ? 'Category...' : category}
                onChange={(e) => onFieldChange('category', e.target.value)} >
                <option disabled>Category...</option>
                {categories.map(({ name, path }) => <option key={path}>{name}</option>)}
              </select>
            </div>}
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
      <button type='button' id='closeModalButton' className='btn btn-secondary' data-dismiss='modal'>Close</button>
      <button
        type='button'
        className='btn btn-primary'
        onClick={() => {
          if(formMode === 'create') {
            addNewPost(title, body, author, category);
          } else {
            editPost(id, title, body);
          }
        }}>
        Submit
      </button>
    </div>
  </div>
);

export default PostForm;