// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.PostMessage",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 223.13,
          "height": 43.93,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Please click\nto enter the fullscreen mode",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "18",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 250,
          "angle": 0,
          "width": 36.93,
          "height": 13.56,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "V.1.0.0",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "12",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "files": {},
      "parameters": {},
      "responses": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.options.events['click'] = function() {
  // Launch fullscreen mode
  lab.util.fullscreen.launch(document.body)
    // ... if successful, move to next screen
    .then(() => this.end('Fullscreen mode enabled'))
    // ... otherwise, alert the user (this could
    // be changed to continue the study, as above)
    .catch(() => alert('Fullscreen mode not available'))
}

// Please note that that fullscreen mode (at present,
// this will change) needs one more line of code in
// the study style sheet to keep a consistent background
// color. Please find that setting in the study options
// (rightmost toolbar icon), in the CSS tab


////this.options.viewportScale = this.state.viewScale


}
      },
      "viewport": [
        800,
        600
      ],
      "title": "Start fullscreen"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "\u003Cmain\u003E\n\n\u003Cp\u003EThis experiment should be performed on a fullscreen mode. Once the experiment is finished, the display will exit the fullscreen automatically. Do not exit in the middle of the experiment. If you exit for any reason, press 'F11' which may allow you to go back to the fullscreen again.\u003C\u002Fp\u003E\n\n\u003Cp\u003EIf the fullscreen mode is not available, please maximise this window. Make sure not to change the window size in the middle of the experiment for the best results.\u003C\u002Fp\u003E\n\n\u003Ccenter\u003E\n\u003Cbutton type=\"Submit\"\u003ENext\u003C\u002Fbutton\u003E\n\u003C\u002Fcenter\u003E\n\n\u003C\u002Fmain\u003E\n",
          "title": "\u003Ccenter\u003EWelcome to the experiment! \u003C\u002Fcenter\u003E"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
//window.moveTo(0, 0);
//window.resizeTo(screen.availWidth, screen.availHeight);

}
      },
      "title": "Welcome"
    },
    {
      "type": "lab.html.Form",
      "responses": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {

this.options.events['input input'] = function() {
  const scale = document.getElementById('scale').value
  document.getElementById('credit_card')
    .setAttribute(
      'transform',
      `scale(${ scale / 100 })`
    )
}
},
        "end": function anonymous(
) {
// Get the image width and height in browser pixels
const { width, height } = document.querySelector('svg #credit_card rect.card')
  .getBoundingClientRect()

// Compute dpi and dpcm based on this information
this.data.dpi = width / 3.375
this.data.dpcm = width / 8.573
this.data.viewScale=this.data.dpi/100
}
      },
      "title": "ScalingScreen",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv\u003E\n    \u003Cstyle type=\"text\u002Fcss\"\u003E\n      #credit_card line {\n        stroke: var(--color-border);\n        stroke-dasharray: 4;\n        vector-effect: non-scaling-stroke;\n      }\n      #credit_card rect {\n        fill: var(--color-gray-background);\n        stroke: var(--color-border);\n        stroke-width: 2;\n        stroke-linecap: butt;\n        stroke-linejoin: round;\n        vector-effect: non-scaling-stroke;\n      }\n      #credit_card rect.background {\n        fill: white;\n        stroke: white;\n        stroke-width: 10;\n      }\n    \u003C\u002Fstyle\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" version=\"1.1\"\n      viewBox=\"-400 -250 800 500\"\n      style=\"width: 800px; height: 500px\"\u003E\n      \u003Cg\n        id=\"credit_card\"\n        transform=\"scale(1)\"\n      \u003E\n        \u003Cline x1=\"-168.75\" y1=\"-2000\" x2=\"-168.75\" y2=\"2000\" \u002F\u003E\n        \u003Cline x1=\"168.75\" y1=\"-2000\" x2=\"168.75\" y2=\"2000\" \u002F\u003E\n        \u003Cline x1=\"-2000\" y1=\"-106.25\" x2=\"2000\" y2=\"-106.25\" \u002F\u003E\n        \u003Cline x1=\"-2000\" y1=\"106.25\" x2=\"2000\" y2=\"106.25\" \u002F\u003E\n        \u003Crect\n          class=\"background\"\n          x=\"-168.75\" y=\"-106.25\"\n          width=\"337.5\" height=\"212.5\"\n          rx=\"12.5\"\n        \u002F\u003E\n        \u003Crect\n          class=\"card\"\n          x=\"-168.75\" y=\"-106.25\"\n          width=\"337.5\" height=\"212.5\"\n          rx=\"12.5\"\n        \u002F\u003E\n      \u003C\u002Fg\u003E\n    \u003C\u002Fsvg\u003E\n    \u003Cdiv class=\"m-l\" \u003E\n      \u003Cp class=\"font-weight-bold content-horizontal-center\"\u003E\n        Please use the slide bar below to adjust the size of the rectangle to match the size of your University ID card or credit card (you can also use most membership cards that have the same size as a credit card). Click the 'submit' button if you are happy with the size of the rectangle.\n      \u003C\u002Fp\u003E\n      \u003Cform id=\"pumps-form\"\u003E\n        \u003Cinput \n          type=\"range\" \n          name=\"scale\" id=\"scale\"\n          class=\"w-l\"\n          min=\"20\" max=\"200\" value = \"100\"\n        \u003E\n        \u003Cbutton type=\"submit\"\u003ESumit\u003C\u002Fbutton\u003E\n      \u003C\u002Fform\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n",
      "parameters": {},
      "files": {}
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.state.block=0;

