import Activity from "./OldComponents/Activity";
const BACKEND_ROOT_URL = "https://efeevci-person-site-backend.herokuapp.com";
var date = new Date();
var current_month = date.getMonth() + 1;
var current_year = date.getFullYear();
let activities = [];
let events = [];

async function getDays(month){
  fetch(BACKEND_ROOT_URL + "/days/" + month).then(res => res.json())
      .then(
          (result) => {
              result.forEach(day => {
                  getActivity(day.day_id, day.date);
              })

          },
          (error) => {
              console.log("Error in getting days: ", error)
          }
      )
    return;
}
async function getActivity(day_id, date) {
  fetch(BACKEND_ROOT_URL + "/activities/" + day_id).then(res => res.json())
      .then(
          (result) => {
              result.forEach(element => {
                  let activity = new Activity();
                  activity.date = date;
                  activity.day_id = day_id;
                  activity.activity_id = element.activity_id;
                  activity.title = element.title;
                  activity.description = element.description;
                  getTag(activity);
                  activities.push(activity);
              });
          },
          (error) => {
              console.log("Error in getting activity: ", error)
          }
      )
      return;
}

function getTag(activity) {
  fetch(BACKEND_ROOT_URL + "/tags/" + activity.activity_id).then(res => res.json())
      .then(
          (result) => {
              result.forEach(tag => {
                  activity.tags.push(tag.name);
              });
          },
          (error) => {
              console.log("Error in getting tags: ", error)
          }
      )
      return;
}

function createEvents(activities){
  let id = 0;
  let events = [];
  for(let activity of activities){
    console.log(activity);
    var ttl = activity.title;
    var start_date = activity.date;
    events.push({
      id : {id},
      color : '#fd3153',
      from : {start_date},
      to: '2020-08-27T18:00:00+00:00',
      title:{ttl}
    });
  }
  return events;
}
export{getDays,createEvents, current_month, activities, events};