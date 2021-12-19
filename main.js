var names=["My family book","Srinivasa Chakarvarthy Bandaru","Harathi Bandaru","Khyatisri Bandaru","Mohitteja srisuryasathyanarashimha bandaru"];
var images=["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/wjMnFtMX/father.jpg","https://i.postimg.cc/bw5W5zSK/mother.jpg","https://i.postimg.cc/JnL6wtrd/sister.jpg","https://i.postimg.cc/5ymDKL83/bro.jpg"];
var i=0;
function Next(){
    if(i==5){
    i=0;
    }
    document.getElementById("Member_image").src=images[i];
    document.getElementById("member_name").innerHTML=names[i];
i++;
}