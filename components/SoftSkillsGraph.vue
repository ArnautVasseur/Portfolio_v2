<template>
  <div class="chart">
    <Radar
      id="my-chart-id"
      :options="options"
      :data="data"
    />
  </div>
</template>

<script>
import { Radar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement)

export default {
  name: 'RadarChart',
  components: { Radar },
  data() {
    return {
      data: {
        labels: [
          "Curious",
          "Flexible",
          "Teamwork",
          "Ponctual",
          "Autonomy",
        ],

        datasets: [{
          data: [4, 6, 4, 5, 4],
          label: "Soft Skills", 
          backgroundColor: '#000',
          borderColor: '#000',
          pointBackgroundColor: '#000',
          pointBorderColor: '#000',
          pointHoverBackgroundColor: '#000',
          pointHoverBorderColor: '#000',
          pointHoverRadius: "5",
          pointHoverBorderWidth: "2"
        }]
      },

      options: {
        responsive: true,

        scales: {
          r: {
            // echelle, nombre min et max
            stepSize: 1,
            suggestedMin: 0,
            suggestedMax: 6, 

            // traits "horizontaux"
            grid: {
              color: '#000',
            },
            
            // traits "verticaux"
            angleLines: {
              color: '#000',
            },
            
            // nombre des niveaux
            ticks: {
              display: false,
            },

            // légende
            pointLabels: {
              color: '#000',
              font:{
                family: "Sen, sans-serif",
                size: 16
              }
            }
          },
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">

.chart{
  width: 100%;
  height: auto;
  overflow: visible;

  h3{
    font-size: 24px;
  }
}

</style>