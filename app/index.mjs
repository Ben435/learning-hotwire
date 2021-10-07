import * as Turbo from "@hotwired/turbo";
import { Application } from "@hotwired/stimulus"

import SearchController from "./controllers/search_controller.mjs"

Turbo.start();
console.log('Turbo started!')

window.Stimulus = Application.start()
Stimulus.register("search", SearchController)
console.log('Stimulus registered!')
