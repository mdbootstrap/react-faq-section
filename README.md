Responsive React FAQ Page with Bootstrap 5. Templates include accordion FAQ template, collapse FAQ component, FAQ section & customized Bootstrap FAQ components.

Check out [React FAQ Section](https://mdbootstrap.com/docs/react/extended/faq/) for detailed instructions & even more examples.

## Basic examples

![React FAQ Section](/assets/basic.png)

```js
import React from "react";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBContainer className="mt-5" style={{maxWidth: '1000px'}}>
      <MDBAccordion alwaysOpen initialActive={1}>
        <MDBAccordionItem collapseId={1} headerTitle="Question #1">
          <strong>This is the first item's accordion body.</strong> It is shown
          by default, until the collapse plugin adds the appropriate classes
          that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You
          can modify any of this with custom CSS or overriding our default
          variables. It's also worth noting that just about any HTML can go
          within the <code>.accordion-body</code>, though the transition does
          limit overflow.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="Question #2">
          <strong>This is the second item's accordion body.</strong> It is
          hidden by default, until the collapse plugin adds the appropriate
          classes that we use to style each element. These classes control the
          overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or overriding
          our default variables. It's also worth noting that just about any HTML
          can go within the <code>.accordion-body</code>, though the transition
          does limit overflow.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle="Question #3">
          <strong>This is the third item's accordion body.</strong> It is hidden
          by default, until the collapse plugin adds the appropriate classes
          that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You
          can modify any of this with custom CSS or overriding our default
          variables. It's also worth noting that just about any HTML can go
          within the <code>.accordion-body</code>, though the transition does
          limit overflow.
        </MDBAccordionItem>
      </MDBAccordion>
    </MDBContainer>
  );
}

```

## How to use?

1. Download MDB React - free UI KIT

2. Choose your favourite customized component and click on the image

3. Copy & paste the code into your MDB project

[▶️ Subscribe to YouTube channel for web development tutorials & resources](https://www.youtube.com/MDBootstrap?sub_confirmation=1)

## More React documentation

<ul>
<li><a href="https://mdbootstrap.com/docs/react/extended/maps/#subsection-google-contact">React google contact</a></li>
<li><a href="https://mdbootstrap.com/docs/react/components/accordion/">React accordion</a></li>
<li><a href="https://mdbootstrap.com/docs/react/components/collapse/">React collapse</a></li>
<li><a href="https://mdbootstrap.com/docs/react/forms/overview/">React forms</a></li>
<li><a href="https://mdbootstrap.com/docs/react/forms/input-fields/">React input fields</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/textarea/">React textarea</a></li>
<li><a href="https://mdbootstrap.com/docs/react/content-styles/icons/">React icons</a></li>
<li><a href="https://mdbootstrap.com/docs/react/components/buttons/">React buttons</a></li>
</ul>
