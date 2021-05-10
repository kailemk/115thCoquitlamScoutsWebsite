import Button from "./button.js";

export default class Announcement{
    constructor(data){
        this.title              = data.title;
        this.date               = data.date;
        this.time               = data.time;
        this.contentPath        = data.contentPath;
        this.image              = data.image;
        this.imgAlt             = data.imgAlt;
        this.imgHeight          = data.imgHeight;
        this.forceMobile        = data.forceMobile;
        this.buttons            = data.buttons;
        this.contentID          = this.mkContentID();
        this.time12             = this.mkTime12();
        this.headingHTML        = this.mkHeadingHTML();
        this.contentHTML        = this.mkContentHTML();
        this.msgHTML            = this.mkMsgHTML();
        this.imgOpeningHTML     = this.mkImgOpeningHTML();
        this.imgHTML            = this.mkImgHTML();
        this.buttonsHTML        = this.mkButtonsHTML();
        this.imgClosingHTML     = this.mkImgClosingHTML();
        this.closingHTML        = this.mkClosingDiv();
    }

    mkContentID(){
        return new Date(this.date + " " + this.time).getTime();
    }

    mkTime12(){
        let t = this.time.slice(0, -3);
        t = t.toString ().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [t];

        if (t.length > 1) { 
            t = t.slice (1);
            t[5] = + t[0] < 12 ? 'AM' : 'PM';
            t[0] = + t[0] % 12 || 12;
        }
        console.log(t.join(""))
        return t.join (''); // return adjusted time or original string
    }

    mkHeadingHTML(){
        return [
            "   <h2 class = \"announcement-title\">" + this.title + "</h2>",
            "   <h4 class = \"announcement-date\">Posted " + this.date + " at " + this.time12 + "</h4>"
        ].join("\n");
    }

    mkContentHTML(){
        return "   <div class = \"announcement-content\">";
    }

    mkImgOpeningHTML(){
        return "       <div class = \"announcement-image-side\">";
    }

    

    mkImgHTML(){
        return [
            "           <div class = \"top-announcement-separator\"></div>",
            "           <img src=\"" + this.image + "\" alt=\"" + this.imageAlt + "\" class = \"announcement-image\" height = \"" + this.imgHeight + "\">",
            "           <div class = \"bot-announcement-separator\"></div>"
        ].join("\n");
    }

    mkButtonsHTML(){
        if (this.buttons.length == 0) return ""

        let res = "<div class='button-div'>"
        for(let i = 0; i < this.buttons.length; i++){
            res += [
                    "<a class = \"sign-up-button\" target=\"_blank\" href=\"" + this.buttons[i].link + "\">" + this.buttons[i].title + "</a>"
            ].join("\n");
        }

        res += "</div>"
        
        return res
    }

    mkImgClosingHTML(){
        return "       </div>";
    }

    mkMsgHTML(){
        return "       <div class = \"announcement-message " + this.contentID + "\"></div>";
    }

    mkClosingDiv(){
        return "   </div>"

    }
}