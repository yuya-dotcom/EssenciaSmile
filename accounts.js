// Add new account Modal 
const dialog = document.getElementById("addAccount-dialog")

function showAddNewAcc(){
dialog.showModal()
}
const closeBtn = document.getElementById("btn-addAccount");
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    dialog.close();
  });
}

//Drop down 
(function () {

  // Position dropdown in viewport (fixed)
  function positionDropdown(menu, button) {
    const rect = button.getBoundingClientRect();
    const menuWidth = menu.offsetWidth;

    menu.style.top = (rect.bottom + 4) + "px";      // 4px gap below button
    menu.style.left = (rect.right - menuWidth) + "px";
    menu.style.position = "fixed";                  // IMPORTANT: escape container boundaries
    menu.style.zIndex = 3000;                       // Above everything
  }

  // Close all dropdowns
  function closeAllDropdowns() {
    document.querySelectorAll('.dropdown.open').forEach(function (d) {
      d.classList.remove('open');
      const btn = d.querySelector('.menu-btn');
      if (btn) btn.setAttribute('aria-expanded', 'false');
      const menu = d.querySelector('.dropdown-menu');
      if (menu) menu.setAttribute('aria-hidden', 'true');
    });
  }

  // Toggle a single dropdown
  function toggleDropdown(dropdown, button) {
    const isOpen = dropdown.classList.contains('open');
    closeAllDropdowns();

    if (!isOpen) {
      dropdown.classList.add('open');

      const btn = dropdown.querySelector('.menu-btn');
      if (btn) btn.setAttribute('aria-expanded', 'true');

      const menu = dropdown.querySelector('.dropdown-menu');
      if (menu) {
        menu.setAttribute('aria-hidden', 'false');
        positionDropdown(menu, button);     // <<< POSITION DROPDOWN HERE
      }
    }
  }

  // Click handler on the page
  document.addEventListener('click', function (e) {
    const clickedMenuBtn = e.target.closest('.menu-btn');

    if (clickedMenuBtn) {
      const dropdown = clickedMenuBtn.closest('.dropdown');

      if (dropdown) {
        toggleDropdown(dropdown, clickedMenuBtn);    // <<< PASS BUTTON HERE
      }
      return;
    }

    // If clicked a dropdown item, do its action then close menus
    const clickedItem = e.target.closest('.dropdown-item');
    if (clickedItem) {
      const action = clickedItem.dataset.action || null;
      setTimeout(closeAllDropdowns, 100);
      return;
    }

    // Clicked outside → close all
    if (!e.target.closest('.dropdown')) {
      closeAllDropdowns();
    }
  });

  // Close dropdowns on ESC key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAllDropdowns();
  });

  // Optional: close on window blur
  window.addEventListener('blur', closeAllDropdowns);

})();

