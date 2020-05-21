import React from 'react';
import './category_titles_styles.css';

class Categories extends React.Component {
    generateCategories() {
        // generates the category headers
        const categories = new Array(5).fill(0);
        return categories.map((el, index) => {
            return (
                <div key={index} className="title">
                    {`C${index + 1}`}
                </div>
            )
        })
    }

    render() {
        return(
            <div id="title-container">
                {this.generateCategories()}
            </div>
        );
    }
}

// const Categories = () => {
// }

export default Categories;