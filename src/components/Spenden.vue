<script setup>
</script>

<template>
  <div class="info-section">
    <h2>Warum du spenden solltest – und wofür wir das Geld verwenden</h2>
    <div class="donation-list">
      <ul>
        <li>Medizinische Versorgung verletzter oder ausgesetzter Vögel</li>
        <li>Arbeit von spezialisierten Tierärzten</li>
        <li>Medikamente für unsere Schützlinge</li>
        <li>Materialien für die Klinik</li>
        <li>Volierenausstattung und artgerechtes Futter</li>
      </ul>
    </div>
  </div>

  <div class="spenden-container">
    <h1>Unterstütze unsere Arbeit</h1>
    <p>Mit einer Spende hilfst du verletzten Wildvögeln.</p>
    <form action="https://www.paypal.com/donate" method="post" target="_blank" rel="noopener noreferrer">
      <input type="hidden" name="hosted_button_id" value="PLZ4C5GKUU5LG" />
      <input type="submit" value="Jetzt via PayPal spenden" class="paypal-button" />
    </form>
  </div>
</template>

<style scoped>
* {
  font-family: 'Helvetica', sans-serif;
  color: #0c4b47;
}
.info-section {
  background: #f9f9f9;
  font-family: 'Helvetica', sans-serif;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  max-width: 800px;
  margin: 10rem auto 2rem auto;
  padding: 2rem;
}

.info-section h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.donation-list ul {
  list-style-type: disc;
  padding-left: 1.5rem;
}

.donation-list li {
  margin-bottom: 0.6rem;
  font-size: 1.1rem;
}

.spenden-container {
  max-width: 600px;
  margin: 4rem auto;
  text-align: center;
}

.spenden-container h1 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.spenden-container p {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.paypal-button {
  background-color: #003087;
  border: none;
  color: white;
  padding: 0.8rem 1.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.paypal-button:hover {
  background-color: #012169;
}

</style>
