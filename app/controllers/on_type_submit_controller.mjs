import { Controller } from "@hotwired/stimulus";

export default class OnTypeSubmitController extends Controller {
  input() {
    this.element.requestSubmit();
  }
}
