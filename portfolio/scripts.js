window.onload = async function() {
    let name = "Raphael Zadny";
    let job = "Student @ HTL-Braunau";
    let location = "Braunau, Austria";
    
    let nameElement = document.getElementById("name");
    let jobElement = document.getElementById("job");
    let locationElement = document.getElementById("location");

    nameElement.innerText = "";
    jobElement.innerText = "";
    locationElement.innerText = "";

    // Revealing name
    for (let i = 0; i < name.length; i++) {
        nameElement.innerText = name.substring(0, i + 1);
        await new Promise(resolve => setTimeout(resolve, 85)); // 95ms delay
    }
    
    // Revealing job
    for (let i = 0; i < job.length; i++) {
        jobElement.innerText = job.substring(0, i + 1);
        await new Promise(resolve => setTimeout(resolve, 30)); // 95ms delay
    }

    // Revealing location with the icon
    for (let i = 0; i < location.length; i++) {
        locationElement.innerHTML = `<span class="material-icons">location_city</span> ${location.substring(0, i + 1)}`;
        await new Promise(resolve => setTimeout(resolve, 30)); // 95ms delay
    }
};