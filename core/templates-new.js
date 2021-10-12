/*
 * --------------------------------------------------------------------------
 *   templates.js - v1.0
 *   author: Potawatomi Training
 *   created: 5/25/2021
 *   last edited: 9/14/2021
 *   Copyright 2021, Potawatomi Training, All rights reserved.
 * --------------------------------------------------------------------------
 */
/*
 * ------------------------------------------------------------------------
 * Randomize divs
 * ------------------------------------------------------------------------
 */
(function($) {
    $.fn.randomize = function(childElem) {
        return this.each(function() {
            var $this = $(this);
            var elems = $this.children(childElem);

            elems.sort(function() { return (Math.round(Math.random()) - 0.5); });

            $this.detach(childElem);

            for (var i = 0; i < elems.length; i++)
                $this.append(elems[i]);

        });
    }
})(jQuery);
// shuffle items (use array for objects)
function shuffle(array) {
    var currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}
/*
 * ------------------------------------------------------------------------
 * get window size
 * ------------------------------------------------------------------------
 */
function checkWindowSize() {
    //get window width
    let windowWidth = window.innerWidth;
    // check if we are on a mobile device or not format
    if (windowWidth >= 992) {
        return 'desktop';
    } else {
        return 'mobile';
    }
}
/*
 * ------------------------------------------------------------------------
 * Background Images
 * ------------------------------------------------------------------------
 */
function addBackgroundImage(image) {
    // get page frame
    let pageFrame = document.getElementById('page_frame_container');
    // add bg class
    pageFrame.classList.add('imgBG');
    // add bg css to page frame
    pageFrame.style.backgroundImage = "url(\"" + image.url + "\")";
}

function updateNarration(element) {
    let narrationAudio = document.getElementById('narrationAudio');
    let narrationSource = document.getElementById('narrationSource');
    // stop the narration from playing
    narrationAudio.pause();
    narrationAudio.currentTime = 0;
    // update the source
    narrationSource.src = element.narration[0].url;
    narrationAudio.load();
    // play the new narration
    narrationAudio.play();
    // update the text for the closed caption
    let narrationBody = document.getElementById('cc-narration');
    // evaluate the lines of text
    narrationBody.innerHTML = '';
    if (Array.isArray(element.narration[0].text)) {
        $.each(element.narration[0].text, function(t, text) {
            narrationBody.appendChild(buildNarrationText(text));
        });
    } else {
        narrationBody.appendChild(buildNarrationText(element.narration[0].text));
    }

    function buildNarrationText(text) {
        let item = document.createElement('p');
        item.innerHTML = text;
        // add return text
        return item;
    }
}
/*
 * ------------------------------------------------------------------------
 * Layout
 * ------------------------------------------------------------------------
 */
function buildColumns(layout) {
    // get layout items
    let layoutArray = layout.split("-");
    // get the page frame
    let pageFrame = document.getElementById('page_frame');
    // Build out the DOM elements
    // add the container
    let structure = document.createElement('div');
    structure.classList.add('container-fluid');
    // add a row
    let row = document.createElement('div');
    row.classList.add('row');
    structure.appendChild(row);
    // build out first column / row
    let element1 = document.createElement('div');
    element1.classList.add('col-12', 'py-3');
    row.appendChild(element1);
    // check to see if the layout is full
    if (layout == 'full') {
        structure.classList.remove('container-fluid');
        structure.classList.add('container');
        element1.classList.add('full', 'full-column');
        element1.classList.remove('py-3');
        element1.id = 'full-row';
        // build wrapper for column 1
        let colWrapper1 = document.createElement('div');
        colWrapper1.id = 'column-wrapper-1';
        colWrapper1.classList.add('d-flex', 'align-items-center', 'column-wrapper');
        element1.appendChild(colWrapper1);
    } else {
        // build out second column / row
        let element2 = document.createElement('div');
        element2.classList.add('col-12', 'py-3');
        row.appendChild(element2);
        // setup the heights of the divs
        function setHeight(layout, graphic) {
            // eval if we are on desktop
            let windowSize = checkWindowSize();
            let windowHeight = window.innerHeight - 145;
            let oneThird = (windowHeight / 3) + 'px';
            let twoThirds = (windowHeight * (2 / 3)) + 'px';
            let half = (windowHeight / 2) + 'px';
            // determine if the graphic is top or bottom
            if (windowSize === 'desktop') {
                if (graphic == 'top') {
                    // set height for thirds or half
                    if (layout == 'third') {
                        element1.style.height = oneThird;
                        element2.style.height = twoThirds;
                    } else {
                        element1.style.height = half;
                        element2.style.height = half;
                    }
                } else {
                    // set height for thirds or half
                    if (layout == 'third') {
                        element1.style.height = twoThirds;
                        element2.style.height = oneThird;
                    } else {
                        element1.style.height = half;
                        element2.style.height = half;
                    }
                }
            } else {
                element1.style.height = null;
                element2.style.height = null;
            }
        }

        // decide which element is smaller
        if (layoutArray[1] == "top") {
            element1.classList.add('third');
            element1.id = 'top-row';
            element2.classList.add('two-thirds');
            element2.id = 'bottom-row';
            // setup height on load
            setHeight("third", "top");
            // add height sizing
            window.addEventListener('resize', function(event) {
                setHeight("third", "top");
            });
        } else if (layoutArray[1] == 'bottom') {
            element1.classList.add('two-thirds');
            element1.id = 'top-row';
            element2.classList.add('third');
            element2.id = 'bottom-row';
            // setup height on load
            setHeight("third", "bottom");
            // add height sizing
            window.addEventListener('resize', function(event) {
                setHeight("third", "bottom");
            });
        } else if (layoutArray[1] == 'left') {
            element1.classList.add('col-lg-4');
            element1.id = 'left-column';
            element2.classList.add('col-lg-8');
            element2.id = 'right-column';
        } else if (layoutArray[1] == 'right') {
            element1.classList.add('col-lg-8');
            element1.id = 'left-column';
            element2.classList.add('col-lg-4');
            element2.id = 'right-column';
        }
        // determine if layout is halves
        else if (layoutArray[0] == 'half') {
            // determine if layout is vertical
            if (layoutArray[1] == "vertical") {
                element1.classList.add('half');
                element1.id = 'top-row';
                element2.classList.add('half');
                element2.id = 'bottom-row';
                // setup height on load
                setHeight("half", "top");
                // add height sizing
                window.addEventListener('resize', function(event) {
                    setHeight("third", "top");
                });
            }
            // determine if layout is horizontal
            else if (layoutArray[1] == 'horizontal') {
                element1.classList.add('col-lg-6', 'd-flex', 'justify-content-center', 'align-items-center');
                element1.id = 'left-column';
                element2.classList.add('col-lg-6', 'd-flex', 'justify-content-center', 'align-items-center');
                element2.id = 'right-column';
            }
        }
        // build wrapper for column 1
        let colWrapper1 = document.createElement('div');
        colWrapper1.id = 'column-wrapper-1';
        colWrapper1.classList.add('d-flex', 'align-items-center', 'column-wrapper');
        element1.appendChild(colWrapper1);
        // build wrapper for column 2
        let colWrapper2 = document.createElement('div');
        colWrapper2.id = 'column-wrapper-2';
        colWrapper2.classList.add('d-flex', 'align-items-center', 'column-wrapper');
        element2.appendChild(colWrapper2);
    }
    // return the columns
    return structure;
}
/*
 * ------------------------------------------------------------------------
 * Build out text content
 * ------------------------------------------------------------------------
 */
function buildTextContent(data) {
    // create wrapper for text
    let text = document.createElement('div');
    text.classList.add('text-content');
    // loop through content and build out each element
    data.forEach(function(item, i) {
        // create element
        let element;
        element = document.createElement(item.tag);
        switch (item.tag) {
            case 'img':
                element.src = item.content.source;
                element.alt = item.content.alt;
                element.title = item.content.alt;
                element.classList.add('img-fluid', 'w-100');
                break;
            case 'ul':
                item.content.forEach(function(list, l) {
                    // create an list item
                    let listItem = document.createElement('li');
                    listItem.innerHTML = list;
                    // append the list item
                    element.appendChild(listItem);
                });
                break;
            case 'lg':
                element = document.createElement('ul');
                element.classList.add('list-group', 'list-group-flush');
                item.content.forEach(function(list, l) {
                    // create an list item
                    let listItem = document.createElement('li');
                    listItem.classList.add('list-group-item', 'px-0');
                    listItem.innerHTML = list;
                    // append the list item
                    element.appendChild(listItem);
                });
                break;
            case 'ol':
                item.content.forEach(function(list, l) {
                    // create an list item
                    let listItem = document.createElement('li');
                    listItem.innerHTML = list;
                    // append the list item
                    element.appendChild(listItem);
                });
                break;
            case 'dl':
                element.classList.add('row');
                item.content.forEach(function(list, l) {
                    // create an list item
                    let dtItem = document.createElement('dt');
                    dtItem.classList.add('col-6');
                    dtItem.innerHTML = list.dt;
                    // append the list item
                    element.appendChild(dtItem);
                    // create an list item
                    let ddItem = document.createElement('dd');
                    ddItem.innerHTML = list.dd;
                    ddItem.classList.add('col-6')
                        // append the list item
                    element.appendChild(ddItem);
                });
                break;
            case 'question':
                element.innerHTML = "Question Goes Here";
                break;
            default:
                element.innerHTML = item.content;
        }
        // append element to text wrappper
        text.appendChild(element);
    });
    // return text content
    return text;
}
/*
 * ------------------------------------------------------------------------
 * Build buttons
 * ------------------------------------------------------------------------
 */
// back button for branching
function createBackButton() {
    let back = document.createElement('button');
    back.id = 'backBtn';
    back.type = 'button';
    back.classList.add('btn', 'btn-primary');
    back.innerHTML = 'Back';
    // return the button
    return back;
}
// submit button for questions
function createSubmitButton() {
    let submit = document.createElement('button');
    submit.id = 'submitBtn';
    submit.type = 'button';
    submit.classList.add('btn', 'btn-primary');
    submit.innerHTML = 'Submit';
    // return the button
    return submit;
}
/*
 * ------------------------------------------------------------------------
 * Build Info Card
 * ------------------------------------------------------------------------
 */
function buildInstructionCard(data) {
    // build card container
    let card = document.createElement('div');
    card.classList.add('card', 'instruction');
    let body = document.createElement('div');
    body.id = 'information-body';
    body.classList.add('card-body', 'd-flex');
    card.appendChild(body);
    // add an icon for information
    let icon = document.createElement('div');
    icon.classList.add('info-icon');
    icon.innerHTML = '<svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48h-48z" fill="none"/><path d="M22 34h4v-12h-4v12zm2-30c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20zm0 36c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"/></svg>';
    body.appendChild(icon);
    // add the text
    let text = document.createElement('p');
    text.classList.add('info-text', 'm-0');
    text.innerHTML = data;
    body.appendChild(text);
    // return the
    return card;
}
/*
 * ------------------------------------------------------------------------
 * Instruction bar
 * ------------------------------------------------------------------------
 */
function buildInstructionBar(data) {
    let instructions = document.createElement('div');
    instructions.classList.add('instruction', 'alert', 'alert-light', 'w-100', 'd-flex', 'align-items-center');
    instructions.role = "alert";
    // add icon
    let icon = document.createElement('div');
    icon.classList.add('info-icon');
    icon.innerHTML = '<svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48h-48z" fill="none"></path><path d="M22 34h4v-12h-4v12zm2-30c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20zm0 36c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"></path></svg>';
    instructions.appendChild(icon);
    // add text
    let text = document.createElement('div');
    text.classList.add('info-text');
    text.innerHTML = data;
    instructions.appendChild(text);
    // return the bar
    return instructions;
}
/*
 * ------------------------------------------------------------------------
 * Build Question Card
 * ------------------------------------------------------------------------
 */
function buildQuestion(data) {
    // build card container
    let card = document.createElement('div');
    card.classList.add('card', 'question');
    card.style.backgroundColor = 'transparent';
    // build question feedback
    let feedback = document.createElement('div');
    feedback.classList.add('question-feedback');
    card.appendChild(feedback);
    // add the card header (page title)
    let header = document.createElement('div');
    header.classList.add('card-header', 'question-prompt');
    let headerLabel = document.createElement('div');
    headerLabel.classList.add('question-label', 'text-muted');
    headerLabel.innerHTML = 'Statement:';
    header.appendChild(headerLabel);
    let headerText = document.createElement('div');
    headerText.classList.add('question-text');
    headerText.innerHTML = data.prompt;
    header.appendChild(headerText);
    card.appendChild(header);
    // add the bulk of the content
    let body = document.createElement('div');
    body.classList.add('card-body', 'question-response', 'p-0');
    // letter array for labels
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    // TRUE FALSE
    if (data.type == 'tf') {
        // wrap the t/f buttons
        let content = document.createElement('div');
        content.classList.add('row', 'wrapperTF');
        // build true btn
        let btnTrue = document.createElement('div');
        btnTrue.classList.add('btnTF', 'col-6');
        btnTrue.id = "btnTrue";
        btnTrue.innerHTML = "<span>True</span>";
        content.appendChild(btnTrue);
        // build false btn
        let btnFalse = document.createElement('div');
        btnFalse.classList.add('btnTF', 'col-6');
        btnFalse.id = "btnFalse";
        btnFalse.innerHTML = "<span>False</span>";
        content.appendChild(btnFalse);
        btnTrue.onclick = function() {
            btnTrue.classList.add('active');
            btnFalse.classList.remove('active');
        };
        btnFalse.onclick = function() {
                btnFalse.classList.add('active');
                btnTrue.classList.remove('active');
            }
            // set answer
        qAnswer = data.answer;
        qOptions = ["True", "False"];
        // append to card body
        body.appendChild(content);
    } else if (data.type == 'mc') {
        headerLabel.innerHTML = 'Question:';
        // wrap the responses
        let content = document.createElement('div');
        content.classList.add('list-group');
        // loop through array and build lures
        $.each(data.alternatives, function(t, text) {
            // build button
            let lure = document.createElement('button');
            lure.setAttribute("data-toggle", "button");
            lure.setAttribute("aria-pressed", "false");
            lure.id = t + "_mc";
            lure.classList.add("question-option");
            // add label
            let label = document.createElement('div');
            label.classList.add('question-option--label');
            label.innerHTML = '<span>' + letters[t] + '</span>';
            lure.appendChild(label);
            // add text
            // add text
            let lureText = document.createElement('div');
            lureText.classList.add('question-option--text');
            lureText.classList.add('answerText');

            lureText.innerHTML = text.text;
            lure.appendChild(lureText);

            lure.onclick = function() {
                var listgroup = document.getElementsByClassName("question-option");
                for (var index = 0; index < listgroup.length; ++index) {
                    listgroup[index].classList.remove('active');
                }
                lure.classList.add('active');
            };



            // add lure to content
            content.appendChild(lure);
        });

        // set answer

        console.log(data);
        qAnswer = data.answers[0];
        qOptions = data.alternatives;
        // append to card body
        body.appendChild(content);
    }
    // add body content
    card.appendChild(body);
    // return the card html
    return card;
}
/*
 * ------------------------------------------------------------------------
 * Build out question feedback
 * ------------------------------------------------------------------------
 */
function buildFeedback(result, correct, incorrect, quiz) {
    // add alert
    let alert = document.createElement("div");
    // add alert class and add feedback
    if (result == true) {
        // add correct class
        alert.className = "alert alert-success m-0";
        // add correct feedback
        alert.appendChild(document.createTextNode(correct));
    } else if (result == false) {
        // add incorrect class
        alert.className = "alert alert-danger m-0";
        // add correct feedback
        alert.appendChild(document.createTextNode(incorrect));
    } else {
        // add incorrect class
        alert.className = "alert alert-warning m-0";
        // add correct feedback
        alert.appendChild(document.createTextNode("Please answer the question completely."));
    }
    // add dismiss button
    let dismiss = document.createElement('button');
    dismiss.type = 'button';
    dismiss.classList.add('close');
    dismiss.setAttribute('data-dismiss', 'alert');
    dismiss.setAttribute('aria-label', 'close');
    dismiss.innerHTML = '<span aria-hidden="true">&times;</span>';
    alert.appendChild(dismiss);
    // update feedback
    return alert;
}
/*
 * ------------------------------------------------------------------------
 * Evaluate Exercise
 * ------------------------------------------------------------------------
 */
function evaluateAnswers(answers, responses) {
    if (answers === responses) return true;
    if (answers == null || responses == null) return false;
    if (answers.length !== responses.length) return false;

    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    // Please note that calling sort on an array will modify that array.
    // you might want to clone your array first.

    for (var i = 0; i < answers.length; ++i) {
        if (answers[i] !== responses[i]) return false;
    }
    return true;
}
/*
 * ------------------------------------------------------------------------
 * Build Question Card
 * ------------------------------------------------------------------------
 */
function buildQuestionCard(data) {
    // build card container
    let card = document.createElement('div');
    card.classList.add('card', 'question');
    card.style.backgroundColor = 'transparent';
    // build question feedback
    let feedback = document.createElement('div');
    feedback.id = 'question-feedback';
    card.appendChild(feedback);
    // add the card header (page title)
    let header = document.createElement('div');
    header.classList.add('card-header', 'question-prompt');
    let headerLabel = document.createElement('div');
    headerLabel.classList.add('question-label', 'text-muted');
    headerLabel.innerHTML = 'Question:';
    header.appendChild(headerLabel);
    let headerText = document.createElement('div');
    headerText.classList.add('question-text');
    headerText.innerHTML = data.content.prompt;
    header.appendChild(headerText);
    card.appendChild(header);
    // add the bulk of the content
    let body = document.createElement('div');
    body.id = 'question-body';
    body.classList.add('card-body', 'question-response', 'p-0');
    // add body content
    card.appendChild(body);
    // Build out footer
    let footer = document.createElement('div');
    footer.id = 'question-footer';
    footer.classList.add('card-footer', 'd-flex', 'justify-content-center', 'question-footer');
    card.appendChild(footer);
    // build submit button
    let submit = document.createElement('button');
    submit.id = 'question-submit';
    submit.type = 'button';
    submit.classList.add('btn', 'btn-primary');
    submit.innerHTML = 'Submit';
    footer.appendChild(submit);
    // return card to the page
    return card;
}
/*
 * ------------------------------------------------------------------------
 * Build Content Card
 * ------------------------------------------------------------------------
 */
function buildContentCard(data, footer) {
    // build card container
    let card = document.createElement('div');
    card.classList.add('card', 'content-card', 'w-100');
    // add the bulk of the content
    let body = document.createElement('div');
    body.id = 'content-card-body';
    body.classList.add('card-body');
    // add card content
    let card_content = buildTextContent(data)
    body.appendChild(card_content);
    // add body content
    card.appendChild(body);
    if (footer) {
        // Build out footer
        let footer = document.createElement('div');
        footer.id = 'content-card-footer';
        footer.classList.add('card-footer', 'd-flex', 'justify-content-center');
        card.appendChild(footer);
    }
    // return card to the page
    return card;
}
/*
 * ------------------------------------------------------------------------
 * Build Content Card - titles
 * ------------------------------------------------------------------------
 */
function buildLabeledContentCard(data, extra) {
    // build card container
    let card = document.createElement('div');
    card.classList.add('card', 'content-card', 'w-100');
    if (!extra) {
        // add the header
        let header = document.createElement('div');
        header.classList.add('card-header');
        // add the header text
        let headerText = document.createElement('h6');
        headerText.innerHTML = data.title;
        headerText.classList.add('mb-0')
        header.appendChild(headerText);
        card.appendChild(header);
    }
    // add the bulk of the content
    let body = document.createElement('div');
    body.id = 'content-card-body';
    body.classList.add('card-body');
    // add card content
    let card_content;
    if (!extra) {
        card_content = buildTextContent(data.content);
    } else {
        card_content = buildTextContent(data.additional_content);
    }
    body.appendChild(card_content);
    // add body content
    card.appendChild(body);
    // return card to the page
    return card;
}
/*
 * ------------------------------------------------------------------------
 * Animated Images
 * ------------------------------------------------------------------------
 */
function buildAnimatedImages(data) {
    // create div to wrap our sorting fun
    let imageGrid = document.createElement('div');
    imageGrid.id = "image-grid";
    imageGrid.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'flex-wrap');
    // set the timing interal to one, will increase with loop
    let timing = 1;
    // loop through array and build lures(options)
    data.items.forEach(function(item, i) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('col-12', 'col-sm-6');
        // add item to grid
        imageGrid.appendChild(gridItem);
        // build image
        let gridImage = document.createElement('img');
        gridImage.classList.add('img-fluid');
        gridImage.src = item.content.url;
        gridImage.alt = item.content.alt;
        // add image to item
        gridItem.appendChild(gridImage);
        // get the audio player
        let audio = document.getElementById('narrationAudio');
        // need to add timing feature

        // declare interval for animation
        let interval = timing * 500;
        // set time to have item show on screen
        setTimeout(function() {
            gridImage.classList.add('active')
        }, interval);
        // up the timing to stagger the appearance
        timing++;
    });
    // send the images back
    return imageGrid;
}
/*
 * ------------------------------------------------------------------------
 * eMentor element
 * ------------------------------------------------------------------------
 */
class eMentor {
    // set up data
    constructor(data) {
            this.src = data.graphic.url;
            this.alt = data.graphic.alt;
            this.text = buildTextContent(data.text);
            this.timing = data.text;
        }
        // build card
    build() {
            // set up card wapper
            let card = document.createElement('div');
            card.classList.add('card', 'ementor-card');
            // create header bg
            let bg = document.createElement('div');
            bg.classList.add('card-img-top');
            let bgImg = document.createElement('img');
            bgImg.classList.add('w-100');
            bgImg.src = 'assets/media/images/ementor-bg.jpg';
            bgImg.alt = 'e-mentor background';
            bg.appendChild(bgImg);
            card.appendChild(bg);
            // add ementor image
            let icon = document.createElement('div');
            icon.classList.add('ementor-img', 'mx-auto');
            card.appendChild(icon);
            // add image
            let image = document.createElement('img');
            image.classList.add('animate__animated', 'animate__fadeIn');
            image.src = this.src;
            image.alt = this.alt;
            icon.appendChild(image);
            // card body
            let card_body = document.createElement('div');
            card_body.classList.add('card-body', 'd-flex', 'align-items-center');
            card_body.appendChild(this.text);
            card.appendChild(card_body);
            // return the card
            return card;
        }
        // build card with timing
    buildTimed() {
        // set up card wapper
        let card = document.createElement('div');
        card.classList.add('card', 'ementor-card');
        // create header bg
        let bg = document.createElement('div');
        bg.classList.add('card-img-top');
        let bgImg = document.createElement('img');
        bgImg.classList.add('w-100');
        bgImg.src = 'assets/media/images/ementor-bg.jpg';
        bgImg.alt = 'e-mentor background';
        bg.appendChild(bgImg);
        card.appendChild(bg);
        // add ementor image
        let icon = document.createElement('div');
        icon.classList.add('ementor-img', 'mx-auto');
        card.appendChild(icon);
        // add image
        let image = document.createElement('img');
        image.classList.add('animate__animated', 'animate__fadeIn');
        image.src = this.src;
        image.alt = this.alt;
        icon.appendChild(image);
        // card body
        let card_body = document.createElement('div');
        card_body.classList.add('card-body', 'd-flex', 'align-items-center', 'timed');
        let timing = this.timing;
        let text = this.text.childNodes;
        text[0].classList.add('active');
        // sync text to the narration
        let audio = document.getElementById('narrationAudio');
        audio.ontimeupdate = function() {
                if (pageData.id == currentPageId) {
                    timing.forEach(function(time, t) {
                        if (Math.round(audio.currentTime) == parseInt(time.timing)) {
                            text.forEach(function(item) {
                                item.classList.remove('active')
                            });
                            text[t].classList.add('active');
                        }
                    })
                }
            }
            // add the text
        card_body.appendChild(this.text);
        // add the body to the card
        card.appendChild(card_body);
        // return the card
        return card;
    }
}
/*
 * ------------------------------------------------------------------------
 * Challenge Coin Notification
 * ------------------------------------------------------------------------
 */
function notifyChallengeCoin(pageId, success) {
    let modal = document.createElement('div');
    modal.classList.add('modal', 'fade');
    modal.id = "coin-modal";
    modal.setAttribute('tabindex', '-1');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-labelledby', 'coin-modal--label');
    modal.setAttribute('aria-hidden', 'true');
    // modal dialog
    let dialog = document.createElement('div');
    dialog.classList.add('modal-dialog', 'modal-dialog-centered');
    dialog.setAttribute('role', 'document');
    modal.appendChild(dialog);
    // modal content
    let modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    dialog.appendChild(modalContent);
    // modal header
    let modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');
    modalContent.appendChild(modalHeader);
    // close
    let modalClose = document.createElement('button');
    modalClose.classList.add('close');
    modalClose.type = 'button';
    modalClose.setAttribute('data-dismiss', 'modal');
    modalClose.setAttribute('aria-label', 'Close');
    modalClose.innerHTML = '<span aria-hidden="true">&times;</span>';
    modalHeader.appendChild(modalClose);
    // modal Body
    let modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');
    modalContent.appendChild(modalBody);
    // add the coin image
    let coin = document.createElement('img');
    coin.classList.add('challenge-coin', 'd-block', 'mx-auto');
    coin.src = "assets/media/images/icons/Icon_ChallengeCoin.png";
    coin.alt = 'Challenge Coin';
    modalBody.append(coin);
    // add the message
    let message = document.createElement('h3');
    message.classList.add('challenge-message', 'text-center', 'mt-3');
    // logic for if more than one challenge coin has been earned
    if (apiIsInitialized) {
        modStatus = JSON.parse(doGetValue("cmi.suspend_data"));
    } else {
        if (localStorage) {
            // pull data out of stored data
            modStatus = JSON.parse(localStorage.getItem(imiName + "-session"));
        } else {
            // if no local storage, progress will not be saved
        }
    }
    let achievementCount = 0;
    console.log(success);
    if (success != false) {
        // decide the status and print it out
        Object.keys(modStatus.achievements).every(function(page) {
            if (modStatus.achievements[page] == 1) {
                achievementCount++;
            } else if (page == pageId) {
                modStatus.achievements[page] = 1;
                achievementCount++;
            }
            // keep the loop going
            return true
        });
        // update message
        if (achievementCount > 1) {
            message.innerHTML = 'You’ve earned another coin!';
        } else {
            message.innerHTML = 'You’ve earned a coin!';
        }
        // update status
        achievements = modStatus.achievements;
        // commit data to the LMS or store it to the browser
        if (apiIsInitialized) {
            // update progress
            doSetValue("cmi.suspend_data", JSON.stringify(modStatus));
        } else {
            if (localStorage) {
                localStorage.setItem(imiName + "-session", JSON.stringify(modStatus));
            }
        }
    } else {
        coin.style.opacity = 0.4;
        message.innerHTML = 'You did not earn a coin.';
    }

    modalBody.append(message);

    let page = document.getElementById('page_frame');
    // add layout to page frame
    page.appendChild(modal);
    // add animation to coin
    $('#coin-modal').on('show.bs.modal', function(e) {
            if (success != false) {
                coin.classList.add('animate__animated', 'animate__fadeInUp');
            }
        })
        // show the modal
    $("#coin-modal").modal('show');
    // once the modal has been shown and closed, destroy it
    $('#coin-modal').on('hidden.bs.modal', function(e) {
        // dispose the instance
        $("#coin-modal").modal('dispose');
        // remove from the dom
        $("#coin-modal").remove();
    })

}
/*
 * ------------------------------------------------------------------------
 * Full screen background
 * ------------------------------------------------------------------------
 */
function buildFullScreenBGImage(pageData) {
    var html = "";
    html += '<div id="bgImage" style="background-image: url(' + pageData.content.image.url + ');" role="img" aria-label="' + content.image.desc + '" title="' + content.image.title + '"></div>';
    $('#page_frame').html(html);
}
/*
 * ------------------------------------------------------------------------
 * Template 0: Module Introduction 
 * ------------------------------------------------------------------------
 */
function buildIntro(pageData) {
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    // set up bg effect
    let left = document.getElementById('left-column');
    left.classList.add('title-third');
    left.style.backgroundImage = "url('" + pageData.content.title_background + "')";
    // get left column
    let leftCol = document.getElementById('column-wrapper-1');
    // build ementor
    let title = document.createElement('h1');
    title.id = 'module-title';
    title.classList.add('animate__animated', 'animate__fadeInLeft')
    title.innerHTML = pageData.content.title_text
        // append ementor
    leftCol.appendChild(title);
    // get right column
    let rightCol = document.getElementById('column-wrapper-2');
    // create div to wrap our sorting fun
    let imageGrid = document.createElement('div');
    imageGrid.id = "image-grid";
    imageGrid.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'flex-wrap');
    rightCol.appendChild(imageGrid);
    // set the timing interal to one, will increase with loop
    let timing = 1;
    // loop through array and build lures(options)
    pageData.content.images.forEach(function(image, i) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('col-12', 'col-sm-6');
        // add item to grid
        imageGrid.appendChild(gridItem);
        // build image
        let gridImage = document.createElement('img');
        gridImage.classList.add('img-fluid');
        gridImage.src = image.url;
        gridImage.alt = image.alt;
        // add image to item
        gridItem.appendChild(gridImage);
        // declare interval for animation
        let interval = timing * 500;
        // set time to have item show on screen
        setTimeout(function() {
            gridImage.classList.add('active')
        }, interval);
        // up the timing to stagger the appearance
        timing++;
    });
}
/*
 * ------------------------------------------------------------------------
 * Template 1: Misson page
 * ------------------------------------------------------------------------
 */
function buildMission(pageData) {
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    // change the background color
    document.getElementById('top-row').style.backgroundColor = "black";
    // get top row
    let topRow = document.getElementById('column-wrapper-1');
    topRow.classList.add('column-wrapper', 'justify-content-center');
    // add mission graphic
    let graphic = document.createElement('img');
    graphic.id = 'mission-img';
    graphic.classList.add('img-fluid', 'animate__animated', 'animate__fadeInDown');
    graphic.src = pageData.content.graphics[0].url;
    graphic.alt = pageData.content.graphics[0].alt;
    // append graphic
    topRow.appendChild(graphic);
    // get bottom row
    let bottomRow = document.getElementById('column-wrapper-2');
    // add container wrapper
    let container = document.createElement('div');
    container.classList.add('container');
    bottomRow.appendChild(container);
    // build card
    let card = buildContentCard(pageData.content.text_elements, false);
    card.classList.add('animate__animated', 'animate__fadeInUp');
    container.appendChild(card);
}
/*
 * ------------------------------------------------------------------------
 * Template 2: Branching Page
 * ------------------------------------------------------------------------
 */
