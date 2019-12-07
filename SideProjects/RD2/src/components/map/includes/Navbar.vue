<template>
  <div class="controls-nav-map-menu">
    <span class="sidemenu" v-if="displayMenu">
      <v-icon @click="displayMenuChange()" dark>mdi-arrow-right</v-icon>
    </span>
    <span class="sidemenuin" v-if="!displayMenu">
      <v-icon @click="displayMenuChange()" dark>mdi-arrow-left</v-icon>
    </span>

    <transition name="slide">
      <div class="controls-nav-map-menu-inside" v-if="displayMenu">
        <div style="text-align:center">
          <h2 class="subtitle">Red Dead Map Online</h2>
          <hr />
        </div>
        <div class="columns is-multiline">
          <template v-for="(group, groupIndex) in mapData">
            <h3
              style="margin-bottom:0.5rem; margin-top:10px"
              class="column is-centered is-full subtitle"
              v-bind:key="'' + groupIndex"
            >{{group.title}}</h3>

            <template v-for="(section, sectionIndex) in group.groups">
              <div
                class="column is-one-third is-half-touch subchecklistitem"
                v-bind:key="'' + groupIndex + sectionIndex"
              >
                <div
                  class="label"
                  style="display:inline-flex; cursor:pointer; padding: 5px 5px 0 0; margin:3px"
                  @click="sectionClickedNew(section)"
                  :class="{ isNotDisplayed: !section.display }"
                >
                  <div>#</div>
                  <div style="padding-left:10px">
                    <h4>{{section.title}}</h4>
                  </div>
                </div>
              </div>

              <template v-if="!section.group && section.locations.length > 1">
                <template v-for="(item, i) in section.locations">
                  <div
                    v-bind:key="i + section.title + groupIndex"
                    class="column is-one-third is-half-touch subchecklistitem"
                  >
                    <div
                      class="label"
                      style="display:inline-flex; cursor:pointer; padding: 5px 5px 0 0; margin:3px"
                      @click="item.display = !item.display"
                      :class="{ isNotDisplayed: !item.display }"
                    >
                      <div>#</div>
                      <div style="padding-left:10px">
                        <h4>{{item.title}}</h4>
                      </div>
                    </div>
                  </div>
                </template>
              </template>
            </template>
          </template>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    mapData: Array
  },
  data() {
    return {
      displayMenu: false
    };
  },
  methods: {
    displayMenuChange() {
      this.displayMenu = !this.displayMenu;
    },
    sectionClickedNew(section) {
      section.display = !section.display;
      const sectionReference = section.locations;
      const displayValue = section.display;

      sectionReference.forEach(function(location) {
        location.display = displayValue;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.isNotDisplayed {
  text-decoration: line-through;
  opacity: 0.5;
}

h3 {
  color: white;
}
h2 {
  font-size: 2rem;
  color: white;
}
.controls-nav-map-menu {
  top: 0;
  position: absolute;
  right: 0;
  z-index: 1000;
  height: 100%;
  @media screen and (min-width: 769px) {
    width: 40%;
  }

  .subchecklistitem {
    display: flex;
    @media screen and (max-width: 769px) {
      width: 100%;
    }
  }
  .sidemenu {
    position: absolute;
    left: -34px;
    background: #948066;
    padding: 5px;
    border-bottom-left-radius: 10px;
  }
  .sidemenuin {
    position: absolute;
    right: 0;
    background: #948066;
    padding: 5px;
    border-bottom-left-radius: 10px;
  }
  .controls-nav-map-menu-inside {
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    background: #948066;
    padding: 10px;
  }
  .checkboxclicker {
    .v-input--selection-controls__input {
      display: none;
    }
  }
  .column {
    padding-top: 0;
    padding-bottom: 0;
  }

  .b-checkbox {
    &.checkbox {
      .check {
        display: none;
      }
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
  transition: all 150ms ease-in 0s;
}
</style>
