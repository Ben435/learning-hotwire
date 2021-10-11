import { Controller } from "@hotwired/stimulus";
import * as Turbo from "@hotwired/turbo";

export default class SearchController extends Controller {
  static targets = ["input", "suggestions"];
  async input() {
    const searchTerm = this.inputTarget.value;
    const respBody = await fetch(`/search?term=${searchTerm}`).then((resp) =>
      resp.text()
    );

    Turbo.renderStreamMessage(respBody)
  }
}
