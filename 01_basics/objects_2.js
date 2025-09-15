//const FBuser = new Object();

const FBuser = {};
FBuser.id = "123@abc";
FBuser.name = "Chhavi";
FBuser.IsLoggedIn = false;

// console.log(FBuser);

const regularUser = {
    email: "give@gmail.com",
    Fullname: {
        userFullanme: {
            firstname: "Sneha",
            lastname: "Mehta"
        }
    }
}
// console.log(regularUser.email);
// console.log(regularUser.Fullname);
// console.log(regularUser.Fullname.userFullanme.lastname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);
const obj3 = {...obj1, ...obj2};
console.log(obj3);
console.log(Object.keys(FBuser));
console.log(Object.values(FBuser));
console.log(Object.entries(FBuser));

console.log(FBuser.hasOwnProperty('email'));