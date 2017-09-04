import React, { Component } from 'react';
import IoIosPlusOutline from 'react-icons/lib/io/ios-plus-outline';

import { PostSummary } from './Post';
import LoadingSpinner from './LoadingSpinner';
import Alert from './Alert';

const PostList = ({ posts, isSuccess, isError, isLoading }) => (
  <div>
    {isLoading &&
      <LoadingSpinner />}
    {isSuccess &&
      (posts.length > 0
        ? posts.map(post => <PostSummary key={post.id} post={post} />)
        : <h5 className='text text-secondary'>There are no posts in this category :(</h5>)}
    {isError &&
      <Alert
        text={'There was an error fetching the posts!'}
        type={'danger'} />}
  </div>
);

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

  // TODO: Implement sorting
  render() {
    const { isFetching, posts, selectedSort, availableSortings, applyNewSorting } = this.props;

    return (
      <div className='row'>
        <div className='col-4'>
          <h3>{this.props.title}</h3>
        </div>
        <div className='col-8'>
          <ul className='nav nav-pills justify-content-end'>
            <li className='nav-item dropdown'>
              <a className='nav-link dropdown-toggle' data-toggle='dropdown' href='#' role='button' aria-haspopup='true' aria-expanded='false'>
                {availableSortings[selectedSort].display}
              </a>
              <div className='dropdown-menu'>
                {Object.keys(availableSortings)
                  .filter(key => key !== selectedSort)
                  .map(key => availableSortings[key])
                  .map(sorting => (
                    <a key={sorting.option}
                      className='dropdown-item'
                      href='#'
                      onClick={() => applyNewSorting(sorting.option)}>
                      {sorting.display}
                    </a>
                  ))
                }
              </div>
            </li>
            <li className='nav-item'>
              <button className='btn btn-primary'>
                <IoIosPlusOutline size={30} />
              </button>
            </li>
          </ul>
        </div>
        <div className='col-12 mt-3'>
          <PostList
            isSuccess={this.hasSuccesfullyFetched()}
            isError={this.hasFetchedWithError()}
            isLoading={isFetching}
            posts={posts} />
        </div>
      </div>
    );
  }
};

export default Posts;