<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
});
const slides = props.slides;

const currentIndex = ref(0);

const next = () => {
  if (slides && slides.length > 0) {
    currentIndex.value = (currentIndex.value + 1) % slides.length;
  }
};

const prev = () => {
  if (slides && slides.length > 0) {
    currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length;
  }
};

const goToSlide = (index) => {
  if (slides.length > 0) {
    currentIndex.value = index;
  }
};
</script>

<template>
  <div class="slideshow">
    <div class="slides">
      <img :src="slides[currentIndex].image" class="slide" alt="Diashow Bild" />
      <div class="news-overlay">
        <p class="news-text">{{ slides[currentIndex].news }}</p>
      </div>
    </div>
    <button class="prev" @click="prev">&#10094;</button>
    <button class="next" @click="next">&#10095;</button>
    <div class="dots">
      <span
        v-for="(slide, index) in slides"
        :key="index"
        :class="{ active: index === currentIndex }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

  <style>
.slideshow {
  margin-top: 10rem;
  position: relative;
  width: 600px;
  height: 400px;;
  max-width: 600px;
  overflow: hidden;
  margin-bottom: 2rem;
}
.slides {
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.slide {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}
.aboutSlides {
  width: 100%;
  height: 400px;
  display: flex;
  margin: 0px auto;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: relative;
}
  
  button.prev,
button.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  user-select: none;
  border-radius: 4px;
  z-index: 10;
  }
  
  button.prev {
    left: 10px;
  }
  button.next {
    right: 10px;
  }
  .dots {
    text-align: center;
    margin-top: 10px;
  }
  
  .dots span {
    display: inline-block;
    height: 10px;
    width: 10px;
    margin: 0 5px;
    background-color: #bbb;
    border-radius: 50%;
    cursor: pointer;
  }
  
  .dots .active {
    background-color: #0c4b47;
  }
  .news-overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  padding: 1rem;
  border-radius: 0 0 8px 8px;
  box-sizing: border-box;
}

.news-scroll {
  max-height: 100%;
  overflow-y: auto;
}

.news-text {
  font-size: 1rem;
  color: #0c4b47;
  font-family: 'Helvetica', sans-serif;
}
.dots {
  text-align: center;
  margin-top: 10px;
}
.dots span {
  display: inline-block;
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: #bbb;
  border-radius: 50%;
  cursor: pointer;
}
.slideshow-outer {
  position: center;          
  display: flex;
  justify-content: center;   
  align-items: center;                    
}

.dots .active {
  background-color: #0c4b47;
}

</style>
  
