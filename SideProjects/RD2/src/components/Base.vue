<template>
  <div style="height: 95%;">
    <appMap :markerPoints="markerPoints" :mapData="mapData"></appMap>
  </div>
</template>

<script>
import Map from "../components/map/Map";

export default {
  data() {
    return {
      mapData: [],
      markerPoints: []
    };
  },
  methods: {},
  components: {
    appMap: Map
  },
  mounted() {
    this.mapData = [
      {
        title: "Health Items",
        groups: [
          {
            title: "Premium Cigarettes",
            display: false,
            group: true,
            locations: [
              {
                type: "marker",
                title: "Location A",
                position: [70.41322, -1.219482],
                display: false,
                icon: {
                  url: "marker/RDOIcons/image_part_076.png",
                  icon_size: [40, 50]
                }
              },
              {
                title: "Location B",
                type: "marker",
                position: [47.41322, -1.219482],
                display: false,
                icon: {
                  url: "marker/RDOIcons/image_part_076.png"
                }
              }
            ]
          },
          {
            title: "Horse",
            display: true,
            group: false,
            locations: [
              {
                type: "marker",
                title: "Text 1222222",
                position: [40.41322, -1.219482],
                display: true
              },
              {
                title: "Text new1",
                type: "marker",
                icon: {
                  url: "marker/RDOIcons/index.png"
                },
                position: [43.41322, 4.219482],
                display: true
              }
            ]
          }
        ]
      },
      {
        title: "Animals",
        groups: [
          {
            title: "Deer",
            display: false,
            group: true,
            locations: [
              {
                type: "circle",
                title: "Circle",
                position: [10.41322, 50.219482],
                display: false,
                colour: "green",
                radius: 450000,
                display: false
              },
              {
                type: "circle",
                title: "Circle?",
                position: [20.41322, 30.219482],
                display: false,
                colour: "red",
                radius: 450000,
                weight: 1,
                display: false
              }
            ]
          },
          {
            title: "Bear",
            display: false,
            group: false,
            locations: [
              {
                type: "circle",
                title: "Circle?",
                position: [20.41322, 70.219482],
                colour: "red",
                radius: 450000,
                display: true
              },
              {
                type: "circle",
                title: "Circle?",
                position: [30.41322, 60.219482],
                colour: "blue",
                radius: 450000,
                display: true
              }
            ]
          },

          {
            title: "Croc",
            display: false,
            group: true,
            locations: [
              {
                title: "Poly Croc",
                type: "polygon",
                position: [
                  [47.2263299, -1.6222],
                  [48.21024000000001, -10.6270065],
                  [49.1969447, -20.6136169],
                  [50.18527929999999, -20.6143036],
                  [55.1794457, -22.6098404],
                  [60.1775788, -23.5985107],
                  [47.2263299, -1.6222]
                ],
                display: false
              },
              {
                title: "Poly Croc",
                type: "polygon",
                position: [
                  [57.2263299, 1.6222],
                  [58.21024000000001, 10.6270065],
                  [59.1969447, 20.6136169],
                  [60.18527929999999, 20.6143036],
                  [65.1794457, 22.6098404],
                  [50.1775788, 23.5985107],
                  [57.2263299, 1.6222]
                ],
                display: false
              }
            ]
          },
          {
            title: "Bat",
            display: false,
            group: false,
            locations: [
              {
                title: "Poly Bat",
                type: "polygon",
                position: [
                  [17.2263299, -1.6222],
                  [18.21024000000001, -10.6270065],
                  [19.1969447, -20.6136169],
                  [20.18527929999999, -20.6143036],
                  [25.1794457, -22.6098404],
                  [30.1775788, -23.5985107],
                  [27.2263299, -1.6222]
                ],
                display: false
              },
              {
                title: "Poly Bat",
                colour: "red",
                type: "polygon",
                position: [
                  [37.2263299, 1.6222],
                  [38.21024000000001, 10.6270065],
                  [39.1969447, 20.6136169],
                  [40.18527929999999, 20.6143036],
                  [55.1794457, 22.6098404],
                  [40.1775788, 23.5985107],
                  [37.2263299, 1.6222]
                ],
                display: false
              }
            ]
          }
        ]
      }
    ];

    const mapDataPoints = [];

    this.mapData.forEach((section, sectionIndex) => {
      section.groups.forEach((group, groupIndex) => {
        group.locations.forEach((location, locationIndex) => {
          location.id = "" + sectionIndex + groupIndex + locationIndex;
          mapDataPoints.push(location);
        });
      });
    });

    this.markerPoints = mapDataPoints;
  }
};
</script>

<style scoped>
.something-else {
  clip-path: polygon(
    3% 0,
    7% 1%,
    11% 0%,
    16% 2%,
    20% 0,
    23% 2%,
    28% 2%,
    32% 1%,
    35% 1%,
    39% 3%,
    41% 1%,
    45% 0%,
    47% 2%,
    50% 2%,
    53% 0,
    58% 2%,
    60% 2%,
    63% 1%,
    65% 0%,
    67% 2%,
    69% 2%,
    73% 1%,
    76% 1%,
    79% 0,
    82% 1%,
    85% 0,
    87% 1%,
    89% 0,
    92% 1%,
    96% 0,
    98% 3%,
    99% 3%,
    99% 6%,
    100% 11%,
    98% 15%,
    100% 21%,
    99% 28%,
    100% 32%,
    99% 35%,
    99% 40%,
    100% 43%,
    99% 48%,
    100% 53%,
    100% 57%,
    99% 60%,
    100% 64%,
    100% 68%,
    99% 72%,
    100% 75%,
    100% 79%,
    99% 83%,
    100% 86%,
    100% 90%,
    99% 94%,
    99% 98%,
    95% 99%,
    92% 99%,
    89% 100%,
    86% 99%,
    83% 100%,
    77% 99%,
    72% 100%,
    66% 98%,
    62% 100%,
    59% 99%,
    54% 99%,
    49% 100%,
    46% 98%,
    43% 100%,
    40% 98%,
    38% 100%,
    35% 99%,
    31% 100%,
    28% 99%,
    25% 99%,
    22% 100%,
    19% 99%,
    16% 100%,
    13% 99%,
    10% 99%,
    7% 100%,
    4% 99%,
    2% 97%,
    1% 97%,
    0% 94%,
    1% 89%,
    0% 84%,
    1% 81%,
    0 76%,
    0 71%,
    1% 66%,
    0% 64%,
    0% 61%,
    0% 59%,
    1% 54%,
    0% 49%,
    1% 45%,
    0% 40%,
    1% 37%,
    0% 34%,
    1% 29%,
    0% 23%,
    2% 20%,
    1% 17%,
    1% 13%,
    0 10%,
    1% 6%,
    1% 3%
  );
}
</style>
