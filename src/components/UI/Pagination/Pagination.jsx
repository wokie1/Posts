import React from 'react';
import {getPageArray} from "../../../utils/page";

const Pagination = ({totalPages, page,changePosts}) => {
    let pageArray = getPageArray(totalPages);
    return (
        <div className="page__wrapper">
            {pageArray.map(p =>
                <span
                    key={p}
                    className={page === p ? 'page page__current' : 'page'}
                    onClick={() => changePosts(p)}>
                        {p}
                    </span>
            )}
        </div>
    );
};

export default Pagination;