import React, { useState ,useEffect} from "react";
import Navbar from "./Components/Navbar"
import {apiUrl,filterData} from "./data";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import {toast} from "react-toastify";
import Spinner from "./Components/Spinner"

const App = () => {
  
  const [courses,setCourses] = useState([]);
  const [loading,setLoading] = useState(false);

  async function fetchData(){
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      //console.log(output)
      setCourses(output.data);
      //console.log(courses);
    }
    catch(error){
      toast.error("Network is not stable");
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return(
    <div className="min-h-screen flex flex-col">
      <div>
      <Navbar/>
      </div>
      <div>
      <Filter filterData={filterData}/>
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner/>):( <Cards courses={courses}/>)
        }
      </div>
    </div>
  );
};

export default App;
