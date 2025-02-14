document.uTours = {};
document.uTours.tours = {};

document.uTours.startTour = function (tourID, groupName) {
    document.uTours.initClient(tourID);

    var dialog = document.body.getElementsByClassName('tg-dialog');
    if (dialog.length > 0) {
        dialog[0].remove();
    }


    document.uTours.client.refresh();
    document.uTours.client.start(groupName);
};

document.uTours.initClient = function(tourID){
    var tour = document.uTours.tours[tourID];
    if (tour) {
        document.uTours.client = new tourguide.TourGuideClient(tour);
    }
};
