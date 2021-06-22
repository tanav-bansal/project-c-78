var images = [""];

var names = ["Ashok Bansal","Seema bansal","Harshal Bansal","Tanav Bansal"];

var i = 0;

function update() 
{
i++;

var number_of_family_members = 3;

if(i > number_of_family_members)
{
    i = 0
}
var update_images = images[i];

var update_names = names[i]

document.getElementById("family_member_image").src = update_images;

document.getElementById("name_of_the_family_member").innerHTML = update_names;
}