import React from 'react';
import { Link } from 'react-router-dom';

// If a page does not exist, show the link to home page
const PageNotExisted = () => (
    <p>Page does not exist - let's go back to <Link to="/">home page</Link></p>
)

export default PageNotExisted;
