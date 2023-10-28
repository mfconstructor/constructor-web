import React from 'react'
import styles, { layout } from "../style";
import ContactDetail from './ContactDetail'
import { contactDetails } from '../constants'

const CTA = () => {
  return (
    <section id="kontakt" className={`flex md:flex-row flex-col ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className={`${layout.sectionInfo} flex-col`}>
        <h2 className={styles.heading2}>Kontakt</h2>
        <p className={`${styles.paragraph} max-w-[700px] mt-5`}>
        Jeśli jesteś zainteresowany współpracą lub masz pytania, nie wahaj się skontaktować z nami. Chętnie odpowiemy na wszystkie Twoje pytania i zaplanujemy projekt dostosowany do Twoich potrzeb.
        </p>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {contactDetails.map((contactDetails) => (
          <ContactDetail key={contactDetails.id} {...contactDetails}/>        
        ))}
      </div>  
    </section>
  )
}

export default CTA
