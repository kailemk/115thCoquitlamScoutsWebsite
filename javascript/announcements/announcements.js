import Announcement           from "./announcement.js";
import AnnouncementsGenerator from "./announcements-generator.js";

$(document).ready(function() {

    new AnnouncementsGenerator([
        new Announcement({
            title: "March 19 Meeting Plan", 
            date: "March 15, 2021", 
            time: "08:00:00",
            contentPath: "./html/announcements/03-2021/update3.html",
            image: "images/bear.png", 
            imgAlt: "Bear", 
            imgHeight: "180px",
            forceMobile: false
        }),
        new Announcement({
            title: "March 12 Meeting Plan", 
            date: "March 5, 2021", 
            time: "23:46:00",
            contentPath: "./html/announcements/03-2021/update2.html",
            image: "images/hot-dog.png", 
            imgAlt: "Hot Dog", 
            imgHeight: "180px",
            forceMobile: false
        }),
        new Announcement({
            title: "March 5 Meeting Plan", 
            date: "March 1, 2021", 
            time: "08:00:00",
            contentPath: "./html/announcements/03-2021/update1.html",
            image: "images/mug.png", 
            imgAlt: "Mug", 
            imgHeight: "180px",
            forceMobile: false
        }),
        new Announcement({
            title: "No Meeting This Week", 
            date: "February 22, 2021", 
            time: "08:00:00",
            contentPath: "./html/announcements/02-2021/no-meeting.html",
            image: "images/no-meeting.png", 
            imgAlt: "No sign", 
            imgHeight: "180px",
            forceMobile: false
        }),
        new Announcement({
            title: "Feb 12 Meeting Plan", 
            date: "February 8, 2021", 
            time: "08:00:00",
            contentPath: "./html/announcements/02-2021/update3.html",
            image: "images/flashlight.png", 
            imgAlt: "Flashlight", 
            imgHeight: "180px",
            forceMobile: false
        }),
        new Announcement({
            title: "Update for Next Week's Meeting", 
            date: "February 3, 2021", 
            time: "08:00:00",
            contentPath: "./html/announcements/02-2021/update2.html",
            image: "images/tarp-shelther.png", 
            imgAlt: "Tarp", 
            imgHeight: "180px",
            forceMobile: false
        }),
        new Announcement({
            title: "Firestarting Meeting This Week", 
            date: "February 2, 2021", 
            time: "11:00:00",
            contentPath: "./html/announcements/02-2021/firestarting.html",
            image: "images/fire.png", 
            imgAlt: "Fire", 
            imgHeight: "180px",
            forceMobile: false
        }),
        new Announcement({
            title: "No Meeting This Week", 
            date: "January 25, 2021", 
            time: "11:00:00", 
            contentPath: "./html/announcements/01-2021/no-meeting.html",
            image: "images/no-meeting.png", 
            imgAlt: "No sign", 
            imgHeight: "180px",
            forceMobile: false
        }),
        new Announcement({
            title: "115th Troop Meeting This Week", 
            date: "January 16, 2021", 
            time: "00:21:00", 
            contentPath: "./html/announcements/01-2021/first-meeting.html",
            image: "images/hatchet.png", 
            imgAlt: "Hatchet", 
            imgHeight: "180px",
            forceMobile: false
        }),
        new Announcement({
            title: "Scouts Canada Announces Return to Stage 2", 
            date: "January 10, 2021", 
            time: "23:29:00", 
            contentPath: "./html/announcements/jan-stage2-2021.html",
            image: "images/knife.png", 
            imgAlt: "Knife", 
            imgHeight: "180px",
            forceMobile: false
        }),
        new Announcement({
            title: "115th Coquitlam Scout Section", 
            date: "January 6, 2021", 
            time: "00:41:00", 
            contentPath: "./html/announcements/first-meeting-2021.html",
            image: "images/computer.png", 
            imgAlt: "Computer", 
            imgHeight: "180px",
            forceMobile: true
        })
    ]);
});