import React from 'react'

function Categories(props) {
    const { categories, setCurrCategory } = props;

    return (
        <>
            <button
                className='category_option'
                onClick={() => setCurrCategory("All Categories")}
            >All Categories</button>

            {
                categories.map((category) => {
                    return <button
                        className='category_option'
                        onClick={() => setCurrCategory(category)}
                    >
                        {category}
                    </button>
                })
            }

        </>
    )
}

export default Categories
