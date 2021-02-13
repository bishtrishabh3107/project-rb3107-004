import React from 'react';
import CampingCategoryProducts from '../organ/CategoriesSection/CampingCategoryProducts';
import ElectronicsCategoryProducts from '../organ/CategoriesSection/ElectronicsCategoryProducts';
import HomeAndDecorCategoryProducts from '../organ/CategoriesSection/HomeAndDecorCategoryProducts';
import NewAgeDevicesCategoryProducts from '../organ/CategoriesSection/NewAgeDevicesCategoryProducts';

function ProductSection() {
  return (
    <div>
      <NewAgeDevicesCategoryProducts />
      <ElectronicsCategoryProducts />
      <CampingCategoryProducts />
      <HomeAndDecorCategoryProducts />
    </div>
  );
}

export default ProductSection;
