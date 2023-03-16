import BasePage from "@/cypress/pages/BasePage";
import ProductCard from "@/cypress/components/ProductCard";

export default class SearchPage extends BasePage {
  url() {
    return `/products`;
  }

  products() {
    return new ProductCard().root();
  }
}