function buildBranching(pageData) {
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    // get left column
    let leftCol = document.getElementById('left-column');
    // set up background image
    leftCol.style.backgroundImage = "url('" + pageData.content.images[0].url + "')";
    leftCol.style.backgroundPosition = 'center';
    leftCol.style.backgroundSize = 'cover';
    leftCol.classList.add('img-present');
    // get right column
    let rightCol = document.getElementById('column-wrapper-2');
    rightCol.classList.add('branching-content');
    // add list group
    branchList = document.createElement('div');
    branchList.classList.add('list-group');
    branchList.id = 'branching-list';
    rightCol.appendChild(branchList);
    // Add introduction text
    let instruction = buildInstructionCard(pageData.content.instruction);
    branchList.appendChild(instruction);
    // get the current page status
    let currentLessonStatus = '';
    let currentLessonNum = '';
    let lessonStatus;
    // pull data
    if (apiIsInitialized) {
        lessonStatus = JSON.parse(doGetValue("cmi.suspend_data"));
    } else {
        if (localStorage) {
            lessonStatus = JSON.parse(localStorage.getItem(imiName + "-session"));
        }
    }
    lessonStatus = lessonStatus.status;
    // evaluate branch status
    function checkBranches(obj) {
        // loop through object
        for (var k in obj) {
            // check if we are at the end of the nest
            if (typeof obj[k] !== 'object' && obj[k] !== null) {
                if (k == pageData.id) {
                    currentLessonStatus = obj[k];
                }
            }
            // if nested object exists, keep going
            else {
                if (k == pageData.id) {
                    currentLessonStatus = obj[k];
                } else {
                    obj[k]['p'].forEach(function(element, index) {
                        checkBranches(element);
                    });
                }

            }
        }
    }

    checkBranches(lessonStatus);
    console.log(currentLessonStatus);
    // set timing element
    let timing = 0;
    let completionCount = 0;
    let branchComplete = false;
    let currentBranchItem;
    // add content for branching menus
    // loop through cobjectives to build them out
    pageData.content.menu_items.forEach(function(item, i) {
        currentBranchItem = '';
        // create a button
        let button = document.createElement('button');
        button.classList.add('list-group-item', 'list-group-item-action', 'btn-block', 'd-flex', 'align-items-center', 'animate__animated', 'animate__fadeIn');
        button.type = 'button';
        button.style.animationDelay = timing + 's';
        // up the timing to stagger
        timing = timing + 0.2;
        // add status div
        let status = document.createElement('div');
        status.classList.add('branch-status');
        currentLessonStatus.p.forEach(function(obj, index) {
            // decide the status and print it out
            Object.keys(obj).every(function(branch) {
                // find the correct status item
                if (item.location == branch) {
                    currentBranchItem = branch;
                    // add complete class if branch item is done
                    if (currentLessonStatus.p[index][branch] == 1) {
                        button.classList.add('complete');
                        let completeIcon = document.createElement('div');
                        completeIcon.classList.add('bg-success');
                        completeIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="checkmark-icon" d="M62.8 14.2l-5.6-5.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-27.1 27.1L12.4 23.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-5.6 5.6C0.4 30 0 30.9 0 32c0 1.1 0.4 2 1.2 2.8l14.9 14.9 5.6 5.6c0.8 0.8 1.7 1.2 2.8 1.2 1.1 0 2-0.4 2.8-1.2l5.6-5.6 29.9-29.9C63.6 19.1 64 18.2 64 17.1 64 16 63.6 15 62.8 14.2z"/></svg>'
                        status.appendChild(completeIcon);
                        completionCount++;
                        if (completionCount == pageData.content.menu_items.length) {
                            branchComplete = true;
                        }
                    }
                    // break the loop
                    return false;
                }
                // keep the loop going
                return true
            });
        });
        // default
        button.appendChild(status);
        // add button text
        let text = document.createElement('div');
        text.classList.add('branch-text');
        text.innerHTML = item.title;
        // append text
        button.appendChild(text);
        // add click event for branching
        button.addEventListener('click', function(event) {
            // trigger event to show that page has been traveled to
            getPageData(item.location);
        });
        // add button to list
        branchList.appendChild(button);
    });
    // add the conditional button
    let trigger = document.createElement('div');
    trigger.classList.add('mt-5');
    let finishBtn = document.createElement('button');
    finishBtn.id = 'branchBtn';
    finishBtn.type = 'button';
    finishBtn.classList.add('btn', 'btn-primary', 'd-block', 'mx-auto');
    finishBtn.innerHTML = pageData.content.trigger_button.title;
    // add click event for branching
    finishBtn.addEventListener('click', function(event) {
        // trigger event to show that page has been traveled to
        getPageData(pageData.content.trigger_button.location);
    });
    // get the next button
    let nextBtn = document.getElementById('next-page');
    // check to see if all items have been completed
    if (!branchComplete) {
        finishBtn.disabled = true;
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
    // append button to wrap
    trigger.appendChild(finishBtn);
    // append to branch list
    branchList.appendChild(trigger);
    let next = document.getElementById('next-page');
    next.disabled = true;
    let prev = document.getElementById('previous-page');
    prev.disabled = true;
}
/*
 * ------------------------------------------------------------------------
 * Template 2: Animated Images Branching Page
 * ------------------------------------------------------------------------
 */
function buildAnimatedBranching(pageData) {
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    // get left column
    let leftCol = document.getElementById('column-wrapper-1');
    // set up animated images (WHY is this necessary)
    let images = buildAnimatedImages(pageData.content.animation);
    leftCol.appendChild(images);
    // get right column
    let rightCol = document.getElementById('column-wrapper-2');
    rightCol.classList.add('branching-content');
    // add list group
    branchList = document.createElement('div');
    branchList.classList.add('list-group');
    branchList.id = 'branching-list';
    rightCol.appendChild(branchList);
    // Add introduction text
    let instruction = buildInstructionCard(pageData.content.instruction);
    branchList.appendChild(instruction);
    // get the current page status
    let currentLessonStatus = '';
    let currentLessonNum = '';
    let lessonStatus;
    // pull data
    if (apiIsInitialized) {
        lessonStatus = JSON.parse(doGetValue("cmi.suspend_data"));
    } else {
        if (localStorage) {
            lessonStatus = JSON.parse(localStorage.getItem(imiName + "-session"));
        }
    }
    lessonStatus = lessonStatus.status;
    // evaluate branch status
    function checkBranches(obj) {
        // loop through object
        for (var k in obj) {
            // check if we are at the end of the nest
            if (typeof obj[k] !== 'object' && obj[k] !== null) {
                if (k == pageData.id) {
                    currentLessonStatus = obj[k];
                }
            }
            // if nested object exists, keep going
            else {
                if (k == pageData.id) {
                    currentLessonStatus = obj[k];
                } else {
                    obj[k]['p'].forEach(function(element, index) {
                        checkBranches(element);
                    });
                }

            }
        }
    }
    checkBranches(lessonStatus);
    // set timing element
    let timing = 0;
    let completionCount = 0;
    let branchComplete = false;
    let currentBranchItem;
    // add content for branching menus
    // loop through cobjectives to build them out
    pageData.content.menu_items.forEach(function(item, i) {
        currentBranchItem = '';
        // create a button
        let button = document.createElement('button');
        button.classList.add('list-group-item', 'list-group-item-action', 'btn-block', 'd-flex', 'align-items-center', 'animate__animated', 'animate__fadeIn');
        button.type = 'button';
        button.style.animationDelay = timing + 's';
        // up the timing to stagger
        timing = timing + 0.2;
        // add status div
        let status = document.createElement('div');
        status.classList.add('branch-status');
        currentLessonStatus.p.forEach(function(obj, index) {
            // decide the status and print it out
            Object.keys(obj).every(function(branch) {
                // find the correct status item
                if (item.location == branch) {
                    currentBranchItem = branch;
                    // add complete class if branch item is done
                    if (currentLessonStatus.p[index][branch] == 1) {
                        button.classList.add('complete');
                        let completeIcon = document.createElement('div');
                        completeIcon.classList.add('bg-success');
                        completeIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="checkmark-icon" d="M62.8 14.2l-5.6-5.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-27.1 27.1L12.4 23.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-5.6 5.6C0.4 30 0 30.9 0 32c0 1.1 0.4 2 1.2 2.8l14.9 14.9 5.6 5.6c0.8 0.8 1.7 1.2 2.8 1.2 1.1 0 2-0.4 2.8-1.2l5.6-5.6 29.9-29.9C63.6 19.1 64 18.2 64 17.1 64 16 63.6 15 62.8 14.2z"/></svg>'
                        status.appendChild(completeIcon);
                        completionCount++;
                        if (completionCount == pageData.content.menu_items.length) {
                            branchComplete = true;
                        }
                    }
                    // break the loop
                    return false;
                }
                // keep the loop going
                return true
            });
        });
        // default
        button.appendChild(status);
        // add button text
        let text = document.createElement('div');
        text.classList.add('branch-text');
        text.innerHTML = item.title;
        // append text
        button.appendChild(text);
        // add click event for branching
        button.addEventListener('click', function(event) {
            // trigger event to show that page has been traveled to
            getPageData(item.location);
        });
        // add button to list
        branchList.appendChild(button);
    });
    // add the conditional button
    let trigger = document.createElement('div');
    trigger.classList.add('mt-5');
    let finishBtn = document.createElement('button');
    finishBtn.id = 'branchBtn';
    finishBtn.type = 'button';
    finishBtn.classList.add('btn', 'btn-primary', 'd-block', 'mx-auto');
    finishBtn.innerHTML = pageData.content.trigger_button.title;
    // add click event for branching
    finishBtn.addEventListener('click', function(event) {
        // trigger event to show that page has been traveled to
        getPageData(pageData.content.trigger_button.location);
    });
    // get the next button
    let nextBtn = document.getElementById('next-page');
    // check to see if all items have been completed
    if (!branchComplete) {
        finishBtn.disabled = true;
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
    // append button to wrap
    trigger.appendChild(finishBtn);
    // append to branch list
    branchList.appendChild(trigger);
    let next = document.getElementById('next-page');
    next.disabled = true;
    let prev = document.getElementById('previous-page');
    prev.disabled = true;
}
/*
 * ------------------------------------------------------------------------
 * Template 2: Ementor Synced Branching
 * ------------------------------------------------------------------------
 */
function buildEmentorBranching(pageData) {
    // build the layout
    let layout = buildColumns(pageData.layout);
    // add bg
    addBackgroundImage(pageData.content.background);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    // get left column
    let leftCol = document.getElementById('column-wrapper-1');
    // add the ementor
    let ementor = new eMentor(pageData.content.ementors[0]);
    leftCol.appendChild(ementor.buildTimed());
    // get right column
    let rightCol = document.getElementById('column-wrapper-2');
    rightCol.classList.add('branching-content');
    // add list group
    branchList = document.createElement('div');
    branchList.classList.add('list-group');
    branchList.id = 'branching-list';
    rightCol.appendChild(branchList);
    // Add introduction text
    let instruction = buildInstructionCard(pageData.content.instruction);
    branchList.appendChild(instruction);
    // get the current page status
    let currentLessonStatus = '';
    let currentLessonNum = '';
    let lessonStatus;
    // pull data
    if (apiIsInitialized) {
        lessonStatus = JSON.parse(doGetValue("cmi.suspend_data"));
    } else {
        if (localStorage) {
            lessonStatus = JSON.parse(localStorage.getItem(imiName + "-session"));
        }
    }
    lessonStatus = lessonStatus.status;
    // evaluate branch status
    function checkBranches(obj) {
        // loop through object
        for (var k in obj) {
            // check if we are at the end of the nest
            if (typeof obj[k] !== 'object' && obj[k] !== null) {
                if (k == pageData.id) {
                    currentLessonStatus = obj[k];
                }
            }
            // if nested object exists, keep going
            else {
                if (k == pageData.id) {
                    currentLessonStatus = obj[k];
                } else {
                    obj[k]['p'].forEach(function(element, index) {
                        checkBranches(element);
                    });
                }

            }
        }
    }
    checkBranches(lessonStatus);
    // set timing element
    let timing = 0;
    let completionCount = 0;
    let currentBranchItem;
    let branchComplete = false;
    let branchAchievement = false;
    let branchesComplete = false;
    // add content for branching menus
    // loop through cobjectives to build them out
    pageData.content.menu_items.forEach(function(item, i) {
        branchComplete = true;
        branchAchievement = false;
        currentBranchItem = '';
        // create a button
        let button = document.createElement('button');
        button.classList.add('list-group-item', 'list-group-item-action', 'btn-block', 'd-flex', 'align-items-center', 'animate__animated', 'animate__fadeIn');
        button.type = 'button';
        button.style.animationDelay = timing + 's';
        // up the timing to stagger
        timing = timing + 0.2;
        // add status div
        let status = document.createElement('div');
        status.classList.add('branch-status');

        console.log(currentLessonStatus)

        // decide the status and print it out
        Object.keys(currentLessonStatus.p[i]).every(function(branch) {
            console.log(branch);
            // check for achievements
            if (achievements[branch] != undefined) {
                branchAchievement = achievements[branch];
            }
            // check branch status
            if (currentLessonStatus.p[i][branch] == 0) {
                branchComplete = false;
            }
            // nested branches are branches too
            if (typeof currentLessonStatus.p[i][branch] === 'object' && currentLessonStatus.p[i][branch] !== null) {
                // loop through pages
                Object.keys(currentLessonStatus.p[i][branch]['p']).every(function(subBranch) {
                    if (currentLessonStatus.p[i][branch]['p'][subBranch] == 0) {
                        branchComplete = false;
                    }
                });
            }
            // keep the loop going
            return true
        });
        // add completion to the page
        if (branchComplete) {
            let narrationAudio = document.getElementById('narrationAudio');
            // stop the narration from playing
            narrationAudio.pause();
            narrationAudio.currentTime = 0;
            button.classList.add('complete');
            let completeIcon = document.createElement('div');
            completeIcon.classList.add('bg-success');
            completeIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="checkmark-icon" d="M62.8 14.2l-5.6-5.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-27.1 27.1L12.4 23.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-5.6 5.6C0.4 30 0 30.9 0 32c0 1.1 0.4 2 1.2 2.8l14.9 14.9 5.6 5.6c0.8 0.8 1.7 1.2 2.8 1.2 1.1 0 2-0.4 2.8-1.2l5.6-5.6 29.9-29.9C63.6 19.1 64 18.2 64 17.1 64 16 63.6 15 62.8 14.2z"/></svg>'
            status.appendChild(completeIcon);
            completionCount++;
        }
        // default
        button.appendChild(status);
        // add button text
        let text = document.createElement('div');
        text.classList.add('branch-text', 'flex-grow-1');
        text.innerHTML = item.title;
        // append text
        button.appendChild(text);
        // add achievement icon if neccesary
        if (branchAchievement !== false) {
            console.log('print');
            let achievement = document.createElement('div');
            achievement.classList.add('branch-achievement');
            let coin = document.createElement('img');
            coin.classList.add('challenge-coin', 'd-block', 'mx-auto', 'w-100');
            coin.src = "assets/media/images/icons/Icon_ChallengeCoin.png";
            coin.alt = 'Challenge Coin';
            achievement.append(coin);
            if (branchAchievement == 1) {
                achievement.classList.add('complete');
            }
            button.appendChild(achievement);
        }
        // add click event for branching
        button.addEventListener('click', function(event) {
            // trigger event to show that page has been traveled to
            getPageData(item.location);
        });
        // add button to list
        branchList.appendChild(button);
    });
    // add the conditional button
    let trigger = document.createElement('div');
    trigger.classList.add('mt-5');
    let finishBtn = document.createElement('button');
    finishBtn.id = 'branchBtn';
    finishBtn.type = 'button';
    finishBtn.classList.add('btn', 'btn-primary', 'd-block', 'mx-auto');
    finishBtn.innerHTML = pageData.content.trigger_button.title;
    // add click event for branching
    finishBtn.addEventListener('click', function(event) {
        // trigger event to show that page has been traveled to
        getPageData(pageData.content.trigger_button.location);
    });
    let nextBtn = document.getElementById('next-page');
    // check to see if all items have been completed
    if (completionCount != pageData.content.menu_items.length) {
        finishBtn.disabled = true;
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
    // append button to wrap
    trigger.appendChild(finishBtn);
    // append to branch list
    branchList.appendChild(trigger);
    let next = document.getElementById('next-page');
    next.disabled = true;
    let prev = document.getElementById('previous-page');
    prev.disabled = true;
}
/*
 * ------------------------------------------------------------------------
 * Template 2.3: Branching Page with images (WHY!!!)
 * ------------------------------------------------------------------------
 */
function buildImageBranching(pageData) {
    // what are we working from
    console.log(pageData);
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    // get full row
    let fullRow = document.getElementById('column-wrapper-1');
    fullRow.classList.add('full-column');
    // add wrapper
    let content = document.createElement('div');
    content.classList.add('image-branch');
    fullRow.appendChild(content);
    // build ementor
    let instructions = buildInstructionBar(pageData.content.instruction);
    instructions.classList.add('w-100')
        // append ementor
    content.appendChild(instructions);
    // get the current page status
    let currentLessonStatus = '';
    let currentLessonNum = '';
    let lessonStatus;
    // pull data
    if (apiIsInitialized) {
        lessonStatus = JSON.parse(doGetValue("cmi.suspend_data"));
    } else {
        if (localStorage) {
            lessonStatus = JSON.parse(localStorage.getItem(imiName + "-session"));
        }
    }
    lessonStatus = lessonStatus.status;
    // evaluate branch status
    function checkBranches(obj) {
        console.log(obj);
        // loop through object
        for (var k in obj) {
            // check if we are at the end of the nest
            if (typeof obj[k] !== 'object' && obj[k] !== null) {
                if (k == pageData.id) {
                    currentLessonStatus = obj[k];
                }
            }
            // if nested object exists, keep going
            else {
                if (k == pageData.id) {
                    currentLessonStatus = obj[k];
                } else {
                    obj[k]['p'].forEach(function(element, index) {
                        checkBranches(element);
                    });
                }

            }
        }
    }
    checkBranches(lessonStatus);
    // set timing element
    let timing = 0;
    let completionCount = 0;
    let branchComplete = false;
    let currentBranchItem;
    // create div to wrap our sorting fun
    let imageGrid = document.createElement('div');
    imageGrid.id = "branching-list";
    imageGrid.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'flex-wrap', 'image-grid');
    content.appendChild(imageGrid);
    // loop through array and build lures(options)
    pageData.content.menu_items.forEach(function(item, i) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('col-6');
        // add item to grid
        imageGrid.appendChild(gridItem);
        // create button for selection
        let gridButton = document.createElement('button');
        gridButton.type = "button";
        gridButton.classList.add('img-select', 'selection-item', 'animate__animated', 'animate__fadeIn');
        gridButton.id = 'img-select-' + i;
        gridButton.style.animationDelay = timing + 's';
        // up the timing to stagger
        timing = timing + 0.2;
        // add button to item
        gridItem.appendChild(gridButton);
        // build image
        let gridImage = document.createElement('img');
        gridImage.classList.add('img-fluid');
        gridImage.src = item.image.url;
        gridImage.alt = item.image.alt;
        // add image to button
        gridButton.appendChild(gridImage);
        // add branching list
        branchList = document.createElement('div');
        branchList.classList.add('list-group');
        gridButton.appendChild(branchList);
        // add bottom bar
        let branchListItem = document.createElement('div');
        branchListItem.classList.add('list-group-item', 'list-group-item-action', 'btn-block', 'd-flex', 'align-items-center');
        branchList.appendChild(branchListItem);
        // add status div
        let status = document.createElement('div');
        status.classList.add('branch-status');
        currentLessonStatus.p.forEach(function(obj, index) {
            // decide the status and print it out
            Object.keys(obj).every(function(branch) {
                // find the correct status item
                if (item.location == branch) {
                    currentBranchItem = branch;
                    // add complete class if branch item is done
                    if (currentLessonStatus.p[index][branch] == 1) {
                        let narrationAudio = document.getElementById('narrationAudio');
                        // stop the narration from playing
                        narrationAudio.pause();
                        narrationAudio.currentTime = 0;

                        branchListItem.classList.add('complete');
                        let completeIcon = document.createElement('div');
                        completeIcon.classList.add('bg-success');
                        completeIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="checkmark-icon" d="M62.8 14.2l-5.6-5.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-27.1 27.1L12.4 23.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-5.6 5.6C0.4 30 0 30.9 0 32c0 1.1 0.4 2 1.2 2.8l14.9 14.9 5.6 5.6c0.8 0.8 1.7 1.2 2.8 1.2 1.1 0 2-0.4 2.8-1.2l5.6-5.6 29.9-29.9C63.6 19.1 64 18.2 64 17.1 64 16 63.6 15 62.8 14.2z"/></svg>'
                        status.appendChild(completeIcon);
                        completionCount++;
                        if (completionCount == pageData.content.menu_items.length) {
                            branchComplete = true;
                        }
                    }
                    // break the loop
                    return false;
                }
                // keep the loop going
                return true
            });
        });
        // default
        branchListItem.appendChild(status);
        // add button text
        let text = document.createElement('div');
        text.classList.add('branch-text');
        text.innerHTML = item.title;
        // append text
        branchListItem.appendChild(text);
        // add click event for branching
        gridButton.addEventListener('click', function(event) {
            // trigger event to show that page has been traveled to
            getPageData(item.location);
        });
    });
    // get the next button
    let nextBtn = document.getElementById('next-page');
    // check to see if all items have been completed
    if (!branchComplete) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }


}
/*
 * ------------------------------------------------------------------------
 * Template 3: Objectives
 * ------------------------------------------------------------------------
 */
function buildObjectives(pageData) {
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    // get full row
    let fullRow = document.getElementById('column-wrapper-1');
    // add another row
    let objectives_wrap = document.createElement('div');
    objectives_wrap.classList.add('row', 'justify-content-center');
    fullRow.appendChild(objectives_wrap);
    // loop through cobjectives to build them out
    pageData.content.objectives.forEach(function(obj, o) {
        let obj_wrap = document.createElement('div');
        obj_wrap.classList.add('col-12', 'col-sm-6', 'col-md-4');
        // build out objective wrapper
        let objective = document.createElement('div');
        objective.classList.add('card', 'objective', obj.type, 'animate__animated', 'animate__fadeInDown');
        objective.style.setProperty('animation-delay', (o * 0.5) + 's');
        obj_wrap.appendChild(objective);
        // add image
        let obj_img = document.createElement('img');
        obj_img.classList.add('card-img-top');
        obj_img.src = obj.image.url;
        obj_img.alt = obj.image.alt;
        objective.appendChild(obj_img);
        // add card body
        let obj_body = document.createElement('div');
        obj_body.classList.add('card-body');
        objective.appendChild(obj_body);
        // add title text
        let obj_title = document.createElement('h6');
        obj_title.classList.add('card-title', 'text-center');
        obj_title.innerHTML = obj.title;
        obj_body.appendChild(obj_title);
        // add hr tag
        obj_body.appendChild(document.createElement('hr'));
        // add description text
        let obj_desc = document.createElement('p');
        obj_desc.innerHTML = obj.description;
        obj_body.appendChild(obj_desc);
        // add action text
        let obj_action = document.createElement('p');
        obj_action.classList.add('m-0');
        obj_action.innerHTML = '<strong>Action</strong>: ' + obj.action;
        obj_body.appendChild(obj_action);
        // add conditions text
        let obj_conditions = document.createElement('p');
        obj_conditions.classList.add('m-0');
        obj_conditions.innerHTML = '<strong>Conditions</strong>: ' + obj.conditions;
        obj_body.appendChild(obj_conditions);
        // add standard text
        let obj_standard = document.createElement('p');
        obj_standard.classList.add('m-0');
        obj_standard.innerHTML = '<strong>Standard</strong>: ' + obj.standard;
        obj_body.appendChild(obj_standard);
        // add objective to full row
        objectives_wrap.appendChild(obj_wrap);
    });
}
/*
 * ------------------------------------------------------------------------
 * Template 4: 1/3 layout for static content
 * ------------------------------------------------------------------------
 */
function writeThirdStatic(pageData) {
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    let layoutArray = pageData.layout.split("-");
    let col1;
    let col2;
    // assess if its horizontal or veritcal
    if (layoutArray[1] == "left" || layoutArray[1] == "right") {
        // get left column
        col1 = document.getElementById('left-column');
        // get right column
        col2 = document.getElementById('right-column');
    } else {
        // get left column
        col1 = document.getElementById('top-row');
        // get right column
        col2 = document.getElementById('bottom-row');
    }
    // set up background image
    col1.style.backgroundImage = "url('" + pageData.content.images[0].url + "')";
    col1.style.backgroundPosition = 'center';
    col1.style.backgroundSize = 'cover';
    col1.classList.add('img-present');
    // get right column
    let text = buildContentCard(pageData.content.text_elements, false);
    // get wrapper div
    let col2_wrapper = document.getElementById('column-wrapper-2');
    // append text content to the bottom row
    col2_wrapper.appendChild(text);
}
/*
 * ------------------------------------------------------------------------
 * Template 5: 1/2 layout for static content
 * ------------------------------------------------------------------------
 */
function buildHalfStatic(pageData) {
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    let layoutArray = pageData.layout.split("-");
    let col1;
    let col2;
    // assess if its horizontal or veritcal
    if (layoutArray[1] == "horizontal") {
        // get left column
        col1 = document.getElementById('left-column');
        // get right column
        col2 = document.getElementById('right-column');
    } else {
        // get left column
        col1 = document.getElementById('top-row');
        // get right column
        col2 = document.getElementById('bottom-row');
    }
    // set up background image
    col1.style.backgroundImage = "url('" + pageData.content.images[0].url + "')";
    col1.style.backgroundPosition = 'center';
    col1.style.backgroundSize = 'cover';
    col1.classList.add('img-present');
    // build out text content
    let text = buildContentCard(pageData.content.text_elements, false);
    // get wrapper div
    let col2_wrapper = document.getElementById('column-wrapper-2');
    // append text content to the bottom row
    col2_wrapper.appendChild(text);
}
/*
 * ------------------------------------------------------------------------
 * Template 5.1: 1/2 layout for static content with image
 * ------------------------------------------------------------------------
 */
function buildHalfImage(pageData) {
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    let layoutArray = pageData.layout.split("-");
    let col1;
    let col2;
    // assess if its horizontal or veritcal
    if (layoutArray[1] == "horizontal") {
        // get left column
        col1 = document.getElementById('left-column');
        // get right column
        col2 = document.getElementById('right-column');
    } else {
        // get left column
        col1 = document.getElementById('top-row');
        // get right column
        col2 = document.getElementById('bottom-row');
    }
    // build out text content
    let text = buildContentCard(pageData.content.text_elements, false);
    // get wrapper div
    let col1_wrapper = document.getElementById('column-wrapper-1');
    // append text content to the bottom row
    col1_wrapper.appendChild(text);
    // get wrapper div
    let col2_wrapper = document.getElementById('column-wrapper-2');
    col2.classList.remove('align-items-center');
    col2_wrapper.classList.remove('align-items-center')
        // create div to hold the hot spot
    let imageWrap = document.createElement('div');
    // image.classList.add('w-100')
    imageWrap.id = "image-wrap";
    col2_wrapper.appendChild(imageWrap);
    // build the image
    let image = document.createElement('img');
    image.classList.add('img-fluid', 'mb-3');
    image.id = 'full-img';
    image.src = pageData.content.images[0].url;
    image.alt = pageData.content.images[0].alt;
    image.title = pageData.content.images[0].alt;
    // add the image
    imageWrap.appendChild(image);
}
/*
 * ------------------------------------------------------------------------
 * Template 5.2: 1/2 layout for static content with image
 * ------------------------------------------------------------------------
 */
function buildHalfListButtons(pageData) {
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    let layoutArray = pageData.layout.split("-");
    let col1;
    let col2;
    // assess if its horizontal or veritcal
    if (layoutArray[1] == "horizontal") {
        // get left column
        col1 = document.getElementById('left-column');
        // get right column
        col2 = document.getElementById('right-column');
    } else {
        // get left column
        col1 = document.getElementById('top-row');
        // get right column
        col2 = document.getElementById('bottom-row');
    }

    // get wrapper div
    let col1_wrapper = document.getElementById('column-wrapper-1');
    // 
    let contentWrap = document.createElement('div');
    contentWrap.classList.add('w-100');
    col1_wrapper.appendChild(contentWrap);
    // Add introduction text
    let instruction = buildInstructionCard(pageData.content.instruction);
    contentWrap.appendChild(instruction);
    // build out list group
    let listGroup = document.createElement('div');
    listGroup.classList.add('list-group');
    contentWrap.appendChild(listGroup);
    let timing = 0;
    pageData.content.selections.forEach(function(item, i) {
        // create a list item
        let listItem = document.createElement('div');
        listItem.classList.add('list-group-item', 'btn-block', 'd-flex', 'align-items-center', 'animate__animated', 'animate__fadeIn');
        listItem.style.animationDelay = timing + 's';
        // up the timing to stagger
        timing = timing + 0.2;
        // add status div
        let button = document.createElement('button');
        button.classList.add('btn', 'btn-primary', 'listing-show-button', 'flex-shrink-0', 'icon-select', 'icon-select-half');
        button.type = "button";
        button.id = 'listing-show-btn' + i;
        listItem.appendChild(button);
        // build image
        let buttonImage = document.createElement('img');
        buttonImage.classList.add('icon-select-image');
        buttonImage.src = item.image.url;
        buttonImage.alt = item.image.alt;
        button.appendChild(buttonImage);
        // add text
        let text = document.createElement('div');
        text.classList.add('listing-show-text', 'd-none', 'w-100');
        text.appendChild(buildTextContent(item.body));
        listItem.appendChild(text);

        button.onclick = function() {
                if (text.classList.contains('d-none')) {
                    text.classList.remove('d-none');
                    text.classList.add('d-block');
                    // update the narration
                    if (item.hasOwnProperty('narration')) {
                        updateNarration(item);
                    }
                } else {
                    text.classList.add('d-none');
                    text.classList.remove('d-block');
                }
            }
            // add button to list
        listGroup.appendChild(listItem);
    });
    // get wrapper div
    let col2_wrapper = document.getElementById('column-wrapper-2');
    col2.classList.remove('align-items-center');
    col2_wrapper.classList.remove('align-items-center')
        // create div to hold the hot spot
    let imageWrap = document.createElement('div');
    // image.classList.add('w-100')
    imageWrap.id = "image-wrap";
    col2_wrapper.appendChild(imageWrap);
    // build the image
    let image = document.createElement('img');
    image.classList.add('img-fluid', 'mb-3');
    image.id = 'full-img';
    image.src = pageData.content.images[0].url;
    image.alt = pageData.content.images[0].alt;
    image.title = pageData.content.images[0].alt;
    // add the image
    imageWrap.appendChild(image);
}
/*
 * ------------------------------------------------------------------------
 * Template 5.3: 1/2 layout for two select to reveal columns
 * ------------------------------------------------------------------------
 */
