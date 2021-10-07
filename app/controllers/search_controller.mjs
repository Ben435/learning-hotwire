import { Controller } from "@hotwired/stimulus";

export default class SearchController extends Controller {
  static targets = ["input", "suggestions"];
  async input() {
    const searchTerm = this.inputTarget.value;
    const respBody = await fetch(`/search?term=${searchTerm}`).then((resp) =>
      resp.json()
    );

    if (respBody.length <= 0) {
      this.suggestionsTarget.innerHTML = `<li>None found!</li>`;
      return;
    }

    const listElements = respBody
      .map((option) => `<li><a href="/result/${option}">${option}</a></li>`)
      .join("");
    this.suggestionsTarget.innerHTML = listElements;
  }
}
