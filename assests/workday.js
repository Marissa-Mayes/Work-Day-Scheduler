
//var $saveButton = $(".btn");
var $currentDay =$("#currentDay");
var CurrentTime = getCurrentTime()
$ (document).ready (function(){
    getTodaysDate()
});


var $planner  =$("#plannerContainer")
            var a = moment().format("LLLL");
      console.log(a);
      var timelist=["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM",]
      var scheduleData=[
        {
        time:"9AM",
        description: "gotta do that thing",
      
        
      },
    
        {
        time:"10AM",
        description: "gotta do that other thing"
      },
        {
        time:"11AM",
        description: "gotta do that 11 thing"
      },
      
      {
        time:"12PM",
        description: "gotta do that 11 thing"
      },
      
      {
        time:"1PM",
        description: "gotta do that 11 thing"
      },   
      
      {
        time:"2PM",
        description: "gotta do that 11 thing"
      },
               
      {
        time:"3PM",
        description: "gotta do that 11 thing"
      },
          
      {
        time:"4PM",
        description: "gotta do that 11 thing"
      },

      {
        time:"5PM",
        description: "gotta do that 11 thing"
      },

      ]
      

// return current date and time //
    function getTodaysDate(){
    var today = moment();
    $currentDay.append(today.format("LLLL"));
}
    function getCurrentTime(){
        var currentTime = moment();
        return currentTime;
    }

      function renderData(){
        //so that we don't have to develop in real time
        var momentStub= moment(CurrentTime, "ha")
        console.log(momentStub)
        scheduleData.forEach(events=>{
          console.log(events)
          var row= $("<div class='row time-block'>")
          
          var eventTime= $(`<div class='hour'>`).text(events.time)
          var localDescription= localStorage.getItem(events.time)
          var eventDesc= $(`<textarea class='dexcription'>`).text(localDescription||events.description)
          var momentNow= moment(events.time, "ha")
         

          if(momentNow.isBefore(momentStub)){//stands in for expresssion that tht event is in the past
            eventDesc.addClass("past")
          }else if(momentNow.isAfter(momentStub)){
            eventDesc.addClass("future")

          }else
          {
            eventDesc.addClass("present")

          }
          var buttonDiv =$("<div>");
          var inputDiv= $("<div>");
          var button = $("<button>");
          var input = $("<input>");
          row.append(eventTime, eventDesc)
          $planner.append(row)
          //$("#button").click(function(){


          });


          

        }





          //buttonDiv.append(button);
          //inputDiv.append(input);
  
      renderData()
      let $rowDiv= $("<div>");
      $rowDiv.addClass("row");
      let $columnSave = $("<div>");
      $columnSave.addClass("col-md-1");
    let index = "save-id";
      let $SaveDiv = $("<div>");
      $SaveDiv.addClass("col-md-1");
      let $saveButton = $("<i>");
      $saveButton.attr("id",`saveid-${index}`);
      $saveButton.attr("save-id",index);
      $saveButton.attr("class","far fa-save");
      $rowDiv.append($columnSave);
      $columnSave.append($saveButton);

    let $index = $(this).attr("save-id");