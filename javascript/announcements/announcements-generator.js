export default class AnnouncementsGenerator{
    constructor(announcements){
        this.announcements = announcements;
        this.desktopHTML   = this.mkDesktop();
        this.mobileHTML    = this.mkMobile();
        this.loadContent();
    }

    mkDesktop(){
        let result = "";
        for(let i = 0; i < this.announcements.length; i++){
            if(!this.announcements[i].forceMobile){
                if(i % 2 == 0){
                    result += this.mkEvenDesktopAnnouncement(this.announcements[i]);
                }else{
                    result += this.mkOddDesktopAnnouncement(this.announcements[i]);
                }
            }else{
                result += this.mkMobileAnnouncement(this.announcements[i], i);
            }
        }
        return result;
    }

    mkMobile(){
        let result = "";
        for(let i = 0; i < this.announcements.length; i++){
            result += this.mkMobileAnnouncement(this.announcements[i], i);
        }
        console.log(result);
        return result;
    }

    loadContent(){
        $("#announcements-desktop").append(this.desktopHTML);
        $("#announcements-mobile").append(this.mobileHTML);

        for(let i = 0; i < this.announcements.length; i++){
            let contentClass = "." + this.announcements[i].contentID;
            let contentPath  = this.announcements[i].contentPath;

            $(contentClass).load(contentPath);
        }
    }

    mkEvenDesktopAnnouncement(announcement){
        let backgroundHTML = "<div class = \"announcement-even\">";
        return [
            backgroundHTML,
            announcement.headingHTML,
            announcement.contentHTML,
            announcement.msgHTML,
            announcement.imgOpeningHTML,
            announcement.imgHTML,
            announcement.buttonsHTML,
            announcement.imgClosingHTML,
            announcement.closingHTML,
            announcement.closingHTML
        ].join("\n");
    }

    mkOddDesktopAnnouncement(announcement){
        let backgroundHTML = "<div class = \"announcement-odd\">";
        return [
            backgroundHTML,
            announcement.headingHTML,
            announcement.contentHTML,
            announcement.imgOpeningHTML,
            announcement.imgHTML,
            announcement.buttonsHTML,
            announcement.imgClosingHTML,
            announcement.msgHTML,
            announcement.closingHTML,
            announcement.closingHTML
        ].join("\n");

    }

    mkMobileAnnouncement(announcement, index){
        let backgroundHTML;
        if(index % 2 == 0){
            backgroundHTML = "<div class = \"announcement-even\">";
        }else{
            backgroundHTML = "<div class = \"announcement-odd\">";
        }
        return [
            backgroundHTML,
            announcement.imgOpeningHTML,
            announcement.imgHTML,
            announcement.imgClosingHTML,
            announcement.headingHTML,
            announcement.contentHTML,
            announcement.msgHTML,
            announcement.closingHTML,
            announcement.buttonsHTML,
            announcement.closingHTML
            
        ].join("\n");
    }
}