document.body.style.cursor = 'none';

let respArray=["f","j"];

respArray.sort(() => Math.random() - 0.5);

this.parameters.greenResp=respArray[0];
this.parameters.redResp=respArray[1];



}
      },
      "title": "Main_sequence",
      "tardy": true,
      "content": [
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {},
          "title": "pracInst_sequence",
          "content": [
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 784.48,
                  "height": 278.79,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "In this experiment, your task is to respond to stimuli on the display \nas quickly and as accurately as possible.\n\nUse a QWERTY keyboard and place your fingers on 'f' and 'j' keys\non the top of your keyboard. Please place your left and right index fingers,\nrespectively, on the f and j keys.\n\n\nPress SPACE",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "24",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "keypress(Space)": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Inst1"
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 617.18,
                  "height": 404.63,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "On each trial, you will see a cross at the centre of display. \nPlease keep your eyes on the cross.\n\nYou will then see a square on the left or right the cross.\nIgnore the location of the square and focus on the colour.\n\nIf it is Green, press \"${state.greenResp}\".\nIf it is RED, press \"${state.redResp}\".\n\nTry to respond as quickly and as accuratley as you can.\n\n\nPress SPACE",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "24",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "keypress(Space)": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Inst2",
              "tardy": true
            },
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 332.16,
                  "height": 121.5,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "There will be a total of 32 trials.\n\n\nPress SPACE to start trials",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "24",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "keypress(Space)": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
//this.parameters.shape1
//this.parameters.shape2
//this.parameters.colour1
//this.parameters.colour2
}
              },
              "title": "Inst3"
            }
          ]
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "TEST": "1",
              "sColour": "green",
              "sPosition": "left",
              "sX": "-150"
            },
            {
              "TEST": "1",
              "sColour": "green",
              "sPosition": "right",
              "sX": "150"
            },
            {
              "TEST": "1",
              "sColour": "red",
              "sPosition": "left",
              "sX": "-150"
            },
            {
              "TEST": "1",
              "sColour": "red",
              "sPosition": "right",
              "sX": "150"
            }
          ],
          "sample": {
            "mode": "draw-shuffle",
            "n": "32"
          },
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.state.trial=0;
this.state.block+=1;
this.parameters.block=this.state.block;
},
            "after:end": function anonymous(
) {
// Extract all stimulus durations
const all_compRT = this.options.datastore.extract(
  'compRT',                 // column name
  'feedback',                   // screen name
);
//console.log(all_compRT);
this.state.mCompRT=lab.util.stats.mean(all_compRT.filter(Number));
this.state.mCompRT=Math.round(this.state.mCompRT);


const all_incompRT = this.options.datastore.extract(
  'incompRT',                 // column name
  'feedback',                   // screen name
);
//console.log(all_incompRT);
this.state.mIncompRT = lab.util.stats.mean(all_incompRT.filter(Number));
this.state.mIncompRT=Math.round(this.state.mIncompRT);



}
          },
          "title": "Test_loop1",
          "tardy": true,
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.state.trial+=1;
this.parameters.trial=this.state.trial;

