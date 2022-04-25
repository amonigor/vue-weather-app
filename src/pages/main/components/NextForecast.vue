<template>
  <div class="next-forecast">
    <Card class="tomorrow">
      <p class="date">Amanhã</p>
      <div class="weather">
        <div class="temperature">
          <p class="max">{{ Math.round(tomorrowForecast.temp.max) }} ºC</p>
          <p class="min">{{ Math.round(tomorrowForecast.temp.min) }} ºC</p>
        </div>
        <img src="https://openweathermap.org/img/wn/10d@2x.png" />
        <div class="details">
          <p class="item capitalize">
            {{ tomorrowForecast.weather[0].description }}
          </p>
          <p class="item">
            Umidade <span>{{ tomorrowForecast.humidity }}%</span>
          </p>
          <p class="item" v-if="tomorrowForecast.rain">
            Precipitação <span>{{ tomorrowForecast.rain }} mm</span>
          </p>
        </div>
      </div>
      <div class="during-day">
        <table>
          <tr>
            <th></th>
            <th>Manhã</th>
            <th>Tarde</th>
            <th>Noite</th>
            <th>Madrugada</th>
          </tr>
          <tr>
            <td class="row-title">TEMPERATURA</td>
            <td>{{ Math.round(tomorrowForecast.temp.morn) }} ºC</td>
            <td>{{ Math.round(tomorrowForecast.temp.day) }} ºC</td>
            <td>{{ Math.round(tomorrowForecast.temp.eve) }} ºC</td>
            <td>{{ Math.round(tomorrowForecast.temp.night) }} ºC</td>
          </tr>
          <tr>
            <td class="row-title">SENSAÇÃO</td>
            <td>{{ Math.round(tomorrowForecast.feels_like.morn) }} ºC</td>
            <td>{{ Math.round(tomorrowForecast.feels_like.day) }} ºC</td>
            <td>{{ Math.round(tomorrowForecast.feels_like.eve) }} ºC</td>
            <td>{{ Math.round(tomorrowForecast.feels_like.night) }} ºC</td>
          </tr>
        </table>
      </div>
    </Card>

    <div class="next-days">
      <Card
        class="simple"
        v-for="(forecast, idx) in nextDaysForecast"
        :key="idx"
      >
        <div class="info">
          <p class="date">
            {{
              moment()
                .add(idx + 2, "days")
                .locale("pt")
                .format("DD [de] MMMM")
            }}
          </p>
          <p class="temperature">
            <span>{{ Math.round(forecast.temp.max) }} ºC</span> /
            {{ Math.round(forecast.temp.min) }} ºC
          </p>
        </div>
        <img
          :src="`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`"
        />
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { mapState } from "vuex";
import moment from "moment";

export default {
  name: "next-forecast",
  components: { Card },
  computed: {
    ...mapState(["dailyForecast"]),
    tomorrowForecast: function () {
      return this.dailyForecast[0];
    },
    nextDaysForecast: function () {
      return this.dailyForecast.slice(2);
    },
  },
  methods: {
    moment,
  }
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

  .weather {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .temperature {
      .max {
        margin-bottom: 10px;
        font-weight: 600;
      }
    }

    .details {
      .item {
        margin: 5px;

        &.capitalize {
          text-transform: capitalize;
        }

        span {
          font-weight: 600;
        }
      }
    }
  }

  .during-day {
    table {
      text-align: center;
      // width: 100%;
    }

    th,
    td {
      font-size: 0.75rem;
      font-weight: 400;
    }

    .row-title {
      text-align: left;
    }

    th,
    td {
      padding: 5px;

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-left: 0;
      }
    }
  }
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
  .tomorrow {
    width: 50%;
  }

  .next-days {
    width: 50%;

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

@media only screen and (max-width: 450px) {
  .tomorrow {
    .weather {
      .details {
        .item {
          font-size: 0.75rem;
        }
      }
    }
  }
}

@media only screen and (max-width: 300px) {
  .tomorrow {
    .weather {
      flex-wrap: wrap;

      .details {
        width: 100%;
        margin-bottom: 20px;

        .item {
          margin-left: 0;
        }
      }
    }

    .during-day {
      overflow-x: auto;
    }
  }
}
</style>
