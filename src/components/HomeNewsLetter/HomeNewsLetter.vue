<template lang="pug">
.homeNewsLetter
  .homeNewsLetter__imgWrapper
    img.homeNewsLetter__img(src='@/assets/img/newsLetter.jpg' alt='newsLetter' loading='lazy')
  .homeNewsLetter__infoBlock
    h5.homeNewsLetter__title NEWSLETTER
    .homeNewsLetter__infoBlockWrapper
      p.homeNewsLetter__text Exklusive Vorab-Informationen zu unseren Projekten. Aktuelle Angebote zum Kauf und zur Miete. Spannende Trendreports und Insights aus dem Immobilienmarkt. Architektur, Lifestyle und Design.
      form.homeNewsLetter__form
        label.homeNewsLetter__mailLabel(for='email')
          input.homeNewsLetter__mailInput(type="email" id="email" name="email" placeholder="Ihre E-Mail-Adresse" required) 
          .homeNewsLetter__submitWrapper
            button.homeNewsLetter__submit JETZT REGISTRIEREN
        p.homeNewsLetter__checkbox
          input.homeNewsLetter__checkboxInput(type="checkbox" id="terms" name="terms" required)
          label.homeNewsLetter__checkboxLabel(for='terms') Ich stimme der Datenschutzerklärung zu
        
  
</template>

<script>
// import { ref } from 'vue';
export default {
  name: 'HomeVision',
  setup() {
    
    return {

    };
  },
};
</script>

<style src="./_homeNewsLetter.scss" lang="scss"></style>