function buildHalfListImageButtons(pageData) {
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    let layoutArray = pageData.layout.split("-");
    let col1;
    let col2;
    // assess if its horizontal or veritcal
    if (layoutArray[1] == "horizontal") {
        // get left column
        col1 = document.getElementById('left-column');
        // get right column
        col2 = document.getElementById('right-column');
    } else {
        // get left column
        col1 = document.getElementById('top-row');
        // get right column
        col2 = document.getElementById('bottom-row');
    }

    // get wrapper div
    let col1_wrapper = document.getElementById('column-wrapper-1');
    col1_wrapper.classList.add('flex-column')
    let contentWrapLeft = document.createElement('div');
    contentWrapLeft.classList.add('w-100');
    col1_wrapper.appendChild(contentWrapLeft);
    // Add introduction text
    let instructionleft = buildInstructionCard(pageData.content.instructionleft);
    contentWrapLeft.appendChild(instructionleft);
    // build out list group
    let listGroupLeft = document.createElement('div');
    listGroupLeft.classList.add('list-group');
    contentWrapLeft.appendChild(listGroupLeft);
    let timing = 0;
    pageData.content.col1selections.forEach(function(item, i) {
        // create a list item
        let listItem = document.createElement('div');
        listItem.classList.add('list-group-item', 'btn-block', 'd-flex', 'align-items-center', 'animate__animated', 'animate__fadeIn');
        listItem.style.animationDelay = timing + 's';
        // up the timing to stagger
        timing = timing + 0.2;

        let imgButton = document.createElement('button');
        imgButton.type = "button";
        imgButton.classList.add('icon-select', 'icon-select-half')

        // add button to item
        listItem.appendChild(imgButton);
        // build image
        let buttonImage = document.createElement('img');
        buttonImage.classList.add('icon-select-image');
        buttonImage.src = item.image.url;
        buttonImage.alt = item.image.alt;
        // add image to button
        imgButton.appendChild(buttonImage);

        // add text
        let text = document.createElement('div');
        text.classList.add('listing-show-text', 'd-none', 'w-100');
        text.appendChild(buildTextContent(item.body));
        listItem.appendChild(text);

        imgButton.onclick = function() {
                if (text.classList.contains('d-none')) {
                    text.classList.remove('d-none');
                    text.classList.add('d-block');
                    // update the narration
                    if (item.hasOwnProperty('narration')) {
                        updateNarration(item);
                    }
                } else {
                    text.classList.add('d-none');
                    text.classList.remove('d-block');
                }
            }
            // add button to list
        listGroupLeft.appendChild(listItem);
    });

    // get wrapper div
    let col2_wrapper = document.getElementById('column-wrapper-2');
    col2_wrapper.classList.add('flex-column')
    let contentWrapRight = document.createElement('div');
    contentWrapRight.classList.add('w-100');
    col2_wrapper.appendChild(contentWrapRight);
    // Add introduction text
    let instructionright = buildInstructionCard(pageData.content.instructionright);
    contentWrapRight.appendChild(instructionright);
    // build out list group
    let listGroupRight = document.createElement('div');
    listGroupRight.classList.add('list-group');
    contentWrapRight.appendChild(listGroupRight);
    pageData.content.col2selections.forEach(function(item, i) {
        // create a list item
        let listItem = document.createElement('div');
        listItem.classList.add('list-group-item', 'btn-block', 'd-flex', 'align-items-center', 'animate__animated', 'animate__fadeIn');
        listItem.style.animationDelay = timing + 's';
        // up the timing to stagger
        timing = timing + 0.2;

        let imgButton = document.createElement('button');
        imgButton.type = "button";
        imgButton.classList.add('icon-select', 'icon-select-half')

        // add button to item
        listItem.appendChild(imgButton);
        // build image
        let buttonImage = document.createElement('img');
        buttonImage.classList.add('icon-select-image');
        buttonImage.src = item.image.url;
        buttonImage.alt = item.image.alt;
        // add image to button
        imgButton.appendChild(buttonImage);

        // add text
        let text = document.createElement('div');
        text.classList.add('listing-show-text', 'd-none', 'w-100');
        text.appendChild(buildTextContent(item.body));
        listItem.appendChild(text);

        imgButton.onclick = function() {
                if (text.classList.contains('d-none')) {
                    text.classList.remove('d-none');
                    text.classList.add('d-block');
                    // update the narration
                    if (item.hasOwnProperty('narration')) {
                        updateNarration(item);
                    }
                } else {
                    text.classList.add('d-none');
                    text.classList.remove('d-block');
                }
            }
            // add button to list
        listGroupRight.appendChild(listItem);
    });
}
/*
 * ------------------------------------------------------------------------
 * Template 6: full layout for static content
 * ------------------------------------------------------------------------
 */
function buildFullStatic(pageData) {
    // what are we working from
    console.log(pageData);
    // add bg
    addBackgroundImage(pageData.content.background);
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    // get full row
    let fullRow = document.getElementById('column-wrapper-1');
    fullRow.classList.add('full-column');
    // build out text content
    let text = buildContentCard(pageData.content.text_elements, false);
    // append text content to the bottom row
    fullRow.appendChild(text);
}
/*
 * ------------------------------------------------------------------------
 * Template 6.1: full layout for static content
 * ------------------------------------------------------------------------
 */
function buildFullImage(pageData) {
    // what are we working from
    console.log(pageData);
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    // get full row
    let fullRow = document.getElementById('column-wrapper-1');
    fullRow.classList.add('full-column');
    // create div to hold the hot spot
    let imageWrap = document.createElement('div');
    // image.classList.add('w-100')
    imageWrap.id = "image-wrap";
    fullRow.appendChild(imageWrap);
    // build the image
    let image = document.createElement('img');
    image.classList.add('img-fluid');
    image.id = 'full-img';
    image.src = pageData.content.images[0].url;
    image.alt = pageData.content.images[0].alt;
    image.title = pageData.content.images[0].alt;
    // add the image
    imageWrap.appendChild(image);
}
/*
 * ------------------------------------------------------------------------
 * Template 7: full layout for static content with ementor
 * ------------------------------------------------------------------------
 */
function buildFullNarrationEMentor(pageData) {
    // what are we working from
    console.log(pageData);
    // add bg
    addBackgroundImage(pageData.content.background);
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    // get full row
    let fullRow = document.getElementById('column-wrapper-1');
    // fullRow.classList.add('flex-column');
    // narrration wrapper
    let wrapper = document.createElement('div');
    wrapper.classList.add('narration-wrap');
    fullRow.appendChild(wrapper);
    // add the ementor
    let ementor = new eMentor(pageData.content.ementors[0]);
    ementor = ementor.build();
    ementor.classList.add('animate__animated', 'animate__fadeInDown');
    wrapper.appendChild(ementor);
    // set up response if present
    if (pageData.content.hasOwnProperty('response')) {
        // submit button for questions
        let response = document.createElement('button');
        response.id = 'responseBtn';
        response.type = 'button';
        response.classList.add('btn', 'btn-primary', 'btn-lg', 'd-block', 'mx-auto', 'mt-5', 'animate__animated', 'animate__fadeInUp');
        response.innerHTML = pageData.content.response.title;
        response.onclick = function() {
            getPageData(pageData.content.response.location);
        }
        wrapper.append(response);
    }
    // if challenge coin is present
    if (pageData.hasOwnProperty('achievement')) {
        notifyChallengeCoin(pageData.id, true);
    }
}
/*
 * ------------------------------------------------------------------------
 * Template 7.1: Image Carousel
 * ------------------------------------------------------------------------
 */
function buildImageCarousel(pageData) {
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    let layoutArray = pageData.layout.split("-");
    let col1;
    let col2;
    // assess if its horizontal or veritcal
    if (layoutArray[1] == "left" || layoutArray[1] == "right") {
        // get left column
        col1 = document.getElementById('left-column');
        // get right column
        col2 = document.getElementById('right-column');
    } else {
        // get left column
        col1 = document.getElementById('top-row');
        // get right column
        col2 = document.getElementById('bottom-row');
    }
    // get left column wrapper
    let col1Wrapper = document.getElementById('column-wrapper-1');
    // create Image carousel
    let textSlides = document.createElement('div');
    textSlides.id = 'text-carousel';
    textSlides.classList.add('carousel', 'slide', 'carousel-fade');
    textSlides.dataset.interval = 'false';
    textSlides.dataset.ride = "false";
    textSlides.dataset.wrap = 'false';
    col1Wrapper.appendChild(textSlides);
    // add inner container
    let textSlides_inner = document.createElement('div');
    textSlides_inner.classList.add('carousel-inner');
    textSlides.appendChild(textSlides_inner);
    // get right column wrapper
    let col2Wrapper = document.getElementById('column-wrapper-2');
    // create Image carousel
    let carousel = document.createElement('div');
    carousel.id = 'image-carousel';
    carousel.classList.add('carousel', 'slide');
    carousel.dataset.interval = 'false';
    carousel.dataset.ride = "false";
    carousel.dataset.wrap = 'false';
    col2Wrapper.appendChild(carousel);
    // add inner container
    let inner = document.createElement('div');
    inner.classList.add('carousel-inner');
    carousel.appendChild(inner);
    // Create carousel controls
    let prev = document.createElement('a');
    prev.href = '#image-carousel';
    prev.role = 'button';
    prev.classList.add('carousel-control-prev');
    prev.dataset.slide = "prev";
    carousel.appendChild(prev);
    // add both spans
    let prev_icon = document.createElement('span');
    prev_icon.classList.add('carousel-control-prev-icon');
    prev_icon.setAttribute("aria-hidden", "true");
    prev.appendChild(prev_icon);
    let prev_label = document.createElement('span');
    prev_label.classList.add('sr-only');
    prev_label.innerHTML = 'Previous';
    prev.appendChild(prev_label);
    // Create carousel controls
    let next = document.createElement('a');
    next.href = '#image-carousel';
    next.role = 'button';
    next.classList.add('carousel-control-next');
    next.dataset.slide = "next";
    carousel.appendChild(next);
    // add both spans
    let next_icon = document.createElement('span');
    next_icon.classList.add('carousel-control-next-icon');
    next_icon.setAttribute("aria-hidden", "true");
    next.appendChild(next_icon);
    let next_label = document.createElement('span');
    next_label.classList.add('sr-only');
    next_label.innerHTML = 'Next';
    next.appendChild(next_label);
    // add slides
    pageData.content.slides.forEach(function(item, i) {
        // add slide text
        let text_slide = document.createElement('div');
        text_slide.id = "text-slide-" + i
        text_slide.classList.add("carousel-item");
        // add card in for content
        text_slide.appendChild(buildLabeledContentCard(item, false));
        // build slide
        let slide = document.createElement('div');
        slide.classList.add("carousel-item");
        if (i == 0) {
            text_slide.classList.add("active");
            slide.classList.add("active");
        }
        // add image
        let slide_img = document.createElement('img');
        slide_img.classList.add('d-block', 'w-100');
        slide_img.src = item.url;
        slide_img.alt = item.alt;
        // add image to slide
        slide.appendChild(slide_img);
        // add slide to carousel inner
        inner.appendChild(slide);
        // add text slides
        textSlides_inner.appendChild(text_slide);
    });
    // get image carousel
    let imgSlides = document.getElementById('image-carousel')
        // sync caoursels
    $('#image-carousel').on('slide.bs.carousel', function(event) {
        var to = $(event.relatedTarget).index();
        $('#text-carousel').carousel(to);
        console.log(to)

        if (pageData.content.slides[to].hasOwnProperty('narration')) {
            console.log(pageData.content.slides[to])

            updateNarration(pageData.content.slides[to]);
        }
    });
}
/*
 * ------------------------------------------------------------------------
 * Template 7.2: Narrated Image Carousel
 * ------------------------------------------------------------------------
 */
function buildNarratedImageCarousel(pageData) {
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    let layoutArray = pageData.layout.split("-");
    let col1;
    let col2;
    // assess if its horizontal or veritcal
    if (layoutArray[1] == "left" || layoutArray[1] == "right") {
        // get left column
        col1 = document.getElementById('left-column');
        // get right column
        col2 = document.getElementById('right-column');
    } else {
        // get left column
        col1 = document.getElementById('top-row');
        // get right column
        col2 = document.getElementById('bottom-row');
    }
    // get left column wrapper
    let col1Wrapper = document.getElementById('column-wrapper-1');
    // add ementor
    let ementor = new eMentor(pageData.content.ementors[0]);

    col1Wrapper.appendChild(ementor.buildTimed());

    // get right column wrapper
    let col2Wrapper = document.getElementById('column-wrapper-2');
    // create Image carousel
    let carousel = document.createElement('div');
    carousel.id = 'image-carousel';
    carousel.classList.add('carousel', 'slide', 'carousel-fade');
    carousel.dataset.interval = 'false';
    carousel.dataset.ride = "false";
    carousel.dataset.wrap = 'false';
    col2Wrapper.appendChild(carousel);
    // add inner container
    let inner = document.createElement('div');
    inner.classList.add('carousel-inner');
    carousel.appendChild(inner);


    let times = [];

    // add slides
    pageData.content.slides.forEach(function(item, i) {

        // build slide
        let slide = document.createElement('div');
        slide.classList.add("carousel-item");
        if (i == 0) {
            slide.classList.add("active");
        }
        // add image
        let slide_img = document.createElement('img');
        slide_img.classList.add('d-block', 'w-100');
        slide_img.src = item.url;
        slide_img.alt = item.alt;
        // add time to array
        times.push(item.timing);
        // add image to slide
        slide.appendChild(slide_img);
        // add slide to carousel inner
        inner.appendChild(slide);
        // 


    });

    let audio = document.getElementById('narrationAudio');
    audio.addEventListener("timeupdate", syncSlides);

    function syncSlides() {
        times.forEach(function(time, t) {
            if (Math.round(audio.currentTime) == parseInt(time)) {
                $('#image-carousel').carousel(t);
            }
        })
    }






}
/*
 * ------------------------------------------------------------------------
 * Template 7.3: Image Carousel - 2 panels
 * ------------------------------------------------------------------------
 */
function buildImageCarousel2Panels(pageData) {
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    // get full row
    let fullRow = document.getElementById('column-wrapper-1');
    fullRow.classList.add('full-column');
    // add wrapper 
    let contentWrap = document.createElement('div')
    contentWrap.classList.add('container');
    fullRow.appendChild(contentWrap);
    // build ementor
    let instructions = buildInstructionBar(pageData.content.instructions);
    contentWrap.appendChild(instructions);
    // add row
    let row = document.createElement('div');
    row.classList.add('row');
    contentWrap.appendChild(row);
    // add main slider
    let mainItem = document.createElement('div');
    mainItem.classList.add('col-12', 'col-lg-4');
    row.appendChild(mainItem);
    // create Image carousel
    let carousel = document.createElement('div');
    carousel.id = 'image-carousel';
    carousel.classList.add('carousel', 'slide');
    carousel.dataset.interval = 'false';
    carousel.dataset.ride = "false";
    carousel.dataset.wrap = 'false';
    mainItem.appendChild(carousel);
    // add inner container
    let inner = document.createElement('div');
    inner.classList.add('carousel-inner');
    carousel.appendChild(inner);
    // Create carousel controls
    let prev = document.createElement('a');
    prev.href = '#image-carousel';
    prev.role = 'button';
    prev.classList.add('carousel-control-prev');
    prev.dataset.slide = "prev";
    carousel.appendChild(prev);
    // add both spans
    let prev_icon = document.createElement('span');
    prev_icon.classList.add('carousel-control-prev-icon');
    prev_icon.setAttribute("aria-hidden", "true");
    prev.appendChild(prev_icon);
    let prev_label = document.createElement('span');
    prev_label.classList.add('sr-only');
    prev_label.innerHTML = 'Previous';
    prev.appendChild(prev_label);
    // Create carousel controls
    let next = document.createElement('a');
    next.href = '#image-carousel';
    next.role = 'button';
    next.classList.add('carousel-control-next');
    next.dataset.slide = "next";
    carousel.appendChild(next);
    // add both spans
    let next_icon = document.createElement('span');
    next_icon.classList.add('carousel-control-next-icon');
    next_icon.setAttribute("aria-hidden", "true");
    next.appendChild(next_icon);
    let next_label = document.createElement('span');
    next_label.classList.add('sr-only');
    next_label.innerHTML = 'Next';
    next.appendChild(next_label);

    // add text slider
    let asideItem1 = document.createElement('div');
    asideItem1.classList.add('col-12', 'col-md-6', 'col-lg-4', 'order-lg-first');
    row.appendChild(asideItem1);
    // create left text carousel
    let textSlides = document.createElement('div');
    textSlides.id = 'text-carousel';
    textSlides.classList.add('carousel', 'slide', 'carousel-fade');
    textSlides.dataset.interval = 'false';
    textSlides.dataset.ride = "false";
    textSlides.dataset.wrap = 'false';
    asideItem1.appendChild(textSlides);
    // add inner container
    let textSlides_inner = document.createElement('div');
    textSlides_inner.classList.add('carousel-inner');
    textSlides.appendChild(textSlides_inner);

    // add text slider
    let asideItem2 = document.createElement('div');
    asideItem2.classList.add('col-12', 'col-md-6', 'col-lg-4');
    row.appendChild(asideItem2);
    // create right text carousel
    let textSlides2 = document.createElement('div');
    textSlides2.id = 'text-carousel2';
    textSlides2.classList.add('carousel', 'slide', 'carousel-fade');
    textSlides2.dataset.interval = 'false';
    textSlides2.dataset.ride = "false";
    textSlides2.dataset.wrap = 'false';
    asideItem2.appendChild(textSlides2);
    // add inner container
    let textSlides2_inner = document.createElement('div');
    textSlides2_inner.classList.add('carousel-inner');
    textSlides2.appendChild(textSlides2_inner);
    // add slides
    pageData.content.slides.forEach(function(item, i) {
        // add slide text
        let text_slide = document.createElement('div');
        text_slide.id = "text-slide-" + i
        text_slide.classList.add("carousel-item");
        // add card in for content
        text_slide.appendChild(buildLabeledContentCard(item, false));
        // build slide
        let slide = document.createElement('div');
        slide.classList.add("carousel-item");
        if (i == 0) {
            text_slide.classList.add("active");
            slide.classList.add("active");
        }
        // add image
        let slide_img = document.createElement('img');
        slide_img.classList.add('d-block', 'w-100');
        slide_img.src = item.url;
        slide_img.alt = item.alt;
        // add image to slide
        slide.appendChild(slide_img);

        // add slide text 2
        let text_slide2 = document.createElement('div');
        text_slide2.id = "text-slide2-" + i
        text_slide2.classList.add("carousel-item");
        // add card in for content
        text_slide2.appendChild(buildLabeledContentCard(item, true));
        // build slide
        let slide2 = document.createElement('div');
        slide2.classList.add("carousel-item");
        if (i == 0) {
            text_slide2.classList.add("active");
            slide2.classList.add("active");
        }
        // add slide to carousel inner
        inner.appendChild(slide);
        // add text slides
        textSlides_inner.appendChild(text_slide);
        // add text slides 2
        textSlides2_inner.appendChild(text_slide2);


    });
    // get image carousel
    let imgSlides = document.getElementById('image-carousel')
        // sync caoursels
    $('#image-carousel').on('slide.bs.carousel', function(event) {
        var to = $(event.relatedTarget).index();
        $('#text-carousel').carousel(to);
        $('#text-carousel2').carousel(to);
    });
}
/*
 * ------------------------------------------------------------------------
 * Template 8: Hotspot
 * ------------------------------------------------------------------------
 */
function buildFullHotSpot(pageData) {
    // what are we working from
    console.log(pageData);
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    // get full row
    let fullRow = document.getElementById('column-wrapper-1');
    fullRow.classList.add('full-column', 'flex-column');
    // build ementor
    let instructions = buildInstructionBar(pageData.content.instructions);
    // append ementor
    fullRow.appendChild(instructions);
    // create div to hold the hot spot
    let hotspot = document.createElement('div');
    // hotspot.classList.add('w-100')
    hotspot.id = "hotspot";
    fullRow.appendChild(hotspot);

    let hotspot_img = document.createElement('img');
    hotspot_img.classList.add('img-fluid');
    hotspot_img.id = 'hotspot-img';
    hotspot_img.src = pageData.content.hotspot.image.url;
    hotspot_img.alt = pageData.content.hotspot.image.alt;
    hotspot_img.title = pageData.content.hotspot.image.alt;
    hotspot_img.setAttribute('usemap', '#hotspot_map');
    hotspot_img.onload = function() {
        var imgCheck = setInterval(function() {
            checkImageItems(hotspot_zones, "hotspot-img");
            console.log('adjusting')
        }, 100);
        setTimeout(function() {
            clearInterval(imgCheck);
        }, 1000);
    }
    hotspot.appendChild(hotspot_img);
    // create modal
    let modal = document.createElement('div');
    modal.classList.add('modal', 'fade');
    modal.id = "hotspot-modal";
    modal.setAttribute('tabindex', '-1');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-labelledby', 'hotspot-modal--label');
    modal.setAttribute('aria-hidden', 'true');
    // modal dialog
    let dialog = document.createElement('div');
    dialog.classList.add('modal-dialog', 'modal-dialog-centered');
    dialog.setAttribute('role', 'document');
    modal.appendChild(dialog);
    // modal content
    let modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    dialog.appendChild(modalContent);
    // modal header
    let modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');
    modalContent.appendChild(modalHeader);
    // title
    var modalTitle = document.createElement('h6');
    modalTitle.id = "hotspot-modal--label";
    modalTitle.innerHTML = "Hotspot Content!";
    modalHeader.appendChild(modalTitle);
    // close
    let modalClose = document.createElement('button');
    modalClose.classList.add('close');
    modalClose.type = 'button';
    modalClose.setAttribute('data-dismiss', 'modal');
    modalClose.setAttribute('aria-label', 'Close');
    modalClose.innerHTML = '<span aria-hidden="true">&times;</span>';
    modalHeader.appendChild(modalClose);
    // modal Body
    let modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');
    modalContent.appendChild(modalBody);
    // append modal to page frame
    page.append(modal);
    // create hotspot array
    let hotspot_zones = [];
    // build hotspots
    pageData.content.hotspot.items.forEach(function(element, index) {
        let hotspot_item = document.createElement('button');
        hotspot_item.classList.add('zone', 'hotspot-item', element.shape);
        // add shape class
        hotspot_item.id = "zone-" + index;
        // add modal interactions
        hotspot_item.dataset.toggle = "modal";
        hotspot_item.dataset.target = "#hotspot-modal";
        // add click event
        hotspot_item.addEventListener("click", function() {
            modalTitle.innerHTML = element.title;
            modalBody.innerHTML = '';
            modalBody.appendChild(buildTextContent(element.body));
            // update the narration
            if (element.hasOwnProperty('narration')) {
                updateNarration(element);
            }
        });
        // send coords to array
        hotspot_zones.push(element.coords);
        // add a label for numbers
        let label = document.createElement('div');
        label.classList.add('hotspot-item--label');
        label.innerHTML = index + 1;
        hotspot_item.appendChild(label);
        // append hotspot item to hotspot
        hotspot.appendChild(hotspot_item);
    });
    // eval width and height of all items
    setTimeout(function() {
        checkImageItems(hotspot_zones, "hotspot-img");
        window.onresize = function(event) {
            checkImageItems(hotspot_zones, "hotspot-img");
        };
    }, 200);
}
/*
 * ------------------------------------------------------------------------
 * Template 8.1: Hotspot with drag and drop
 * ------------------------------------------------------------------------
 */
function buildFullHotSpotDnD(pageData) {
    // what are we working from
    console.log(pageData);
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    // get full row
    let fullRow = document.getElementById('column-wrapper-1');
    fullRow.classList.add('full-column', 'flex-column');
    // build ementor
    let instructions = buildInstructionBar(pageData.content.instructions);
    // append ementor
    fullRow.appendChild(instructions);
    // create div to hold the hot spot
    let hotspot = document.createElement('div');
    // hotspot.classList.add('w-100')
    hotspot.id = "hotspot";
    fullRow.appendChild(hotspot);

    let hotspot_img = document.createElement('img');
    hotspot_img.classList.add('img-fluid');
    hotspot_img.id = 'hotspot-img';
    hotspot_img.src = pageData.content.hotspot.image.url;
    hotspot_img.alt = pageData.content.hotspot.image.alt;
    hotspot_img.title = pageData.content.hotspot.image.alt;
    hotspot_img.setAttribute('usemap', '#hotspot_map');
    hotspot_img.onload = function() {
        var imgCheck = setInterval(function() {
            checkImageItems(hotspot_zones, "hotspot-img");
            console.log('adjusting')
        }, 100);
        setTimeout(function() {
            clearInterval(imgCheck);
        }, 1000);
    }
    hotspot.appendChild(hotspot_img);
    // create modal
    let modal = document.createElement('div');
    modal.classList.add('modal', 'fade');
    modal.id = "hotspot-modal";
    modal.setAttribute('tabindex', '-1');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-labelledby', 'hotspot-modal--label');
    modal.setAttribute('aria-hidden', 'true');
    // modal dialog
    let dialog = document.createElement('div');
    dialog.classList.add('modal-dialog', 'modal-dialog-centered');
    dialog.setAttribute('role', 'document');
    modal.appendChild(dialog);
    // modal content
    let modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    dialog.appendChild(modalContent);
    // modal header
    let modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');
    modalContent.appendChild(modalHeader);
    // title
    var modalTitle = document.createElement('h6');
    modalTitle.id = "hotspot-modal--label";
    modalTitle.innerHTML = "Hotspot Content!";
    modalHeader.appendChild(modalTitle);
    // close
    let modalClose = document.createElement('button');
    modalClose.classList.add('close');
    modalClose.type = 'button';
    modalClose.setAttribute('data-dismiss', 'modal');
    modalClose.setAttribute('aria-label', 'Close');
    modalClose.innerHTML = '<span aria-hidden="true">&times;</span>';
    modalHeader.appendChild(modalClose);
    // modal Body
    let modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');
    modalContent.appendChild(modalBody);
    // append modal to page frame
    page.append(modal);
    // create hotspot array
    let hotspot_zones = [];
    // build hotspots
    pageData.content.hotspot.items.forEach(function(element, index) {
        let hotspot_item = document.createElement('button');
        hotspot_item.classList.add('zone', 'hotspot-item', element.shape);
        // add shape class
        hotspot_item.id = "zone-" + index;
        // add modal interactions
        hotspot_item.dataset.toggle = "modal";
        hotspot_item.dataset.target = "#hotspot-modal";
        // add click event
        hotspot_item.addEventListener("click", function() {
            modalTitle.innerHTML = element.title;
            modalBody.innerHTML = '';
            modalBody.appendChild(buildTextContent(element.body));
        });
        // send coords to array
        hotspot_zones.push(element.coords);
        // add a label for numbers
        let label = document.createElement('div');
        label.classList.add('hotspot-item--label');
        label.innerHTML = index + 1;
        hotspot_item.appendChild(label);
        // append hotspot item to hotspot
        hotspot.appendChild(hotspot_item);
    });
    // eval width and height of all items
    setTimeout(function() {
        checkImageItems(hotspot_zones, "hotspot-img");
        window.onresize = function(event) {
            checkImageItems(hotspot_zones, "hotspot-img");
        };
    }, 200);
}
/*
 * ------------------------------------------------------------------------
 * Template 8.2: Full Hot Spot w Text Button
 * ------------------------------------------------------------------------
 */
function buildFullHotSpotTextButton(pageData) {
    // what are we working from
    console.log(pageData);
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    // get full row
    let fullRow = document.getElementById('column-wrapper-1');
    fullRow.classList.add('full-column', 'flex-column');
    // build ementor
    let instructions = buildInstructionBar(pageData.content.instructions);
    // append ementor
    fullRow.appendChild(instructions);
    // create div to hold the hot spot
    let hotspot = document.createElement('div');
    // hotspot.classList.add('w-100')
    hotspot.id = "hotspot";
    fullRow.appendChild(hotspot);

    let hotspot_img = document.createElement('img');
    hotspot_img.classList.add('img-fluid');
    hotspot_img.id = 'hotspot-img';
    hotspot_img.src = pageData.content.hotspot.image.url;
    hotspot_img.alt = pageData.content.hotspot.image.alt;
    hotspot_img.title = pageData.content.hotspot.image.alt;
    hotspot_img.setAttribute('usemap', '#hotspot_map');
    hotspot_img.onload = function() {
        var imgCheck = setInterval(function() {
            checkImageItems(hotspot_zones, "hotspot-img");
            console.log('adjusting')
        }, 100);
        setTimeout(function() {
            clearInterval(imgCheck);
        }, 1000);
    }
    hotspot.appendChild(hotspot_img);
    // create modal
    let modal = document.createElement('div');
    modal.classList.add('modal', 'fade');
    modal.id = "hotspot-modal";
    modal.setAttribute('tabindex', '-1');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-labelledby', 'hotspot-modal--label');
    modal.setAttribute('aria-hidden', 'true');
    // modal dialog
    let dialog = document.createElement('div');
    dialog.classList.add('modal-dialog', 'modal-dialog-centered');
    dialog.setAttribute('role', 'document');
    modal.appendChild(dialog);
    // modal content
    let modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    dialog.appendChild(modalContent);
    // modal header
    let modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');
    modalContent.appendChild(modalHeader);
    // title
    var modalTitle = document.createElement('h6');
    modalTitle.id = "hotspot-modal--label";
    modalTitle.innerHTML = "Hotspot Content!";
    modalHeader.appendChild(modalTitle);
    // close
    let modalClose = document.createElement('button');
    modalClose.classList.add('close');
    modalClose.type = 'button';
    modalClose.setAttribute('data-dismiss', 'modal');
    modalClose.setAttribute('aria-label', 'Close');
    modalClose.innerHTML = '<span aria-hidden="true">&times;</span>';
    modalHeader.appendChild(modalClose);
    // modal Body
    let modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');
    modalContent.appendChild(modalBody);
    // append modal to page frame
    page.append(modal);
    // create hotspot array
    let hotspot_zones = [];
    // build hotspots
    pageData.content.hotspot.items.forEach(function(element, index) {
        let hotspot_item = document.createElement('button');
        hotspot_item.classList.add('zone', 'hotspot-item', element.shape);
        // add shape class
        hotspot_item.id = "zone-" + index;
        // add modal interactions
        hotspot_item.dataset.toggle = "modal";
        hotspot_item.dataset.target = "#hotspot-modal";
        // add click event
        hotspot_item.addEventListener("click", function() {
            modalTitle.innerHTML = element.title;
            modalBody.innerHTML = '';
            modalBody.appendChild(buildTextContent(element.body));
            // update the narration
            if (element.hasOwnProperty('narration')) {
                updateNarration(element);
            }
        });
        // send coords to array
        hotspot_zones.push(element.coords);
        // add a label for numbers
        let label = document.createElement('div');
        label.classList.add('hotspot-item--label');
        label.innerHTML = element.buttonText;
        hotspot_item.appendChild(label);
        // append hotspot item to hotspot
        hotspot.appendChild(hotspot_item);
    });
    // eval width and height of all items
    setTimeout(function() {
        checkImageItems(hotspot_zones, "hotspot-img");
        window.onresize = function(event) {
            checkImageItems(hotspot_zones, "hotspot-img");
        };
    }, 200);
}
/*
 * ------------------------------------------------------------------------
 * Template 8.3: Full Hot Spot with image transitions
 * ------------------------------------------------------------------------
 */
