import { Routes, Route } from 'react-router-dom';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import Category from '../category/category.component';

import './shop.styles.scss';

const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoryPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    );
};

export default Shop;
