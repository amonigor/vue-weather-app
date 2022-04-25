<template>
  <div class="next-forecast">
    <Card class="tomorrow">
      <p class="date">Amanhã</p>
      <div class="weather">
        <div class="temperature">
          <p class="max">30 ºC</p>
          <p class="min">23 ºC</p>
        </div>
        <img src="https://openweathermap.org/img/wn/10d@2x.png" />
        <div class="details">
          <p class="item">Umidade <span>80%</span></p>
          <p class="item">Vento <span>1.54 m/s</span></p>
        </div>
      </div>
    </Card>

    <div class="next-days">
      <Card class="simple" v-for="idx in [1, 2, 3, 4, 5, 6]" :key="idx">
        <div class="info">
          <p class="date">24 de novembro</p>
          <p class="temperature"><span>30 ºC</span> / 23 ºC</p>
        </div>
        <img src="https://openweathermap.org/img/wn/10d.png" />
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "next-forecast",
  components: { Card },
};
</script>

<style scoped lang="scss">
p {
  margin: 0;
}

.next-forecast {
  align-items: flex-start !important;
}

.tomorrow {
  width: 40%;
}

.next-days {
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  .simple {
    width: calc(33.33% - 30px);
    margin-left: 30px;
    margin-bottom: 30px;
    padding: 30px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .info {
      .date {
        margin-bottom: 10px;
        font-size: 0.75rem;
      }

      .temperature {
        span {
          font-weight: 600;
        }
      }
    }

    img {
      width: 40px;
      height: 40px;
    }
  }
}

@media only screen and (max-width: 900px) {
  .next-days {
    .simple {
      width: calc(50% - 15px);
      margin-left: 15px;
    }
  }
}

@media only screen and (max-width: 650px) {
  .tomorrow {
    width: 100%;
    margin-bottom: 10px;
  }

  .next-days {
    width: 100%;

    .simple {
      width: 100%;
      margin-left: 0;
      margin-bottom: 10px;
    }
  }
}
</style>