function buildFullHotSpotImages(pageData) {
    // what are we working from
    console.log(pageData);
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    // get full row
    let fullRow = document.getElementById('column-wrapper-1');
    fullRow.classList.add('full-column', 'flex-column');
    // build ementor
    let instructions = buildInstructionBar(pageData.content.instructions);
    // append ementor
    fullRow.appendChild(instructions);
    // create div to hold the hot spot
    let hotspot = document.createElement('div');
    // hotspot.classList.add('w-100')
    hotspot.id = "hotspot";
    fullRow.appendChild(hotspot);

    let hotspot_img = document.createElement('img');
    hotspot_img.classList.add('img-fluid');
    hotspot_img.id = 'hotspot-img';
    hotspot_img.src = pageData.content.hotspot.image.url;
    hotspot_img.alt = pageData.content.hotspot.image.alt;
    hotspot_img.title = pageData.content.hotspot.image.alt;
    hotspot_img.setAttribute('usemap', '#hotspot_map');
    hotspot_img.onload = function() {
        var imgCheck = setInterval(function() {
            checkImageItems(hotspot_zones, "hotspot-img");
            console.log('adjusting')
        }, 100);
        setTimeout(function() {
            clearInterval(imgCheck);
        }, 1000);
    }
    hotspot.appendChild(hotspot_img);
    // create modal
    let modal = document.createElement('div');
    modal.classList.add('modal', 'fade');
    modal.id = "hotspot-modal";
    modal.setAttribute('tabindex', '-1');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-labelledby', 'hotspot-modal--label');
    modal.setAttribute('aria-hidden', 'true');
    // modal dialog
    let dialog = document.createElement('div');
    dialog.classList.add('modal-dialog', 'modal-dialog-centered');
    dialog.setAttribute('role', 'document');
    modal.appendChild(dialog);
    // modal content
    let modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    dialog.appendChild(modalContent);
    // modal header
    let modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');
    modalContent.appendChild(modalHeader);
    // title
    var modalTitle = document.createElement('h6');
    modalTitle.id = "hotspot-modal--label";
    modalTitle.innerHTML = "Hotspot Content!";
    modalHeader.appendChild(modalTitle);
    // close
    let modalClose = document.createElement('button');
    modalClose.classList.add('close');
    modalClose.type = 'button';
    modalClose.setAttribute('data-dismiss', 'modal');
    modalClose.setAttribute('aria-label', 'Close');
    modalClose.innerHTML = '<span aria-hidden="true">&times;</span>';
    modalHeader.appendChild(modalClose);
    // modal Body
    let modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');
    modalContent.appendChild(modalBody);
    // append modal to page frame
    page.append(modal);
    // create hotspot array
    let hotspot_zones = [];
    // build hotspots
    pageData.content.hotspot.items.forEach(function(element, index) {
        let hotspot_item = document.createElement('button');
        hotspot_item.classList.add('zone', 'hotspot-item', element.shape);
        // add shape class
        hotspot_item.id = "zone-" + index;
        // add modal interactions
        hotspot_item.dataset.toggle = "modal";
        hotspot_item.dataset.target = "#hotspot-modal";
        // add click event
        hotspot_item.addEventListener("click", function() {
            modalTitle.innerHTML = element.title;
            modalBody.innerHTML = '';
            modalBody.appendChild(buildTextContent(element.body));
            // update the narration
            if (element.hasOwnProperty('narration')) {
                updateNarration(element);
            }
            // update background image
            hotspot_img.src = element.image.url;
            hotspot_img.alt = element.image.alt;
            hotspot_img.title = element.image.alt;

        });
        // send coords to array
        hotspot_zones.push(element.coords);
        // add a label for numbers
        let label = document.createElement('div');
        label.classList.add('hotspot-item--label');
        label.innerHTML = index + 1;
        hotspot_item.appendChild(label);
        // append hotspot item to hotspot
        hotspot.appendChild(hotspot_item);
    });
    // eval width and height of all items
    setTimeout(function() {
        checkImageItems(hotspot_zones, "hotspot-img");
        window.onresize = function(event) {
            checkImageItems(hotspot_zones, "hotspot-img");
        };
    }, 200);
}
/*
 * ------------------------------------------------------------------------
 * Template 9: Drag and drop
 * ------------------------------------------------------------------------
 */
function buildFullDragDrop(pageData) {
    // what are we working from
    console.log(pageData);
}
/*
 * ------------------------------------------------------------------------
 * Template 10: Full Tiles
 * ------------------------------------------------------------------------
 */
function buildFullTiles(pageData) {
    console.log(pageData);
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    let layoutArray = pageData.layout.split("-");
    let col1;
    let col2;
    // assess if its horizontal or veritcal
    if (layoutArray[1] == "left" || layoutArray[1] == "right") {
        // get left column
        col1 = document.getElementById('left-column');
        // get right column
        col2 = document.getElementById('right-column');
    } else {
        // get left column
        col1 = document.getElementById('top-row');
        // get right column
        col2 = document.getElementById('bottom-row');
    }
    // get left column wrapper
    let col1Wapper = document.getElementById('column-wrapper-1');
    // add the ementor
    let ementor = new eMentor(pageData.content.ementors[0]);
    col1Wapper.appendChild(ementor.build());
    // get the right column wrapper
    let col2Wrapper = document.getElementById('column-wrapper-2');
    // create div to wrap our sorting fun
    let tileGrid = document.createElement('div');
    tileGrid.id = "tile-grid";
    tileGrid.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'flex-wrap');
    col2Wrapper.appendChild(tileGrid);
    // loop through array and build lures(options)
    pageData.content.tiles.forEach(function(item, i) {
        // tile wrapper
        let tileWrapper = document.createElement('div');
        tileWrapper.classList.add('col-sm-4');
        // add item to grid
        tileGrid.appendChild(tileWrapper);
        // build the tile
        let tile = document.createElement('div');
        tile.classList.add('tile');
        tile.id = 'tile-' + i;
        // add item to grid
        tileWrapper.appendChild(tile);
        // add the front of the card
        let tileFront = document.createElement('div');
        tileFront.classList.add('tile-front');
        tile.appendChild(tileFront);
        // build image
        let tileImage = document.createElement('img');
        // tileImage.classList.add('img-fluid');
        tileImage.src = item.front.url;
        tileImage.alt = item.front.alt;
        // add image to item
        tileFront.appendChild(tileImage);
        // add the back of the tile
        let tileBack = document.createElement('div');
        tileBack.classList.add('tile-back');
        tile.appendChild(tileBack);
        // add content
        tileBack.appendChild(buildTextContent(item.back))
    });

    function getTileSize() {
        // get initial tile
        let initialTile = document.getElementById('tile-0');
        console.log(initialTile.offsetWidth);
        // get all the tiles
        let allTiles = document.getElementsByClassName('tile');
        // loop through the tiles
        for (var t = 0; t < allTiles.length; t++) {
            allTiles[t].style.height = initialTile.offsetWidth + 'px';
        };
    }

    // setup height on load
    getTileSize();
    // add height sizing
    window.addEventListener('resize', function(event) {
        getTileSize();
    });

    // click event for selection
    $('.tile').click(function() {
        // if button is not active evaluate
        if (!$(this).hasClass('active')) {
            // remove active class
            $('.tile.active').removeClass("active");
            // add class to current
            $(this).addClass("active");
        } else {
            // remove active class
            $('.tile.active').removeClass("active");
        }
    });

}
/*
 * ------------------------------------------------------------------------
 * Template 10.5: Full Tiles Select
 * ------------------------------------------------------------------------
 */
function buildFullTilesSelect(pageData) {
    console.log(pageData);
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    let layoutArray = pageData.layout.split("-");
    let col1;
    let col2;
    // assess if its horizontal or veritcal
    if (layoutArray[1] == "left" || layoutArray[1] == "right") {
        // get left column
        col1 = document.getElementById('left-column');
        // get right column
        col2 = document.getElementById('right-column');
    } else {
        // get left column
        col1 = document.getElementById('top-row');
        // get right column
        col2 = document.getElementById('bottom-row');
    }
    // get left column wrapper
    let col1Wrapper = document.getElementById('column-wrapper-1');

    let leadWrap = document.createElement('div');
    leadWrap.classList.add('position-relative');
    col1Wrapper.appendChild(leadWrap);
    // add ementor
    let ementor = new eMentor(pageData.content.ementors[0]);
    leadWrap.appendChild(ementor.build());
    // clear out user selections
    userSelections = [];
    answerKey = []
        // build out the statement list
    let statements = document.createElement('div');
    statements.classList.add('list-group');
    statements.id = "statement-list";
    leadWrap.appendChild(statements);
    // build out statements
    pageData.content.statements.forEach(function(statment, s) {
        // create list item
        let statementItem = document.createElement('button');
        statementItem.classList.add('list-group-item', 'list-group-item-action', 'd-flex', 'align-items-center', 'statement-list-item', 'mt-1');
        statementItem.id = "statement-list-item-" + s;
        statementItem.setAttribute("role", "button");
        // add a spot in the userSelections array
        userSelections.push("");
        answerKey.push(statment.answer);
        // create badge for indication
        let badge = document.createElement('div');
        badge.classList.add('badge', 'badge-primary', 'badge-pill', 'mr-3', 'flex-shrink-0');
        badge.innerHTML = s + 1;
        statementItem.appendChild(badge);
        // create item text
        let statementText = document.createElement('div')
        statementText.classList.add('w-100');
        statementText.innerHTML = statment.text;
        statementItem.appendChild(statementText);
        // when the user selects a statement
        statementItem.addEventListener("click", function() {
            selectedNode = statementItem;
            // enable selection mode
            selectNode(selectionGroup1, s);
        });
        // append to the list
        statements.appendChild(statementItem);
    });
    console.log(answerKey);
    // update selection variables
    selectionGroup1 = statements.childNodes;
    // add in the submit button
    let submit = createSubmitButton();
    submit.classList.add('mx-auto', 'my-3', 'd-block');
    submit.onclick = function() { submitResponse(userSelections, answerKey) };
    leadWrap.appendChild(submit);
    // get the right column wrapper
    let col2Wrapper = document.getElementById('column-wrapper-2');
    // add wrap
    let contentWrap = document.createElement('div');
    contentWrap.classList.add('position-relative', 'w-100');
    col2Wrapper.appendChild(contentWrap)
        // create div to wrap our sorting fun
    let tileGrid = document.createElement('div');
    tileGrid.id = "tile-grid";
    tileGrid.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'flex-wrap');
    contentWrap.appendChild(tileGrid);
    // loop through array and build lures(options)
    pageData.content.tiles.forEach(function(item, i) {
        // tile wrapper
        let tileWrapper = document.createElement('div');
        tileWrapper.classList.add('col-12', 'col-sm-6', 'col-md-4', 'mb-4');
        // add item to grid
        tileGrid.appendChild(tileWrapper);
        // build the tile
        let tile = document.createElement('div');
        tile.classList.add('tile');
        tile.id = 'tile-' + i;
        // add item to grid
        tileWrapper.appendChild(tile);
        // add badge for if selection is made
        let tileBadge = document.createElement('div');
        tileBadge.classList.add('badge', 'badge-primary', 'badge-pill');
        tile.appendChild(tileBadge);
        // add the front of the care
        let tileFront = document.createElement('div');
        tileFront.classList.add('tile-front');
        tile.appendChild(tileFront);
        // build image
        let tileImage = document.createElement('img');
        // tileImage.classList.add('img-fluid');
        tileImage.src = item.front.url;
        tileImage.alt = item.front.alt;
        // add image to item
        tileFront.appendChild(tileImage);
        // when the user selects a tile
        tile.addEventListener("click", function() {
            selectedNode = tile;
            // enable selection mode
            selectNode(selectionGroup2, i);
        });
    });
    // update selection variables
    selectionGroup2 = document.querySelectorAll(".tile");

    function getTileSize() {
        // get initial tile
        let initialTile = document.getElementById('tile-0');
        // get all the tiles
        let allTiles = document.getElementsByClassName('tile');
        // loop through the tiles
        for (var t = 0; t < allTiles.length; t++) {
            allTiles[t].style.height = initialTile.offsetWidth + 'px';
        };
    }
    // setup height on load
    getTileSize();
    // add height sizing
    window.addEventListener('resize', function(event) {
        getTileSize();
    });


    let attempt = 0

    function submitResponse(submission, answers) {
        console.log(submission);
        console.log(answers)
        let alert;
        let result = null;
        // if submission is not valid
        if (submission.includes("")) {
            alert = buildFeedback(result);
        } else {
            // compare arrays
            answers.every(function(answer, index) {
                if (answer != submission[index]) {
                    result = false;
                    return false;
                }
                result = true;
                return true;

            });
            // show feedback
            if (result == false && attempt == 0) {
                alert = buildFeedback(result, null, 'Please try again.');

            } else if (result == false && attempt != 0) {
                alert = buildFeedback(result, null, 'The correct answers are:');
                showAnswers();
                setTimeout(() => {
                    if (pageData.achievement == true) {
                        notifyChallengeCoin(pageData.id, false);
                    }
                }, 1000);
                submit.disabled = true;

            } else if (result == true && attempt < 2) {
                alert = buildFeedback(result, 'Great work! You’ve earned a challenge coin', null);
                setTimeout(() => {
                    if (pageData.achievement == true) {
                        notifyChallengeCoin(pageData.id, true);
                    }
                }, 1000);
                submit.disabled = true;

            }
            attempt++;
        }
        // remove the old alert
        let oldAlert = document.getElementsByClassName('alert')
        if (oldAlert.length) {
            oldAlert[0].remove();
        }
        // add the new alert
        contentWrap.insertBefore(alert, tileGrid);


    }


    function showAnswers() {
        let statementNodes = document.getElementsByClassName('statement-list-item');
        let tileNodes = document.getElementsByClassName('tile');
        pageData.content.statements.forEach(function(statment, s) {
            selectedNode = statementNodes[s];
            selectNode(selectionGroup1, s);
            selectedNode = tileNodes[answerKey[s]];
            selectNode(selectionGroup2, answerKey[s]);
        });
    }
}
var selectedNode;
var initialSelection = null;
var initialSelectionGroup = null;
var intialSelectionNumber = null;
var selectionGroup1;
var selectionGroup2;
var userSelections = [];
// node selection function
function selectNode(group, number) {
    // check if it is the intial selection 
    if (initialSelection == null || Array.from(group).some(({ classList }) => classList.contains('selected'))) {
        // add active class to the selected item
        for (let n = 0; n < group.length; n++) {
            group[n].classList.remove('selected');
        }
        // add selected class to selected node
        selectedNode.classList.add('selected');
        // update intial selection
        initialSelection = selectedNode;
        // keep the initial element number for selection array
        initialSelectionNumber = number;

        console.log(initialSelection);
        console.log(initialSelectionNumber);

    }
    // logic for second selection
    else {
        // update classes
        initialSelection.classList.add('submitted');
        initialSelection.classList.remove('selected');
        selectedNode.classList.add('submitted');
        // check where the label should come from and apply to the other
        if (group == selectionGroup2) {
            console.log(number);
            // check to see if it has been paired already
            for (let u = 0; u < userSelections.length; u++) {
                if (userSelections[u] == number) {
                    console.log('match');
                }
            }
            // update the badge
            selectedNode.childNodes[0].innerHTML = initialSelection.childNodes[0].innerHTML;
            // update the number on the button
            selectedNode.dataset.selected = number;
            // update 
            userSelections[initialSelectionNumber] = number;
        } else {
            initialSelection.childNodes[0].innerHTML = selectedNode.childNodes[0].innerHTML;
            userSelections[number] = initialSelectionNumber;
        }
        // set intial node back to null
        initialSelection = null;
    }
}
// leaving node selection
function exitNodeSelection(id, selClass) {
    // get node list
    let selectionGroup1 = document.getElementsByClassName(selClass);
    // enable statements
    for (let n = 0; n < selectionGroup1.length; n++) {
        selectionGroup1[n].classList.remove('active');
        if (n != id) {
            selectionGroup1[n].disabled = false;
        } else {
            selectionGroup1[n].classList.add('bg-success');
        }
    }
    // get tile list
    let tileList = document.getElementsByClassName('tile');
    // loop through tiles to set up on click event
    for (let t = 0; t < tileList.length; t++) {
        tileList[t].onclick = function() {
            return false;
        }
    }
}
/*
 * ------------------------------------------------------------------------
 * Template 11: Listing
 * ------------------------------------------------------------------------
 */
function buildListing(pageData) {
    // what are we working from
    console.log(pageData);
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    let layoutArray = pageData.layout.split("-");
    let col1;
    let col2;
    // assess if its horizontal or veritcal
    if (layoutArray[1] == "left" || layoutArray[1] == "right") {
        // get left column
        col1 = document.getElementById('left-column');
        // get right column
        col2 = document.getElementById('right-column');
    } else {
        // get left column
        col1 = document.getElementById('top-row');
        // get right column
        col2 = document.getElementById('bottom-row');
    }
    // get left column wrapper
    let col1Wrapper = document.getElementById('column-wrapper-1');
    // content wrap
    let content = document.createElement('div');
    content.id = 'content-wrap';
    content.classList.add('w-100');
    col1Wrapper.appendChild(content);
    // build ementor
    let instructions = buildInstructionCard(pageData.content.instructions);
    // append ementor
    content.appendChild(instructions);
    // create modal
    let modal = document.createElement('div');
    modal.classList.add('modal', 'fade');
    modal.id = "hotspot-modal";
    modal.setAttribute('tabindex', '-1');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-labelledby', 'hotspot-modal--label');
    modal.setAttribute('aria-hidden', 'true');
    // modal dialog
    let dialog = document.createElement('div');
    dialog.classList.add('modal-dialog', 'modal-dialog-centered');
    dialog.setAttribute('role', 'document');
    modal.appendChild(dialog);
    // modal content
    let modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    dialog.appendChild(modalContent);
    // modal header
    let modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');
    modalContent.appendChild(modalHeader);
    // title
    var modalTitle = document.createElement('h6');
    modalTitle.id = "hotspot-modal--label";
    modalTitle.innerHTML = "Hotspot Content!";
    modalHeader.appendChild(modalTitle);
    // close
    let modalClose = document.createElement('button');
    modalClose.classList.add('close');
    modalClose.type = 'button';
    modalClose.setAttribute('data-dismiss', 'modal');
    modalClose.setAttribute('aria-label', 'Close');
    modalClose.innerHTML = '<span aria-hidden="true">&times;</span>';
    modalHeader.appendChild(modalClose);
    // modal Body
    let modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');
    modalContent.appendChild(modalBody);
    // append modal to page frame
    page.append(modal);
    // get right column wrapper
    let col2Wrapper = document.getElementById('column-wrapper-2');
    // set up a wrapper
    let contentWrap = document.createElement('div');
    col2Wrapper.appendChild(contentWrap);
    // create div to hold the hot spot
    let itemWrap = document.createElement('div');
    // hotspot.classList.add('w-100')
    itemWrap.id = "item-wrap";
    contentWrap.appendChild(itemWrap);
    // create div to wrap our sorting fun
    let imageGrid = document.createElement('div');
    imageGrid.id = "image-select-grid";
    imageGrid.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'flex-wrap');
    itemWrap.appendChild(imageGrid);
    // loop through array and build lures(options)
    pageData.content.items.forEach(function(item, i) {
        let gridItem = document.createElement('div');
        // gridItem.classList.add('col-6');
        // add item to grid
        imageGrid.appendChild(gridItem);
        // create button for selection
        let gridButton = document.createElement('button');
        gridButton.type = "button";
        gridButton.classList.add('icon-select');
        gridButton.id = 'icon-select-' + i;
        // add modal interactions
        gridButton.dataset.toggle = "modal";
        gridButton.dataset.target = "#hotspot-modal";
        // add button to item
        gridItem.appendChild(gridButton);
        // build image
        let gridImage = document.createElement('img');
        gridImage.classList.add('icon-select-image');
        gridImage.src = item.image.url;
        gridImage.alt = item.image.alt;
        // add image to button
        gridButton.appendChild(gridImage);
        // add the click event
        gridButton.onclick = function() {
            modalTitle.innerHTML = item.title;
            modalBody.innerHTML = '';
            modalBody.appendChild(buildTextContent(item.body));
            // update the narration
            if (item.hasOwnProperty('narration')) {
                updateNarration(item);;
            }
        }
    });
}

/*
 * ------------------------------------------------------------------------
 * Template 11: Listing
 * ------------------------------------------------------------------------
 */
function buildListingImage(pageData) {
    // what are we working from
    console.log(pageData);
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    let layoutArray = pageData.layout.split("-");
    let col1;
    let col2;
    // assess if its horizontal or veritcal
    if (layoutArray[1] == "left" || layoutArray[1] == "right") {
        // get left column
        col1 = document.getElementById('left-column');
        // get right column
        col2 = document.getElementById('right-column');
    } else {
        // get left column
        col1 = document.getElementById('top-row');
        // get right column
        col2 = document.getElementById('bottom-row');
    }
    // get left column wrapper
    let col1Wrapper = document.getElementById('column-wrapper-1');
    // content wrap
    let content = document.createElement('div');
    content.id = 'content-wrap';
    content.classList.add('w-100');
    col1Wrapper.appendChild(content);
    // build ementor
    let instructions = buildInstructionCard(pageData.content.instructions);
    // append ementor
    content.appendChild(instructions);
    // create modal
    let modal = document.createElement('div');
    modal.classList.add('modal', 'fade');
    modal.id = "hotspot-modal";
    modal.setAttribute('tabindex', '-1');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-labelledby', 'hotspot-modal--label');
    modal.setAttribute('aria-hidden', 'true');
    // modal dialog
    let dialog = document.createElement('div');
    dialog.classList.add('modal-dialog', 'modal-dialog-centered');
    dialog.setAttribute('role', 'document');
    modal.appendChild(dialog);
    // modal content
    let modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    dialog.appendChild(modalContent);
    // modal header
    let modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');
    modalContent.appendChild(modalHeader);
    // title
    var modalTitle = document.createElement('h6');
    modalTitle.id = "hotspot-modal--label";
    modalTitle.innerHTML = "Hotspot Content!";
    modalHeader.appendChild(modalTitle);
    // close
    let modalClose = document.createElement('button');
    modalClose.classList.add('close');
    modalClose.type = 'button';
    modalClose.setAttribute('data-dismiss', 'modal');
    modalClose.setAttribute('aria-label', 'Close');
    modalClose.innerHTML = '<span aria-hidden="true">&times;</span>';
    modalHeader.appendChild(modalClose);
    // modal Body
    let modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');
    modalContent.appendChild(modalBody);
    // append modal to page frame
    page.append(modal);
    // get right column wrapper
    let col2Wrapper = document.getElementById('column-wrapper-2');
    // set up a wrapper
    let contentWrap = document.createElement('div');
    col2Wrapper.appendChild(contentWrap);
    // create div to hold the hot spot
    let itemWrap = document.createElement('div');
    // hotspot.classList.add('w-100')
    itemWrap.id = "item-wrap";
    contentWrap.appendChild(itemWrap);
    // create div to wrap our sorting fun
    let imageGrid = document.createElement('div');
    imageGrid.id = "image-select-grid";
    imageGrid.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'flex-wrap');
    itemWrap.appendChild(imageGrid);
    // loop through array and build lures(options)
    pageData.content.items.forEach(function(item, i) {
        let gridItem = document.createElement('div');
        // gridItem.classList.add('col-6');
        // add item to grid
        imageGrid.appendChild(gridItem);
        // create button for selection
        let gridButton = document.createElement('button');
        gridButton.type = "button";
        gridButton.classList.add('icon-select');
        gridButton.id = 'icon-select-' + i;
        // add modal interactions
        gridButton.dataset.toggle = "modal";
        gridButton.dataset.target = "#hotspot-modal";
        // add button to item
        gridItem.appendChild(gridButton);
        // build image
        let gridImage = document.createElement('img');
        gridImage.classList.add('icon-select-image');
        gridImage.src = item.image.url;
        gridImage.alt = item.image.alt;
        // add image to button
        gridButton.appendChild(gridImage);
        // add the click event
        gridButton.onclick = function() {
            modalTitle.innerHTML = item.title;
            modalBody.innerHTML = '';
            modalBody.appendChild(buildTextContent(item.body));
            // update the narration
            if (item.hasOwnProperty('narration')) {
                updateNarration(item);;
            }
        }
    });
}
/*
 * ------------------------------------------------------------------------
 * Template 12: Cards
 * ------------------------------------------------------------------------
 */
function buildCards(pageData) {
    // what are we working from
    console.log(pageData);
}
/*
 * ------------------------------------------------------------------------
 * Template 13: True/False
 * ------------------------------------------------------------------------
 */
function buildWheelTF(pageData) {
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    let layoutArray = pageData.layout.split("-");
    let col1;
    let col2;
    // assess if its horizontal or veritcal
    if (layoutArray[1] == "left" || layoutArray[1] == "right") {
        // get left column
        col1 = document.getElementById('left-column');
        // get right column
        col2 = document.getElementById('right-column');
    } else {
        // get left column
        col1 = document.getElementById('top-row');
        // get right column
        col2 = document.getElementById('bottom-row');
    }
    // get left column wrapper
    let col1Wrapper = document.getElementById('column-wrapper-1');
    // add ementor
    let ementor = new eMentor(pageData.content.ementors[0]);
    col1Wrapper.appendChild(ementor.build());
    // get right column wrapper
    let col2Wrapper = document.getElementById('column-wrapper-2');
    // content wrap
    let content = document.createElement('div');
    content.id = 'content-wrap';
    content.classList.add('w-100');
    col2Wrapper.appendChild(content);
    // build out the carousel
    let carousel = document.createElement('div');
    carousel.id = 'question-carousel';
    carousel.classList.add('carousel', 'slide', 'w-100');
    carousel.dataset.interval = 'false';
    carousel.dataset.ride = "false";
    carousel.dataset.wrap = 'true';
    content.appendChild(carousel);
    // add inner container
    let inner = document.createElement('div');
    inner.classList.add('carousel-inner');
    carousel.appendChild(inner);
    // setup array for slides to be randomized
    let questions = pageData.content.questions;
    // shuffle the questions
    shuffle(questions);
    let slides = [];
    let userResponses = [];
    let answerKey = [];
    // add content
    questions.forEach(function(element, index) {
        // build slide
        let slide = document.createElement('div');
        slide.classList.add("carousel-item");
        slide.id = 'question-' + index;
        // build question card
        let question = buildQuestion(element);
        question.classList.add('w-100');
        slide.appendChild(question);
        // add slide to slide array
        slides.push(slide);
        // push answer and stub in user responses
        answerKey.push(element.answer);
        userResponses.push("");
    });
    // add slide to carousel inner
    slides.forEach(function(item, index) {
        if (index == 0) {
            item.classList.add("active");
        }
        inner.appendChild(item);
    });
    let spinnerWrap = document.createElement('div');
    spinnerWrap.id = 'tf-spin';
    spinnerWrap.classList.add('animate__animated', 'animate__fadeInUp', 'active');
    let spinner = document.createElement('div');
    spinner.id = 'tf-spin-spinner';
    spinner.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" aria-label="question-spinner" focusable="false" viewBox="0 0 200 200"><g><path class="spin-item" d="M95,20.17V0.12C83.87,0.67,73.22,3.04,63.33,6.94c-1.51,0.6-3.01,1.23-4.49,1.9c-3.69,1.67-7.26,3.56-10.7,5.64c-1.37,0.84-2.73,1.7-4.06,2.6c-3.33,2.25-6.51,4.69-9.53,7.31c-1.81,1.57-3.57,3.21-5.27,4.9c-1.13,1.13-2.24,2.29-3.31,3.47c-0.54,0.59-1.07,1.19-1.59,1.8c-1.05,1.21-2.07,2.44-3.06,3.7c-0.49,0.63-0.98,1.27-1.46,1.91c-0.96,1.28-1.89,2.59-2.79,3.92c-2.7,3.99-5.11,8.19-7.22,12.56c-1.05,2.19-2.03,4.42-2.92,6.69c-0.3,0.76-0.59,1.52-0.87,2.28c-0.56,1.53-1.09,3.08-1.57,4.65C2.05,78.14,0.55,86.43,0.12,95h20.05C22.66,54.87,54.87,22.66,95,20.17z"/><path class="spin-item" d="M20.17,105H0.12c2.52,51.25,43.63,92.35,94.88,94.88v-20.05C54.87,177.34,22.66,145.13,20.17,105z"/><path class="spin-item" d="M105,179.83v20.05c51.25-2.52,92.35-43.63,94.88-94.88h-20.05C177.34,145.13,145.13,177.34,105,179.83z"/><path class="spin-item" d="M179.83,95h20.05c-0.42-8.57-1.92-16.86-4.37-24.74c-0.49-1.57-1.01-3.11-1.57-4.65c-0.28-0.77-0.57-1.53-0.87-2.28c-0.9-2.27-1.87-4.5-2.92-6.69c-2.11-4.37-4.52-8.57-7.22-12.56c-0.9-1.33-1.83-2.64-2.79-3.92c-0.48-0.64-0.97-1.28-1.46-1.91c-0.99-1.26-2.01-2.49-3.06-3.7c-0.52-0.6-1.05-1.2-1.59-1.8c-1.08-1.18-2.18-2.34-3.31-3.47c-1.7-1.7-3.45-3.33-5.27-4.9c-3.02-2.62-6.21-5.06-9.53-7.31c-1.33-0.9-2.68-1.77-4.06-2.6c-3.44-2.09-7.01-3.97-10.7-5.64c-1.48-0.67-2.97-1.3-4.49-1.9c-9.88-3.9-20.54-6.26-31.67-6.81v20.05C145.13,22.66,177.34,54.87,179.83,95z"/></g></svg>';
    spinnerWrap.appendChild(spinner);
    let spinnerBtn = document.createElement('button');
    spinnerBtn.id = 'spinBtn';
    spinnerBtn.type = 'button';
    spinnerBtn.classList.add('btn', 'btn-primary');
    spinnerBtn.innerHTML = 'Spin';
    spinnerBtn.onclick = function() { spin() };
    spinnerWrap.appendChild(spinnerBtn);
    content.appendChild(spinnerWrap);
    // add submit button
    let submit = createSubmitButton();
    submit.classList.add('d-none', 'mx-auto', 'my-3');
    content.appendChild(submit);
    submit.onclick = function() { questionResponse() };
    // add extra spin button
    let spinnerBtn2 = document.createElement('button');
    spinnerBtn2.id = 'spinBtn2';
    spinnerBtn2.type = 'button';
    spinnerBtn2.classList.add('btn', 'btn-primary', 'd-none', 'mx-auto', 'my-3');
    spinnerBtn2.innerHTML = 'Spin';
    spinnerBtn2.onclick = function() { respin() };
    content.appendChild(spinnerBtn2);

    question = 0;
    rotation = 765;

    function spin() {
        spinner.style.transform = 'rotate(' + rotation + 'deg)';
        rotation = rotation + 810;
        if (question != 0) {
            $('#question-carousel').carousel('next');
        }
        spinnerBtn.classList.add('animate__animated', 'animate__fadeOut');
        setTimeout(function() {
            $(".spin-item:nth-child(" + (question + 1) + ")").addClass('active');
            carousel.classList.remove('animate__fadeOutUp');
            spinnerWrap.classList.remove('animate__animated', 'animate__fadeInUp');
            setTimeout(function() {
                spinnerWrap.classList.add('animate__animated', 'animate__fadeOutDown');
                setTimeout(function() {
                    spinnerWrap.classList.remove('active');
                    spinnerBtn.classList.add('d-none');
                    carousel.classList.add('animate__animated', 'animate__fadeInDown', 'active');
                    submit.classList.remove('d-none');
                    submit.classList.add('animate__animated', 'animate__fadeInDown', 'd-block');
                }, 750);
            }, 1000);
        }, 3000);
    }

    function respin() {
        // send the carousel outta here
        carousel.classList.remove('animate__fadeInDown');
        carousel.classList.add('animate__fadeOutUp');
        spinnerBtn2.classList.add('animate__animated', 'animate__fadeOutUp');
        setTimeout(function() {
            carousel.classList.remove('active');
            spinnerBtn2.classList.remove('animate__animated', 'animate__fadeOutUp', 'd-block');
            spinnerBtn2.classList.add('d-none');
        }, 750);
        // show me the money!... uhh I mean spinner
        spinnerWrap.classList.remove('animate__fadeOutDown');
        spinnerWrap.classList.add('active', 'animate__fadeInUp');
        // call for the spin
        setTimeout(function() {
            spin();
        }, 750);
    }

    function questionResponse() {
        // eval by using the true btn
        let trueBtn = document.getElementById(slides[question].id).getElementsByClassName("btnTF")[0];
        // check if which button was active
        if (trueBtn.classList.contains('active')) {
            userResponses[question] = 1;
        } else {
            userResponses[question] = 0;
        }
        let result = '';
        // evaluate against the answer key
        if (userResponses[question] == answerKey[question]) {
            // show correct feedback
            result = true;
        } else {
            // show incorrect feedback
            result = false;
        }
        console.log(result);
        let feedback = buildFeedback(result, pageData.content.correct, pageData.content.incorrect);
        console.log(feedback);
        let questionValidation = document.getElementById(slides[question].id).getElementsByClassName("question-feedback")[0];
        questionValidation.appendChild(feedback);
        question++;
        submit.classList.remove('d-block');
        submit.classList.add('d-none');


        console.log(userResponses);
        console.log(answerKey);


        if (question != slides.length) {
            spinnerBtn2.classList.remove('d-none', 'animate__animated', 'animate__fadeOutUp');
            spinnerBtn2.classList.add('d-block');
        } else {
            if (evaluateAnswers(answerKey, userResponses)) {
                console.log('all correct');
                if (pageData.achievement == true) {
                    notifyChallengeCoin(pageData.id, true);
                } else {

                }
            } else {
                console.log('not all correct');
                if (pageData.achievement == true) {
                    notifyChallengeCoin(pageData.id, false);
                } else {

                }
            }
        }
    }


}
/*
 * ------------------------------------------------------------------------
 * Template 14: Graphic Choice
 * ------------------------------------------------------------------------
 */
