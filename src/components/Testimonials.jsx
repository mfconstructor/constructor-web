import React from 'react'
import { contactDetails } from '../constants'
import styles, { layout } from "../style";
import ContactDetail from './ContactDetail'

const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexce} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40'/>
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={styles.heading2}>Skontaktuj się</h2>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Jeśli jesteś zainteresowany współpracą lub masz pytania, nie wahaj się skontaktować z nami. Chętnie odpowiemy na wszystkie Twoje pytania i zaplanujemy projekt dostosowany do Twoich potrzeb.
          </p>  
        </div>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {contactDetails.map((contactDetails) => (
          <ContactDetail key={contactDetails.id} {...contactDetails}/>        
        ))}
      </div>      
    </section>
  )
}

export default Testimonials