// select valence
if(this.parameters.sColour==="green"){
  cResp=this.parameters.greenResp;
}else if(this.parameters.sColour==="red"){
  cResp=this.parameters.redResp;
}

this.parameters.corrResp=cResp;

if(cResp==="f"){

  this.parameters.rPosition==="left";
  
  if(this.parameters.sPosition==="left"){
    this.parameters.comp="comp";
  }else if(this.parameters.sPosition==="right"){
    this.parameters.comp="incomp";
  }

}else if(cResp==="j"){

  this.parameters.rPosition==="right";

  if(this.parameters.sPosition==="left"){
    this.parameters.comp="incomp";
  }else if(this.parameters.sPosition==="right"){
    this.parameters.comp="comp";
  }

}






}
            },
            "title": "Trial_sequence",
            "tardy": true,
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 29.2,
                    "height": 56.5,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "+",
                    "fontStyle": "normal",
                    "fontWeight": "bold",
                    "fontSize": "50",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                },
                "title": "Fixation",
                "timeout": "500"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 18.69,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "+",
                    "fontStyle": "normal",
                    "fontWeight": "bold",
                    "fontSize": "50",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "rect",
                    "left": "${parameters.sX}",
                    "top": "0",
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "",
                    "strokeWidth": 1,
                    "fill": "${parameters.sColour}"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "keypress(f)": "f",
                  "keypress(j)": "j"
                },
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                },
                "title": "stim",
                "timeout": "2000",
                "tardy": true,
                "correctResponse": "${parameters.corrResp}"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 339.78,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${parameters.feedback}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale

if(this.state.ended_on==="timeout"){
  this.parameters.feedback="Too slow!";
  this.parameters.ACC=2;

}else{
  if(this.state.response===this.parameters.corrResp){
    this.parameters.feedback="Correct";
    this.parameters.ACC=1;

    if(this.state.comp==="comp"){ 
      this.state.compRT=this.state.duration;
    }else if(this.state.comp==="incomp"){
      this.state.incompRT=this.state.duration;
    }

  }else{
    this.parameters.feedback="Incorrect";
    this.parameters.ACC=0;
  }
}


}
                },
                "title": "feedback",
                "timeout": "750",
                "tardy": true
              },
              {
                "type": "lab.canvas.Screen",
                "content": [],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.viewportScale = this.state.viewScale
}
                },
                "title": "blank",
                "timeout": "500"
              }
            ]
          }
        }
      ]
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 605.16,
          "height": 373.17,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "The Simon effect refers to faster responses when stimuli \nand responses are spatially compatible than when they \nare incompatible. Your results are as below:\n\nMan RT on compatible trial: ${state.mCompRT} ms.\nMean RT on incompatible trial: ${state.mIncompRT} ms.\n\nThe number of trials for this demo experiment is small, \nso you might not always find the Simon effect.\n\n\nClose the window to end the experiment.",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "24",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
document.body.style.cursor = 'pointer';
}
      },
      "title": "Summary",
      "tardy": true
    }
  ]
})

// Let's go!
study.run()