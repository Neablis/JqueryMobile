      //  This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');
      tag.src = "http://www.youtube.com/player_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      //  This function creates an <iframe> (and YouTube player)
      //    after the API code downloads. 
      var player;
      function onYouTubePlayerAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'RrYZDWuBptI',
          rel:0,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
        
        setInterval(updatePlayerInfo, 100);
      }
      
      //  The API will call this function when the video player is ready.
      function onPlayerReady(event) {

      }
      
      // Takes a elementID and replace the value with a new value
      function updateHTML(elmId, value) {
        document.getElementById(elmId).innerHTML = value;
      }

      function updatePlayerInfo(){
        // Also check that at least one function exists since when IE unloads the
        // page, it will destroy the SWF before clearing the interval.
        if(player && player.getDuration) {
          updateHTML("videoDuration", player.getDuration());
          updateHTML("videoCurrentTime", player.getCurrentTime());
        }
      }
      //    The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      function onPlayerStateChange(event) {
        updateHTML("playerState", event.data);     
      }
      
      //stops video playback
      function stopVideo() {
        player.stopVideo();
      }
      
      //plays the video
      function playVideo() {
        if (player) {
          player.playVideo();
        }
      }
      
      //pauses the video
      function pauseVideo() {
        if (player) {
          player.pauseVideo();
        }
      }
      
      //muted video
      function muteVideo() {
        if(player) {
          player.mute();
        }
      }
      
      //Unmutes the video
      function unMuteVideo() {
        if(player) {
          player.unMute();
        }
      }
      
      //loads a new video by ID
      function loadVideo() {
        notSet = true;
        player.loadVideoById(document.frmOne.urlText.value);  
      }
