var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","https://media.istockphoto.com/vectors/businessman-ceo-vector-id158258834?k=20&m=158258834&s=170667a&w=0&h=Yb7DTJTreqvXDgHfUNLDG1oN1ZbQHT7MQRiFPltubbA="
, "https://media.istockphoto.com/vectors/happy-businessman-spreading-his-hands-to-the-sides-man-pointing-away-vector-id1050148890?k=20&m=1050148890&s=170667a&w=0&h=lWCjGiUmL21ordj66EireTP5ZD6Rzan1Z117S2Whmus="
 , "https://media.istockphoto.com/vectors/woman-portrait-vector-id1057822270?k=20&m=1057822270&s=612x612&w=0&h=gB57ApKNaWB4S38cKm1VF2M4H78e8zwQmgB6rRpFl0Y="
 , "https://cdn1.vectorstock.com/i/1000x1000/62/25/smiling-guy-is-a-college-student-a-young-male-vector-33956225.jpg"
 , "https://image.shutterstock.com/image-vector/illustration-teenage-girl-happy-yes-260nw-1323740579.jpg"];

var names = ["Family Book","Vinay Jaiswal - Grandfather", "Girish Jaiswal - Father", "Alayna Jaiswal- Mother", "Veeraj Jaiswal - Brother", "Diksha Jaiswal - Sister"];

var age = [60, 40, 60, 30, 25, 20]

/*

We must sort the elements present inside the array "age" to print the age value of the family member for the respective family member.

Write: "age.sort()"

*/

age.sort();
console.log(age);
/*

We must reverse the elements present inside the array "age" to print the age value of the family member for the respective family member.
After sorting the array "age", all the elements must be arranged in an ascending manner and our family book consists of the exact opposite list i.e. all the first member is Grandfather followed by father and so on ie. in the decending manner.

Write: "age.reverse()"

*/
age.reverse();
console.log(age);
var i = 0;

function update()
{
    i++;

    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    
    var updatedImage = images[i];

    var updatedName  = names[i];
    
    var updatedAge = age[i]

    document.getElementById("family_member_image").src = updatedImage;
    
    document.getElementById("family_member_name").innerHTML = updatedName;

    document.getElementById("family_member_age").innerHTML = updatedAge;

    /*

    To find the maximum age value amongst the family members, we need to use the Math, and the max function together and to display the maximum age, we need print the value. Thus make use of console.

    Write:  "var max_number = Math.max.apply(Math, age)
            "console.log("The highest age is: ", max_number)"

    */

    var max_number = Math.max.apply(Math, age );
    console.log("The highest age is: " , max_number  );

    /*

    To find the minimum age value amongst the family members, we need to use the Math, and the min function together and to display the maximum age, we need print the value. Thus make use of console.

    Write:  "var min_number = Math.min.apply(Math, age)
            "console.log("The lowest age is: ", min_number)"

    */

    var min_number = Math.min.apply(Math, age);
    console.log("The lowest age is: ", min_number  );
}