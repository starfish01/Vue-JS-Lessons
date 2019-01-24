<template>
  <v-menu
    :close-on-content-click="false"
    bottom
    left
    min-width="300"
    max-width="300"
    nudge-left="12"
    offset-x
    transition="slide-y-transition"
  >
    <v-btn slot="activator" class="elevation-0" color="grey" dark fab fixed style="top: 96px;" top>
      <v-icon>mdi-check-all</v-icon>
    </v-btn>
    <v-card>
      <v-container grid-list-xl>
        <v-layout wrap>
          <v-flex xs12>
            <div>
              <v-flex xs-8>Check List</v-flex>
            </div>
            <v-expansion-panel expand>
              <v-expansion-panel-content v-for="(item, i) in userCheckList" :key="i">
                <div slot="header">{{item.sectionTitle}}</div>

                <v-card class="checkboxStyling" v-for="(subItem,index) in item" :key="index">
                  <v-checkbox
                    v-if="subItem.label != null"
                    @change="checkingStatus(subItem)"
                    :label="subItem.label"
                    v-model="subItem.value"
                  />
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-btn color="danger" @click="deleteLocalStorage()" small>Clear All</v-btn>

            <v-divider class="mt-3"/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-menu>
</template>

<script>
// Utilities
import { mapMutations, mapState } from "vuex";

export default {
  data: () => ({
    userCheckList: null,
    checkList: {
      start: {
        sectionTitle: "Start",
        cloneStatus: {
          label: "Clone Status",
          value: false
        },
        cloneDefaultForm: {
          label: "Clone Default Form",
          value: false
        },
        renameForm: {
          label: "Rename Form",
          value: false
        },
        uploadLogo: {
          label: "Upload Logo",
          value: false
        },
        uploadBackgroundImage: {
          label: "Upload Background Image",
          value: false
        }
      },
      cosmetics: {
        sectionTitle: "Cosmetics",
        editWelcomeMessage: {
          label: "Edit Welcome Message",
          value: false
        },
        editJumbotron: {
          label: "Edit Jumbotron",
          value: false
        },
        setFormStyleDefaults: {
          label: "Set Form Style Defaults",
          value: true
        },
        styleEmail: {
          label: "Style Email",
          value: false
        }
      },
      buildForm: {
        sectionTitle: "Build Form",
        importTassData: {
          label: "Import Tass Data",
          value: false
        },
        buildForm: {
          label: "Build Form",
          value: false
        },
        configureExport: {
          label: "Configure Email",
          value: false
        }
      }
    },
    colors: ["primary", "info", "success", "warning", "danger"],
    images: [
      "https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-1.23832d31.jpg",
      "https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg",
      "https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-3.3a54f533.jpg",
      "https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-4.3b7e38ed.jpg"
    ]
  }),

  computed: {
    ...mapState("app", ["image", "color"]),
    color() {
      return this.$store.state.app.color;
    }
  },

  methods: {
    checkingStatus(subItem) {
      this.saveToLocalStorage();
    },
    saveToLocalStorage() {
      const parsed = JSON.stringify(this.userCheckList);
      localStorage.setItem("checkListItems", parsed);
    },
    deleteLocalStorage() {
      //need to delete from local
      localStorage.removeItem("checkListItems");
      this.userCheckList = Object.assign({}, this.checkList);

    },

    ...mapMutations("app", ["setImage"]),
    setColor(color) {
      this.$store.state.app.color = color;
    }
  },
  mounted() {
    this.userCheckList = Object.assign({}, this.checkList);
    if (localStorage.getItem("checkListItems")) {
      try {
        this.userCheckList = JSON.parse(localStorage.getItem("checkListItems"));
      } catch {
        localStorage.removeItem("checkListItems");
      }
    }
  }
};
</script>

<style lang="scss">
.v-avatar,
.v-responsive {
  cursor: pointer;
}

.checkboxStyling {
  background: gainsboro;
  border-bottom: 2px gray solid;
}
</style>
