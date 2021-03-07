import React from 'react';
import CampingCategoryProducts from '../organ/CategoriesSection/CampingCategoryProducts';
import ElectronicsCategoryProducts from '../organ/CategoriesSection/ElectronicsCategoryProducts';
import GiftsCategoryProducts from '../organ/CategoriesSection/GiftsCategoryProducts';
import HomeAndDecorCategoryProducts from '../organ/CategoriesSection/HomeAndDecorCategoryProducts';
import NewAgeDevicesCategoryProducts from '../organ/CategoriesSection/NewAgeDevicesCategoryProducts';
import BabyCategoryProducts from '../organ/CategoriesSection/BabyCategoryProducts';

function ProductSection() {
  return (
    <div>
      <NewAgeDevicesCategoryProducts />
      <ElectronicsCategoryProducts />
      <CampingCategoryProducts />
      <HomeAndDecorCategoryProducts />
      <GiftsCategoryProducts />
      <BabyCategoryProducts />
    </div>
  );
}

export default ProductSection;