function buildGraphicChoice(pageData) {
    // what are we working from
    console.log(pageData);
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    // get full row
    let fullRow = document.getElementById('column-wrapper-1');
    fullRow.classList.add('full-column', 'flex-column');
    // build ementor
    let instructions = buildInstructionBar(pageData.content.instructions);
    // append ementor
    fullRow.appendChild(instructions);
    // build question feedback
    let feedback = document.createElement('div');
    feedback.classList.add('w-100');
    feedback.id = 'exercise-feedback';
    fullRow.appendChild(feedback);
    // create div to hold the hot spot
    let hotspot = document.createElement('div');
    // hotspot.classList.add('w-100')
    hotspot.id = "hotspot";
    fullRow.appendChild(hotspot);
    let hotspot_img = document.createElement('img');
    hotspot_img.classList.add('img-fluid');
    hotspot_img.id = 'hotspot-img';
    hotspot_img.src = pageData.content.hotspot.image.url;
    hotspot_img.alt = pageData.content.hotspot.image.alt;
    hotspot_img.title = pageData.content.hotspot.image.alt;
    hotspot_img.setAttribute('usemap', '#hotspot_map');
    hotspot_img.onload = function() {
        var imgCheck = setInterval(function() {
            checkImageItems(hotspot_zones, "hotspot-img");
            console.log('adjusting')
        }, 100);
        setTimeout(function() {
            clearInterval(imgCheck);
        }, 1000);
    }
    hotspot.appendChild(hotspot_img);
    let hotspot_zones = [];
    let qCorrect = null;
    // letter array for labels
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    // build hotspots
    pageData.content.hotspot.items.forEach(function(element, index) {
        let hotspot_item = document.createElement('button');
        hotspot_item.classList.add('zone', 'hotspot-item', element.shape);
        // add shape class
        hotspot_item.id = "zone-" + index;
        // add click event
        hotspot_item.addEventListener("click", function() {
            if (element.answer == true) {
                qCorrect = true;
            } else {
                qCorrect = false;
            }
            evalSelection();
        });
        // send coords to array
        hotspot_zones.push(element.coords);
        // add a label for numbers
        let label = document.createElement('div');
        label.classList.add('hotspot-item--label');
        label.innerHTML = letters[index];
        hotspot_item.appendChild(label);
        // append hotspot item to hotspot
        hotspot.appendChild(hotspot_item);
    });

    let attempt = 0;
    // click event for selection
    function evalSelection() {
        attempt++
        // show feedback
        feedback.innerHTML = "";
        if (attempt > 1 || qCorrect == true) {
            feedback.appendChild(buildFeedback(qCorrect, pageData.content.correct, pageData.content.feedback));
            // remove all lures
            document.querySelectorAll('.hotspot-item').forEach(e => e.remove());
            // update the image
            hotspot_img.src = pageData.content.hotspot.correctImage.url;
            hotspot_img.alt = pageData.content.hotspot.correctImage.alt;
            hotspot_img.title = pageData.content.hotspot.correctImage.alt;
        } else {
            feedback.appendChild(buildFeedback(qCorrect, pageData.content.correct, pageData.content.incorrect));
        }
    };
}
/*
 * ------------------------------------------------------------------------
 * Template 15: COL Multiple Choice
 * ------------------------------------------------------------------------
 */
function buildCOLMultipleChoice(pageData) {
    let qCorrect = null;
    let btnId;
    let attempt = 0;
    // add bg
    addBackgroundImage(pageData.content.background);
    // letter array for labels
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    // get full row
    let fullRow = document.getElementById('column-wrapper-1');
    fullRow.classList.add('full-column');
    // add wrap
    let contentWrap = document.createElement('div');
    contentWrap.classList.add('w-100', 'position-relative');
    fullRow.appendChild(contentWrap);
    // build question card
    let card = buildQuestionCard(pageData);
    card.classList.add('mx-auto')
    card.style.maxWidth = "960px";
    // append to question card to right column
    contentWrap.appendChild(card);
    // get id for card body
    let cardBody = document.getElementById('question-body');
    // loop through array and build lures(options)
    pageData.content.options.forEach(function(option, o) {
        // build button
        let lure = document.createElement('button');
        lure.setAttribute("data-toggle", "button");
        lure.setAttribute("aria-pressed", "false");
        lure.id = o + "_mc";
        lure.classList.add("question-option");
        // add label
        let label = document.createElement('div');
        label.classList.add('question-option--label');
        label.innerHTML = '<span>' + letters[o] + '</span>';
        lure.appendChild(label);
        // add text
        let lureText = document.createElement('div');
        lureText.classList.add('question-option--text');
        lureText.innerHTML = option.text;
        lure.appendChild(lureText);
        // add lure to content
        cardBody.appendChild(lure);
    });
    // set answer
    qOptions = pageData.content.options;
    // click event for selection
    $('.question-option').click(function() {
        // if button is not active evaluate
        if (!$(this).hasClass('active')) {
            // remove active class
            $('.question-option.active').removeClass("active");
            // add class to current
            $(this).addClass("active");
            // evaluate selection
            btnId = $(this).attr('id');
            // eval if submitted answer is correct
            if (pageData.content.options[btnId[0]].answer == true) {
                qCorrect = true;
            } else {
                qCorrect = false;
            }

            console.log(qCorrect);
        }
    });
    let feedback = document.getElementById('question-feedback');
    // click event for selection
    $('#question-submit').click(function() {
        attempt++
        // show feedback
        feedback.innerHTML = "";
        if (attempt > 1 || qCorrect == true) {
            feedback.appendChild(buildFeedback(qCorrect, pageData.content.correct, pageData.content.feedback));
            $('#question-submit').prop("disabled", true);
            showAnswer();
        } else {
            feedback.appendChild(buildFeedback(qCorrect, pageData.content.correct, pageData.content.incorrect));
            // remove active class
            $('.question-option.active').removeClass("active");
        }
    });

    function showAnswer() {
        pageData.content.options.forEach(function(option, o) {
            let qLure = document.getElementById(o + "_mc");
            if (option.answer == false) {
                qLure.firstChild.classList.add('bg-danger');
                qLure.firstChild.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="x-icon" d="M46.7 32L62.5 16.2c1-1 1.5-2.2 1.5-3.7 0-1.4-0.5-2.7-1.5-3.7L55.2 1.5C54.2 0.5 52.9 0 51.5 0c-1.4 0-2.7 0.5-3.7 1.5L32 17.3 16.2 1.5C15.2 0.5 13.9 0 12.5 0c-1.4 0-2.7 0.5-3.7 1.5L1.5 8.8C0.5 9.8 0 11.1 0 12.5c0 1.4 0.5 2.7 1.5 3.7l15.8 15.8L1.5 47.8C0.5 48.8 0 50.1 0 51.5c0 1.4 0.5 2.7 1.5 3.7l7.3 7.3C9.8 63.5 11.1 64 12.5 64c1.4 0 2.7-0.5 3.7-1.5l15.8-15.8 15.8 15.8C48.8 63.5 50.1 64 51.5 64c1.4 0 2.7-0.5 3.7-1.5l7.3-7.3C63.5 54.2 64 52.9 64 51.5c0-1.4-0.5-2.7-1.5-3.7L46.7 32z"/></svg>';
            } else {
                qLure.firstChild.classList.add('bg-success');
                qLure.firstChild.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="checkmark-icon" d="M62.8 14.2l-5.6-5.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-27.1 27.1L12.4 23.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-5.6 5.6C0.4 30 0 30.9 0 32c0 1.1 0.4 2 1.2 2.8l14.9 14.9 5.6 5.6c0.8 0.8 1.7 1.2 2.8 1.2 1.1 0 2-0.4 2.8-1.2l5.6-5.6 29.9-29.9C63.6 19.1 64 18.2 64 17.1 64 16 63.6 15 62.8 14.2z"/></svg>';
            }

        });
    }
}
/*
 * ------------------------------------------------------------------------
 * Template 15.1: COL Multiple Choice
 * ------------------------------------------------------------------------
 */
function buildCOLMultipleChoiceImage(pageData) {
    let qCorrect = null;
    let btnId;
    let attempt = 0;
    // letter array for labels
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    let layoutArray = pageData.layout.split("-");
    let col1;
    let col2;
    // assess if its horizontal or veritcal
    if (layoutArray[1] == "left" || layoutArray[1] == "right") {
        // get left column
        col1 = document.getElementById('left-column');
        // get right column
        col2 = document.getElementById('right-column');
    } else {
        // get left column
        col1 = document.getElementById('top-row');
        // get right column
        col2 = document.getElementById('bottom-row');
    }
    // get left column wrapper
    let col1Wrapper = document.getElementById('column-wrapper-1');
    // content wrap
    let content = document.createElement('div');
    content.id = 'content-wrap';
    content.classList.add('w-100');
    col1Wrapper.appendChild(content);
    // build question card
    let card = buildQuestionCard(pageData);
    // append to question card to right column
    content.appendChild(card);
    // get id for card body
    let cardBody = document.getElementById('question-body');
    // loop through array and build lures(options)
    pageData.content.options.forEach(function(option, o) {
        // build button
        let lure = document.createElement('button');
        lure.setAttribute("data-toggle", "button");
        lure.setAttribute("aria-pressed", "false");
        lure.id = o + "_mc";
        lure.classList.add("question-option");
        // add label
        let label = document.createElement('div');
        label.classList.add('question-option--label');
        label.innerHTML = '<span>' + letters[o] + '</span>';
        lure.appendChild(label);
        // add text
        let lureText = document.createElement('div');
        lureText.classList.add('question-option--text');
        lureText.innerHTML = option.text;
        lure.appendChild(lureText);
        // add lure to content
        cardBody.appendChild(lure);
    });
    // set answer
    qOptions = pageData.content.options;
    // click event for selection
    $('.question-option').click(function() {
        // if button is not active evaluate
        if (!$(this).hasClass('active')) {
            // remove active class
            $('.question-option.active').removeClass("active");
            // add class to current
            $(this).addClass("active");
            // evaluate selection
            btnId = $(this).attr('id');
            // eval if submitted answer is correct
            if (pageData.content.options[btnId[0]].answer == true) {
                qCorrect = true;
            } else {
                qCorrect = false;
            }

            console.log(qCorrect);
        }
    });
    let feedback = document.getElementById('question-feedback');
    // click event for selection
    $('#question-submit').click(function() {
        attempt++
        // show feedback
        feedback.innerHTML = "";
        if (attempt > 1 || qCorrect == true) {
            feedback.appendChild(buildFeedback(qCorrect, pageData.content.correct, pageData.content.feedback));
            $('#question-submit').prop("disabled", true);
            showAnswer();
        } else {
            feedback.appendChild(buildFeedback(qCorrect, pageData.content.correct, pageData.content.incorrect));
            // remove active class
            $('.question-option.active').removeClass("active");
        }
    });
    // get right column wrapper
    let col2Wrapper = document.getElementById('column-wrapper-2');
    // set up a wrapper
    let contentWrap = document.createElement('div');
    col2Wrapper.appendChild(contentWrap);
    // create the feedback wrapper
    let endFeedback = document.createElement('div');
    endFeedback.classList.add('feedback', 'col-feedback');
    contentWrap.appendChild(endFeedback)
        // create div to hold the hot spot
    let graphic = document.createElement('div');
    // hotspot.classList.add('w-100')
    graphic.id = "hotspot";
    contentWrap.appendChild(graphic);
    // graphic image
    let graphic_img = document.createElement('img');
    graphic_img.classList.add('img-fluid');
    graphic_img.id = 'support-img';
    graphic_img.src = pageData.content.image.url;
    graphic_img.alt = pageData.content.image.alt;
    graphic_img.title = pageData.content.image.alt;
    graphic.appendChild(graphic_img);




    function showAnswer() {
        pageData.content.options.forEach(function(option, o) {
            let qLure = document.getElementById(o + "_mc");
            if (option.answer == false) {
                qLure.firstChild.classList.add('bg-danger');
                qLure.firstChild.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="x-icon" d="M46.7 32L62.5 16.2c1-1 1.5-2.2 1.5-3.7 0-1.4-0.5-2.7-1.5-3.7L55.2 1.5C54.2 0.5 52.9 0 51.5 0c-1.4 0-2.7 0.5-3.7 1.5L32 17.3 16.2 1.5C15.2 0.5 13.9 0 12.5 0c-1.4 0-2.7 0.5-3.7 1.5L1.5 8.8C0.5 9.8 0 11.1 0 12.5c0 1.4 0.5 2.7 1.5 3.7l15.8 15.8L1.5 47.8C0.5 48.8 0 50.1 0 51.5c0 1.4 0.5 2.7 1.5 3.7l7.3 7.3C9.8 63.5 11.1 64 12.5 64c1.4 0 2.7-0.5 3.7-1.5l15.8-15.8 15.8 15.8C48.8 63.5 50.1 64 51.5 64c1.4 0 2.7-0.5 3.7-1.5l7.3-7.3C63.5 54.2 64 52.9 64 51.5c0-1.4-0.5-2.7-1.5-3.7L46.7 32z"/></svg>';
            } else {
                qLure.firstChild.classList.add('bg-success');
                qLure.firstChild.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="checkmark-icon" d="M62.8 14.2l-5.6-5.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-27.1 27.1L12.4 23.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-5.6 5.6C0.4 30 0 30.9 0 32c0 1.1 0.4 2 1.2 2.8l14.9 14.9 5.6 5.6c0.8 0.8 1.7 1.2 2.8 1.2 1.1 0 2-0.4 2.8-1.2l5.6-5.6 29.9-29.9C63.6 19.1 64 18.2 64 17.1 64 16 63.6 15 62.8 14.2z"/></svg>';
            }

        });
    }
}
/*
 * ------------------------------------------------------------------------
 * Template 16: COL Matching
 * ------------------------------------------------------------------------
 */
function buildCOLMatching(pageData) {
    // what are we working from
    console.log(pageData.content.draggables);
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    let layoutArray = pageData.layout.split("-");
    let col1;
    let col2;
    // assess if its horizontal or veritcal
    if (layoutArray[1] == "left" || layoutArray[1] == "right") {
        // get left column
        col1 = document.getElementById('left-column');
        // get right column
        col2 = document.getElementById('right-column');
    } else {
        // get left column
        col1 = document.getElementById('top-row');
        // get right column
        col2 = document.getElementById('bottom-row');
    }
    // get left column wrapper
    let col1Wrapper = document.getElementById('column-wrapper-1');
    // add wrap
    let leadWrap = document.createElement('div');
    leadWrap.classList.add('position-relative');
    col1Wrapper.appendChild(leadWrap);
    // add ementor
    let ementor = new eMentor(pageData.content.ementors[0]);
    leadWrap.appendChild(ementor.build());
    // add in the submit button
    let submit = createSubmitButton();
    submit.classList.add('d-block', 'mx-auto', 'my-3');
    submit.onclick = function() { submitResponse(userSelections, answerKey) };
    leadWrap.appendChild(submit);
    // get right column wrapper
    let col2Wrapper = document.getElementById('column-wrapper-2');
    // set up a wrapper
    let contentWrap = document.createElement('div');
    col2Wrapper.appendChild(contentWrap);
    // create the feedback wrapper
    let endFeedback = document.createElement('div');
    endFeedback.classList.add('feedback');
    contentWrap.appendChild(endFeedback)
        // create div to wrap our sorting fun
    let sortWrap = document.createElement('div');
    sortWrap.id = "sort-wrap";
    contentWrap.appendChild(sortWrap);
    // create sortable ul element
    let sortList = document.createElement('ul');
    sortList.id = "sort-drag";
    sortList.classList.add('d-flex', 'flex-wrap', 'justify-content-start', 'list-unstyled', 'sort-spot');
    sortWrap.appendChild(sortList);
    // Get both containers
    let sortContainer = document.querySelectorAll('.sort-spot')
    let answerKey = [];
    let userResponses = [];
    // build sortable items
    pageData.content.draggables.forEach(function(element, index) {
        answerKey.push(index);
        userResponses.push('');
        // create draggable elmements
        let draggable = document.createElement('li');
        // draggable.draggable = true;
        draggable.classList.add('sort-list--item', 'sort-list--item-draggable');
        draggable.id = 'sort-list--item-' + index;
        // build out card
        let dndCard = document.createElement('div');
        dndCard.classList.add('card');
        draggable.appendChild(dndCard);
        // card content
        let dndCardBody = document.createElement('div');
        dndCardBody.classList.add("card-body");
        dndCard.appendChild(dndCardBody);
        // create number
        let dndCardLabel = document.createElement('span');
        dndCardLabel.classList.add('sort-list--item-label', 'badge', 'rounded-pill', 'bg-primary', 'text-white');
        dndCardLabel.innerHTML = index + 1;
        dndCardBody.appendChild(dndCardLabel);
        // add text
        let dndCardText = document.createElement('p');
        dndCardText.classList.add('sort-list--item-text', 'm-0');
        dndCardText.innerHTML = element.content;
        dndCardBody.appendChild(dndCardText);
        // Add draggable
        sortList.appendChild(draggable);
    });
    // add sorting event
    const sortable = new Draggable.Sortable(sortContainer, {
        draggable: '.sort-list--item-draggable'
    });


    // Get all options
    let sortLabels = document.querySelectorAll('.sort-list--item-label');
    $("#sort-drag").randomize(".sort-list--item");
    redoLabels();


    function redoLabels() {
        sortLabels = document.querySelectorAll('.sort-list--item-label');
        sortLabels.forEach(function(label, index) {
            label.innerHTML = index + 1;
            let parent = label.closest(".sort-list--item").id;
            parent = parent.substr(parent.length - 1);
            userResponses[index] = parseInt(parent);
        });
        console.log(answerKey);
        console.log(userResponses);
    }
    // update label
    sortable.on('sortable:stop', function() {
        // Get all options (not crazt about the set time out but it is what it is)
        setTimeout(function() {
            redoLabels();
        }, 100);
    });


    function submitResponse() {
        endFeedback.innerHTML = '';

        if (evaluateAnswers(answerKey, userResponses)) {
            console.log('all correct');
            endFeedback.appendChild(buildFeedback(true, pageData.content.correct, null));
            if (pageData.achievement == true) {
                notifyChallengeCoin(pageData.id, true);
            }
        } else {
            console.log('not all correct');
            endFeedback.appendChild(buildFeedback(false, pageData.content.correct, pageData.content.incorrect));
            if (pageData.achievement == true) {
                notifyChallengeCoin(pageData.id, false);
            }
        }

        submit.disabled = true;
    }
}
/*
 * ------------------------------------------------------------------------
 * Template 17: COL Drag and Drop
 * ------------------------------------------------------------------------
 */
function buildCOLDragDrop(pageData) {
    // what are we working from
    console.log(pageData.content.draggables);
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    let layoutArray = pageData.layout.split("-");
    let col1;
    let col2;
    // assess if its horizontal or veritcal
    if (layoutArray[1] == "left" || layoutArray[1] == "right") {
        // get left column
        col1 = document.getElementById('left-column');
        // get right column
        col2 = document.getElementById('right-column');
    } else {
        // get left column
        col1 = document.getElementById('top-row');
        // get right column
        col2 = document.getElementById('bottom-row');
    }
    // get left column wrapper
    let col1Wrapper = document.getElementById('column-wrapper-1');
    let leadWrap = document.createElement('div');
    leadWrap.classList.add('position-relative');

    col1Wrapper.appendChild(leadWrap);
    // add ementor
    let ementor = new eMentor(pageData.content.ementors[0]);
    leadWrap.appendChild(ementor.build());
    // add in the submit button
    // let submit = createSubmitButton();
    // submit.classList.add('mx-auto', 'my-3');
    // submit.onclick = function(){submitResponse(userSelections, answerKey)};
    // col1Wrapper.appendChild(submit);
    // get right column wrapper
    let col2Wrapper = document.getElementById('column-wrapper-2');
    col2Wrapper.classList.add('flex-column');
    // build question feedback
    let feedback = document.createElement('div');
    feedback.id = 'exercise-feedback';
    feedback.classList.add('w-100');
    col2Wrapper.appendChild(feedback);
    // create div to hold the hot spot
    let hotspot = document.createElement('div');
    hotspot.classList.add('dnd');
    hotspot.id = "hotspot";
    col2Wrapper.appendChild(hotspot);
    // create div to hold the draggables
    let dragspot = document.createElement('div');
    dragspot.classList.add('dnd', 'd-flex', 'flex-wrap');
    dragspot.id = "dragspot";
    leadWrap.appendChild(dragspot);
    // updates
    let hotspot_img = document.createElement('img');
    hotspot_img.classList.add('img-fluid');
    hotspot_img.id = 'hotspot-img';
    hotspot_img.src = pageData.content.hotspot.image.url;
    hotspot_img.alt = pageData.content.hotspot.image.alt;
    hotspot_img.setAttribute('usemap', '#hotspot_map');
    hotspot_img.onload = function() {
        var imgCheck = setInterval(function() { checkImageItems(hotspot_zones, "hotspot-img"); }, 100);
        setTimeout(function() {
            clearInterval(imgCheck);
        }, 1000);
    }
    hotspot.appendChild(hotspot_img);
    // create hotspot array
    let hotspot_zones = [];
    // build hotspots
    pageData.content.hotspot.droppables.forEach(function(element, index) {
        let hotspot_item = document.createElement('div');
        hotspot_item.classList.add('zone', element.shape, 'no-show', 'img-drop-spot');
        hotspot_item.id = 'zone-' + index;

        let dragspot_item = document.createElement('div');
        dragspot_item.classList.add('zone', element.shape, 'draggable-dropzone--occupied', 'no-show', 'img-origin-spot');
        dragspot_item.id = 'origin-' + index;

        // add dropzone number
        hotspot_item.dataset.dropzone = index + 1;
        dragspot_item.dataset.dropzone = index + 1;
        // send coords to array
        hotspot_zones.push(element.coords);
        // append hotspot item to hotspot
        hotspot.appendChild(hotspot_item);
        dragspot.appendChild(dragspot_item);

        let draggable_item = document.createElement('div');
        draggable_item.id = 'draggable-' + index;
        draggable_item.classList.add('draggable', element.shape);
        dragspot_item.appendChild(draggable_item);

        if (pageData.content.hotspot.draggables[index].hasOwnProperty('icon')) {
            draggable_item.classList.add('hotspot-item');
            // add a label for numbers
            let label = document.createElement('div');
            label.classList.add('hotspot-item--label', );
            label.innerHTML = index + 1;
            draggable_item.appendChild(label);
        } else {
            let draggable_img = document.createElement('img');
            draggable_img.src = pageData.content.hotspot.draggables[index].url;
            draggable_img.alt = pageData.content.hotspot.draggables[index].alt;
            // draggable_img.classList.add('icon-select-image')
            draggable_item.appendChild(draggable_img);
        }



        // dragspot.appendChild(draggable_item);

    });

    console.log("zones:");
    console.log(hotspot_zones);
    // eval width and height of all items
    setTimeout(function() {
        checkImageItems(hotspot_zones, "hotspot-img");
        window.onresize = function(event) {
            checkImageItems(hotspot_zones, "hotspot-img");
        };
    }, 100);

    // Get both containers
    let dndContainers = document.querySelectorAll('.dnd');
    console.log(dndContainers)


    const droppable = new Draggable.Droppable(dndContainers, {
        draggable: '.draggable',
        dropzone: '.zone',
        mirror: {
            constrainDimensions: true,
        },
    });

    let droppableOrigin;

    // --- Draggable events --- //
    droppable.on('drag:start', (evt) => {
        droppableOrigin = evt.originalSource.parentNode.dataset.dropzone;
    });

    droppable.on('droppable:dropped', (evt) => {
        feedback.innerHTML = '';
        if (droppableOrigin !== evt.dropzone.dataset.dropzone) {
            evt.cancel();

            feedback.appendChild(buildFeedback(false, pageData.content.correct, pageData.content.feedback));
        } else {
            let addedCount = 0;
            setTimeout(function() {
                // eval if everything is in place
                for (let i = 0; i < hotspot_zones.length; i++) {
                    let currentZone = document.getElementById('zone-' + i);
                    if (currentZone.hasChildNodes()) {
                        addedCount++
                    }
                }
                if (addedCount == hotspot_zones.length) {
                    feedback.appendChild(buildFeedback(true, pageData.content.correct, pageData.content.feedback));
                    if (pageData.achievement == true) {
                        notifyChallengeCoin(pageData.id, true);
                    } else {

                    }

                }
            }, 500);
        }
    });
}
/*
 * ------------------------------------------------------------------------
 * Template 18: COL True False
 * ------------------------------------------------------------------------
 */
function buildCOLTrueFalse(pageData) {
    let qCorrect = null;
    let btnId;
    let attempt = 0;
    // add bg
    addBackgroundImage(pageData.content.background);
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    // get full row
    let fullRow = document.getElementById('column-wrapper-1');
    fullRow.classList.add('full-column');
    // add wrap
    let contentWrap = document.createElement('div');
    fullRow.appendChild(contentWrap);
    // build question card
    let card = document.createElement('div');
    card.classList.add('card', 'question');
    // build question feedback
    let feedback = document.createElement('div');
    feedback.id = 'question-feedback';
    card.appendChild(feedback);
    // add the card header (page title)
    let header = document.createElement('div');
    header.classList.add('card-header', 'question-prompt');
    let headerLabel = document.createElement('div');
    headerLabel.classList.add('question-label', 'text-muted');
    headerLabel.innerHTML = 'Question:';
    header.appendChild(headerLabel);
    let headerText = document.createElement('div');
    headerText.classList.add('question-text');
    headerText.innerHTML = pageData.content.prompt;
    header.appendChild(headerText);
    card.appendChild(header);
    // add the bulk of the content
    let body = document.createElement('div');
    body.id = 'question-body';
    body.classList.add('card-body', 'question-response', 'p-0');
    // add body content
    card.appendChild(body);
    // append to question card to right column
    contentWrap.appendChild(card);
    // get id for card body
    let cardBody = document.getElementById('question-body');
    // wrap the t/f buttons
    let content = document.createElement('div');
    content.classList.add('row', 'wrapperTF');
    // build true btn
    let btnTrue = document.createElement('div');
    btnTrue.classList.add('btnTF', 'col-6');
    btnTrue.id = "btnTrue";
    btnTrue.innerHTML = "<span>" + pageData.content.options[0].text + "</span>";
    content.appendChild(btnTrue);
    // build false btn
    let btnFalse = document.createElement('div');
    btnFalse.classList.add('btnTF', 'col-6');
    btnFalse.id = "btnFalse";
    btnFalse.innerHTML = "<span>" + pageData.content.options[1].text + "</span>";
    content.appendChild(btnFalse);
    btnTrue.onclick = function() {
        btnTrue.classList.add('active');
        btnFalse.classList.remove('active');
    };
    btnFalse.onclick = function() {
        btnFalse.classList.add('active');
        btnTrue.classList.remove('active');
    }
    cardBody.appendChild(content);

    let submit = createSubmitButton();
    submit.classList.add('d-block', 'mx-auto', 'mt-3');
    contentWrap.appendChild(submit);
    submit.onclick = function() { questionResponse() };

    function questionResponse() {
        // eval by using the true btn
        let trueBtn = document.getElementsByClassName("btnTF")[0];
        // check if which button was active
        if (trueBtn.classList.contains('active')) {
            userResponse = 0;
        } else {
            userResponse = 1;
        }
        let result = '';
        // evaluate against the answer key
        if (userResponse == pageData.content.answer) {
            // show correct feedback
            result = true;
        } else {
            // show incorrect feedback
            result = false;
        }
        let feedback = buildFeedback(result, pageData.content.correct, pageData.content.feedback);
        let questionValidation = document.getElementById("question-feedback");
        questionValidation.innerHTML = "";
        questionValidation.appendChild(feedback);
    }


}
/*
 * ------------------------------------------------------------------------
 * Template 19: COL Image Selection
 * ------------------------------------------------------------------------
 */
