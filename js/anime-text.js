document.addEventListener('DOMContentLoaded', function(){
  let subtitle = document.querySelector("#subtitle .letters");
  if(subtitle){
    const splited_html = subtitle.textContent.replace(/([^\x00-\x126]|\w)/g, "<span class='letter'>$&</span>");
    subtitle.innerHTML = splited_html;

    anime.timeline()
    .add({
      targets: '#subtitle .line',
      scaleX: [0,1],
      opacity: [0.5,1],
      easing: "easeInOutExpo",
      duration: 900
    }).add({
      targets: '#subtitle .letter',
      opacity: [0,1],
      translateX: [40,0],
      translateZ: 0,
      scaleX: [0.3, 1],
      easing: "easeOutExpo",
      duration: 800,
      offset: '-=600',
      delay: function(el, i) {
        return 150 + 25 * i;
      }
    });
  }
});
