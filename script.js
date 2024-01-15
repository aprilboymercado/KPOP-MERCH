let menu = document.querySelector("#menu-icon");
let nako = document.querySelector(".nako");
let logo = document.querySelector(".logo");
menu.addEventList("click", function () {
	navbar.classlist.toggle("active");
});


window.onscroll =() =>{
	navbar.classlist.remove("active");
};

<script>
    function showSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'flex';
    }

    function hideSidebar() {
        const sidebar = document.querySelector('.sidebar'); // Change '.hidebar' to '.sidebar'
        sidebar.style.display = 'none';
    }
</script>