# uTours

## Getting Started

Add the following in the `_ViewImports.cshtml` file:  
`@addTagHelper *, Umbraco.Community.UTours.Client`

Include the uTours dependencies. Add the following code in the `<head>` of your template.  
`<vc:render-dependencies></vc:render-dependencies>`

To load a tour in a page, use the following:  
`<vc:load-tour tour="{tour element}"></vc:load-tour>`

The `load-tour` is a ViewComponent that accepts the following parameters:

| Parameter            | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| **tour**             | The Tour element is an element created in the uTours container. `tour` accepts it as an `IPublishedContent` |
| **start-on-page-load** | It starts the tour as soon as the page is loaded.                           |
| **group**            | Selects a specific group of the tour.                                        |

You can load as many tours as you want to include in the page. Then each of these tours can be started on demand using javascript.

For example, you can add a tour to the page that can be run by clicking on an anchor element like the following:

```
<vc:load-tour tour="@Model.PageTour" start-on-page-load="false"></vc:load-tour>

<a onclick="document.uTours.startTour(@Model.PageTour.Id)">Start Tour</a>
```
The previous code uses the helper function in the uTours object to start the tour.

The `PageTour` is a Tour included in the page by using a Content Picker. uTours comes preconfigured with a Data Type that you can use in your pages.

