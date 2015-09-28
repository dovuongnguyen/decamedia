var MyLogger = function(opts) {
  console.log('Level', opts.level);
  console.log('Message', opts.message);
  console.log('Tag', opts.tag);
}

SyncedCron.config({
  logger: MyLogger
});

SyncedCron.add({
    name: 'Crunch some important numbers for the marketing department',
    schedule: function(parser) {
      // parser is a later.parse object
      return parser.text('every 1 second');
    }, 
    job: function(intendedAt) {
      var result = HTTP.call("GET",
        "http://twin.vn/DecaMedia/api/devicebillboard/20150925_bc53f90b7da34605b259dbbab285d9a9"
        ,function(error, result){
          //console.log(result.data);
          var arrayId = [];
          for (var i = result.data.length - 1; i >= 0; i--) {
            Billboards.update(
                                 { Id: result.data[i].Id },
                                 result.data[i],
                                 { upsert: true }
                              );
            arrayId.push(result.data[i].Id);
          };
          debugger;
          var query = { Id: { $nin: arrayId } };
          Billboards.remove(query);
        });
    }
  });

SyncedCron.start();