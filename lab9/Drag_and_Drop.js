//vue

new Vue({
    el: "#app",
    data: {
        post_iteam: []
    } ,
    mounted(){
      axios
          .get('https://isidea.ru/rgups_data.json')
          .then(respose => this.post_iteam = respose.data)
    } 
  });
  
  
  let open_modal = document.querySelector('a[href*="#user"]');
  let close_modal = document.querySelector(".x");
  //модалка
  open_modal.addEventListener("click", function(){
      let modal_all = document.querySelector(".background_modal");
      var modal = document.getElementById('window');
      modal_all.style.display = "flex";
      modal.style.display = "flex";
  })
  
  close_modal.addEventListener("click", function(){
      let modal_all = document.querySelector(".background_modal");
      var modal = document.getElementById('window');
      modal_all.style.display = "none";
      modal.style.display = "none";
  })
  
  //Drag and drop
  
  var modal_header = document.getElementById('header-modal');
  var modal = document.getElementById('window');
  
  modal_header.onmousedown = function(e) {
      modal_header.style.cursor = "grabbing";
    var coords = getCoords(modal);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;
  
    modal.style.position = 'absolute';
    document.body.appendChild(modal);
    moveAt(e);
  
    modal.style.zIndex = 1000;
  
    function moveAt(e) {
      modal.style.left = e.pageX - shiftX + 'px';
      modal.style.top = e.pageY - shiftY + 'px';
    }
  
    document.onmousemove = function(e) {
      moveAt(e);
    };
  
    modal_header.onmouseup = function() {
      document.onmousemove = null;
      modal_header.style.cursor = "grab";
      modal_header.onmouseup = null;
    };
  
  }
  
  modal_header.ondragstart = function() {
    return false;
  };
  
  function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }