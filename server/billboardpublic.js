Meteor.publish("billboards", function () {
  return Billboards.find({});
});