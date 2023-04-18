import { render } from '@testing-library/react';
import React from 'react';
import './userdetails.css'

class UserDetails extends React.Component{
    render(){
        
        return(
            <body className="body2">
    <div class="container d-flex justify-content-center ">
        <div class="card p-3 py-4">
            <div class="text-center"> 
            <img src="https://i.imgur.com/stD0Q19.jpg" width="100" class="rounded-circle"/>
                <h3 class="mt-2">Maria Smantha</h3>
                <span class="mt-1 clearfix">Android Developer</span>
                
            
                
                <hr class="line"/>
                <p className=''>Name: <font >Karan Singh</font></p>
                <p className=''>Email: <font >ks5754111@gmail.com</font></p>
                <p className=''>Phone: <font >9315959165</font></p>
                <p className=''>Address: <font >karanbhai ka ghr</font></p>
                
                  
                 {/* <div class="profile mt-5">
                 
                 <button class="profile_button px-5">View profile</button>
    
            </div> */}
                   
            </div>
        </div>
    </div>
    </body>
        );
    }
   
}

export default UserDetails;