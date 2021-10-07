# learning-hotwire

Setup:

* `nvm use`
* `npm i`
* Terminal 1: `npm run build:watch`
* Terminal 2: `npm start`

## Notes:

Broken down by "component" of Hotwire, covering both Turbo and Stimulus

### Turbo-drive

"I want to load fast like SPA apps"

Allows for a smart intercept point on `<a>` tag clicks.

Eg: can mark with `eager` to make it an eager-loaded tag click.

Auto-magically, instead of loading the next page directly, will instead "emulate" that, by:

* Changing the route
* Pushing to browser history
* Replace HTML `<body>` content with the `<body>` from the new page
* Merge `<header>` between old + new page, to minimize repeated loads

Essentially, do all the smart things to make page navigates snappier.

### Turbo-frames

"I want to change something about this block of HTML, without refreshing the page".

Its how to fix:

* I wanna refresh this list, without reloading the page
* I want a small form (eg: signup for newsletter), to submit without reloading the page
* When login via modal, should change page seamlessly without full reload

etc.

Works by on form submit or navigate, will load whats asked, pick the corresponding part of the reponse to replace this "frame".

Very clever, but explicitly feels like its designed to overlay over existing template-based infra.

Eg: it ignores the rest of the response outside of the bit its looking for, meaning you can just send the whole page and it'll only change this bit.

#### Side thing on frames

In contrast to [Stimulus](#Stimulus) as the "client handle this", Turbo-frames seems to be the "server handle this" option, with both scoping there impact to a specific part of the page.

### Turbo-streams

"I want push notifs, without a page reload"

Its basically just that.

When something changes on backend, I want to push to frontend.

Very clearly designed for _Hey_, as mentioned in docs.

Seems pretty clean tbh, pretty impressed. 

### Stimulus

"I need to do something raw HTML can't do, on the frontend"

While Turbo-frames allows for handling on the backend and changing a sub-section of the page, this allows for client handling and change a sub-set of the page.

Advanced validation, browser API interaction, etc.


Interesting, while most frameworks try to store state in JS and blow away the DOM as required, this does the inverse.

Stimulus seems to want to maintain state mostly in-DOM, and only use JS for state transitions?

Essentially, while most components will have a `render()` call, Stimulus controllers just edit parts of the DOM.

Eg: edit attributes or values of specific elements.

It makes _sense_, but I don't see how it doesn't get messy with any sort of scale. I guess it doesn't by not having any scale?


#### Side note

Stimulus would be incredibly useful for making those drop-in "plugins" we see in older JS.

Eg: a single `<script src="carousel-widget-lib">` tag and mark a `<div class="be-a-carousel">` as neccessary, and you get a carousel widget, or a hamburger menu etc.

## Verdict

**The Good**

* Its really simple, learn it real quick
* Combined with server-rendered templates, its incredibly quick
* The problems it wants to fix, it fixes effectively

**The Bad**

* Its just server rendered templates, with a bunch of fixes
    * Still ties your frontend to your backend BFF
    * Still got issues maintaining state between navigations
    * Still hard to do lots of complex stuff (eg: extensive form validation, widgets that stay independent of user journey)

Had a chat with others, had a think, I think its good:

* Its simple, 90% is "for free" essentially
* Its server rendered by default, so very quick
* It crosses off an awful lot of the "cons" to server rendered templates
* The backend BFF is required for SSR for a SPA _anyway_, so its approximately as complex
* Its _way_ easier to manage than a SPA

May add to an SSG or similar, as I think it'll be very valuable there.

Use the SSG as a content-manager, and then this to provide the smart stuff and widgets it may need.

## Stuff to try:

* Some complex user driven interaction, eg: search with suggestions
    * Works ok, had to resort to injecting strings into innerHTML. May try streams with it, but can't figure out how to trigger.
* Page transitions with maintained state, eg: search + details and back with search terms maintained
* Form validation via streams
    * This works pretty well, but get a tieing between 2 templates, being the "streams" and the base template its validating.
    * Perfectly workable, especially with some rules and conventions around it
