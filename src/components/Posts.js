import React, { Component } from 'react';

import PostList from './PostList';
import SortingMenu from './SortingMenu';
import { CreateButton } from './util/Buttons';
import Modal from './util/Modal';
import PostFormContainer from '../containers/PostForm';

class Posts extends Component {
  componentDidMount() {
    const params = this.props.match.params;
    const category = params.category ? params.category : null;
    const title = category ? `Posts for ${category}` : 'All Posts';
    this.props.updateCategoryAndTitle(category, title);
    this.props.fetchAllPosts(category);
  }

  hasSuccesfullyFetched() {
    const { isFetching, isError } = this.props;
    return !isFetching && !isError;
  }

  hasFetchedWithError() {
    const { isFetching, isError } = this.props;
    return !isFetching && isError;
  }

  render() {
    const { title, posts, isFetching, selectedSort, availableSortings, applyNewSorting } = this.props; 
    return (
      <div className='row'>
        <div className='col-4'>
          <h3>{title}</h3>
        </div>
        <div className='col-8'>
          <ul className='nav nav-pills justify-content-end'>
            <li className='nav-item dropdown'>
              <SortingMenu
                availableSortings={availableSortings}
                selectedSort={selectedSort}
                onSortSelect={applyNewSorting} />
            </li>
            <li className='nav-item'>
              <CreateButton tooltip='Create a new post' modalId='createPostModal' />
              <Modal id='createPostModal' title='Add a new post!'>
                <PostFormContainer />
              </Modal>
            </li>
          </ul>
        </div>
        <div className='col-12 mt-3'>
          <PostList
            isSuccess={this.hasSuccesfullyFetched()}
            isError={this.hasFetchedWithError()}
            isLoading={isFetching}
            posts={posts.filter(({ deleted }) => !deleted)} />
        </div>
      </div>
    );
  }
};

export default Posts;