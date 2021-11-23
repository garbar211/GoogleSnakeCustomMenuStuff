alert("WELCOME! If there is an error please report it to me. Via gmail would be nice; with the explination on what is wrong. Any suggestions can also be sent my way! LAST UPDATED: WED, NOV 17 @ 10:54 am EST (Added Dark mode(hot); Bypassed images(also hot); Fixed some bugs(smh)");


req1 = new XMLHttpRequest(); req1.open('GET', 'https://raw.githubusercontent.com/DarkSnakeGang/GoogleSnakeDarkMode/main/custom_color_scheme.js'); req1.onload = function() { eval(this.responseText + 'snake.dark();'); }; req1.send();


window.snake.more_menu = function(e) {
  
  e = e || 25;
  
  // micro
  let img = new Image;
  img.src = 'https://i.postimg.cc/FHxxLK4m/micro-1.png';
  img.width = 47;
  img.height = 47;
  document.querySelector('#size').appendChild(img);

  // tiny
  img = new Image;
  img.src = 'https://i.postimg.cc/dtr6JBNh/tiny-1.png';
  img.width = 47;
  img.height = 47;
  document.querySelector('#size').appendChild(img);

  // super big
  img = new Image;
  img.src = 'https://i.postimg.cc/mg4wkHK8/superbig-1.png';
  img.width = 47;
  img.height = 47;
  document.querySelector('#size').appendChild(img);

  // ultra big
  img = new Image;
  img.src = 'https://i.postimg.cc/1RLMxTBx/ultrabig-1.png';
  img.width = 47;
  img.height = 47;
  document.querySelector('#size').appendChild(img);

  // humongous
  img = new Image;
  img.src = 'https://i.postimg.cc/vmHtLdYn/humoungus-1.png';
  img.width = 47;
  img.height = 47;
  document.querySelector('#size').appendChild(img);

  // too big
  img = new Image;
  img.src = 'https://i.postimg.cc/8CKBZnc0/toobigg-1.png';
  img.width = 47;
  img.height = 47;
  document.querySelector('#size').appendChild(img);

  // too big
  img = new Image;
  img.src = 'https://i.postimg.cc/Fsdz2CRL/purgatory.png';
  img.width = 47;
  img.height = 47;
  document.querySelector('#size').appendChild(img);


  /*--SPEEDS--*/

  // blursed
  img = new Image;
  img.src = 'https://thestuffinthemargin.files.wordpress.com/2014/04/pic176.jpg';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);

 

  // lightning
  img = new Image;
  img.src = 'https://i.postimg.cc/9Q9KJsnk/bolt.png';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);

  // snail
  img = new Image;
  img.src = 'https://i.postimg.cc/vHkC7G39/snai.png';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);

  // fast-slow 2: faster and slower
  img = new Image;
  img.src = 'https://i.postimg.cc/QxFkJtMD/bru.png';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);

  // desert bus
  img = new Image;
  img.src = 'https://www.pngall.com/wp-content/uploads/4/Side-View-School-Bus-Transparent.png';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);

  // bullet
  img = new Image;
  img.src = 'https://i.postimg.cc/xCqBt7dD/bullet.png';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);

  // hyperbullet
  img = new Image;
  img.src = 'https://i.postimg.cc/KYG6g4SY/hyperbullet.png';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);

  // ultrabullet
  img = new Image;
  img.src = 'https://i.postimg.cc/7Znv60Rc/no.png';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);

  // yeetbullet
  img = new Image;
  img.src = 'https://i.postimg.cc/NMCVrwR2/aaaaaaaaa.png';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);

  // eternity
  img = new Image;
  img.src = 'https://i.postimg.cc/mDHJv50v/eternal.png';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);

  // ultradeath
  img = new Image;
  img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Banana_of_Flame_%2815731548069%29.jpg/2560px-Banana_of_Flame_%2815731548069%29.jpg';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);


  /*--COUNTS--*/

  // 13
  img = new Image;
  img.src = 'https://meme-generator.com/wp-content/uploads/mememe/2021/03/you-suck-318991-1.jpg';
  img.width = 47;
  img.height = 47;
  document.querySelector('#count').appendChild(img);

  // 25
  img = new Image;
  img.src = 'http://29.media.tumblr.com/tumblr_lltzgnHi5F1qzib3wo1_400.jpg';
  img.width = 47;
  img.height = 47;
  document.querySelector('#count').appendChild(img);

  // 40 :rolling_eyes:
  img = new Image;
  img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAqOaaAeC26zwCFPK7LzjjACwCW085aZ8_mtqASioR9RzCf6TJP2zTIYy8_BixGvV45OE:https://i.ytimg.com/vi/ZoGWJJdVc-w/maxresdefault.jpg&usqp=CAU';
  img.width = 47;
  img.height = 47;
  document.querySelector('#count').appendChild(img);

  // 87
  img = new Image;
  img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ6ggwS_8B_a5DSL5DeoKU4uLNZcoK2uXa7VMDmHezCmuBqD9JbbLiOsMM_D4i5U8epBc:https://static.politico.com/dims4/default/2f27ccf/2147483647/resize/1160x%253E/quality/90/%3Furl%3Dhttps%253A%252F%252Fstatic.politico.com%252F6a%252Fc2%252F8eafb5a241dd8b33a47270034a0b%252F190523-trumptwitter-shafer-ap.jpg&usqp=CAU';
  img.width = 47;
  img.height = 47;
  document.querySelector('#count').appendChild(img);

  // apple bomb
  img = new Image;
  img.src = 'https://i.postimg.cc/RZR0fWZM/applebomb.png';
  img.width = 47;
  img.height = 47;
  document.querySelector('#count').appendChild(img);

  // apple nuke
  img = new Image;
  img.src = 'https://i.postimg.cc/fbvMtyDx/applenuke.png';
  img.width = 47;
  img.height = 47;
  document.querySelector('#count').appendChild(img);

  /* making do things: Come on.... do math.*/  
  const scripts = document.getElementsByTagName('script');
  for (let script of scripts) {
    const req = new XMLHttpRequest();
    req.open('GET', script.src);
    req.onload = function () {
      const code = this.responseText;
      if (code.indexOf('#A2') === -1)
        return;

      const functio = code.match(
        /[a-zA-Z0-9_$]{1,6}\.prototype\.resetState=function\(a\){a=void 0===a\?!0:a;[^]*?this,!1\)}/
      )[0];
      const thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj = functio.match(
        /0!==this\.[a-zA-Z0-9_$]{1,6}/
      )[0].replace('0!==', '');
      const pafihwotyhopyplacetheiopafsjafijplesllllllll = functio.match(
        /this\.[a-zA-Z0-9_$]{1,6}\.push\([a-zA-Z0-9_$]{1,6}\(this,/
      )[0];
      const inevilmodes = functio.match(
        /[a-zA-Z0-9_$]{1,6}\(this,2\)\|\|[a-zA-Z0-9_$]{1,6}\(this,8\)\|\|[a-zA-Z0-9_$]{1,6}\(this,9\)/
      )[0];

      eval(
        functio.replace(
          `if(c=${inevilmodes})`,
          `
          if(${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} > 2) {
            if(!(${inevilmodes})) {
              if(${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 3) {
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 0, 1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -2, 1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 0, -1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -2, -1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, -2));
              } else if(${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 4) {
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 0, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -2, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, 1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 0, 1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, 1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -2, 1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, 1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 0, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -2, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, -1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 0, -1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, -1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -2, -1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, -1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 0, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -2, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, -2));
              } else if(${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 5) {
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 0, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -2, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, 1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 0, 1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, 1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -2, 1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, 1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 0, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -2, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, -1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 0, -1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, -1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -2, -1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, -1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 0, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -2, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, -3));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -2, -3));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, -3));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 0, -3));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, -3));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 2, -2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 2, -1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 2, 0));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 2, 1));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 2, 2));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 1, 3));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 0, 3));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, 3));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -2, 3));
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -3, 3));
              } else if(${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 6) {
                for (i=-7;i<3;i++) {
                  ${pafihwotyhopyplacetheiopafsjafijplesllllllll} i, -4));
                }
                for (i=-7;i<3;i++) {
                  ${pafihwotyhopyplacetheiopafsjafijplesllllllll} i, -3));
                }
                for (i=-7;i<3;i++) {
                  ${pafihwotyhopyplacetheiopafsjafijplesllllllll} i, -2));
                }
                for (i=-7;i<3;i++) {
                  ${pafihwotyhopyplacetheiopafsjafijplesllllllll} i, -1));
                }
                for (i=-3;i<3;i++) {
                  ${pafihwotyhopyplacetheiopafsjafijplesllllllll} i, 0));
                }
                for (i=-7;i<3;i++) {
                  ${pafihwotyhopyplacetheiopafsjafijplesllllllll} i, 1));
                }
                for (i=-7;i<3;i++) {
                  ${pafihwotyhopyplacetheiopafsjafijplesllllllll} i, 2));
                }
                for (i=-7;i<3;i++) {
                  ${pafihwotyhopyplacetheiopafsjafijplesllllllll} i, 3));
                }
                for (i=-7;i<3;i++) {
                  ${pafihwotyhopyplacetheiopafsjafijplesllllllll} i, 4));
                }
              } else if(${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 7) {
                for (i=0;i<200;i++) {
                  ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, 0));
                }
              } else if(${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 8) {
                  for (i=0;i<10000;i++) {
                    ${pafihwotyhopyplacetheiopafsjafijplesllllllll} -1, 0));
                  }
              } else
                ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 100000, 1));
            } else {
              if(${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} < 7)
                for(
                  let i = 0; i < (
                    ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 3
                      ? 13
                    : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 4
                      ? 25
                    : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 5
                      ? 40
                    : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 6
                      ? 100
                    : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 7
                      ? 0
                    : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 8
                      ? 0
                    : 0
                  ); i++
                ) {
                  ${pafihwotyhopyplacetheiopafsjafijplesllllllll} i - ~~((
                    ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 3
                      ? 13
                    : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 4
                      ? 25
                    : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 5
                      ? 40
                    : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 6
                      ? 100
                    : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 7
                      ? 0
                    : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 8
                      ? 0
                    : 0
                  ) / 1.25), -4));
                  ${pafihwotyhopyplacetheiopafsjafijplesllllllll} i- ~~((
                    ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 3
                      ? 13
                    : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 4
                      ? 25
                    : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 5
                      ? 40
                    : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 6
                      ? 100
                    : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 7
                      ? 0
                    : ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 8
                      ? 0
                    : 0
                  ) / 1.25), 4));
                  
                }
              else {
                for(let i = 0; i < (
                  ${thjaselcdtctedaboupplelcountthingffjfjfjfjfjfjfjfjfjfj} === 7
                    ? 200
                  : 20000
                ); i++)
                  ${pafihwotyhopyplacetheiopafsjafijplesllllllll} 0, 0));
              }
            }
          } else if(${inevilmodes})
          `
        )
      );

      const limesarebetter = code.match(
        /[a-zA-Z0-9_$]{1,6}=function\(a\){switch\(a\.[a-zA-Z0-9_$]{1,6}\){case 1:return\.66[^}]*?1}}/
      )[0];
      const limename = limesarebetter.match(/[a-zA-Z0-9_$]{1,6}/)[0];
      const limespeed = limesarebetter.match(/switch\(a\.[a-zA-Z0-9_$]{1,6}\)/)[0].replace('switch(a.', 'this.').replace(')', '');
      const a = code.match(new RegExp(
        `this\\.[a-zA-Z0-9_$]{1,6}=[a-zA-Z0-9_$]{1,6}\\*${limename}\\(this\\);`
      ))[0];
      eval(
        limesarebetter.replace(
          '1.33;',
          `1.33;case 3:return _soup;case 4:return 0.45;case 5:return 1.85;case 6:return _soep;case 7:return 18.5;case 8:return 0.35;case 9:return 0.25;case 10:return 0.15;case 11:return 0.05;case 12:return 26640;case 13:return 0.00001;`
        )
      );
      
      const soup = code.match(
        /[a-zA-Z0-9_$]{1,6}\.prototype\.update=function\(\){[^]*?this\)}}}}/
      )[0];
      const f = soup.match(
        /:this\.[a-zA-Z0-9_$]{1,6}\+=1;this\.[a-zA-Z0-9_$]{1,6}\+\+;/
      )[0];
      eval('var _soup = 1.33;');
      eval('var _soep = 1.85;');
      eval(
        soup.replace(
          f,
          f + `_soup = Math.random() < .5 ? .66 : 1.33;_soep = Math.random() < .5 ? .45 : 1.85;${limespeed} === 3 && (${a.replace(limename + '(this);', '_soup')});${limespeed} === 6 && (${a.replace(limename + '(this);', '_soep')});`
        )
      );

      const fishes = code.match(
        /[a-zA-Z0-9_$]{1,6}=function\(a\){[^}]*?h6Ousc[^]*?\(a\)}/
      )[0];
      const words = fishes.match(
        /0!==a\.[a-zA-Z0-9_$]{1,6}/
      )[0].replace('0!==', '');


      eval(
        fishes.replace(
          '(a)}',
          `(a)
            if(${words} < 3) {
              __b = document.body.getElementsByClassName('UJhXPd wSwbef EWyEF')[0];
              [...__b.children].forEach((e, i) => i > 1 && (__b.removeChild(__b.children[i])));
            }
            if(${words} === 3) {
              __b = document.body.getElementsByClassName('UJhXPd wSwbef EWyEF')[0];
              [...__b.children].forEach((e, i) => i > 1 && (__b.removeChild(__b.children[i])));
              __c = new Image;
              __c.src = 'https://thumbs.dreamstime.com/z/number-isolated-white-background-110844960.jpg';
              __c.width = __c.height = 47;
              __c.style = 'position:fixed;top: 10px;';
              __b.appendChild(__c);
            }
            if(${words} === 4) {
              __b = document.body.getElementsByClassName('UJhXPd wSwbef EWyEF')[0];
              [...__b.children].forEach((e, i) => i > 1 && (__b.removeChild(__b.children[i])));
              __c = new Image;
              __c.src = 'https://thumbs.dreamstime.com/z/25-anniversary-8592773.jpg';
              __c.width = __c.height = 47;
              __c.style = 'position:fixed;top: 10px;';
              __b.appendChild(__c);
            }
            if(${words} === 5) {
              __b = document.body.getElementsByClassName('UJhXPd wSwbef EWyEF')[0];
              [...__b.children].forEach((e, i) => i > 1 && (__b.removeChild(__b.children[i])));
              __c = new Image;
              __c.src = 'https://www.funimada.com/assets/images/cards/big/40th-birthday-36.gif';
              __c.width = __c.height = 47;
              __c.style = 'position:fixed;top: 10px;';
              __b.appendChild(__c);
            }
            if(${words} === 6) {
              __b = document.body.getElementsByClassName('UJhXPd wSwbef EWyEF')[0];
              [...__b.children].forEach((e, i) => i > 1 && (__b.removeChild(__b.children[i])));
              __c = new Image;
              __c.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Bundesstra%C3%9Fe_87_number.svg/1200px-Bundesstra%C3%9Fe_87_number.svg.png';
              __c.width = __c.height = 47;
              __c.style = 'position:fixed;top: 10px;';
              __b.appendChild(__c);
            }
            if(${words} === 7) {
              __b = document.body.getElementsByClassName('UJhXPd wSwbef EWyEF')[0];
              [...__b.children].forEach((e, i) => i > 1 && (__b.removeChild(__b.children[i])));
              __c = new Image;
              __c.src = 'https://i.postimg.cc/RZR0fWZM/applebomb.png';
              __c.width = __c.height = 47;
              __c.style = 'position:fixed;top: 10px;';
              __b.appendChild(__c);
            }
            if(${words} === 8) {
              __b = document.body.getElementsByClassName('UJhXPd wSwbef EWyEF')[0];
              [...__b.children].forEach((e, i) => i > 1 && (__b.removeChild(__b.children[i])));
              __c = new Image;
              __c.src = 'https://i.postimg.cc/fbvMtyDx/applenuke.png';
              __c.width = __c.height = 47;
              __c.style = 'position:fixed;top: 10px;';
              __b.appendChild(__c);
            }
          }`
        )
      );

      const meat = code.match(
        /[a-zA-Z0-9_$]{1,6}=function\(a\){a\.[a-zA-Z0-9_$]{1,6}\.clearRect\(0,0,[^]*?0\),0,b\)}/
      )[0];
      const ul = meat.match(
        /var b=a\.[a-zA-Z0-9_$]{1,6}\.width/
      )[0].replace('var b=', '');
      const mDb = meat.match(
        /a\.[a-zA-Z0-9_$]{1,6}\.render/g
      )[1].replace('.render', '');
      const Hw = meat.match(
        /1===a\.[a-zA-Z0-9_$]{1,6}/
      )[0].replace('1===', '');
      eval(
        meat.replace(
          '&&',
          '?'
        ).replace(
          'd));',
          `d)) : ${Hw} !== 0 && (${mDb}.context.drawImage(document.querySelector('#speed').children[${Hw}], ${ul} - 80, c.y - 80, 80, 80));`
        )
      );
      

      eval(
        code.match(
          /[a-zA-Z0-9_$]{1,6}=function\(a\){switch\(a\.[a-zA-Z0-9_$]{1,6}\){case 2:return 512;[^]*?256}}/
        )[0].replace(
          '96;',
          `96;case 3:return ${e};case 4:return 48;case 5:return 1200;case 6:return 3500;case 7:return 10000;case 8:return 25000;case 9:return 100000;`
        )
      );
    };
    req.send();
  }
};


