import * as Turbo from "@hotwired/turbo";
import { Application } from "@hotwired/stimulus"

import OnTypeSubmitController from "./controllers/on_type_submit_controller.mjs"

Turbo.start();
console.log('Turbo started!')

window.Stimulus = Application.start()
Stimulus.register("on-type-submit", OnTypeSubmitController)
console.log('Stimulus registered!')
