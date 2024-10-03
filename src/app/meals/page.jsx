import React from 'react';
import Meals from '../../components/Meals';
import styles from './styles.module.css';


export const metadata = {
    title: " Meals | Next App",
    description: "Meals Page",
  };
  

const MealsPage = () => {
    return (
        <div>
            <h1 className={styles.orange}>Choose your favourite dishes</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, accusamus.</p>

           <Meals />
           
          
        </div>
    );
};

export default MealsPage;