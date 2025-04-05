import React from "react";
import Card from './components/Card'
const App = () => {

  const user=
  [
    {
      "username": "jane_doe",
      "city": "Mumbai",
      "age": 25,
      "profession": "Software Engineer",
      "profile_photo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
    },
    {
      "username": "rahul_123",
      "city": "Delhi",
      "age": 30,
      "profession": "Marketing Manager",
      "profile_photo": "https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
    },
    {
      "username": "anaya_k",
      "city": "Bengaluru",
      "age": 22,
      "profession": "Graphic Designer",
      "profile_photo": "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c"
    },
    {
      "username": "vicky_99",
      "city": "Ahmedabad",
      "age": 28,
      "profession": "Civil Engineer",
      "profile_photo": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
    },
    {
      "username": "sneha_r",
      "city": "Pune",
      "age": 26,
      "profession": "Doctor",
      "profile_photo": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
    },
    {
      "username": "arjun_s",
      "city": "Kolkata",
      "age": 31,
      "profession": "Lawyer",
      "profile_photo": "https://images.unsplash.com/photo-1629112313244-2f663b36e122"
    },
    {
      "username": "meera_21",
      "city": "Hyderabad",
      "age": 24,
      "profession": "Teacher",
      "profile_photo": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
    },
    {
      "username": "rohit_t",
      "city": "Chennai",
      "age": 27,
      "profession": "Data Analyst",
      "profile_photo": "https://images.unsplash.com/photo-1502767089025-6572583495b0"
    },
    {
      "username": "kiara.m",
      "city": "Jaipur",
      "age": 23,
      "profession": "Architect",
      "profile_photo": "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7"
    },
    {
      "username": "dev_rock",
      "city": "Surat",
      "age": 29,
      "profession": "Entrepreneur",
      "profile_photo": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
    }
  ]
  
  
  return (
    <div>
   <div className="p-6">
   {user.map(function(elem,idx){
      return <Card 
      key={idx}
      username={elem.username} 
      age={elem.age} 
      city={elem.city} 
      prof={elem.profession} 
      photo={elem.profile_photo}/>
    })
    
    }
   </div>
    
    </div>
  );
};

export default App;
