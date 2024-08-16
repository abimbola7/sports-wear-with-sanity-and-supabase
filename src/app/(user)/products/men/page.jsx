"use client"
import React from 'react'
import { useFetchType } from '@/hooks/api';
import ProductType from '@/components/productType';

export default function Men(params) {
  const { isLoading, error, products, memoizedFetchData } = useFetchType({type: "category", cat : "Men"})
  
  return (
    <ProductType
    type="Men"
    isLoading={isLoading}
    error={error}
    products={products}
    memoizedFetchData={memoizedFetchData}
    />
  )
}
