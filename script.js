// POPUP FUNCTIONS
function openPopup(title, link){
    document.getElementById("popup").style.display = "block";
    document.getElementById("popup-title").innerText = title;
    if(link){
        document.getElementById("popup-frame").src = link;
    }
}

function closePopup(){
    document.getElementById("popup").style.display = "none";
    document.getElementById("popup-frame").src = "";
}

// GENERATE BUTTONS FUNCTION
function createButtons(sectionId, links){
    const container = document.getElementById(sectionId);

    links.forEach((link, index) => {
        const btn = document.createElement("button");
        btn.innerText = `Activity ${index + 1}`;
        btn.onclick = () => openPopup(`Activity ${index + 1}`, link);
        container.appendChild(btn);
    });
}

// ==== HTML PRELIM ACTIVITIES ====
createButtons("prelim", [
    "attributes.html",
    "CenterContent.html",
    "FavouriteWebsite.html",
    "Headings.html",
    "HorizontalLine.html",
    "LineBreak.html",
    "LINKS.html",
    "PARAGRAPH.html",
    "TextFormat.html"
]);

// ==== HTML MIDTERM ACTIVITIES ====
createButtons("midterm", [
    "Allimage_pitogo.html",
    "AllMarq_pitogo.html",
    "ColorDec_pitogo.html",
    "Colorhex_pitogo.html",
    "ColorName_pitogo.html",
    "FavWebsite2_pitogo.html",
    "FontFace._pitogo.html",
    "FontSize_pitogo.html",
    "links_pitogo.html",
    "PhraseTags_pitogo.html"
]);

// ==== CSS SEMI-FINAL PART 1 (28 buttons) ====
createButtons("css1", [
    "BGColor1.html","BGColor2.html","BGImage.html","BGImageFixed.html","BGImageFull.html","BGImageHV.html","BGImageNR.html","BGImagePos.html",
    "BGImageSP.html","BorderColor.html","ClassSelector.html","ClassSpecific.html","Comment.html","CSSBG.html","CSSHW2.html","ExternalStyle.html",
    "GroupSelectors.html","IDSelector.html","index (29).html","InlineStyle.html","InternalStyle.html","Margins.html","MarginsSides.html","MarginsSP.html",
    "MultipleClass.html","MultipleStyle.html","PaddingSides.html","TextColor.html"
]);

// ==== CSS SEMI-FINAL PART 2 (21 buttons) ====
createButtons("css2", [
    "Activelink.html","ActiveNav.html","CenterLinks.html","Dividers.html","FixedNav.html","HorizontalNav.html","HoverEffect.html",
    "index (52).html","LetterSpacing.html","LineHeight.html","Opacity.html","Outline.html","TextAlign.html","TextColor.html",
    "TextDeco.html","TextDirection.html","TextIndent.html","TextShadow.html","TextTransform.html","VerticalNav.html","WordSpacing.html"
]);