function buildCOLImageSelect(pageData) {
    let qCorrect = null;
    let attempt = 0;
    // what are we working from
    console.log(pageData.content.draggables);
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    let layoutArray = pageData.layout.split("-");
    let col1;
    let col2;
    // assess if its horizontal or veritcal
    if (layoutArray[1] == "left" || layoutArray[1] == "right") {
        // get left column
        col1 = document.getElementById('left-column');
        // get right column
        col2 = document.getElementById('right-column');
    } else {
        // get left column
        col1 = document.getElementById('top-row');
        // get right column
        col2 = document.getElementById('bottom-row');
    }
    // get left column wrapper
    let col1Wrapper = document.getElementById('column-wrapper-1');
    // add wrap
    let leadWrap = document.createElement('div');
    col1Wrapper.appendChild(leadWrap);
    // add ementor
    let ementor = new eMentor(pageData.content.ementors[0]);
    leadWrap.appendChild(ementor.build());
    // add in the submit button
    let submit = createSubmitButton();
    submit.classList.add('d-block', 'mx-auto', 'my-3');
    submit.onclick = function() { submitResponse(userSelections, answerKey) };
    leadWrap.appendChild(submit);
    // get right column wrapper
    let col2Wrapper = document.getElementById('column-wrapper-2');
    // set up a wrapper
    let contentWrap = document.createElement('div');
    col2Wrapper.appendChild(contentWrap);
    // create the feedback wrapper
    let feedback = document.createElement('div');
    feedback.classList.add('feedback', 'col-feedback');
    contentWrap.appendChild(feedback);
    // create div to wrap our sorting fun
    let imageGrid = document.createElement('div');
    imageGrid.id = "image-select-grid";
    imageGrid.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'flex-wrap');
    contentWrap.appendChild(imageGrid);
    // loop through array and build lures(options)
    pageData.content.options.forEach(function(image, i) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('col-6');
        // add item to grid
        imageGrid.appendChild(gridItem);
        // create button for selection
        let gridButton = document.createElement('button');
        gridButton.type = "button";
        gridButton.classList.add('img-select', 'selection-item');
        gridButton.id = 'img-select-' + i;
        // add button to item
        gridItem.appendChild(gridButton);
        // build image
        let gridImage = document.createElement('img');
        gridImage.classList.add('img-fluid');
        gridImage.src = image.url;
        gridImage.alt = image.alt;
        // add image to button
        gridButton.appendChild(gridImage);
        // add the click event
        gridButton.onclick = function() {
            // remove active class
            $('.img-select.active').removeClass("active");
            // add active class to selected node
            gridButton.classList.add('active');
            // eval if submitted answer is correct
            if (image.answer == true) {
                qCorrect = true;
            } else {
                qCorrect = false;
            }
        }
    });
    // click event for selection
    submit.onclick = function() {
        // check to see if a selection has been made
        if (qCorrect != null) {
            attempt++
        }
        // show feedback
        feedback.innerHTML = "";
        if (attempt > 1 || qCorrect == true) {
            feedback.appendChild(buildFeedback(qCorrect, pageData.content.correct, pageData.content.feedback));
            $('#question-submit').prop("disabled", true);
            showAnswer();
        } else {
            feedback.appendChild(buildFeedback(qCorrect, pageData.content.correct, pageData.content.incorrect));
            // remove active class
            $('.img-select.active').removeClass("active");
            qCorrect = null
        }
    };

    function showAnswer() {
        pageData.content.options.forEach(function(option, o) {
            let qLure = document.getElementById("img-select-" + o);
            qLure.classList.add('submitted');
            // create label
            let feedbackLabel = document.createElement('div');
            feedbackLabel.classList.add('feedback-label');
            // add icon
            let feedbackIcon = document.createElement('div');
            feedbackIcon.classList.add('feedback-icon');
            feedbackLabel.appendChild(feedbackIcon);
            if (option.answer == false) {
                feedbackIcon.classList.add('badge-danger');
                feedbackIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="x-icon" d="M46.7 32L62.5 16.2c1-1 1.5-2.2 1.5-3.7 0-1.4-0.5-2.7-1.5-3.7L55.2 1.5C54.2 0.5 52.9 0 51.5 0c-1.4 0-2.7 0.5-3.7 1.5L32 17.3 16.2 1.5C15.2 0.5 13.9 0 12.5 0c-1.4 0-2.7 0.5-3.7 1.5L1.5 8.8C0.5 9.8 0 11.1 0 12.5c0 1.4 0.5 2.7 1.5 3.7l15.8 15.8L1.5 47.8C0.5 48.8 0 50.1 0 51.5c0 1.4 0.5 2.7 1.5 3.7l7.3 7.3C9.8 63.5 11.1 64 12.5 64c1.4 0 2.7-0.5 3.7-1.5l15.8-15.8 15.8 15.8C48.8 63.5 50.1 64 51.5 64c1.4 0 2.7-0.5 3.7-1.5l7.3-7.3C63.5 54.2 64 52.9 64 51.5c0-1.4-0.5-2.7-1.5-3.7L46.7 32z"/></svg>';
            } else {
                feedbackIcon.classList.add('badge-success');
                feedbackIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="checkmark-icon" d="M62.8 14.2l-5.6-5.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-27.1 27.1L12.4 23.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-5.6 5.6C0.4 30 0 30.9 0 32c0 1.1 0.4 2 1.2 2.8l14.9 14.9 5.6 5.6c0.8 0.8 1.7 1.2 2.8 1.2 1.1 0 2-0.4 2.8-1.2l5.6-5.6 29.9-29.9C63.6 19.1 64 18.2 64 17.1 64 16 63.6 15 62.8 14.2z"/></svg>';
            }
            // add label to image
            qLure.appendChild(feedbackLabel);
        });
    }



}
/*
 * ------------------------------------------------------------------------
 * Template 19.1: COL Image Selection With extra
 * ------------------------------------------------------------------------
 */
function buildCOLImageSelectWithSequence(pageData) {
    let qCorrect = null;
    let attempt = 0;
    // what are we working from
    console.log(pageData);
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    // get full row
    let fullRow = document.getElementById('column-wrapper-1');
    fullRow.classList.add('full-column');
    // build wrapper
    let contentWrap = document.createElement('div');
    contentWrap.id = 'content-wrap';
    fullRow.appendChild(contentWrap);
    // build ementor
    let instructions = buildInstructionBar(pageData.content.instructions);
    // append ementor
    contentWrap.appendChild(instructions);
    // create the feedback wrapper
    let feedback = document.createElement('div');
    feedback.classList.add('feedback', 'col-feedback');
    contentWrap.appendChild(feedback);
    // create div to wrap our sorting fun
    let imageGrid = document.createElement('div');
    imageGrid.id = "image-grid-hotspot";
    imageGrid.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'flex-wrap');
    contentWrap.appendChild(imageGrid);
    let hotspot_zones = [];
    let hotspot_clicks = [];
    // loop through array and build lures(options)
    pageData.content.options.forEach(function(image, i) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('col-6');
        gridItem.id = 'img-hotspot-' + i;
        // add item to grid
        imageGrid.appendChild(gridItem);
        // create div to hold the hot spot
        let hotspot = document.createElement('div');
        hotspot.classList.add('position-relative', 'mb-3')
        hotspot.id = "hotspot-" + i;
        gridItem.appendChild(hotspot);
        let hotspot_img = document.createElement('img');
        hotspot_img.classList.add('img-fluid');
        hotspot_img.id = 'hotspot-img-' + i;
        hotspot_img.src = image.url;
        hotspot_img.alt = image.alt;
        hotspot_img.title = image.alt;
        hotspot_img.onload = function() {
            var imgCheck = setInterval(function() {
                checkMultiImageItems(hotspot_zones[i], 'hotspot-img-' + i, i);
                console.log('adjusting')
            }, 100);
            setTimeout(function() {
                clearInterval(imgCheck);
            }, 1000);
        }
        hotspot.appendChild(hotspot_img);
        // create hotspot array
        hotspot_zones[i] = [];
        hotspot_clicks[i] = [];
        lastHotspotClicked = '';
        // build hotspots
        image.hotspots.forEach(function(element, index) {
            let hotspot_item = document.createElement('button');
            hotspot_item.classList.add('zone', 'hotspot-item', element.shape);
            // add shape class
            hotspot_item.id = "zone-" + i + "-" + index;
            // add click event
            hotspot_item.addEventListener("click", function() {
                feedback.innerHTML = ''
                hotspot_item.classList.add('active');
                if (lastHotspotClicked != i) {
                    $('.hotspot-item').removeClass('active');
                    hotspot_clicks[lastHotspotClicked] = []
                }

                // add logic for correcting status / showing feedback
                if (hotspot_clicks[i].length < 1) {
                    hotspot_clicks[i].push(index);
                    lastHotspotClicked = i;
                    console.log(hotspot_clicks[i]);
                } else {
                    hotspot_clicks[i].push(index);
                    if (evaluateAnswers([0, 1], hotspot_clicks[i])) {
                        feedback.appendChild(buildFeedback(true, 'correct', 'Incorrect, try again.'));
                        hotspot_clicks[i] = [];
                        $('#hotspot-' + i + ' .hotspot-item').removeClass('active').addClass('submitted');
                        // create label
                        let feedbackLabel = document.createElement('div');
                        feedbackLabel.classList.add('feedback-label');
                        // add icon
                        let feedbackIcon = document.createElement('div');
                        feedbackIcon.classList.add('feedback-icon');
                        feedbackLabel.appendChild(feedbackIcon);
                        feedbackIcon.classList.add('badge-success');
                        feedbackIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="checkmark-icon" d="M62.8 14.2l-5.6-5.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-27.1 27.1L12.4 23.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-5.6 5.6C0.4 30 0 30.9 0 32c0 1.1 0.4 2 1.2 2.8l14.9 14.9 5.6 5.6c0.8 0.8 1.7 1.2 2.8 1.2 1.1 0 2-0.4 2.8-1.2l5.6-5.6 29.9-29.9C63.6 19.1 64 18.2 64 17.1 64 16 63.6 15 62.8 14.2z"/></svg>';
                        feedbackLabel.appendChild(feedbackIcon);
                        hotspot.append(feedbackLabel);

                    } else {
                        feedback.appendChild(buildFeedback(false, 'correct', 'Incorrect, try again.'));
                        hotspot_clicks[i] = [];
                    }
                }
            });
            // send coords to array
            hotspot_zones[i].push(element.coords);
            // add a label for numbers
            let label = document.createElement('div');
            label.classList.add('hotspot-item--label');
            // label.innerHTML = index + 1;
            hotspot_item.appendChild(label);
            // append hotspot item to hotspot
            hotspot.appendChild(hotspot_item);
        });
        // eval width and height of all items
        setTimeout(function() {
            checkMultiImageItems(hotspot_zones[i], 'hotspot-img-' + i, i);
            window.onresize = function(event) {
                checkMultiImageItems(hotspot_zones[i], 'hotspot-img-' + i, i);
            };
        }, 200);





    });

    console.log(hotspot_zones);

    function checkMultiImageItems(elements, imageId, imageNum) {
        // quick maths
        let currentWidth = document.getElementById(imageId).offsetWidth;
        let actualWidth = document.getElementById(imageId).naturalWidth;
        // loop through items and resize the elements
        elements.forEach(function(item, index) {
            // get correct zone
            let zone = document.getElementById('zone-' + imageNum + "-" + index);
            let origin = document.getElementById('origin-' + index);
            let button = document.getElementById('button-' + index);
            // position hotspot
            let posX = item[0];
            let posY = item[1];
            let itemWidth = item[2];
            let itemHeight = item[3];
            // get correct percentage
            let correctionVal = currentWidth / actualWidth;
            // update variables
            posX = posX * correctionVal;
            posY = posY * correctionVal;
            itemWidth = itemWidth * correctionVal;
            itemHeight = itemHeight * correctionVal;

            if (zone != null) {
                // define postion
                zone.style.left = posX + 'px';
                zone.style.top = posY + 'px';
                // define height/width
                zone.style.width = itemWidth + 'px';
                zone.style.height = itemHeight + 'px';
            }

            if (origin != null) {
                origin.style.width = itemWidth + 'px';
                origin.style.height = itemHeight + 'px';
            }

            if (button != null) {
                // define postion
                button.style.left = posX + 'px';
                button.style.top = posY + 'px';
                // define height/width
                button.style.width = itemWidth + 'px';
                button.style.height = itemHeight + 'px';
            }
        });
    }
}
/*
 * ------------------------------------------------------------------------
 * Template 19.2: COL Image Selection
 * ------------------------------------------------------------------------
 */
function buildCOLImageDropdown(pageData) {
    let qCorrect = null;
    let attempt = 0;
    // what are we working from
    console.log(pageData);
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    // get full row
    let fullRow = document.getElementById('column-wrapper-1');
    fullRow.classList.add('full-column', 'flex-column');
    // set up a wrapper
    let contentWrap = document.createElement('div');
    fullRow.appendChild(contentWrap);
    // build ementor
    let instructions = buildInstructionBar(pageData.content.instructions);
    // append ementor
    contentWrap.appendChild(instructions);
    // create the feedback wrapper
    let feedback = document.createElement('div');
    feedback.classList.add('feedback', 'col-feedback');
    contentWrap.appendChild(feedback);
    // create div to wrap our sorting fun
    let imageGrid = document.createElement('div');
    imageGrid.id = "image-select-grid";
    imageGrid.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'flex-wrap');
    contentWrap.appendChild(imageGrid);
    userResponses = [];
    answerKey = [];
    // loop through array and build lures(options)
    pageData.content.options.forEach(function(image, i) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('col-6', 'col-lg-4');
        // add item to grid
        imageGrid.appendChild(gridItem);
        // create button for selection
        let gridWrap = document.createElement('div');
        gridWrap.classList.add('position-relative', 'image-dropdown');
        gridWrap.id = 'img-select-' + i;
        // add button to item
        gridItem.appendChild(gridWrap);
        // build image
        let gridImage = document.createElement('img');
        gridImage.classList.add('img-fluid');
        gridImage.src = image.url;
        gridImage.alt = image.alt;
        // add image to button
        gridWrap.appendChild(gridImage);
        // add dropdown
        let dropWrap = document.createElement('div');
        dropWrap.classList.add('form-group');
        gridWrap.appendChild(dropWrap);
        // add select
        let dropDown = document.createElement('select');
        dropDown.classList.add('form-control');
        dropDown.id = "image-dropdown-" + i;
        dropWrap.appendChild(dropDown);
        // add the place holder
        let placeholder = document.createElement('option');
        placeholder.value = "";
        placeholder.disabled = true;
        placeholder.selected = true;
        placeholder.hidden = true;
        placeholder.innerHTML = 'Please choose...'
        dropDown.appendChild(placeholder);
        // add the drop downs
        pageData.content.dropdown.forEach(function(option, o) {
            let optionDD = document.createElement('option');
            optionDD.value = o;
            optionDD.innerHTML = option;
            dropDown.appendChild(optionDD);
        });
        // push to the arrays to set up the selections
        userResponses.push("");
        answerKey.push(image.answer);
        // add the click event
        dropDown.onchange = function() {
            userResponses[i] = parseInt(dropDown.value);

        }
    });
    // add the cubmit button
    let submit = createSubmitButton();
    submit.classList.add('d-block', 'mx-auto', 'my-3');
    submit.onclick = function() { submitResponse(userSelections, answerKey) };
    contentWrap.appendChild(submit);
    // click event for selection

    function submitResponse() {
        // update the attempts
        attempt++
        // show feedback
        feedback.innerHTML = "";
        if (evaluateAnswers(answerKey, userResponses)) {
            console.log('all correct');
            feedback.appendChild(buildFeedback(true, pageData.content.correct, pageData.content.feedback));
            $('#submitBtn').prop("disabled", true);
            showAnswer();
        } else {
            console.log('not all correct');
            if (attempt > 2) {
                feedback.appendChild(buildFeedback(false, pageData.content.correct, pageData.content.feedback));
                $('#submitBtn').prop("disabled", true);
                showAnswer();
            } else {
                feedback.appendChild(buildFeedback(false, pageData.content.correct, pageData.content.incorrect));
            }
        }
    }

    function showAnswer() {
        pageData.content.options.forEach(function(option, o) {
            let ddItem = document.getElementById("img-select-" + o);
            let dd = document.getElementById("image-dropdown-" + o);
            dd.classList.add('submitted');
            // create label
            let feedbackLabel = document.createElement('div');
            feedbackLabel.classList.add('feedback-label');
            // add icon
            let feedbackIcon = document.createElement('div');
            feedbackIcon.classList.add('feedback-icon');
            feedbackLabel.appendChild(feedbackIcon);

            feedbackIcon.classList.add('badge-success');
            feedbackIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="checkmark-icon" d="M62.8 14.2l-5.6-5.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-27.1 27.1L12.4 23.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-5.6 5.6C0.4 30 0 30.9 0 32c0 1.1 0.4 2 1.2 2.8l14.9 14.9 5.6 5.6c0.8 0.8 1.7 1.2 2.8 1.2 1.1 0 2-0.4 2.8-1.2l5.6-5.6 29.9-29.9C63.6 19.1 64 18.2 64 17.1 64 16 63.6 15 62.8 14.2z"/></svg>';
            // add label to image
            ddItem.appendChild(feedbackLabel);
            console.log(dd);
            dd.selectedIndex = option.answer;
        });
    }



}
/*
 * ------------------------------------------------------------------------
 * Template 19.3: COL Image Selection with Extra
 * ------------------------------------------------------------------------
 */
function buildImageCaption(pageData) {
    let qCorrect = null;
    let attempt = 0;
    // what are we working from
    console.log(pageData);
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    // get full row
    let fullRow = document.getElementById('column-wrapper-1');
    fullRow.classList.add('full-column');
    // build wrapper
    let contentWrap = document.createElement('div');
    contentWrap.id = 'content-wrap';
    fullRow.appendChild(contentWrap);
    // build ementor
    let instructions = buildInstructionBar(pageData.content.instructions);
    // append ementor
    contentWrap.appendChild(instructions);
    // create the feedback wrapper
    let feedback = document.createElement('div');
    feedback.classList.add('feedback', 'col-feedback');
    contentWrap.appendChild(feedback);
    // create div to wrap our sorting fun
    let imageGrid = document.createElement('div');
    imageGrid.id = "image-grid-hotspot";
    imageGrid.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'flex-wrap');
    contentWrap.appendChild(imageGrid);
    let hotspot_zones = [];
    let hotspot_clicks = [];
    let times = [];
    // loop through array and build lures(options)
    pageData.content.options.forEach(function(image, i) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('col-6');
        gridItem.id = 'img-hotspot-' + i;
        // add item to grid
        imageGrid.appendChild(gridItem);
        // create div to hold the hot spot
        let hotspot = document.createElement('div');
        hotspot.classList.add('position-relative')
        hotspot.id = "hotspot-" + i;
        gridItem.appendChild(hotspot);
        let hotspot_img = document.createElement('img');
        hotspot_img.classList.add('img-fluid');
        hotspot_img.id = 'hotspot-img-' + i;
        hotspot_img.src = image.url;
        hotspot_img.alt = image.alt;
        hotspot_img.title = image.alt;
        hotspot.appendChild(hotspot_img);
        let audio = document.getElementById('narrationAudio');



        // add the caption
        if (image.hasOwnProperty('caption')) {
            let hotspot_caption = document.createElement('div');
            hotspot_caption.classList.add('d-none', 'hotspot-img-caption');
            hotspot_caption.id = 'hotspot-caption-' + i;
            hotspot_caption.innerHTML = image.caption;
            hotspot.appendChild(hotspot_caption);
            times.push(image.timing)
        }

        audio.addEventListener("timeupdate", syncCaption);

        function syncCaption() {
            if (pageData.id == currentPageId) {
                times.forEach(function(time, t) {
                    if (Math.round(audio.currentTime) == parseInt(time)) {
                        let caption = document.getElementById('hotspot-caption-' + t);
                        if (audio.currentTime < parseInt(time)) {
                            caption.classList.add('d-none');
                        } else {
                            caption.classList.remove('d-none');
                        }
                    }
                })
            }
        }

    });
}
/*
 * ------------------------------------------------------------------------
 * Template 20: COL Image True False
 * ------------------------------------------------------------------------
 */
function buildCOLMatchingSelect(pageData) {
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    let layoutArray = pageData.layout.split("-");
    let col1;
    let col2;
    // assess if its horizontal or veritcal
    if (layoutArray[1] == "left" || layoutArray[1] == "right") {
        // get left column
        col1 = document.getElementById('left-column');
        // get right column
        col2 = document.getElementById('right-column');
    } else {
        // get left column
        col1 = document.getElementById('top-row');
        // get right column
        col2 = document.getElementById('bottom-row');
    }
    // get left column wrapper
    let col1Wrapper = document.getElementById('column-wrapper-1');
    // add wrap
    let leadWrap = document.createElement('div');
    leadWrap.classList.add('position-relative', 'w-100');
    col1Wrapper.appendChild(leadWrap);
    // add ementor
    let ementor = new eMentor(pageData.content.ementors[0]);
    leadWrap.appendChild(ementor.build());
    // add in the submit button
    let submit = createSubmitButton();
    submit.classList.add('mx-auto', 'my-3', 'd-block');
    submit.onclick = function() { submitResponse(answerKey, userSelections) };
    leadWrap.appendChild(submit);
    // get right column wrapper
    let col2Wrapper = document.getElementById('column-wrapper-2');
    // build card container
    let card = document.createElement('div');
    card.classList.add('card', 'question');
    col2Wrapper.appendChild(card);
    // build question feedback
    let feedback = document.createElement('div');
    feedback.id = 'question-feedback';
    card.appendChild(feedback);
    // add the card header (page title)
    let header = buildInstructionBar(pageData.content.instructions);
    header.classList.add('card-header', 'm-0');
    card.appendChild(header);
    // add the bulk of the content
    let body = document.createElement('div');
    body.id = 'question-body';
    body.classList.add('card-body', 'question-response', 'p-0');
    // add body content
    card.appendChild(body);

    userResponses = [];
    answerKey = [];

    // loop through array and build lures(options)
    pageData.content.options.forEach(function(option, o) {
        userResponses.push(false);
        answerKey.push(option.answer);
        // build button
        let lure = document.createElement('div');
        lure.classList.add("statement-listing", 'd-flex');
        // add label
        let label = document.createElement('div');
        label.classList.add('statement-listing--label', 'd-flex', 'align-items-center', 'py-3');
        let x = document.createElement('div');
        x.classList.add('switch-icon');
        x.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="x-icon" d="M46.7 32L62.5 16.2c1-1 1.5-2.2 1.5-3.7 0-1.4-0.5-2.7-1.5-3.7L55.2 1.5C54.2 0.5 52.9 0 51.5 0c-1.4 0-2.7 0.5-3.7 1.5L32 17.3 16.2 1.5C15.2 0.5 13.9 0 12.5 0c-1.4 0-2.7 0.5-3.7 1.5L1.5 8.8C0.5 9.8 0 11.1 0 12.5c0 1.4 0.5 2.7 1.5 3.7l15.8 15.8L1.5 47.8C0.5 48.8 0 50.1 0 51.5c0 1.4 0.5 2.7 1.5 3.7l7.3 7.3C9.8 63.5 11.1 64 12.5 64c1.4 0 2.7-0.5 3.7-1.5l15.8-15.8 15.8 15.8C48.8 63.5 50.1 64 51.5 64c1.4 0 2.7-0.5 3.7-1.5l7.3-7.3C63.5 54.2 64 52.9 64 51.5c0-1.4-0.5-2.7-1.5-3.7L46.7 32z"/></svg>';
        label.appendChild(x);
        let flip = document.createElement('div');
        flip.classList.add('custom-control', 'custom-switch');
        label.appendChild(flip);
        let input = document.createElement('input');
        input.classList.add('custom-control-input');
        input.onclick = function() {
            userResponses[o] = input.checked
            console.log(userResponses);
        }
        input.type = 'checkbox';
        input.id = o + "_match";
        flip.appendChild(input);
        let flipPlus = document.createElement('label');
        flipPlus.classList.add("custom-control-label");
        flipPlus.innerHTML = '';
        flipPlus.htmlFor = o + "_match";
        flip.appendChild(flipPlus);
        let check = document.createElement('div');
        check.classList.add('switch-icon');
        check.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="checkmark-icon" d="M62.8 14.2l-5.6-5.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-27.1 27.1L12.4 23.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-5.6 5.6C0.4 30 0 30.9 0 32c0 1.1 0.4 2 1.2 2.8l14.9 14.9 5.6 5.6c0.8 0.8 1.7 1.2 2.8 1.2 1.1 0 2-0.4 2.8-1.2l5.6-5.6 29.9-29.9C63.6 19.1 64 18.2 64 17.1 64 16 63.6 15 62.8 14.2z"/></svg>';
        label.appendChild(check);
        lure.appendChild(label);
        // add text
        let lureText = document.createElement('div');
        lureText.classList.add('statement-listing--text', 'flex-grow-1', 'p-3');
        lureText.innerHTML = option.text;
        lure.appendChild(lureText);
        // add lure to content
        body.appendChild(lure);
    });

    let attempt = 0;

    function submitResponse() {
        // update the attempts
        attempt++
        // show feedback
        feedback.innerHTML = "";
        if (evaluateAnswers(answerKey, userResponses)) {
            console.log('all correct');
            feedback.appendChild(buildFeedback(true, pageData.content.correct, pageData.content.feedback));
            $('#submitBtn').prop("disabled", true);
            showAnswer();
        } else {
            console.log('not all correct');
            if (attempt > 1) {
                feedback.appendChild(buildFeedback(false, pageData.content.correct, pageData.content.feedback));
                $('#submitBtn').prop("disabled", true);
                showAnswer();
            } else {
                feedback.appendChild(buildFeedback(false, pageData.content.correct, pageData.content.incorrect));
            }
        }
    }

    function showAnswer() {
        let statementNodes = document.getElementsByClassName('custom-control-input');
        console.log(statementNodes);
        Array.from(statementNodes).forEach(function(statement, s) {

            statement.checked = answerKey[s];
        });
    }
}
/*
 * -------------------------------------------------------------------------------------------------------- Original Slide Show Here -----------------------|
 * Template 21: Slide Show with questions 
 * ---------------------------------------------------------------------------------------------------------------------------------------------------------|
 */
function buildSlideShowQuestions(pageData) {
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    // get full row
    let fullRow = document.getElementById('column-wrapper-1');
    fullRow.classList.add('full-column');
    // create Image carousel
    let carousel = document.createElement('div');
    carousel.id = 'image-carousel';
    carousel.classList.add('carousel', 'slide', 'mx-auto');
    carousel.dataset.interval = 'false';
    carousel.dataset.ride = "false";
    carousel.dataset.wrap = 'true';
    fullRow.appendChild(carousel);
    // add inner container
    let inner = document.createElement('div');
    inner.classList.add('carousel-inner');
    carousel.appendChild(inner);
    // Create carousel controls
    let prev = document.createElement('a');
    prev.href = '#image-carousel';
    prev.role = 'button';
    prev.classList.add('carousel-control-prev');
    prev.dataset.slide = "prev";
    carousel.appendChild(prev);
    // add both spans
    let prev_icon = document.createElement('span');
    prev_icon.classList.add('carousel-control-prev-icon');
    prev_icon.setAttribute("aria-hidden", "true");
    prev.appendChild(prev_icon);
    let prev_label = document.createElement('span');
    prev_label.classList.add('sr-only');
    prev_label.innerHTML = 'Previous';
    prev.appendChild(prev_label);
    // Create carousel controls
    let next = document.createElement('a');
    next.href = '#image-carousel';
    next.role = 'button';
    next.classList.add('carousel-control-next');
    next.dataset.slide = "next";
    carousel.appendChild(next);
    // add both spans
    let next_icon = document.createElement('span');
    next_icon.classList.add('carousel-control-next-icon');
    next_icon.setAttribute("aria-hidden", "true");
    next.appendChild(next_icon);
    let next_label = document.createElement('span');
    next_label.classList.add('sr-only');
    next_label.innerHTML = 'Next';
    next.appendChild(next_label);
    // add slides
    pageData.content.slides.forEach(function(item, i) {
        // build slide
        let slide = document.createElement('div');
        slide.classList.add("carousel-item");
        if (i == 0) {
            slide.classList.add("active");
        }
        // add image
        let slide_img = document.createElement('img');
        slide_img.classList.add('d-block', 'w-100');
        slide_img.src = item.url;
        slide_img.alt = item.alt;
        // add image to slide
        slide.appendChild(slide_img);
        // add caption or question
        if (item.content[0].tag != 'question') {
            // add question
            let slide_text = document.createElement('div');
            slide_text.id = "slide-text-" + i
            slide_text.classList.add("carousel-caption", "d-none", "d-md-block");
            // add title
            // let text_slide_title = document.createElement('h6');
            // text_slide_title.innerHTML = item.title;
            // slide_text.appendChild(text_slide_title);
            // add content
            let text_slide_body = buildTextContent(item.content);
            slide_text.appendChild(text_slide_body);
            // add caption to slide
            slide.appendChild(slide_text);
        } else {
            let question = buildQuestion(item.content[0].content);
            slide.appendChild(question);


            // add submit button
            let submit = createSubmitButton();
            submit.classList.add('d-block', 'mx-auto', 'my-3');
            question.appendChild(submit);



            submit.onclick = function() {
                var listgroup = question.getElementsByClassName("question-option");

                console.log(listgroup);

                let result = false;

                for (var index = 0; index < listgroup.length; ++index) {
                    if (listgroup[index].classList.contains('active') &&
                        listgroup[index].id == item.content[0].content.answers) {
                        result = true;
                    }
                }
                let feedback = buildFeedback(result, "Correct!", "Incorrect.");

                let questionValidation = slide.getElementsByClassName("question-feedback")[0];
                questionValidation.innerHTML = '';
                questionValidation.appendChild(feedback);
            }
        }

        // add slide to carousel inner
        inner.appendChild(slide);
    });

    let imgSlides = document.getElementById('image-carousel');
    // sync caoursels
    $('#image-carousel').on('slide.bs.carousel', function(event) {
        var to = $(event.relatedTarget).index();
        $('#text-carousel').carousel(to);
    });


    // let qCorrect = null;
    // let btnId;
    // let attempt = 0;
    // // add container
    // let container = document.createElement('div');
    // container.classList.add('container-fluid');
    // // add columns
    // let columns = buildColumns("third", pageData.image);
    // container.appendChild(columns);
    // // add html to the page
    // $('#page_frame').html(container);
    // // add content
    // let content = buildQuestion(pageData);
    // // append content to right column
    // $('#right-column').html(content);
    // if (userResponses[pageData.quiz] === "" || pageData.quiz == undefined){
    //     // click event for selection
    //     $('.questionDistractor').click(function(){
    //         // if button is not active evaluate
    //         if (!$(this).hasClass('active')){
    //             // remove active class
    //             $('.questionDistractor.active').removeClass("active");
    //             // add class to current
    //             $(this).addClass("active");
    //             // evaluate selection
    //             btnId = $(this).attr('id');
    //             // eval if submitted answer is correct
    //             if (btnId[0] == pageData.content.answers[0]){
    //                 qCorrect = true;
    //             } else {
    //                 qCorrect = false;
    //             }
    //         }
    //     });
    // } else {
    //     $('.question').addClass('submitted');
    //     // remove click event from lure
    //     $('.questionDistractor').unbind('click');
    //     var questionOptions = document.getElementsByClassName('questionDistractor');
    //     var activeOption = questionOptions[userResponses[pageData.quiz]];
    //     activeOption.classList.add('active');
    //     if (review){
    //         // add review class to question
    //         $('.question').addClass('review');
    //     }
    // }
    // // click event for selection
    // $('#submitBtn').click(function(){
    //     // show feedback
    //     //buildFeedback(qCorrect, pageData.content.correct, pageData.content.incorrect, pageData.quiz);
    //     // additional logic for quiz
    //     if (pageData.quiz != undefined && qCorrect != null){
    //         // update attempt
    //         attempt++
    //         // update score array
    //         if (qCorrect == true){
    //             userScore[pageData.quiz] = 1;
    //         } else {
    //             userScore[pageData.quiz] = 0;
    //         }
    //         // store user response
    //         userResponses[pageData.quiz] = parseInt(btnId[0]);
    //         // progress to next page
    //         if (attempt > 1 || qCorrect){
    //             if(qCorrect == false) {
    //                 buildFeedback(qCorrect, pageData.content.correct, "Incorrect!", pageData.quiz);
    //             }
    //             if(qCorrect){
    //                 buildFeedback(qCorrect, pageData.content.correct, pageData.content.incorrect, pageData.quiz);
    //             }
    //             setTimeout(function(){ nextPage(pageData.id);; }, 1000);
    //         } else {
    //             buildFeedback(qCorrect, pageData.content.correct, pageData.content.incorrect, pageData.quiz);
    //         }
    //     }

    //     // attempts for COL KLR
    //     if (pageData.quiz == undefined){

    //         // update attempt
    //         attempt++
    //         // store user response
    //         //userResponses[pageData.quiz] = parseInt(btnId[0]); */
    //         // progress to next page
    //         if (attempt > 1 || qCorrect){
    //             if(qCorrect == false) {
    //                 buildFeedback(qCorrect, pageData.content.correct, "Incorrect!", pageData.quiz);
    //             }
    //             if(qCorrect){
    //                 buildFeedback(qCorrect, pageData.content.correct, pageData.content.incorrect, pageData.quiz);
    //             }
    //             setTimeout(function(){ nextPage(pageData.id);; }, 1000);
    //         } else {
    //             buildFeedback(qCorrect, pageData.content.correct, pageData.content.incorrect, pageData.quiz);
    //         }
    //     }

    // });
    // // review
    // if (review){
    //     if (userScore[pageData.quiz] === 1){
    //         qCorrect = true;
    //     } else if (userScore[pageData.quiz] === 0){
    //         qCorrect = false;
    //     } else if (userScore[pageData.quiz] === ""){
    //         qCorrect = null;
    //     }
    //     buildFeedback(qCorrect, pageData.content.correct, pageData.content.incorrect, pageData.quiz);
    // }
}
/*
 * ------------------------------------------------------------------------
 * Template 21.1: Slide Show with questions 
 * ------------------------------------------------------------------------
 */
