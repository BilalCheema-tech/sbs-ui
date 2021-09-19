const assert = require('assert');

Feature('audioPlayer');

Before(({ I }) => {
    I.amOnPage('/language/english/audio/sbs-hindi-news-13-july-2021-more-financial-support-amid-extended-nsw-lockdown');
  });
  
Scenario('Navigate to SBS given url and verify the title of audio track', ({ I }) => {
    I.say('I am loading sbs news');
    I.see('SBS Hindi News 13 July 2021: More financial support amid extended NSW lockdown', {css: '.audiotrack__title'});
});

Scenario('Verify subscribe dropdown displays apple and google podcasts', ({ I }) => {
    I.see('SUBSCRIBE');
    // Click on Subscribe
    I.click('.podcast-subscribe__label span:nth-of-type(1)'); 
    I.see('APPLE PODCASTS'); 
    I.see('GOOGLE PODCASTS'); 
});

Scenario('Verify clicking play on the audio icon  and verify audio player is launched at the bottom of the screen', ({ I }) => {
    I.click('[data-type="audio-player-play-pause"] [aria-hidden]');
    I.seeElement('[id="mod-audio-player_module-1"]');
});

Scenario('Verify player controls: play, pause, mute and unmute', ({ I }) => {
    I.click('[data-type="audio-player-play-pause"] [aria-hidden]'); // Play
    I.click('.audio-player__loader [data-type]'); //Pause
    I.click('[aria-label="Mute"]') //Mute
    I.click('[aria-label="Mute"]') //UnMute
});

Scenario('Verify scrub on the progress bar on clicking 20s forward on the audio player', ({ I }) => {
    I.click('[data-type="audio-player-play-pause"] [aria-hidden]'); // Play
    I.click['.audio-player__loader [data-type]'] //Pause
    I.seeElement('[aria-label="Elapsed Time"]')
    I.click('[class="audio-player__icon icon icon--step-back-20"]')
    I.see('00:00')    
    I.click('[class="audio-player__icon icon icon--step-forward-20"]') //Step forward 20s
    I.see('00:20')
});

Scenario('Verify clicking on language toggle displays language list', ({ I }) => {
    I.click('[data-type="toggle-language"] [aria-hidden]'); //toggle button
    I.see('English')
});

