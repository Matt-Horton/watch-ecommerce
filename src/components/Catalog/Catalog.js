import React from 'react';
import CatalogBenefits from './CatalogBenefits/CatalogBenefits';
import CatalogIntro from './CatalogIntro/CatalogIntro';
import CatalogSections from './CatalogSections/CatalogSections';

export default function Catalog() {
  return (
    <div>
      <CatalogIntro />
      <CatalogSections />
      <CatalogBenefits />
    </div>
  );
}
