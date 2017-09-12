import React from 'react';

const DataForm = ({
  data,
  categories,
  formMode,
  onFieldChange,
  isFieldVisible,
  addNewPost,
  editPost,
  addNewComment,
  editComment,
  isCreateMode,
  isEditMode,
  isPostMode,
  isCommentMode
}) => (
  <div>
    <div className='modal-header'>
      <h5 className='modal-title'>
        {isCreateMode()
          ? isCommentMode() ? 'Create a new comment!' : 'Create a new post!'
          : isCommentMode() ? 'Editing comment!' : 'Editing post!'}
      </h5>
      <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
        <span aria-hidden='true'>&times;</span>
      </button>
    </div>
    <div className='modal-body'>
      <form>
        <div className='form-row'>
          {isFieldVisible('title') &&
            <div className='col'>
              <input
                type='text'
                className='form-control'
                value={data.title}
                placeholder='Post title'
                onChange={(e) => onFieldChange('title', e.target.value)} />
            </div>}
          {isFieldVisible('author') &&
            <div className='col'>
              <input
                type='text'
                className='form-control'
                value={data.author}
                placeholder='Your name'
                onChange={(e) => onFieldChange('author', e.target.value)} />
            </div>}
          {isFieldVisible('category') &&
            <div className='col'>
              <select
                className='form-control'
                value={!data.category || data.category === '' ? 'Category...' : data.category}
                onChange={(e) => onFieldChange('category', e.target.value)} >
                <option disabled>Category...</option>
                {categories.map(({ name, path }) => <option key={path}>{name}</option>)}
              </select>
            </div>}
        </div>
        <br />
        {isFieldVisible('body') &&
          <div className='form-group'>
            <textarea
              className='form-control'
              value={data.body}
              placeholder='Write your wonderful post here!'
              rows='3'
              onChange={(e) => onFieldChange('body', e.target.value)} >
            </textarea>
          </div>}
      </form>
    </div>
    <div className='modal-footer'>
      <button type='button' id='closeModalButton' className='btn btn-secondary' data-dismiss='modal'>Close</button>
      <button
        type='button'
        className='btn btn-primary'
        onClick={() => {
          if (isCreateMode()) {
            if (isPostMode()) {
              addNewPost(data.title, data.body, data.author, data.category);
            } else {
              addNewComment(data.parentId, data.body, data.author);
            }
          } else {
            if (isPostMode()) {
              editPost(data.id, data.title, data.body);
            } else {
              editComment(data.id, data.body);
            }
          }
        }}>
        Submit
    </button>
    </div>
  </div>
);

export default DataForm;