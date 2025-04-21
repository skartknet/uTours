# uTours

This Umbraco package package makes easier to start creating tours for the visitors of your website.

It installs a root where you can add your tours and a few methods to enable the tours in the frontend and help you to show them when the page loads or by clicking a link

## Getting Started

### Dependencies
Include the uTours dependencies in your template, between the `<head>` tags:

``` javascript
<script src="~/App_Plugins/uTours/assets/TourGuideJs/tour.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="~/App_Plugins/uTours/assets/uTours.frontend.js"></script>
<link rel="stylesheet" href="~/App_Plugins/uTours/assets/TourGuideJs/tour.min.css">
```

You can also use a View Component that does it for you by including this tag helper instead, between the `<head>` tags.

`<vc:utours-dependencies></vc:utours-dependencies>`

> ⚠️
> To use the tag helpers available in uTours, you will need to add the following line to your `~/Views/ViewImports.cshtml` file:
`@addTagHelper *, Umbraco.Community.uTours.Web`
You can also use them  as `@await Component.InvokeAsync("UtoursDependencies")` instead.



### Adding a tour to your page manually
``` html
<vc:load-tour tour="@Model.PageTour" start-on-page-load="false"></vc:load-tour>
```

The `load-tour` is a View Component that accepts the following parameters:

| Parameter            | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| **tour**             | The Tour element is an element created in the uTours container. `tour` accepts it as an `IPublishedContent` |
| **start-on-page-load** | It starts the tour as soon as the page is loaded.                           |


You can load as many tours as you want to include in the page. Then each of these tours can be started on demand using javascript.

### Starting a tour
There might be many ways to start a tour. to start a tour by clicking on a link, you need to use the `startTour` function of the `document.uTours` object that is included when you add the uTours dependencies to your tempalte.

``` html
<a onclick="document.uTours.startTour(@Model.PageTour.Id)">Start Tour</a>
```
The previous code uses the `startTour` function in the uTours object to start the tour.

## Creating a Tour
uTours creates a uTours root node in your content tree. You can create new tours under this node.

![uTour node](/documentation/images/uToursNode.png)
## Tour Picker

The `PageTour` property in the previous example is a Tour included in the page by using a Content Picker. uTours comes preconfigured with a Data Type that you can use in your pages. Search for `[uTours] Tour Picker`

## Tour Configuration
uTours uses the [TourGuideJs](https://tourguidejs.com/) package to run the tours in the frontend. Take a look at the documentatiton there to understand how to configure them.

Every settings in the JS package has an equivalent in the backoffice.

These can be configured on the Tours container as generic settings and can be overriden on each Tour to apply individually.

### Steps
Each tour must have at least one step. 

**Target**
The target property will highlight an element when displaying the content. If no target is selected, the content will display on a modal window centered in the screen.

The value to be entered is the XPath of the element to hightlight. This can be found using the browser's DevTools, right clicking on the element and clicking on `Copy -> Copy JS Path`

![alt text](/documentation/images/image-2.png)

![alt text](/documentation/images/image-4.png)

That will copy to your clipboard something like:
`document.querySelector("body > footer > div > div > div > ul > div > li:nth-child(1)")`

You just need to keen the value between double quotes:
`body > footer > div > div > div > ul > div > li:nth-child(1)`

![alt text](/documentation/images/image-5.png)

Result: <br>
![alt text](/documentation/images/image-3.png)