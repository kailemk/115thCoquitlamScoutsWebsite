import Announcement           from "./announcement.js";
import AnnouncementsGenerator from "./announcements-generator.js";
import Button                 from "./button.js"

$(document).ready(function() {

    new AnnouncementsGenerator([
        new Announcement({
            title: "Summer to Fall Transition Updates + Photos at Camp", 
            date: "August 23, 2021", 
            time: "08:00:00",
            contentPath: "./html/announcements/08-2021/update3.html",
            image: "images/uniform.png", 
            imgAlt: "Scout Uniform", 
            imgHeight: "200px",
            forceMobile: false,
            buttons: []
        }),
        new Announcement({
            title: "August 13 Meeting Plan + Reminder to Register for Camp", 
            date: "August 10, 2021", 
            time: "08:00:00",
            contentPath: "./html/announcements/08-2021/update2.html",
            image: "images/spork-clipart.png", 
            imgAlt: "Spork", 
            imgHeight: "200px",
            forceMobile: true,
            buttons: [
                new Button({
                title: "Camp Form",
                link: "https://forms.gle/7Z4NqR5yukY1XHzS8"
            })]
        }),
        new Announcement({
            title: "Meeting this Week (Aug. 6th)", 
            date: "August 4, 2021", 
            time: "09:00:00",
            contentPath: "./html/announcements/08-2021/update1.html",
            image: "images/pot.png", 
            imgAlt: "Cooking Pot", 
            imgHeight: "200px",
            forceMobile: true,
            buttons: [
                new Button({
                title: "Camp Form",
                link: "https://forms.gle/7Z4NqR5yukY1XHzS8"
            })]
        }),
        new Announcement({
            title: "August Camp at the Stawamus Chief", 
            date: "July 29, 2021", 
            time: "10:00:00",
            contentPath: "./html/announcements/07-2021/update6.html",
            image: "images/tent.png", 
            imgAlt: "Tent", 
            imgHeight: "200px",
            forceMobile: true,
            buttons: [
                new Button({
                title: "Camp Form",
                link: "https://forms.gle/7Z4NqR5yukY1XHzS8"
            })]
        }),
        new Announcement({
            title: "Scout Project: Shelf Building Timeslots", 
            date: "July 25, 2021", 
            time: "22:00:00",
            contentPath: "./html/announcements/07-2021/update5.html",
            image: "images/screw.png", 
            imgAlt: "Screw", 
            imgHeight: "200px",
            forceMobile: false,
            buttons: []
        }),
        new Announcement({
            title: "Upcoming Meetings and Activities", 
            date: "July 19, 2021", 
            time: "10:00:00",
            contentPath: "./html/announcements/07-2021/update4.html",
            image: "images/no-meeting.png", 
            imgAlt: "No sign", 
            imgHeight: "180px",
            forceMobile: true,
            buttons: [
                new Button({
                title: "Camp Details",
                link: "https://forms.gle/iyawFbcakULikeHLA"
            }),
                new Button({
                title: "Survey",
                link: "https://forms.gle/EJ7LPkpmiJ3M4Bvf9"
            })]
        }),
        new Announcement({
            title: "Scout Project: Shelf Building Project Availability Survey", 
            date: "July 16, 2021", 
            time: "22:50:00",
            contentPath: "./html/announcements/07-2021/update3.html",
            image: "images/shelf.png", 
            imgAlt: "Shelf", 
            imgHeight: "200px",
            forceMobile: true,
            buttons: [
                new Button({
                title: "Survey",
                link: "https://forms.gle/C616nV228oit1Q6JA"
            })]
        }),
        new Announcement({
            title: "July 9 Meeting Plan + Upcoming Camp + Covid Protocol Update", 
            date: "July 5, 2021", 
            time: "10:00:00",
            contentPath: "./html/announcements/07-2021/update2.html",
            image: "images/mountain-forest.png", 
            imgAlt: "Mountain Forest", 
            imgHeight: "250px",
            forceMobile: true,
            buttons: [
                new Button({
                title: "Sign Up",
                link: "https://forms.gle/3KccGhXmfVA9XvUT8"
            })]
        }),
        new Announcement({
            title: "Survey and Summer Meetings Reminder", 
            date: "July 1, 2021", 
            time: "08:00:00",
            contentPath: "./html/announcements/07-2021/update1.html",
            image: "images/survey.png", 
            imgAlt: "Survey Form", 
            imgHeight: "220px",
            forceMobile: false,
            buttons: [
                new Button({
                title: "Survey",
                link: "https://forms.gle/KFAurevSPmXvejgM8"
            })]
        }),
        new Announcement({
            title: "July 2 Meeting Plan + COVID Protocol Survey", 
            date: "June 28, 2021", 
            time: "10:00:00",
            contentPath: "./html/announcements/06-2021/update4.html",
            image: "images/survey.png", 
            imgAlt: "Survey Form", 
            imgHeight: "270px",
            forceMobile: false,
            buttons: [
                new Button({
                title: "Survey",
                link: "https://forms.gle/KFAurevSPmXvejgM8"
            })]
        }),
        new Announcement({
            title: "No Meeting This Week / Summer Scouting Update", 
            date: "June 21, 2021", 
            time: "13:00:00",
            contentPath: "./html/announcements/06-2021/update3.html",
            image: "images/sun.png", 
            imgAlt: "Sun", 
            imgHeight: "200px",
            forceMobile: false,
            buttons: []
        }),
        new Announcement({
            title: "June 18 Meeting Plan", 
            date: "June 15, 2021", 
            time: "08:00:00",
            contentPath: "./html/announcements/06-2021/update2.html",
            image: "images/truckers-hitch.png", 
            imgAlt: "Trucker's hitch knot", 
            imgHeight: "180px",
            forceMobile: false,
            buttons: []
        }), 
        new Announcement({
            title: "June 11 Meeting Plan", 
            date: "June 7, 2021", 
            time: "08:00:00",
            contentPath: "./html/announcements/06-2021/update1.html",
            image: "images/challenge.jpg", 
            imgAlt: "Challenge", 
            imgHeight: "180px",
            forceMobile: false,
            buttons: []
        }),
        new Announcement({
            title: "June 4 Meeting Plan", 
            date: "May 31, 2021", 
            time: "10:00:00",
            contentPath: "./html/announcements/05-2021/update6.html",
            image: "images/triangular-bandage.png", 
            imgAlt: "Triangular bandage", 
            imgHeight: "180px",
            forceMobile: false,
            buttons: []
        }),
        new Announcement({
            title: "May 28 No Meeting, May 30 Hike", 
            date: "May 25, 2021", 
            time: "10:00:00",
            contentPath: "./html/announcements/05-2021/update5.html",
            image: "images/burke-waterfall.jpg", 
            imgAlt: "Burke Mountain waterfall", 
            imgHeight: "300px",
            forceMobile: false,
            buttons: []
        }),
        new Announcement({
            title: "May 21 Meeting Plan", 
            date: "May 17, 2021", 
            time: "10:00:00",
            contentPath: "./html/announcements/05-2021/update4.html",
            image: "images/document.png", 
            imgAlt: "document", 
            imgHeight: "200px",
            forceMobile: false,
            buttons: [
                new Button({
                title: "Sign Up",
                link: "https://docs.google.com/forms/d/e/1FAIpQLScz4Vq7Y-To9lLTkqMhdbsXDQnzQQm4Tme2aVYqA0RC0TnSeg/viewform"
            })
            ]
        }),
        new Announcement({
            title: "May 30th Hike", 
            date: "May 11, 2021", 
            time: "08:00:00",
            contentPath: "./html/announcements/05-2021/update3.html",
            image: "images/hiking.png", 
            imgAlt: "hiking", 
            imgHeight: "180px",
            forceMobile: false,
            buttons: [
                new Button({
                title: "Sign Up",
                link: "https://docs.google.com/forms/d/e/1FAIpQLScz4Vq7Y-To9lLTkqMhdbsXDQnzQQm4Tme2aVYqA0RC0TnSeg/viewform"
            })
            ]
        }),
        new Announcement({
            title: "May 14th Meeting", 
            date: "May 10, 2021", 
            time: "08:00:00",
            contentPath: "./html/announcements/05-2021/update2.html",
            image: "images/paracord-thumbnail.jpg", 
            imgAlt: "paracord video thumbnail", 
            imgHeight: "180px",
            forceMobile: false,
            buttons: [
                new Button({
                title: "Simple",
                link: "https://youtu.be/EE_Va-OMkqU"
            }), new Button({
                title: "Advanced",
                link: "https://youtu.be/1DmWKwy_Ndw"
            })
            ]
        }),
        new Announcement({
            title: "May 7th Meeting", 
            date: "May 3, 2021", 
            time: "10:00:00",
            contentPath: "./html/announcements/05-2021/update1.html",
            image: "images/paracord-slingshot.png", 
            imgAlt: "paracord sling shot", 
            imgHeight: "180px",
            forceMobile: false,
            buttons: []
        }),
        new Announcement({
            title: "April 23 Meeting Plan", 
            date: "April 19, 2021", 
            time: "08:00:00",
            contentPath: "./html/announcements/04-2021/update2.html",
            image: "images/first-aid-kit.png", 
            imgAlt: "first aid kit", 
            imgHeight: "180px",
            forceMobile: false,
            buttons: []
        }),
        new Announcement({
            title: "Meeting Tonight", 
            date: "April 9, 2021", 
            time: "08:00:00",
            contentPath: "./html/announcements/04-2021/update1.html",
            image: "images/tonight.png", 
            imgAlt: "TONIGHT", 
            imgHeight: "100px",
            forceMobile: false,
            buttons: []
        }),
        new Announcement({
            title: "No Meetings During Spring Break", 
            date: "March 22, 2021", 
            time: "08:00:00",
            contentPath: "./html/announcements/03-2021/update4.html",
            image: "images/easter.png", 
            imgAlt: "Easter Eggs", 
            imgHeight: "180px",
            forceMobile: false,
            buttons: []
        }),
        new Announcement({
            title: "March 19 Meeting Plan", 
            date: "March 15, 2021", 
            time: "08:00:00",
            contentPath: "./html/announcements/03-2021/update3.html",
            image: "images/bear.png", 
            imgAlt: "Bear", 
            imgHeight: "180px",
            forceMobile: false,
            buttons: []
        }),
        new Announcement({
            title: "March 12 Meeting Plan", 
            date: "March 5, 2021", 
            time: "23:46:00",
            contentPath: "./html/announcements/03-2021/update2.html",
            image: "images/hot-dog.png", 
            imgAlt: "Hot Dog", 
            imgHeight: "180px",
            forceMobile: false,
            buttons: []
        }),
        new Announcement({
            title: "March 5 Meeting Plan", 
            date: "March 1, 2021", 
            time: "08:00:00",
            contentPath: "./html/announcements/03-2021/update1.html",
            image: "images/mug.png", 
            imgAlt: "Mug", 
            imgHeight: "180px",
            forceMobile: false,
            buttons: []
        }),
        new Announcement({
            title: "No Meeting This Week", 
            date: "February 22, 2021", 
            time: "08:00:00",
            contentPath: "./html/announcements/02-2021/no-meeting.html",
            image: "images/no-meeting.png", 
            imgAlt: "No sign", 
            imgHeight: "180px",
            forceMobile: false,
            buttons: []
        }),
        new Announcement({
            title: "Feb 12 Meeting Plan", 
            date: "February 8, 2021", 
            time: "08:00:00",
            contentPath: "./html/announcements/02-2021/update3.html",
            image: "images/flashlight.png", 
            imgAlt: "Flashlight", 
            imgHeight: "180px",
            forceMobile: false,
            buttons: []
        }),
        new Announcement({
            title: "Update for Next Week's Meeting", 
            date: "February 3, 2021", 
            time: "08:00:00",
            contentPath: "./html/announcements/02-2021/update2.html",
            image: "images/tarp-shelther.png", 
            imgAlt: "Tarp", 
            imgHeight: "180px",
            forceMobile: false,
            buttons: []
        }),
        new Announcement({
            title: "Firestarting Meeting This Week", 
            date: "February 2, 2021", 
            time: "11:00:00",
            contentPath: "./html/announcements/02-2021/firestarting.html",
            image: "images/fire.png", 
            imgAlt: "Fire", 
            imgHeight: "180px",
            forceMobile: false,
            buttons: []
        }),
        new Announcement({
            title: "No Meeting This Week", 
            date: "January 25, 2021", 
            time: "11:00:00", 
            contentPath: "./html/announcements/01-2021/no-meeting.html",
            image: "images/no-meeting.png", 
            imgAlt: "No sign", 
            imgHeight: "180px",
            forceMobile: false,
            buttons: []
        }),
        new Announcement({
            title: "115th Troop Meeting This Week", 
            date: "January 16, 2021", 
            time: "00:21:00", 
            contentPath: "./html/announcements/01-2021/first-meeting.html",
            image: "images/hatchet.png", 
            imgAlt: "Hatchet", 
            imgHeight: "180px",
            forceMobile: false,
            buttons: []
        }),
        new Announcement({
            title: "Scouts Canada Announces Return to Stage 2", 
            date: "January 10, 2021", 
            time: "23:29:00", 
            contentPath: "./html/announcements/jan-stage2-2021.html",
            image: "images/knife.png", 
            imgAlt: "Knife", 
            imgHeight: "180px",
            forceMobile: false,
            buttons: []
        }),
        new Announcement({
            title: "115th Coquitlam Scout Section", 
            date: "January 6, 2021", 
            time: "00:41:00", 
            contentPath: "./html/announcements/first-meeting-2021.html",
            image: "images/computer.png", 
            imgAlt: "Computer", 
            imgHeight: "180px",
            forceMobile: true,
            buttons: []
        })
    ]);
});