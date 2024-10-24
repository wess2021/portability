   // Get modal elements
   var modal = document.getElementById("clauseModal");
   var openModalBtn = document.getElementById("openModal");
   var closeModalBtn = document.getElementById("closeModal");
   var closeModalFooterBtn = document.getElementById("closeModalFooter");

   // Open modal when link is clicked
   openModalBtn.onclick = function(event) {
       event.preventDefault();
       modal.style.display = "flex";
   }

   // Close modal when 'X' is clicked
   closeModalBtn.onclick = function() {
       modal.style.display = "none";
   }

   // Close modal when 'Fermer' button is clicked
   closeModalFooterBtn.onclick = function() {
       modal.style.display = "none";
   }

   // Close modal if clicking outside of modal content
   window.onclick = function(event) {
       if (event.target == modal) {
           modal.style.display = "none";
       }
   }