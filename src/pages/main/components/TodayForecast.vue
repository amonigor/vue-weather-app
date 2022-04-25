<template>
  <div class="today-forecast">
    <Card class="main">
      <p class="date">22 de abril, 22:42</p>
      <p class="location">São Vicente, SP - Brasil</p>
      <div class="weather">
        <p class="temperature">27<span>ºC</span></p>
        <img src="https://openweathermap.org/img/wn/10d@2x.png" />
      </div>
      <p class="details">Chovendo com sensação térmica de 23 ºC</p>
    </Card>

    <Card class="other">
      <p class="title">Detalhes atuais</p>
      <p class="item">Umidade <span>80%</span></p>
      <p class="item">Ponto de condesação <span>20 ºC</span></p>
      <p class="item">Índice UV <span>0</span></p>
      <p class="item">Visibilidade <span>13 km</span></p>
      <p class="item">Velocidade do Vento <span>1.54 m/s</span></p>
    </Card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "today-forecast",
  components: { Card },
};
</script>

<style scoped lang="scss">
p {
  margin: 0;
  font-size: 1rem;
}

.today-forecast {
  align-items: flex-start !important;
}

.main,
.other {
  min-height: 286px;
  height: 100%;
}

.main {
  width: calc(60% - 30px);
  margin-right: 30px;

  .location {
    font-weight: 600;
    font-size: 2rem;
    margin-top: 10px;
  }

  .weather {
    display: flex;
    align-items: center;
    margin: 20px 0;

    .temperature {
      font-weight: 700;
      font-size: 4rem;

      span {
        font-weight: 400;
        font-size: 2rem;
        vertical-align: text-top;
        margin-left: 5px;
      }

      img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        object-position: center center;
      }
    }
  }
}

.other {
  width: 40%;

  .title {
    font-weight: 700;
    margin-bottom: 10px;
  }

  .item {
    margin: 20px 0;

    span {
      font-weight: 600;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}

@media only screen and (max-width: 900px) {
  .main {
    width: calc(60% - 15px);
    margin-right: 15px;
  }
}

@media only screen and (max-width: 650px) {
  .main,
  .other {
    min-height: unset;
    height: 100%;
  }

  .main {
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;

    .location {
      font-size: 1.5rem;
    }
  }

  .other {
    width: 100%;
  }
}
</style>
