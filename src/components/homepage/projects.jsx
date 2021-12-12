import React from 'react'

import Card from "../homepage/card";

import aniAlgoPic from "../../assets/projectImgs/aniAlgoPic.png";
import moodTrackerPic from "../../assets/projectImgs/moodTracker.png";
import travelEasyPic from "../../assets/projectImgs/travelEasy.png";
import edufyPic from "../../assets/projectImgs/edufyPic.png";
import dataBricks from "../../assets/projectImgs/dataBricksPic.png"
import calendarPic from "../../assets/projectImgs/calendar.png";

export default function projects() {
    return (
        <div>
              <div className="projectSec mt-10">
            <h3 className="font-cyber text-primaryPurple  mb-10 text-lg font-thin italic"> Projects </h3>
                <div className="grid grid-cols-2 justify-items-center mt-5 ">
                  
                      <Card name={"Edufy"}
                        desc={"A productivity game to help finish tasks. Includes timer, todo list, and focus mode. "}
                        lang={"React, NodeJS, MongoDB"}
                        pic={edufyPic}
                        pageLink={"edufy"}
                      
                    />
                      <Card name={"AniAlgo"}
                        desc={"Applications that provide an animated representation of sorting algorithms."}
                        lang={"ReactJS"}
                        pic={aniAlgoPic}
                        pageLink={"aniAlgo"}
                      
                    />
                      <Card name={"Travel Easy"}
                        desc={"Travel website that provides information on where to go for a vacation trip."}
                        lang={"React.JS, SASS"}
                        pic={travelEasyPic}
                        pageLink={"travelEasy"}
                      
                    />
                      <Card name={"Moodtracker"}
                        desc={"Mood journal app that lets you track and log your daily moods."}
                        lang={"React.JS, SASS"}
                        pic={moodTrackerPic}
                        pageLink={"moodTracker"}
                    />
                      <Card name={"Yelp Data Project"}
                        desc={"Analyzes restaurant meal time hours and how it affects businesses"}
                        lang={"Pysparks, SQL, Python"}
                        pic={dataBricks}
                        pageLink={"yelpData"}
                      
                    />
                   
                      <Card name={"Club Calendar"}
                        desc={"Mood journal app that lets you track and log your daily moods."}
                        lang={"Javascript, BootStrap"}
                        pic={calendarPic}
                        pageLink={"clubCalendar"}
                      
                    />
                   
                  
                </div>
        </div>
        </div>
    )
}
