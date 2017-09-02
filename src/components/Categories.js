import React from 'react';
import { Link } from 'react-router-dom';

class Categories extends React.Component {
  componentDidMount() {
    this.props.fetchAllCategories();
  }

  render() {
    return (
      <div>
        <h4>Categories</h4>
        <hr />
        <ul>
          <li key={'_all'}>
            <Link to={'/'} onClick={() => this.props.updateCategoryAndTitle(null, 'All Posts')}>
              All
            </Link>
          </li>
          {this.props.categories.map(({ name, path }) => (
            <li key={name}>
              <Link to={path} onClick={() => this.props.updateCategoryAndTitle(name, `Posts for ${name}`)}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Categories;