function buildTrueFalse(pageData) {
    // what are we working from
    console.log(pageData);
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    let layoutArray = pageData.layout.split("-");
    let col1;
    let col2;
    // assess if its horizontal or veritcal
    if (layoutArray[1] == "left" || layoutArray[1] == "right") {
        // get left column
        col1 = document.getElementById('left-column');
        // get right column
        col2 = document.getElementById('right-column');
    } else {
        // get left column
        col1 = document.getElementById('top-row');
        // get right column
        col2 = document.getElementById('bottom-row');
    }
    // get left column wrapper
    let col1Wrapper = document.getElementById('column-wrapper-1');
    // content wrap
    let content = document.createElement('div');
    content.id = 'content-wrap';
    content.classList.add('w-100');
    col1Wrapper.appendChild(content);
    // build out the carousel
    let carousel = document.createElement('div');
    carousel.id = 'question-carousel';
    carousel.classList.add('carousel', 'slide', 'w-100', 'd-block', 'carousel-fade');
    carousel.dataset.interval = 'false';
    carousel.dataset.ride = "false";
    carousel.dataset.wrap = 'true';
    content.appendChild(carousel);
    // add inner container
    let inner = document.createElement('div');
    inner.classList.add('carousel-inner');
    carousel.appendChild(inner);
    // setup array for slides to be randomized
    let questions = pageData.content.questions;
    let slides = [];
    let userResponses = [];
    let answerKey = [];
    // add content
    questions.forEach(function(element, index) {
        // build slide
        let slide = document.createElement('div');
        slide.classList.add("carousel-item");
        slide.id = 'question-' + index;
        // build question card
        let question = buildQuestion(element);
        question.classList.add('w-100');
        // update question tag
        let qLabel = question.childNodes[1].childNodes[0];
        qLabel.innerHTML = element.label;

        slide.appendChild(question);
        // add slide to slide array
        slides.push(slide);
        // push answer and stub in user responses
        answerKey.push(element.answer);
        userResponses.push("");
    });
    // add slide to carousel inner
    slides.forEach(function(item, index) {
        if (index == 0) {
            item.classList.add("active");
        }
        inner.appendChild(item);
    });
    // add submit button
    let submit = createSubmitButton();
    submit.classList.add('d-block', 'mx-auto', 'my-3');
    content.appendChild(submit);
    submit.onclick = function() { questionResponse() };
    // next btn
    let next = document.createElement('button');
    next.id = 'nextBtn';
    next.type = 'button';
    next.classList.add('btn', 'btn-primary', 'd-none', 'mx-auto', 'mt-3');
    next.innerHTML = 'Next';
    next.onclick = function() { nextQuestion() };
    content.appendChild(next);
    // get right column wrapper
    let col2Wrapper = document.getElementById('column-wrapper-2');
    // set up a wrapper
    let contentWrap = document.createElement('div');
    col2Wrapper.appendChild(contentWrap);
    // create the feedback wrapper
    let endFeedback = document.createElement('div');
    endFeedback.classList.add('feedback', 'col-feedback');
    contentWrap.appendChild(endFeedback)
        // create div to hold the hot spot
    let graphic = document.createElement('div');
    // hotspot.classList.add('w-100')
    graphic.id = "hotspot";
    contentWrap.appendChild(graphic);
    // graphic image
    let graphic_img = document.createElement('img');
    graphic_img.classList.add('img-fluid');
    graphic_img.id = 'hotspot-img';
    graphic_img.src = pageData.content.image.url;
    graphic_img.alt = pageData.content.image.alt;
    graphic_img.title = pageData.content.image.alt;
    graphic_img.onload = function() {
        var imgCheck = setInterval(function() {
            checkImageItems(graphic_zones, "hotspot-img");
            console.log('adjusting')
        }, 100);
        setTimeout(function() {
            clearInterval(imgCheck);
        }, 1000);
    }
    graphic.appendChild(graphic_img);
    // create graphic array
    let graphic_zones = [];
    // build graphics
    pageData.content.questions.forEach(function(element, index) {
        let graphic_item = document.createElement('button');
        graphic_item.classList.add('zone', 'hotspot-item', element.shape);
        // add shape class
        graphic_item.id = "zone-" + index;
        // send coords to array
        graphic_zones.push(element.coords);
        // add a label for numbers
        let label = document.createElement('div');
        label.classList.add('hotspot-item--label');
        label.innerHTML = index + 1;
        graphic_item.appendChild(label);
        // append graphic item to graphic
        graphic.appendChild(graphic_item);
    });
    // eval width and height of all items
    setTimeout(function() {
        checkImageItems(graphic_zones, "hotspot-img");
        window.onresize = function(event) {
            checkImageItems(graphic_zones, "hotspot-img");
        };
    }, 200);


    question = 0;
    var correctCount = 0;

    function nextQuestion() {
        if (question != 0) {
            $('#question-carousel').carousel('next');
            submit.classList.add('d-block');
            submit.classList.remove('d-none');
            next.classList.remove('d-block');
            next.classList.add('d-none');
        }
    }

    function questionResponse() {
        // eval by using the true btn
        let trueBtn = document.getElementById(slides[question].id).getElementsByClassName("btnTF")[0];
        // find icon
        let currentZone = document.getElementsByClassName("hotspot-item--label")[question];
        // create label
        let feedbackLabel = document.createElement('div');
        feedbackLabel.classList.add('feedback-label');
        // add icon
        let feedbackIcon = document.createElement('div');
        feedbackIcon.classList.add('feedback-icon');
        feedbackLabel.appendChild(feedbackIcon);
        // check if which button was active
        if (trueBtn.classList.contains('active')) {
            userResponses[question] = 1;

        } else {
            userResponses[question] = 0;
        }
        let result = '';
        // evaluate against the answer key
        if (userResponses[question] == answerKey[question]) {
            // show correct feedback
            result = true;
            correctCount++
            feedbackIcon.classList.add('badge-success');
            feedbackIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="checkmark-icon" d="M62.8 14.2l-5.6-5.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-27.1 27.1L12.4 23.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-5.6 5.6C0.4 30 0 30.9 0 32c0 1.1 0.4 2 1.2 2.8l14.9 14.9 5.6 5.6c0.8 0.8 1.7 1.2 2.8 1.2 1.1 0 2-0.4 2.8-1.2l5.6-5.6 29.9-29.9C63.6 19.1 64 18.2 64 17.1 64 16 63.6 15 62.8 14.2z"/></svg>';
        } else {
            // show incorrect feedback
            result = false;
            feedbackIcon.classList.add('badge-danger');
            feedbackIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="x-icon" d="M46.7 32L62.5 16.2c1-1 1.5-2.2 1.5-3.7 0-1.4-0.5-2.7-1.5-3.7L55.2 1.5C54.2 0.5 52.9 0 51.5 0c-1.4 0-2.7 0.5-3.7 1.5L32 17.3 16.2 1.5C15.2 0.5 13.9 0 12.5 0c-1.4 0-2.7 0.5-3.7 1.5L1.5 8.8C0.5 9.8 0 11.1 0 12.5c0 1.4 0.5 2.7 1.5 3.7l15.8 15.8L1.5 47.8C0.5 48.8 0 50.1 0 51.5c0 1.4 0.5 2.7 1.5 3.7l7.3 7.3C9.8 63.5 11.1 64 12.5 64c1.4 0 2.7-0.5 3.7-1.5l15.8-15.8 15.8 15.8C48.8 63.5 50.1 64 51.5 64c1.4 0 2.7-0.5 3.7-1.5l7.3-7.3C63.5 54.2 64 52.9 64 51.5c0-1.4-0.5-2.7-1.5-3.7L46.7 32z"/></svg>';
        }
        // add label to image
        currentZone.appendChild(feedbackLabel);
        let feedback = buildFeedback(result, pageData.content.correct, pageData.content.incorrect);
        let questionValidation = document.getElementById(slides[question].id).getElementsByClassName("question-feedback")[0];
        questionValidation.appendChild(feedback);
        question++;

        if (question != slides.length) {
            submit.classList.remove('d-block');
            submit.classList.add('d-none');
            next.classList.add('d-block');
            next.classList.remove('d-none');
        } else {
            if (evaluateAnswers(answerKey, userResponses)) {
                console.log('all correct');
                questionValidation.innerHTML = '';
                let feedback = buildFeedback(true, pageData.content.correct + " You got " + correctCount + " out of " + document.getElementsByClassName("hotspot-item--label").length + " right.", null);
                endFeedback.appendChild(feedback);
                if (pageData.achievement == true) {
                    notifyChallengeCoin(pageData.id, true);
                } else {

                }
            } else {
                console.log('not all correct');
                let feedback = buildFeedback(false, null, pageData.content.correct + " You got " + correctCount + " out of " + document.getElementsByClassName("hotspot-item--label").length + " right.");
                endFeedback.appendChild(feedback);
                if (pageData.achievement == true) {
                    notifyChallengeCoin(pageData.id, false);
                } else {

                }
            }
        }
    }

}
/*
 * ------------------------------------------------------------------------
 * Template 21.2: Slide Show with questions
 * ------------------------------------------------------------------------
 */
function buildMC(pageData) {
    // what are we working from
    console.log(pageData);
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    let layoutArray = pageData.layout.split("-");
    let col1;
    let col2;
    // assess if its horizontal or veritcal
    if (layoutArray[1] == "left" || layoutArray[1] == "right") {
        // get left column
        col1 = document.getElementById('left-column');
        // get right column
        col2 = document.getElementById('right-column');
    } else {
        // get left column
        col1 = document.getElementById('top-row');
        // get right column
        col2 = document.getElementById('bottom-row');
    }
    // get left column wrapper
    let col1Wrapper = document.getElementById('column-wrapper-1');
    // content wrap
    let content = document.createElement('div');
    content.id = 'content-wrap';
    content.classList.add('w-100');
    col1Wrapper.appendChild(content);
    // build out the carousel
    let carousel = document.createElement('div');
    carousel.id = 'question-carousel';
    carousel.classList.add('carousel', 'slide', 'w-100', 'd-block', 'carousel-fade');
    carousel.dataset.interval = 'false';
    carousel.dataset.ride = "false";
    carousel.dataset.wrap = 'true';
    content.appendChild(carousel);
    // add inner container
    let inner = document.createElement('div');
    inner.classList.add('carousel-inner');
    carousel.appendChild(inner);
    // setup array for slides to be randomized
    let questions = pageData.content.questions;
    let slides = [];
    let userResponses = [];
    let answerKey = [];
    // add content
    questions.forEach(function(element, index) {
        // build slide
        let slide = document.createElement('div');
        slide.classList.add("carousel-item");
        slide.id = 'question-' + index;
        // build question card
        let question = buildQuestion(element);
        question.classList.add('w-100', 'mc-sequence');
        // update question tag
        let qLabel = question.childNodes[1].childNodes[0];
        qLabel.innerHTML = element.label;
        // get the lures
        let qLures = question.childNodes[2].childNodes[0].childNodes;
        // add a click event to them
        qLures.forEach(function(lure, l) {
            lure.onclick = function() {
                if (l == element.answers[0]) {
                    qCorrect = true;
                } else {
                    qCorrect = false;
                }

                userResponses[index] = l;
                console.log(userResponses);
            }
        })
        slide.appendChild(question);
        // add slide to slide array
        slides.push(slide);
        // push answer and stub in user responses
        answerKey.push(element.answers[0]);
        userResponses.push("");
    });
    // add slide to carousel inner
    slides.forEach(function(item, index) {
        if (index == 0) {
            item.classList.add("active");
        }
        inner.appendChild(item);
    });
    // add submit button
    let submit = createSubmitButton();
    submit.classList.add('d-block', 'mx-auto', 'my-3');
    content.appendChild(submit);
    submit.onclick = function() { questionResponse() };
    // next btn
    let next = document.createElement('button');
    next.id = 'nextBtn';
    next.type = 'button';
    next.classList.add('btn', 'btn-primary', 'd-none', 'mx-auto', 'mt-3');
    next.innerHTML = 'Next';
    next.onclick = function() { nextQuestion() };
    content.appendChild(next);
    // get right column wrapper
    let col2Wrapper = document.getElementById('column-wrapper-2');
    // set up a wrapper
    let contentWrap = document.createElement('div');
    col2Wrapper.appendChild(contentWrap);
    // create the feedback wrapper
    let endFeedback = document.createElement('div');
    endFeedback.classList.add('feedback');
    contentWrap.appendChild(endFeedback)
        // create div to hold the hot spot
    let graphic = document.createElement('div');
    // hotspot.classList.add('w-100')
    graphic.id = "hotspot";
    contentWrap.appendChild(graphic);
    // graphic image
    let graphic_img = document.createElement('img');
    graphic_img.classList.add('img-fluid');
    graphic_img.id = 'hotspot-img';
    graphic_img.src = pageData.content.image.url;
    graphic_img.alt = pageData.content.image.alt;
    graphic_img.title = pageData.content.image.alt;
    graphic.appendChild(graphic_img);



    question = 0;
    var correctCount = 0;

    function nextQuestion() {
        if (question != 0) {
            $('#question-carousel').carousel('next');
            submit.classList.add('d-block');
            submit.classList.remove('d-none');
            next.classList.remove('d-block');
            next.classList.add('d-none');
        }
    }

    function showAnswer() {
        pageData.content.options.forEach(function(option, o) {
            let qLure = document.getElementById(o + "_mc");
            if (option.answer == false) {
                qLure.firstChild.classList.add('bg-danger');
                qLure.firstChild.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="x-icon" d="M46.7 32L62.5 16.2c1-1 1.5-2.2 1.5-3.7 0-1.4-0.5-2.7-1.5-3.7L55.2 1.5C54.2 0.5 52.9 0 51.5 0c-1.4 0-2.7 0.5-3.7 1.5L32 17.3 16.2 1.5C15.2 0.5 13.9 0 12.5 0c-1.4 0-2.7 0.5-3.7 1.5L1.5 8.8C0.5 9.8 0 11.1 0 12.5c0 1.4 0.5 2.7 1.5 3.7l15.8 15.8L1.5 47.8C0.5 48.8 0 50.1 0 51.5c0 1.4 0.5 2.7 1.5 3.7l7.3 7.3C9.8 63.5 11.1 64 12.5 64c1.4 0 2.7-0.5 3.7-1.5l15.8-15.8 15.8 15.8C48.8 63.5 50.1 64 51.5 64c1.4 0 2.7-0.5 3.7-1.5l7.3-7.3C63.5 54.2 64 52.9 64 51.5c0-1.4-0.5-2.7-1.5-3.7L46.7 32z"/></svg>';
            } else {
                qLure.firstChild.classList.add('bg-success');
                qLure.firstChild.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="checkmark-icon" d="M62.8 14.2l-5.6-5.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-27.1 27.1L12.4 23.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-5.6 5.6C0.4 30 0 30.9 0 32c0 1.1 0.4 2 1.2 2.8l14.9 14.9 5.6 5.6c0.8 0.8 1.7 1.2 2.8 1.2 1.1 0 2-0.4 2.8-1.2l5.6-5.6 29.9-29.9C63.6 19.1 64 18.2 64 17.1 64 16 63.6 15 62.8 14.2z"/></svg>';
            }

        });
    }


    function questionResponse() {
        // evaluate against the answer key
        if (userResponses[question] == answerKey[question]) {
            // show correct feedback
            result = true;
            correctCount++
        } else {
            // show incorrect feedback
            result = false;
        }
        let feedback = buildFeedback(result, pageData.content.correct, pageData.content.incorrect);
        let activeQuestion = document.getElementById(slides[question].id).getElementsByClassName("question")[0];
        activeQuestion.classList.add('submitted');
        let questionValidation = document.getElementById(slides[question].id).getElementsByClassName("question-feedback")[0];
        questionValidation.appendChild(feedback);
        question++;

        if (question != slides.length) {
            submit.classList.remove('d-block');
            submit.classList.add('d-none');
            next.classList.add('d-block');
            next.classList.remove('d-none');
        } else {
            if (evaluateAnswers(answerKey, userResponses)) {
                console.log('all correct');
                questionValidation.innerHTML = '';
                let feedback = buildFeedback(true, pageData.content.correct + " You got " + correctCount + " out of " + document.getElementsByClassName("question").length + " right.", null);
                endFeedback.appendChild(feedback);
                if (pageData.achievement == true) {
                    notifyChallengeCoin(pageData.id, true);
                } else {

                }
            } else {
                console.log('not all correct');
                let feedback = buildFeedback(false, null, pageData.content.correct + " You got " + correctCount + " out of " + document.getElementsByClassName("question").length + " right.");
                endFeedback.appendChild(feedback);
                if (pageData.achievement == true) {
                    notifyChallengeCoin(pageData.id, false);
                } else {

                }
            }
        }
    }

}

 /* ------------------------------------------------------------------------
 * Template 21.01: Empty Content
 * ------------------------------------------------------------------------
 */
function buildEmptyContent(pageData) {
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    /* page.appendChild(layout);
    // get full row
    let fullRow = document.getElementById('column-wrapper-1');
    fullRow.classList.add('full-column'); */
	
	// animation container / dimensions
	let animationCont = document.createElement('div');
	animationCont.id = "animate-container";
	animationCont.style.width = "1500px";
	animationCont.style.height = "825px";
	animationCont.classList.add('animation-in');
	animationCont.classList.add('ani-cont-bg');
	animationCont.style.marginLeft = "10%";
	
	// adding video container element
	let vidWrapper = document.createElement('div');
	vidWrapper.id = "vDemoWrapper";
	//vidwrapper.classList.add('fade');
	
	// set player to HTML page
	let videoElement = document.createElement("video");
	videoElement.setAttribute("id", "videoDemo1");
	videoElement.setAttribute("playsinline", "");
	videoElement.setAttribute("muted", "");
	videoElement.setAttribute("autoplay", "");
	videoElement.setAttribute("width", "1500px");
	videoElement.play();
	
	setTimeout(function(){
		videoElement.style.opacity = 0;
	}, 15000);
	
	// video input code to page
	let sourceMP4 = document.createElement("source"); 
	sourceMP4.type = "video/mp4";
	sourceMP4.src = "assets/media/clouds.mp4";
	
	let innerContent = document.createElement('div');
	innerContent.id = "aniContentInfo";
	innerContent.classList.add('inner-cont');
	innerContent.classList.add('animation-fadein');
	innerContent.classList.add('col-4');
	innerContent.classList.add('float-left');
	innerContent.innerHTML = "<h2>test test test test test</h2>";
	
	let continueBtn = document.createElement('BUTTON');
	continueBtn.id = "continue-btn1";
	continueBtn.classList.add('btn-primary');
	continueBtn.innerHTML = "CONTINUE";
	
	continueBtn.addEventListener("click", userProgression);
	
	function userProgression(e){
		innerContent.classList.remove('animation-fadein');
		innerContent.classList.add('animation-fadeout');
		
		videoElement.style.opacity = 1;
		setTimeout(function(){
			let containerAnime = document.getElementById('animate-container');
			containerAnime.classList.remove('animation-in');
			containerAnime.classList.add('animation-out');
			containerAnime.classList.add('r-100');
		}, 3000);
	};
	
	// assembly the page by adding the HTML Elements
	page.appendChild(animationCont);
	page.appendChild(innerContent);
	innerContent.appendChild(continueBtn);
	animationCont.appendChild(vidWrapper);
	vidWrapper.appendChild(videoElement);
	videoElement.appendChild(sourceMP4);
	
	window.addEventListener('load', async () => {
	  let video = document.querySelector('video[muted][autoplay]');
	  try {
		await video.play();
	  } catch (err) {
		video.controls = true;
	  }
	});
	
	
	/* Disable fullscreen option using CSS
	video::-webkit-media-controls-fullscreen-button {
		display: none;
	} */
	
    
}



/*
 * ------------------------------------------------------------------------
 * Template 22: Summary 
 * ------------------------------------------------------------------------
 */
function buildSummary(pageData) {
    // build the layout
    let layout = buildColumns(pageData.layout);
    // add bg
    addBackgroundImage(pageData.content.background);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    // get left column
    let leftCol = document.getElementById('column-wrapper-1');
    // add the ementor
    let ementor = new eMentor(pageData.content.ementors[0]);
    leftCol.appendChild(ementor.buildTimed());
    // get right column
    let rightCol = document.getElementById('column-wrapper-2');
    rightCol.classList.add('summary-content', 'justify-content-center');
    // add list group
    branchList = document.createElement('div');
    branchList.classList.add('list-group');
    branchList.id = 'summary-list';
    rightCol.appendChild(branchList);
    // Add introduction text
    let instruction = buildInstructionCard("Lesson Summary:");
    branchList.appendChild(instruction);
    // build card
    let card = buildContentCard(pageData.content.achievements, false);
    branchList.appendChild(card);
    // get achievements
    let cardBody = card.childNodes[0];
    let achivementWrap = document.createElement('div');
    achivementWrap.classList.add('d-flex', 'flex-wrap');
    cardBody.appendChild(achivementWrap);
    let coinTiming = 0
        // decide the status and print it out
    Object.keys(achievements).every(function(reward) {
        // build out the coins
        let coinIcon = document.createElement('div');
        coinIcon.classList.add('achievement', 'animate__animated', 'animate__fadeIn');
        coinIcon.style.animationDelay = coinTiming + 's';
        // up the coinTiming to stagger
        coinTiming = coinTiming + 0.2;
        if (achievements[reward] == 1) {
            coinIcon.classList.add('complete');
        }
        let coin = document.createElement('img');
        coin.classList.add('challenge-coin', 'd-block', 'mx-auto', 'w-100');
        coin.src = "assets/media/images/icons/Icon_ChallengeCoin.png";
        coin.alt = 'Challenge Coin';
        coinIcon.append(coin);
        achivementWrap.appendChild(coinIcon);
        // keep the loop going
        return true
    });
    // build card
    let card2 = buildContentCard(pageData.content.completed_content.text, false);
    card2.classList.add('mt-1')
    branchList.appendChild(card2);
    // get achievements
    let card2Body = card2.childNodes[0];
    let objWrap = document.createElement('div');
    objWrap.classList.add('summary-objectives', 'list-group', 'p-0');
    objWrap.id = 'branching-list';
    branchList.appendChild(objWrap);
    // objectives
    let objTiming = 0
    pageData.content.completed_content.tasks.forEach(function(item, i) {
        // create a button
        let task = document.createElement('div');
        task.classList.add('list-group-item', 'btn-block', 'd-flex', 'align-items-center', 'animate__animated', 'animate__fadeIn');
        task.style.transform = 'none';
        task.style.animationDelay = objTiming + 's';
        // up the timing to stagger
        objTiming = objTiming + 0.2;


        let status = document.createElement('div');
        status.classList.add('branch-status');

        task.classList.add('complete');
        let completeIcon = document.createElement('div');
        completeIcon.classList.add('bg-success');
        completeIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" focusable="false" viewBox="0 0 64 64"><path class="checkmark-icon" d="M62.8 14.2l-5.6-5.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-27.1 27.1L12.4 23.6c-0.8-0.8-1.7-1.2-2.8-1.2 -1.1 0-2 0.4-2.8 1.2l-5.6 5.6C0.4 30 0 30.9 0 32c0 1.1 0.4 2 1.2 2.8l14.9 14.9 5.6 5.6c0.8 0.8 1.7 1.2 2.8 1.2 1.1 0 2-0.4 2.8-1.2l5.6-5.6 29.9-29.9C63.6 19.1 64 18.2 64 17.1 64 16 63.6 15 62.8 14.2z"/></svg>'
        status.appendChild(completeIcon);

        // default
        task.appendChild(status);

        let textWrap = document.createElement('div');
        textWrap.classList.add('branch-text')
        textWrap.innerHTML = item.text;
        task.appendChild(textWrap);


        objWrap.appendChild(task);
    });











}
/*
 * ------------------------------------------------------------------------
 * Template 23: PE
 * ------------------------------------------------------------------------
 */
