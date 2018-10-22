$(document).ready(function () {
    var animatedMovement = "+=" + $(window).width() * 2.9;
    console.log(animatedMovement)
  
  
    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();
  
    var horController = new ScrollMagic.Controller({
      vertical: false
    });
    
    //Marcos Avatar Movement
    var character = TweenMax.to('#mychar', 0.5, {
      x: animatedMovement,
      ease: Linear.easeNone
    });
    //Marcos Avatar Stats
    var character_stats = TweenMax.to('.character_stats', 0.5, {
      x: animatedMovement,
      ease: Linear.easeNone
    });
    //UCI logo pop-up
    var uci = TweenMax.from('.uci_logo', 0.5, {
      scale: 0,
      autoAlpha: 0,
      ease: Bounce.easeOut
    });
    //Lush logo pop-up
    var lush = TweenMax.from('.lush_logo', 0.5, {
      scale: 0,
      autoAlpha: 0,
      ease: Bounce.easeOut
    });
    //ucla logo pop-up
    var ucla = TweenMax.from('.ucla_logo', 0.5, {
      scale: 0,
      autoAlpha: 0,
      ease: Bounce.easeOut
    });
    //Trilogy logo pop-up
    var trilogy = TweenMax.from('.trilogy_logo', 0.5, {
      scale: 0,
      autoAlpha: 0,
      ease: Bounce.easeOut
    });
    //LivingSpaces logo pop-up
    var ls = TweenMax.from('.ls_logo', 0.5, {
      scale: 0,
      autoAlpha: 0,
      ease: Bounce.easeOut
    });
  
    //Marcos Avator Movement Scene
    var work1Scene = new ScrollMagic.Scene({
      triggerElement: ".target1",
      duration: '250%',
      triggerHook:1
    }).setTween(character).addTo(horController);
      //Marcos Avator Stats Movement Scene
    var work1Scene = new ScrollMagic.Scene({
      triggerElement: ".target1",
      duration: '250%',
      triggerHook:1
    }).setTween(character_stats).addTo(horController);
    //Experience Pop-up Scene - UCI
    var uciScene = new ScrollMagic.Scene({
      triggerElement: ".target_1",
      triggerHook: 0.2,
      reverse:false
    }).setTween(uci).addTo(horController);
    //Experience Pop-up Scene - Lush
    var uciScene = new ScrollMagic.Scene({
      triggerElement: ".target_2",
      triggerHook: 0.25,
      reverse:false
    }).setTween(lush).addTo(horController);
    //Experience Pop-up Scene - UCLA
    var uciScene = new ScrollMagic.Scene({
      triggerElement: ".target_3",
      triggerHook: 0.27,
      reverse:false
    }).setTween(ucla).addTo(horController);
    //Experience Pop-up Scene - Trilogy
    var uciScene = new ScrollMagic.Scene({
      triggerElement: ".target_4",
      triggerHook: 0.3,
      reverse:false
    }).setTween(trilogy).addTo(horController);
    //Experience Pop-up Scene - Living Spaces
    var uciScene = new ScrollMagic.Scene({
      triggerElement: ".target_5",
      triggerHook: 0.4,
      reverse:false
    }).setTween(ls).addTo(horController);
  
    
    var charImages = ["img/Marcos_1.png","img/Marcos_2.png"]
    var charObj = {curImg:0}
    
    var charTween = TweenMax.to(charObj, 01, {
      curImg: charImages.length -1,
      roundProps:"curImg",
      repeat:15,
      immediateRender: true,
      ease:Linear.easeNone,
      onUpdate:function() {
        $('#mychar').attr('src', charImages[charObj.curImg]);
      }
    });
    //Level Up Design by AngieFeret
    var jumpChar = TweenMax.to(charObj, 01, {
      immediateRender: true,
      ease:Linear.easeNone,
      onStart: function() {
        updateLevelUpStats();
      },
      y: '+=1000',
      onUpdate:function() {
        $('#mychar').attr('src', 'img/Marcos_3.png');
      }
    });
     var jumpChar2 = TweenMax.to(charObj, 01, {
      immediateRender: true,
      ease:Linear.easeNone,
      y: '+=1000',
      onUpdate:function() {
        $('#mychar').attr('src', 'img/Marcos_3.png');
      }
    });
     var jumpChar3 = TweenMax.to(charObj, 01, {
      immediateRender: true,
      ease:Linear.easeNone,
      y: '+=1000',
      onUpdate:function() {
        $('#mychar').attr('src', 'img/Marcos_3.png');
      }
    });
     var jumpChar4 = TweenMax.to(charObj, 01, {
      immediateRender: true,
      ease:Linear.easeNone,
      y: '+=1000',
      onUpdate:function() {
        $('#mychar').attr('src', 'img/Marcos_3.png');
      }
    });
     var jumpChar5 = TweenMax.to(charObj, 01, {
      immediateRender: true,
      ease:Linear.easeNone,
      y: '+=1000',
      onUpdate:function() {
        $('#mychar').attr('src', 'img/Marcos_3.png');
      }
    });


    function updateLevelUpStats() {
      var charLevel = $('#char_level'),
          charHp = $('#char_hp'),
          charMp = $('#char_mp')
          jumpCount = 1;

          if(jumpCount == 1) {
            charLevel.text("LvL 10");
            charHp.text("HP 1150/1150");
            charMp.text()
          }

    }
    
    var charScene = new ScrollMagic.Scene({triggerElement: ".target1", duration: '250%',triggerHook: 1}).setTween(charTween).addTo(horController);
    
    var jumpScene_uci = new ScrollMagic.Scene({triggerElement: ".target_1", duration: '10%',triggerHook: 0.2}).setTween(jumpChar).addTo(horController)
    var jumpScene_lush = new ScrollMagic.Scene({triggerElement: ".target_2", duration: '10%',triggerHook: 0.25}).setTween(jumpChar2).addTo(horController)
    var jumpScene_ucla = new ScrollMagic.Scene({triggerElement: ".target_3", duration: '10%',triggerHook: 0.27}).setTween(jumpChar3).addTo(horController)
    var jumpScene_trilogy = new ScrollMagic.Scene({triggerElement: ".target_4", duration: '10%',triggerHook: 0.3}).setTween(jumpChar4).addTo(horController)
    var jumpScene_ls = new ScrollMagic.Scene({triggerElement: ".target_5", duration: '10%',triggerHook: 0.4}).setTween(jumpChar5).addTo(horController);
    
    var tl = new TimelineLite();
  
    tl.from('.slideInUp h2', 1, {
      y: '40',
      autoAlpha: 0,
      ease: Power0.easeNone,
      delay: 0.2
    })
  
    var slideParallaxScene = new ScrollMagic.Scene({
        triggerElement: '.slideInUp',
        triggerHook: 1
      })
      .setTween(tl)
      .addTo(controller);
  
    var horizontalMoveTl = new TimelineMax();
  
    horizontalMoveTl
      .to('.horizontal-container', 1, {
        x: '-66.6666%',
        ease: Linear.easeNone
      });
  
    var pinMainScene = new ScrollMagic.Scene({
        triggerElement: '#experience_school',
        triggerHook: 0,
        duration: '450%'
      })
      .setTween(horizontalMoveTl)
      .setPin('#experience_school')
      .addTo(controller);
  
  
    // Scene 1 - pin the second section
    var pinScene01 = new ScrollMagic.Scene({
        triggerElement: '#slide01',
        triggerHook: 0,
        duration: '100%'
      })
      .setPin('#slide01 .pin-wrapper')
      .addTo(controller)
      .on("enter", () => {
        $('#slide01 .wrapper').removeClass('dont-display');
      })
  
    // Scene 2 - pin the third section
    var pinScene02 = new ScrollMagic.Scene({
        triggerElement: '#slide01',
        triggerHook: 0,
        duration: '190%'
      })
      .setPin('#slide02 .pin-wrapper')
      .addTo(controller);
  
    // Scene 3 - pin the fourth section
    var pinScene03 = new ScrollMagic.Scene({
        triggerElement: '#slide02',
        triggerHook: 0,
        duration: '190%'
      })
      .setPin('#slide03 .pin-wrapper')
      .addTo(controller)
      .on("enter", () => {
        $('#slide02_cover').fadeOut('slow');
        $('#slide02').removeClass('zelda_color');
        $('#slide02 .wrapper').removeClass('dont-display');
      });
  
    // Scene 4 - pin the fifth section
    var pinScene04 = new ScrollMagic.Scene({
        triggerElement: '#slide03',
        triggerHook: 0,
        duration: '100%'
      })
      .setPin('#slide04 .pin-wrapper')
      .addTo(controller);
  
    var editor = ace.edit("editor", {
      mode: "ace/mode/javascript",
      selectionStyle: "text"
    });
    var editor2 = ace.edit("editor2", {
      mode: "ace/mode/javascript",
      selectionStyle: "text"
    });
    var editor3 = ace.edit("editor3", {
      mode: "ace/mode/javascript",
      selectionStyle: "text"
    });
    var editor4 = ace.edit("editor4", {
      mode: "ace/mode/javascript",
      selectionStyle: "text"
    });
    editor.session.setUseWrapMode(true);
    editor.setTheme("ace/theme/monokai");
    editor.setOptions({
      
    });
    editor2.session.setUseWrapMode(true);
    editor2.setTheme("ace/theme/monokai");
    editor2.setOptions({
      
    });
    editor3.session.setUseWrapMode(true);
    editor3.setTheme("ace/theme/monokai");
    editor3.setOptions({
      
    });
    editor4.session.setUseWrapMode(true);
    editor4.setTheme("ace/theme/monokai");
    editor4.setOptions({
      
    });
  
    editor.setValue(`
  /* Since little, Marcos loved playing with legos. He loved the fact that the potential to build something was never-ending. */
    var planning = "identifies the goals or objectives to be achieved.";
    var problemSolving = "using generic or ad hoc methods, in an orderly manner, for finding solutions to problems.";
    var lego = {
      creativity: "Learned designing and prototyping",
      organization: Planning + ProblemSolving,
      fun: "develop lateral thinking in fun enviroment",
      persistent: function(err) {
          if(err) {
            findSolution();
            return solution;
          }
          else if (err) {
            takeBreak();
            findSolution();
            return solution;
          }
          else {
            enjoyLife();
          }
      },
    //How this applies to Development
      codingSkills: {
        spatialAwareness,
        problemSolving,
        organization,
        designAndArchitecture
      }
    };
    /* Legos helped Marcos to gain:
    1. Creativity: he learned to design and prototype projects.
    2. Organization: to identify goals and develop problem solving skills.
    3. Persistence: to endure spite of difficulty. */`);
    editor3.setValue(`
  /* Marcos is also passionate about Gunpla.
  Gunpla not only challanges his precision and detailing skills, but also allows him to be artistic. He loves painting each model differently making them unique */
  var fs = require("fs");
  var precision = "the quality, condition, or fact of being exact and accurate."
  var concentration = "the action or power of focusing one's attention or mental effort."
  var gunpla = {
      process: "Following specific instruction to build project",
      effort: precision + concentration,
      enhance: "intensify, increase, or further improve the quality",
      build: function() {
          fs.readFile("instruction.txt", "utf8", function(error, data) {
              if (error) {
                  readFileAgain();
              }
              else {
                  build(data);
              }
          })
      },
      //How this applies to Development
      codingSkills: {
          detail,
          artistic,
          followInstruction,
          enhance
      }
  };
  
  /* Skills gained from Gunpla:
  1. Process: Following instruction.
  2. Effort: ability to fully concentrate in a project.
  3. Enhance: implementing own ideas to improve project. */`);
    editor2.setValue(
      `
  /* Marcos Loves Video Games, specially the ones that requires critical thinking. His Favorite Game is The Legend Of Zelda series,  Zelda games have always been known for being puzzle-filled action adventure games */
  var exploration = "the action of traveling in or through an unfamiliar area in order to learn about it.";
  var puzzle = "problem designed to test ingenuity or knowledge.";
  var zelda = {
      memorization: "memorize the correct sequence",
      concept: "provides general idea on how to solve a problem",
      inquisitive: exploration + puzzle,
      senseOfAchievement: "a proud feeling of having done something difficult and worthwhile",
      //How this applies to Development
      codingSkills: {
          debugging,
          exploringNewTechnologies,
          concept,
          senseOfAchievement
      }
  };
  
  /* Zelda Games allowed Marcos to:
  1. Improve Problem Solving Skills.
  2. Identify problem and look for possible solutions.
  3. Implement solutions. */`
    );
    editor4.setValue(
      `
  /* Marcos is a passionate Developer. His loves towards Coding came from his passions in legos, gundams and video games.*/
  var marcos = {
      bornIn: "Asuncion Paraguay",
      ethnicity: "Korean",
      interests: ["Lego","Gunpla","Zelda","Final Fantasy", "Cooking","HearthStone"],
      developmentSkills: {
          frontEnd: ["HTML5", "CSS3", "Bootstrap", "Javascript", "JQuery","Handlebars JS", "React JS", "React Native" ],
          backEnd: ["FireBase", "MySQL", "MongoDB", "Node JS"],
          general_knowledge: ["C++", "Unreal Engine", Photoshop, "Phython"],
          Others: [Optimizely, DialogFlow, Tealium, BlueTriangle]
      },
      personalSKills: {
          language: ["Spanish","Korean","English"],
          fastLearner: "enthusiastic about gaining knowledge and new insights",
          highlyMotivated: "assertive individual who takes initiative with minimal supervision",
          leadership: "recognized by various employers. Achieved manager position in every job he worked for"
      }
  };`
    );
    editor.gotoLine(1);
    editor2.gotoLine(1);
    editor3.gotoLine(1);
    editor4.gotoLine(1);
    editor.setShowPrintMargin(false);
    editor2.setShowPrintMargin(false);
    editor3.setShowPrintMargin(false);
    editor4.setShowPrintMargin(false);
    editor.getSession().setUseWorker(false);
    editor2.getSession().setUseWorker(false);
    editor3.getSession().setUseWorker(false);
    editor4.getSession().setUseWorker(false);
  });

  //Background Animation

  // var $target = $('.about_wrapper');
  // inView.offset(500);
  // inView('.slide').on('enter', function(el){
  //   console.log(el, "target")
  //   var color = $(el).attr('data-background-color');
  //   $target.css('background-color', color );
  // })


  var controller2 = new ScrollMagic.Controller();

  var wipeAnimation = new TimelineMax()
    //second panel
    .to("#slideContainer", 0.5, {z:-150})
    .to("#slideContainer", 1, {x:"-25%"})
    .to("#slideContainer", 0.5, {z:0})
    //third panel
    .to("#slideContainer", 0.5, {z:-150, delay:1})
    .to("#slideContainer", 1, {x:"-50%"})
    .to("#slideContainer", 0.5, {z:0})
    //forth panel
    .to("#slideContainer", 0.5, {z:-150, delay:1})
    .to("#slideContainer", 1, {x:"-75%"})
    .to("#slideContainer", 0.5, {z:0});

new ScrollMagic.Scene({
  triggerElement: "#pinContainer",
  triggerHook: "onLeave",
  duration: "300%"
}).setPin("#pinContainer").setTween(wipeAnimation).addTo(controller2);

  // var wipeAnimation = new TimelineMax()
  //       .fromTo("section.panel.red", 1, {x: "-100%"}, {x:"0%", ease: Linear.easeNone})
  //       .fromTo("section.panel.orange", 1, {x:"100%"}, {x:"0%", ease: Linear.easeNone})
  //       .fromTo("section.panel.yellow", 1, {x:"100%"}, {x:"0%", ease: Linear.easeNone});
  // new ScrollMagic.Scene({
  //   triggerElement: "#pinContainer",
  //   triggerHook: "onLeave",
  //   duration: "300%"
  // }).setPin("#pinContainer").setTween(wipeAnimation).addTo(controller2);
	var animData = {
		wrapper: document.querySelector('#animationWindow'),
		animType: 'svg',
		loop: true,
		prerender: true,
		autoplay: true,
		path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/LEGO_loader.json'
	};
	var anim = bodymovin.loadAnimation(animData);
anim.setSpeed(3.4);