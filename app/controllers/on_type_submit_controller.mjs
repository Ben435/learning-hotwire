import { Controller } from "@hotwired/stimulus";

export default class OnTypeSubmitController extends Controller {
  static targets = ["form"];
  async input() {
    this.formTarget.requestSubmit()
  }
}