function buildPEMultiStepDragAndDrop(pageData) { //B-04

    //========== get data from LMS or browser ==========//
    // logic for getting the strike count and buy back
    if (apiIsInitialized) {
        modStatus = JSON.parse(doGetValue("cmi.suspend_data"));
    } else {
        if (localStorage) {
            // pull data out of stored data
            modStatus = JSON.parse(localStorage.getItem(imiName + "-session"));
        } else {
            // if no local storage, progress will not be saved
        }
    }



    console.log(modStatus.pe);
    let stageSetupComplete = false;
    let allZones = []; //will be used for a multidimensional array of all zones already used
    let stageNum = (modStatus.pe["stageNum"] !== undefined) ? modStatus.pe["stageNum"] : 0; //used for setting up and updating page
    let taskNum = (modStatus.pe["taskNum"] !== undefined) ? modStatus.pe["taskNum"] : 0; //used for setting up and updating page
    let hotspotElements = []; //used to track available hotspot items
    let used_hotspotElements = []; //used to track used hotspot items and compared to available to see if done
    let hotspot_zones = [];
    let recent_element = null;
    let narrationAudio = document.getElementById('narrationAudio');
    let narrationSource = document.getElementById('narrationSource');

    const changeButtonText = function(newText) {
        $("#continue").innerHTML = newText;
    }

    const stopAudio = function() {
        //stop previous audio
        if (narrationAudio.currentTime > 0 && !narrationAudio.paused) {
            narrationAudio.pause();
            narrationAudio.currentTime = 0;
        }
    }

    const playAudio = function(audioURL) {
        if (typeof audioURL !== 'undefined') {
            // update the source
            narrationSource.src = audioURL;
            narrationAudio.load();
            // play the new narration
            narrationAudio.play();
        }
    }

    const checkTaskComplete = function() {
        if (recent_element == null) {
            console.log("No recent element, can not check complete");
            return;
        }

        stopAudio();

        console.log("checking if tasks are complete");
        if (!used_hotspotElements.includes(recent_element)) { //if it's not already put in a target, then assign it. Otherwise it was just moved
            used_hotspotElements.push(recent_element);
        }

        let processComplete = true;
        hotspotElements.forEach(item => {
            if (!used_hotspotElements.includes(item)) {
                processComplete = false; //ONLY CHECKS IF ALL SLOTS USED, NO CHECK FOR IF CORRECTS SLOTS WHICH COULD BE DONE BASED OFF CLASS!!
            }
        });
        //return processComplete;

        if (processComplete) {
            let dialog = pageData.content.stages[stageNum].tasks[taskNum].dialog;
            if (typeof dialog !== 'undefined') {
                triggerDialog(dialog);
            } else {
                used_hotspotElements = [];
                taskNum++;

                updateTasks();

                // eval width and height of all items
                resizeFunction();
            }

        }
    }

    const updateTasks = function() {
        recent_element = null;
        //stop previous audio
        if (narrationAudio.currentTime > 0 && !narrationAudio.paused) {
            narrationAudio.pause();
            narrationAudio.currentTime = 0;
        }

        let task = pageData.content.stages[stageNum].tasks[taskNum];
        allZones.push(hotspot_zones);

        let elements = []; //used to send info back to main function... may not be needed when all said and done
        let button_zones = []; //used to store button coords

        //remove old
        Array.from(document.getElementsByClassName("draggable")).forEach(
            function(element, index, array) {
                element.classList.remove("draggable");
            }
        );

        oldZones = document.querySelectorAll('[id^="zone-"]');
        oldOrigins = document.querySelectorAll('[id^="origin-"]');
        oldButtons = document.querySelectorAll('[id^="button-"]');
        oldZones.forEach(function(element) {
            element.id = "oldTask-" + taskNum + "-" + element.id;
            element.remove();
        });
        oldOrigins.forEach(function(element) {
            element.id = "oldTask-" + taskNum + "-" + element.id;
            element.remove();
        });
        oldButtons.forEach(function(element) {
            element.id = "oldTask-" + taskNum + "-" + element.id;
            element.remove();
        });

        document.getElementById("directions").innerHTML = task.promptText;

        if (task.narration != null) {
            console.log("has narration");
        } else {
            console.log("no narration");
        }

        //check if has new background. if does then change and also remove all icons on the stage
        if (typeof task.image !== 'undefined' || task.image != null) {
            changeBackgroundImage(task.image);
            Array.from(document.getElementsByClassName("zone")).forEach(
                function(element) {
                    element.remove();
                }
            );
            allZones = [];
        } else if (!stageSetupComplete) {
            console.log("stage hasn't been set up and there was no image found for this task");
            //there should always be an image on task 0
            let foundImage = pageData.content.stages[stageNum].tasks[0];
            for (var i = taskNum; i > 0; i--) {
                if (typeof pageData.content.stages[stageNum].tasks[i].image != 'undefined') {
                    foundImage = pageData.content.stages[stageNum].tasks[i].image;
                    break;
                }
            }
            changeBackgroundImage(foundImage);
        } else {
            console.log("stage previously set up so image is carried over");
        }

        if (typeof task.interactables === 'undefined' || task.interactables == null) {
            //make button visible
            continueButton.hidden = false;
            return;
        }

        //adds tasks to page
        task.interactables.forEach(function(interactable, index) {
            if (interactable.draggable) {
                let idModifier = hotspot_zones.length + button_zones.length;

                let removeFromStage = interactable.removeFromStage;

                if (typeof removeFromStage !== 'undefined' && removeFromStage == true) {
                    console.log("needs removing");

                    interactable.dropzones.forEach(function(dropElement, dropIndex) {
                        //check if is correct
                        let correctCheck = 'notCorrectDestination';
                        if (dropElement.correct == true) {
                            correctCheck = "isCorrectDestination"
                        }

                        //create drag spot
                        let dragspot_item = document.createElement('div'); //creates drag object
                        dragspot_item.classList.add('zone', dropElement.shape, correctCheck, 'no-show', 'img-drop-spot', 'PE'); //adds classes to drag object
                        dragspot_item.id = 'origin-' + (dropIndex + idModifier); //assings a unique id to drag object
                        //assign drag spot to data set
                        dragspot_item.dataset.dropzone = index + 1;
                        //add drag spot to dragspot aka inventory
                        dragspot.appendChild(dragspot_item);

                        //create drag item
                        let draggable_item = document.createElement('div');
                        //assign drag item as draggable
                        draggable_item.classList.add('draggable', dropElement.shape);

                        //create drag item image
                        let draggable_img = document.createElement('img');
                        draggable_img.src = interactable.url;
                        draggable_img.alt = interactable.alt;
                        //add drag item image to drag item
                        draggable_item.appendChild(draggable_img);

                        //create drop spot
                        let hotspot_item = document.createElement('div'); //creates div for drop zone
                        hotspot_item.classList.add('zone', dropElement.shape, 'draggable-dropzone--occupied', 'no-show', 'img-origin-spot', 'PE'); //lets drop zone knw it's class is circle
                        hotspot_item.id = 'zone-' + (dropIndex + idModifier); //gives drop zone a unique ID
                        //assign drop spot to dataset
                        hotspot_item.dataset.dropzone = index + 1;
                        //add hotspot to hotspot aka stage
                        hotspot.appendChild(hotspot_item);

                        //add drag item to drag spot
                        hotspot_item.appendChild(draggable_item);
                        //add hotspot cordinates to hotspot_zones so that they can be resized correctly
                        hotspot_zones.push(dropElement.coords); //pushed to array in order to ensure drop zones are correct size and location
                        //add hotspot item to elements so it can be pushed to array of all items to compare if used or not
                        elements.push(dragspot_item);
                    });
                } else {
                    interactable.dropzones.forEach(function(dropElement, dropIndex) {
                        //create drag spot
                        let dragspot_item = document.createElement('div'); //creates drag object
                        dragspot_item.classList.add('zone', dropElement.shape, 'draggable-dropzone--occupied', 'no-show', 'img-origin-spot', 'PE'); //adds classes to drag object
                        dragspot_item.id = 'origin-' + (dropIndex + idModifier); //assings a unique id to drag object
                        //assign drag spot to data set
                        dragspot_item.dataset.dropzone = index + 1;
                        //add drag spot to dragspot aka inventory
                        dragspot.appendChild(dragspot_item);

                        //create drag item
                        let draggable_item = document.createElement('div');
                        //assign drag item as draggable
                        draggable_item.classList.add('draggable', dropElement.shape);
                        //add drag item to drag spot
                        dragspot_item.appendChild(draggable_item);

                        //create drag item image
                        let draggable_img = document.createElement('img');
                        draggable_img.src = interactable.url;
                        draggable_img.alt = interactable.alt;
                        //add drag item image to drag item
                        draggable_item.appendChild(draggable_img);

                        //check if is correct
                        let correctCheck = 'notCorrectDestination';
                        if (dropElement.correct == true) {
                            correctCheck = "isCorrectDestination"
                        }

                        //create drop spot
                        let hotspot_item = document.createElement('div'); //creates div for drop zone
                        hotspot_item.classList.add('zone', dropElement.shape, correctCheck, 'no-show', 'img-drop-spot', 'PE'); //lets drop zone knw it's class is circle
                        hotspot_item.id = 'zone-' + (dropIndex + idModifier); //gives drop zone a unique ID
                        //assign drop spot to dataset
                        hotspot_item.dataset.dropzone = index + 1;
                        //add hotspot to hotspot aka stage
                        hotspot.appendChild(hotspot_item);

                        //add hotspot cordinates to hotspot_zones so that they can be resized correctly
                        hotspot_zones.push(dropElement.coords); //pushed to array in order to ensure drop zones are correct size and location
                        //add hotspot item to elements so it can be pushed to array of all items to compare if used or not
                        elements.push(hotspot_item);
                    });
                }

            } else {
                console.log("not draggable");
                let idModifier = hotspot_zones.length + button_zones.length;

                interactable.buttons.forEach(function(buttonElement, buttonIndex) {
                    //create button
                    let correctCheck = 'notCorrectDestination';
                    if (buttonElement.correct == true) {
                        correctCheck = "isCorrectDestination"
                    }
                    let button_item = document.createElement('button'); //creates div for drop zone
                    button_item.classList.add('zone', buttonElement.shape, correctCheck, 'no-show', 'img-drop-spot', 'PE'); //lets drop zone knw it's class is circle
                    button_item.id = 'button-' + (buttonIndex + idModifier); //gives drop zone a unique ID

                    let button_img = document.createElement('img');
                    if (buttonElement.toggleOffUrl != "") {
                        button_img.src = buttonElement.toggleOffUrl;
                    } else {
                        //button_item.style.opacity = .3;
                        //button_img.style.opacity = .3;
                    }
                    button_img.id = 'img-button-' + (buttonIndex + idModifier);

                    // send coords to array
                    button_zones.push(buttonElement.coords); //pushed to array in order to ensure drop zones are correct size and location
                    // append hotspot item to hotspot
                    hotspot.appendChild(button_item);
                    button_item.appendChild(button_img);
                    elements.push(button_item);

                    button_item.addEventListener("click", selectionMade.bind(this, button_item, buttonElement), false);
                });
            }
        });

        hotspotElements = elements;
        hotspot_zones = hotspot_zones;
        button_zones.forEach(function(element) {
            hotspot_zones.push(element);
        });

        if (typeof task.briefing !== 'undefined') {
            triggerDialog(task.briefing);
        };

        //========== update data for LMS or browser ==========//
        modStatus.pe["stageNum"] = stageNum;
        modStatus.pe["taskNum"] = taskNum;

        //========== store data in the LMS or browser ==========//
        if (apiIsInitialized) {
            // update progress
            doSetValue("cmi.suspend_data", JSON.stringify(modStatus));
        } else {
            if (localStorage) {
                localStorage.setItem(imiName + "-session", JSON.stringify(modStatus));
            }
        }

    }

    const changeBackgroundImage = function(image = null) {
        if (image == null) {
            let oldImage = document.getElementById('hotspot-img');
            if (oldImage != null) {
                oldImage.remove(); //remove the image since not needed in this step
            }
        } else {
            let hotspot_img = document.getElementById('hotspot-img');
            if (typeof hotspot_img === 'undefined' || hotspot_img == null) {
                hotspot_img = document.createElement('img');
                hotspot_img.classList.add('img-fluid');
                hotspot_img.id = 'hotspot-img';
                hotspot_img.setAttribute('usemap', '#hotspot_map');
                hotspot.appendChild(hotspot_img);
                hotspot_img.onload = function() {
                    var imgCheck = setInterval(function() {
                        checkImageItems(hotspot_zones, "hotspot-img");
                        console.log('adjusting')
                    }, 100);
                    setTimeout(function() {
                        clearInterval(imgCheck);
                    }, 1000);
                }
            }

            hotspot_img.src = image.url;
            hotspot_img.alt = image.alt;
        }
    }

    const updateStage = function() {
        let content = pageData.content;
        window.onresize = null;
        Array.from(document.getElementsByClassName("zone")).forEach(
            function(element) {
                element.remove();
            }
        );

        stopAudio();
        if (typeof content.stages[stageNum].narration != 'undefined') {
            playAudio(content.stages[stageNum].narration.url);
        }

        if (content.stages[stageNum].template == "briefing") { //if element 0 need to do briefing and audio    
            //play audio briefing
            document.getElementById("directions").innerHTML = content.stages[stageNum].narration.cc;

            changeBackgroundImage(null);
            return;
        } else if (content.stages[stageNum].template == "tasking") { //if element setup stage initially for drag and drop stuff
            //add    
            updateTasks();
            resizeFunction();

            continueButton.hidden = true;

            return;
        } else if (content.stages[stageNum].template == "conclusion") {
            alert("this is last stage and has name conclusion");
            changeBackgroundImage(null);

            //play audio briefing
            document.getElementById("directions").innerHTML = content.stages[stageNum].narration.cc;

            return;
        }
    }

    const triggerDialog = function(dialog) {
        $('#popupModal .modal-body').html(dialog.text);
        $('#popupModal').modal('show')
    }

    const selectionMade = function(element, jsonInfo) {
        stopAudio();

        if (!element.id.includes('oldTask') && !used_hotspotElements.includes(element)) {
            recent_element = element; //store what was clicked

            //change image
            document.getElementById("img-" + element.id).src = jsonInfo.toggleOnUrl;

            if (typeof jsonInfo.dialog === 'undefined') { //if no dialog then just check what was clicked
                checkTaskComplete();
            } else { //if dialog present then need to show it, it'll be checked when popup closes
                triggerDialog(jsonInfo.dialog);
            }
        }
    }

    const resizeFunction = function() {
        setTimeout(function() {
            checkImageItems(hotspot_zones, "hotspot-img");
        }, 100);

        window.onresize = function() {
            checkImageItems(hotspot_zones, "hotspot-img"); //checks current zones
            for (var i = 0; i < taskNum; i++) {
                checkImageItems(allZones[i], "hotspot-img", i + 1); //checks past used zones
            }
        };
    }

    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    // get right column
    let rightCol = document.getElementById('full-row');
    rightCol.innerHTML = "";

    let contentwrap = document.createElement('div');
    contentwrap.classList.add('position-relative');
    rightCol.appendChild(contentwrap);


    let textField = buildInstructionBar();
    textField.classList.add('mb-0')

    let instructions = textField.childNodes[1];

    instructions.classList.add('directions');
    instructions.id = "directions";
    instructions.innerHTML = "Basic Directions Here";
    contentwrap.appendChild(textField);

    // create div to hold the hot spot
    let hotspot = document.createElement('div');
    hotspot.classList.add('dnd');
    hotspot.id = "hotspot";
    contentwrap.appendChild(hotspot);

    // create div to hold the draggables
    let dragspot = document.createElement('div');
    dragspot.classList.add('dnd', 'd-flex');
    dragspot.id = "dragspot";
    contentwrap.appendChild(dragspot);

    let continueButton = document.createElement('BUTTON');
    continueButton.classList.add('mx-auto', 'btn', 'btn-primary');
    continueButton.id = "continue";
    continueButton.innerHTML = "Click to Continue";
    contentwrap.appendChild(continueButton);

    let popupModal = document.createElement('div');
    popupModal.classList.add('modal');
    popupModal.role = 'dialog';
    popupModal.id = 'popupModal';
    popupModal.innerHTML = '<div class="modal-dialog modal-dialog-centered" role="document"><div class="modal-content"><div class="modal-header"></div><div class="modal-body"><p>Text goes here</p></div><div class="modal-footer"><button type="button" class="btn btn-primary" data-dismiss="modal">Confirm</button></div></div></div>';
    contentwrap.appendChild(popupModal);

    document.getElementById("continue").addEventListener('click', function() {
        taskNum = 0;
        stageNum++;
        if (pageData.content.stages[stageNum] != null) {
            updateStage();
            allZones = [];
            resizeFunction();
            continueButton.hidden = true;
        }


    });
    //continueButton.hidden = true;

    // setup stage
    updateStage();

    // Get both containers
    let dndContainers = document.querySelectorAll('.dnd');

    const droppable = new Draggable.Droppable(dndContainers, {
        draggable: '.draggable',
        dropzone: '.zone',
        mirror: {
            constrainDimensions: true,
        },
    });

    let droppableOrigin;
    let draggableOriginLocation;

    // --- Draggable events --- //
    droppable.on('drag:start', (evt) => {
        droppableOrigin = evt.originalSource.parentNode.dataset.dropzone; //stores number of drop zone
        draggableOriginLocation = evt.originalSource.parentNode; //stores actual drop zone
    });

    droppable.on('droppable:stop', (evt) => { //this listener is able to know where you dropped it because it's done being dropped
        console.log("droppable:stop");
        if (evt.dropzone == draggableOriginLocation) {
            return; //this exits out of function because the object returned to start
        }

        if (used_hotspotElements.includes(draggableOriginLocation)) { //if it's start location is in the array, remove it because it's been moved
            console.log("put into origin");
            used_hotspotElements.splice(used_hotspotElements.indexOf(draggableOriginLocation), 1);
        }

        if (!used_hotspotElements.includes(evt.dropzone) && evt.dropzone.id.toLowerCase().indexOf('origin') == -1) { //if it's not already put in a target, then assign it. Otherwise it was just moved
            console.log("was not in array");
            recent_element = evt.dropzone;
            checkTaskComplete();
        } else if (!used_hotspotElements.includes(evt.dropzone) && hotspotElements.includes(evt.dropzone)) {
            console.log("was placed in origin but it's supposed to be");
            recent_element = evt.dropzone;
            checkTaskComplete();
        }
    });

    $('#popupModal').on('hidden.bs.modal', function(e) {
        if (recent_element == null) return;

        used_hotspotElements = [];
        taskNum++;

        updateTasks();

        // eval width and height of all items
        resizeFunction();
    });

    droppable.on('droppable:dropped', (evt) => {
        if (droppableOrigin !== evt.dropzone.dataset.dropzone) {
            evt.cancel();
        }
    });

    stageSetupComplete = true;
}
//used by both B04 PE and COL Drag and Drop
function checkImageItems(elements, imageId, oldTaskNum = 0) {
    // quick maths
    let currentWidth = document.getElementById(imageId).offsetWidth;
    let actualWidth = document.getElementById(imageId).naturalWidth;

    if (oldTaskNum == 0) {
        // loop through items and resize the elements
        elements.forEach(function(item, index) {
            // get correct zone
            let zone = document.getElementById('zone-' + index);
            let origin = document.getElementById('origin-' + index);
            let button = document.getElementById('button-' + index);
            // position hotspot
            let posX = item[0];
            let posY = item[1];
            let itemWidth = item[2];
            let itemHeight = item[3];
            // get correct percentage
            let correctionVal = currentWidth / actualWidth;
            // update variables
            posX = posX * correctionVal;
            posY = posY * correctionVal;
            itemWidth = itemWidth * correctionVal;
            itemHeight = itemHeight * correctionVal;

            if (zone != null) {
                // define postion
                zone.style.left = posX + 'px';
                zone.style.top = posY + 'px';
                // define height/width
                zone.style.width = itemWidth + 'px';
                zone.style.height = itemHeight + 'px';
            }

            if (origin != null) {
                origin.style.width = itemWidth + 'px';
                origin.style.height = itemHeight + 'px';
            }

            if (button != null) {
                // define postion
                button.style.left = posX + 'px';
                button.style.top = posY + 'px';
                // define height/width
                button.style.width = itemWidth + 'px';
                button.style.height = itemHeight + 'px';
            }
        });
    } else {
        elements.forEach(function(item, index) {
            // get correct zone
            let zone = document.getElementById('oldTask-' + oldTaskNum + '-zone-' + index);
            let origin = document.getElementById('oldTask-' + oldTaskNum + '-origin-' + index);
            let button = document.getElementById('oldTask-' + oldTaskNum + '-button-' + index);
            // position hotspot
            let posX = item[0];
            let posY = item[1];
            let itemWidth = item[2];
            let itemHeight = item[3];
            // get correct percentage
            let correctionVal = currentWidth / actualWidth;
            // update variables
            posX = posX * correctionVal;
            posY = posY * correctionVal;
            itemWidth = itemWidth * correctionVal;
            itemHeight = itemHeight * correctionVal;

            if (zone != null) {
                // define postion
                zone.style.left = posX + 'px';
                zone.style.top = posY + 'px';
                // define height/width
                zone.style.width = itemWidth + 'px';
                zone.style.height = itemHeight + 'px';
            }

            if (origin != null) {
                origin.style.width = itemWidth + 'px';
                origin.style.height = itemHeight + 'px';
            }

            if (button != null) {
                // define postion
                button.style.left = posX + 'px';
                button.style.top = posY + 'px';
                // define height/width
                button.style.width = itemWidth + 'px';
                button.style.height = itemHeight + 'px';
            }
        });
    }
}

function buildPESequentialHotspot(pageData) {

    //Global Strikes variable
    let strikes = 0;

    //Global Buyback loop check
    let buybackLoopAccessed = false;


    // logic for getting the strike count and buy back
    if (apiIsInitialized) {
        modStatus = JSON.parse(doGetValue("cmi.suspend_data"));
    } else {
        if (localStorage) {
            // pull data out of stored data
            modStatus = JSON.parse(localStorage.getItem(imiName + "-session"));
        } else {
            // if no local storage, progress will not be saved
        }
    }

    strikes = modStatus.pe.strikecount;
    buybackLoopAccessed = modStatus.pe.buyBackAccessed;

    //The array of selected sequences
    let sequenceArray = [];

    //Find the next button and disable it
    let nextBtn = document.getElementById('next-page');
    nextBtn.disabled = true;

    // what are we working from
    console.log("PE Sequential Hotspot Selection");

    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');

    //Global Page Location variable
    let pageLocation = pageData.id;

    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);

    let layoutArray = pageData.layout.split("-");
    let col1;
    let col2;
    // assess if its horizontal or veritcal
    if (layoutArray[1] == "left" || layoutArray[1] == "right") {
        // get left column
        col1 = document.getElementById('left-column');
        // get right column
        col2 = document.getElementById('right-column');
    } else {
        // get left column
        col1 = document.getElementById('top-row');
        // get right column
        col2 = document.getElementById('bottom-row');
    }
    // get left column wrapper
    let col1Wrapper = document.getElementById('column-wrapper-1');

    let scenarioDiv = document.createElement('div');
    // add the ementor
    let ementor = new eMentor(pageData.content.ementors[0]);
    scenarioDiv.appendChild(ementor.build());

    let responseDiv = document.createElement('div');
    responseDiv.classList.add('card', 'response');

    // build question feedback
    let feedback = document.createElement('div');
    feedback.classList.add('question-feedback');
    responseDiv.appendChild(feedback);

    // add the card header (page title)
    let header = document.createElement('div');
    header.classList.add('card-header', 'response-prompt');
    let headerLabel = document.createElement('div');
    headerLabel.classList.add('response-label', 'text-muted');
    headerLabel.innerHTML = 'Current Sequence:';
    header.appendChild(headerLabel);

    let headerText = document.createElement('div');
    headerText.classList.add('response-text');
    headerText.innerHTML = "";
    header.appendChild(headerText);
    responseDiv.appendChild(header);

    //add clear sequence button
    let clearbtn = document.createElement('button');
    clearbtn.id = 'clearBtn';
    clearbtn.type = 'button';
    clearbtn.classList.add('btn', 'btn-primary');
    clearbtn.innerHTML = 'Clear Sequence';

    clearbtn.classList.add('d-block', 'mx-auto', 'my-3');

    clearbtn.onclick = function() {
        sequenceArray = [];
        headerText.innerHTML = "";
    };

    //add matching exercise sequence button
    let matching = document.createElement('button');
    matching.id = 'matchBtn';
    matching.type = 'button';
    matching.classList.add('btn', 'btn-primary');
    matching.innerHTML = 'Enter Matching Exercise';

    matching.classList.add('d-block', 'mx-auto', 'my-3');
    matching.disabled = true;
    matching.onclick = function() {
        //If we're at two strikes, go to the buyback loop
        if (strikes == 2) {

            modStatus.pe["currentLoopLocation"] = JSON.stringify(pageLocation);

            getPageData(pageData.content.trigger_button.buybacklocation);


        }
        //If we're at three, go to the restart page
        if (strikes == 3) {
            getPageData(pageData.content.trigger_button.restartlocation);
        }
    };

    // add submit button
    let submit = createSubmitButton();
    submit.classList.add('d-block', 'mx-auto', 'my-3');

    submit.onclick = function() {
        //eval stored string of selections
        var correctSequence = evalSequentialSelection(pageData.content.hotspot.answerseqeunce, sequenceArray);
        feedback = buildFeedback(correctSequence, "Correct! Access the next pumping order by proceeding to the next page.", "Incorrect sequence, you have received one strike.");
        console.log(correctSequence);

        //If its a bad answer submitted, clear it
        sequenceArray = [];
        headerText.innerHTML = "";

        //If true, allow the next page to be accessed
        if (correctSequence)
            nextBtn.disabled = false;
        //Otherwise
        else {
            strikes++;
            //========== get data from LMS or browser ==========//
            // logic for getting the strike count and buy back
            if (apiIsInitialized) {
                modStatus = JSON.parse(doGetValue("cmi.suspend_data"));
            } else {
                if (localStorage) {
                    // pull data out of stored data
                    modStatus = JSON.parse(localStorage.getItem(imiName + "-session"));
                } else {
                    // if no local storage, progress will not be saved
                }
            }




            if (strikes == 2 && buybackLoopAccessed == false) {
                buybackLoopAccessed = true;
                matching.disabled = false;
            } else if (strikes == 3) {
                matching.innerHTML = 'Restart Practical Exercise';
                matching.disabled = false;
            }

            //========== update data for LMS or browser ==========//
            modStatus.pe["strikecount"] = strikes;
            modStatus.pe["buyBackAccessed"] = strikes;


            //========== store data in the LMS or browser ==========//
            if (apiIsInitialized) {
                // update progress
                doSetValue("cmi.suspend_data", JSON.stringify(modStatus));
            } else {
                if (localStorage) {
                    localStorage.setItem(imiName + "-session", JSON.stringify(modStatus));
                }
            }
        }


        responseDiv.appendChild(feedback);
    }

    responseDiv.appendChild(clearbtn);
    responseDiv.appendChild(submit);
    responseDiv.appendChild(matching);

    scenarioDiv.appendChild(responseDiv);

    col1Wrapper.appendChild(scenarioDiv);


    let col2Wrapper = document.getElementById('column-wrapper-2');

    // create div to hold the hot spot
    let hotspot = document.createElement('div');
    hotspot.classList.add('dnd');
    hotspot.id = "hotspot";
    col2Wrapper.appendChild(hotspot);

    let hotspot_img = document.createElement('img');
    hotspot_img.classList.add('img-fluid');
    hotspot_img.id = 'hotspot-img';
    hotspot_img.src = pageData.content.hotspot.image.url;
    hotspot_img.alt = pageData.content.hotspot.image.alt;
    hotspot_img.setAttribute('usemap', '#hotspot_map');
    hotspot_img.onload = function() {
        var imgCheck = setInterval(function() {
            checkImageItems(hotspot_zones, "hotspot-img");
            console.log('adjusting')
        }, 100);
        setTimeout(function() {
            clearInterval(imgCheck);
        }, 1000);
    }
    hotspot.appendChild(hotspot_img);

    // create hotspot array
    let hotspot_zones = [];
    // build hotspots
    pageData.content.hotspot.items.forEach(function(element, index) {
        let hotspot_item = document.createElement('button');
        hotspot_item.classList.add('zone', 'hotspot-item', element.shape);
        // add shape class
        hotspot_item.id = "zone-" + index;

        // add click event
        hotspot_item.addEventListener("click", function() {
            console.log(element.hotspot_label)

            if (sequenceArray.includes(element.hotspot_label) == false)
                sequenceArray.push(element.hotspot_label);

            headerText.innerHTML = sequenceArray.join(', ');
        });
        // send coords to array
        hotspot_zones.push(element.coords);
        // add a label for numbers
        let label = document.createElement('div');
        label.classList.add('hotspot-item--label');
        label.innerHTML = element.hotspot_label;
        hotspot_item.appendChild(label);
        // append hotspot item to hotspot
        hotspot.appendChild(hotspot_item);
    });
    // eval width and height of all items
    setTimeout(function() {
        checkImageItems(hotspot_zones, "hotspot-img");
        window.onresize = function(event) {
            checkImageItems(hotspot_zones, "hotspot-img");
        };
    }, 200);


}

function evalSequentialSelection(answers, submittedsequence) {
    if (answers.length != submittedsequence.length)
        return false;

    var correctSequence = true;

    for (var index = 0; index < answers.length; ++index) {
        if (answers[index] != submittedsequence[index])
            correctSequence = false;
    }

    return correctSequence;
}

function buildMultiChoiceMultiQuestions(pageData) {

    let currentQuestion = 0;

    let currentLoopLocation = "0020"


    //========== get data from LMS or browser ==========//
    // logic for getting the strike count and buy back
    if (apiIsInitialized) {
        modStatus = JSON.parse(doGetValue("cmi.suspend_data"));
    } else {
        if (localStorage) {
            // pull data out of stored data
            modStatus = JSON.parse(localStorage.getItem(imiName + "-session"));
        } else {
            // if no local storage, progress will not be saved
        }
    }

    //========== update data for LMS or browser ==========//
    currentLoopLocation = modStatus.pe["currentLoopLocation"];

    console.log(pageData);
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);
    let layoutArray = pageData.layout.split("-");
    let col1;
    let col2;
    // assess if its horizontal or veritcal
    if (layoutArray[1] == "left" || layoutArray[1] == "right") {
        // get left column
        col1 = document.getElementById('left-column');
        // get right column
        col2 = document.getElementById('right-column');
    } else {
        // get left column
        col1 = document.getElementById('top-row');
        // get right column
        col2 = document.getElementById('bottom-row');
    }
    // get left column wrapper
    let col1Wrapper = document.getElementById('column-wrapper-1');
    // get the right column wrapper
    let col2Wrapper = document.getElementById('column-wrapper-2');

    let questionDiv = document.createElement('div');
    // add the ementor
    let ementor = new eMentor(pageData.content.ementors[0]);
    questionDiv.appendChild(ementor.build());

    let question = buildQuestion(pageData.content.slides[currentQuestion]);
    questionDiv.appendChild(question);

    // add submit button
    let submit = createSubmitButton();
    submit.classList.add('d-block', 'mx-auto', 'my-3');

    questionDiv.appendChild(submit);
    col1Wrapper.appendChild(questionDiv);

    submit.onclick = function() {
        let result = false;
        var listgroup = question.getElementsByClassName("question-option");
        for (var index = 0; index < listgroup.length; ++index) {
            if (listgroup[index].classList.contains('active') &&
                listgroup[index].id == pageData.content.slides[currentQuestion].answers) {

                result = true;
                console.log("Correct");
                if (currentQuestion < pageData.content.slides.length - 1) {
                    currentQuestion++;
                    let newQuestion = buildQuestion(pageData.content.slides[currentQuestion]);
                    question.replaceWith(newQuestion);
                    question = newQuestion;
                    col2Wrapper.style.backgroundImage = "url('" + pageData.content.slides[currentQuestion].image.url + "')";
                    break;
                } else {
                    //Give them access back to the main loop
                    // add return button
                    let returnBtn = document.createElement('button');
                    returnBtn.id = 'returnBtn';
                    returnBtn.type = 'button';
                    returnBtn.classList.add('btn', 'btn-primary');
                    returnBtn.innerHTML = "Return to Exercise";

                    returnBtn.classList.add('d-block', 'mx-auto', 'my-3');

                    questionDiv.appendChild(returnBtn);

                    let newstrikecount = 1;



                    //========== get data from LMS or browser ==========//
                    // logic for getting the strike count and buy back
                    if (apiIsInitialized) {
                        modStatus = JSON.parse(doGetValue("cmi.suspend_data"));
                    } else {
                        if (localStorage) {
                            // pull data out of stored data
                            modStatus = JSON.parse(localStorage.getItem(imiName + "-session"));
                        } else {
                            // if no local storage, progress will not be saved
                        }
                    }

                    //========== update data for LMS or browser ==========//
                    modStatus.pe["strikecount"] = newstrikecount;


                    //========== store data in the LMS or browser ==========//
                    if (apiIsInitialized) {
                        // update progress
                        doSetValue("cmi.suspend_data", JSON.stringify(modStatus));
                    } else {
                        if (localStorage) {
                            localStorage.setItem(imiName + "-session", JSON.stringify(modStatus));
                        }
                    }

                    returnBtn.onclick = function() {
                        console.log("Return to Excercise");
                        getPageData(currentLoopLocation)
                    };
                }
            }
        }

        let feedback = buildFeedback(result, "Correct!", "Incorrect.");

        let questionValidation = question.getElementsByClassName("question-feedback")[0];
        questionValidation.appendChild(feedback);

    };




    //let col2 = document.getElementById('bottom-row')
    // set up background image
    col2Wrapper.style.backgroundImage = "url('" + pageData.content.slides[currentQuestion].image.url + "')";
    col2Wrapper.style.backgroundPosition = 'center';
    col2Wrapper.style.backgroundSize = 'cover';
}

function UpdateQuestion(questionDiv, questionIndex) {

}

function buildPEIntro(pageData) {
    //Global Strikes variable
    let strikes = 0;
    let buybackloopAccessed = false;

    //Find the next button and disable it
    let nextBtn = document.getElementById('next-page');
    nextBtn.disabled = true;

    //========== get data from LMS or browser ==========//
    // logic for getting the strike count and buy back
    if (apiIsInitialized) {
        modStatus = JSON.parse(doGetValue("cmi.suspend_data"));
    } else {
        if (localStorage) {
            // pull data out of stored data
            modStatus = JSON.parse(localStorage.getItem(imiName + "-session"));
        } else {
            // if no local storage, progress will not be saved
        }
    }

    //========== update data for LMS or browser ==========//
    modStatus.pe["strikecount"] = strikes;
    modStatus.pe["buyBackAccessed"] = buybackloopAccessed;

    //========== store data in the LMS or browser ==========//
    if (apiIsInitialized) {
        // update progress
        doSetValue("cmi.suspend_data", JSON.stringify(modStatus));
    } else {
        if (localStorage) {
            localStorage.setItem(imiName + "-session", JSON.stringify(modStatus));
        }
    }

    console.log("PE Intro");
    // build the layout
    let layout = buildColumns(pageData.layout);
    // get page container from DOM
    let page = document.getElementById('page_frame');
    // clear the page frame
    page.innerHTML = "";
    // add layout to page frame
    page.appendChild(layout);

    let layoutArray = pageData.layout.split("-");
    let col1;
    let col2;
    // assess if its horizontal or veritcal
    if (layoutArray[1] == "left" || layoutArray[1] == "right") {
        // get left column
        col1 = document.getElementById('left-column');
        // get right column
        col2 = document.getElementById('right-column');
    } else {
        // get left column
        col1 = document.getElementById('top-row');
        // get right column
        col2 = document.getElementById('bottom-row');
    }
    // get left column wrapper
    let col1Wrapper = document.getElementById('column-wrapper-1');

    let questionDiv = document.createElement('div');
    // add the ementor
    let ementor = new eMentor(pageData.content.ementors[0]);
    questionDiv.appendChild(ementor.build());

    // add start button
    let start = document.createElement('button');
    start.id = 'startBtn';
    start.type = 'button';
    start.classList.add('btn', 'btn-primary');
    start.innerHTML = pageData.content.trigger_button.title;

    start.classList.add('d-block', 'mx-auto', 'my-3');

    questionDiv.appendChild(start);
    col1Wrapper.appendChild(questionDiv);

    start.onclick = function() {
        console.log("Starting Excercise");
        getPageData(pageData.content.trigger_button.location)
    };


    // get the right column wrapper
    let col2Wrapper = document.getElementById('column-wrapper-2');

    //let col2 = document.getElementById('bottom-row')
    // set up background image
    col2Wrapper.style.backgroundImage = "url('" + pageData.content.image.url + "')";
    col2Wrapper.style.backgroundPosition = 'center';
    col2Wrapper.style.backgroundSize = 'cover';
    col2Wrapper.classList.add('img-present');
}

function createStartButton() {
    let start = document.createElement('button');
    start.id = 'startBtn';
    start.type = 'button';
    start.classList.add('btn', 'btn-primary');
    start.innerHTML = 'Start Exercise';
    // return the button
    return start;
}