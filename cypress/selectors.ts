const testId = (id: string) => `[data-testid="${id}"]`;

const selectors = {
  productImage: testId("product-image"),
  productCard: testId("product-card"),
  productDescription: testId("product-description"),
  productReferencePrice: testId("product-reference-price"),
  productCurrentPrice: testId("product-current-price"),
  whatsAppButton: testId("whatsapp-button"),
};

export default selectors;
