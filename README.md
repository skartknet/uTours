# uTours

## Getting Started

### Dependencies
Include the uTours dependencies in your template:

``` javascript
<script src="~/App_Plugins/uTours/assets/TourGuideJs/tour.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="~/App_Plugins/uTours/assets/uTours.frontend.js"></script>
<link rel="stylesheet" href="~/App_Plugins/uTours/assets/TourGuideJs/tour.min.css">
```

### Adding a tour to your page manually
``` html
<vc:load-tour tour="@Model.PageTour" start-on-page-load="false"></vc:load-tour>
```

The `load-tour` is a ViewComponent that accepts the following parameters:

| Parameter            | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| **tour**             | The Tour element is an element created in the uTours container. `tour` accepts it as an `IPublishedContent` |
| **start-on-page-load** | It starts the tour as soon as the page is loaded.                           |
| **group**            | Selects a specific group of the tour.                                        |

You can load as many tours as you want to include in the page. Then each of these tours can be started on demand using javascript.

### Starting a tour
There might be many ways to start a tour. to start a tour by clicking on a link, you need to use the `startTour` function of the `document.uTours` object that is included when you add the uTours dependencies to your tempalte.

``` html
<a onclick="document.uTours.startTour(@Model.PageTour.Id)">Start Tour</a>
```
The previous code uses the helper function in the uTours object to start the tour.

## Creating a Tour
uTours creates a uTours root node in your content tree. You can create new tours under this node.

![uTour node](/documentation/images/uToursNode.png)
## Tour Picker

The `PageTour` property in the previous example is a Tour included in the page by using a Content Picker. uTours comes preconfigured with a Data Type that you can use in your pages. Search for `[uTours] Tour Picker`

## Tour Configuration
uTours uses the [TourGuideJs](https://tourguidejs.com/) package to run the tours in the frontend. Take a look at the documentatiton there to understand how to configure them.

Every settings in the JS package has an equivalent in the backoffice when you create a new Tour item.

