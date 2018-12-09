<template>
    <div>
        <v-dialog v-model="dialog" persistent max-width="700px">
            <v-btn slot="activator" :color="btnComponentSet" fab large dark>
                <v-icon>add</v-icon>
            </v-btn>
        <v-card>
            <v-card-title>
                <span class="headline">Button - {{ button.name }}</span>
            </v-card-title>
        </v-card>
        <v-card>
        <v-container grid-list-md  >
            <v-layout wrap >

                <v-flex xs12 sm4 >
                    <v-text-field label="Button Title" required v-model="button.name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm4 >
                    <v-select
                        :items="buttonSelectionList"
                        label="Button Type"
                        v-model="selectedButtonType"
                        item-text="text"
                    ></v-select>
                </v-flex>
                <v-flex xs12 sm4 >
                  {{ getNameAndPlatform().platform }}

                </v-flex>
                <v-flex xs12 sm6 >
                    <v-text-field label="Module #"  v-model="button.module_id"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 v-if="schoolboxPermissionsAllowed">
                    <v-autocomplete
                        :items="['Parent', 'Student', 'Staff']"
                        label="Permission To View"
                        v-model="selectedSchoolboxPermissions"
                        multiple
                    ></v-autocomplete>
                </v-flex>
                <v-flex xs12>
                    <v-text-field label="Button Up" v-model="button.image"></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <v-text-field label="Button Down" v-model="button.image_down"></v-text-field>
                </v-flex>
                <v-flex xs4 >
                    <v-checkbox label="Badge?" v-model="button.badge"></v-checkbox>
                </v-flex>
                <v-flex xs4 >
                    <v-checkbox label="Screenshot?" v-model="button.mod.use_screenshot"></v-checkbox>
                </v-flex>
                <v-flex xs4 >
                    <v-checkbox label="Translations:" v-model="translationCheckbox"></v-checkbox>
                </v-flex>
                <v-flex xs12 sm6 v-if="translationCheckbox">
                    <v-text-field label="Title" placeholder="Sport" @blur="translationSetUp({'title':$event.target.value})"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 v-if="translationCheckbox">
                    <v-text-field label="Empty" placeholder="No Sport Notices" @blur="translationSetUp({'empty':$event.target.value})"></v-text-field>
                </v-flex>
                <v-flex xs12 v-if="translationCheckbox">
                    <v-text-field label="Message" placeholder="There are currently no sport notices." @blur="translationSetUp({'desc':$event.target.value})"></v-text-field>
                </v-flex>

                <v-flex xs12>
                    <component :is="currentModuleSelectedAdditions"></component>
                </v-flex>




            </v-layout>
            </v-container>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn  flat color="error" @click="deleteDialog = true">Delete</v-btn>
            <v-btn color="blue darken-1" flat @click="closeDialogButton()">Close</v-btn>
            
<v-dialog
        v-model="deleteDialog"
        max-width="290"
      >
        <v-card>
          <v-card-title class="headline">Are you sure you want to delete?</v-card-title>
  
          <v-card-actions>
            <v-spacer></v-spacer>
  
            <v-btn
              color="error darken-1"
              @click="deleteButton()"
            >
              YES
            </v-btn>
  
            <v-btn
              color="blue darken-1"
              
              @click="deleteDialog = false"
            >
              Cancel
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>


        </v-card-actions>
        </v-card>
        </v-dialog>
    </div>
</template>

<script>
import CoreLinks from './CoreLinks/CoreLinks.vue'
import * as ListOfButtons from '../../template/listOfButtons'

//modules
import AbsencesEdumateModule from './Modules/AbsencesEdumateModule.vue';
import AbsenteesReachModule from './Modules/AbsenteesReachModule.vue';
import BoardingBoardingReachModule from './Modules/BoardingBoardingReachModule.vue';
import BrowserReachModule from './Modules/BrowserReachModule.vue';
import BusinessesReachModule from './Modules/BusinessesReachModule.vue';
import CalendarEdumateModule from './Modules/CalendarEdumateModule.vue';
import ClassesSchoolboxModule from './Modules/ClassesSchoolboxModule.vue';
import ContactsReachModule from './Modules/ContactsReachModule.vue';
import CustomContentReachModule from './Modules/CustomContentReachModule.vue';
import DueWorkSchoolboxModule from './Modules/DueWorkSchoolboxModule.vue';
import EdustackFormsReachModule from './Modules/EdustackFormsReachModule.vue';
import EventsReachModule from './Modules/EventsReachModule.vue';
import EventsSchoolboxModule from './Modules/EventsSchoolboxModule.vue';
import EventsTASSModule from './Modules/EventsTASSModule.vue';
import ExcursionsTASSModule from './Modules/ExcursionsTASSModule.vue';
import FeedsReachModule from './Modules/FeedsReachModule.vue';
import FutureEventsEdumateModule from './Modules/FutureEventsEdumateModule.vue';
import FutureTasksEdumateModule from './Modules/FutureTasksEdumateModule.vue';
import GalleriesReachModule from './Modules/GalleriesReachModule.vue';
import GroupsSchoolboxModule from './Modules/GroupsSchoolboxModule.vue';
import HomepageNewsSchoolboxModule from './Modules/HomepageNewsSchoolboxModule.vue';
import LinksCoreModule from './Modules/LinksCoreModule.vue';
import LinksReachModule from './Modules/LinksReachModule.vue';
import MapsReachModule from './Modules/MapsReachModule.vue';
import MessagesSchoolboxModule from './Modules/MessagesSchoolboxModule.vue';
import NewsEdumateModule from './Modules/NewsEdumateModule.vue';
import NewsSchoolboxModule from './Modules/NewsSchoolboxModule.vue';
import NewslettersReachModule from './Modules/NewslettersReachModule.vue';
import NoticesReachModule from './Modules/NoticesReachModule.vue';
import NoticesTASSModule from './Modules/NoticesTASSModule.vue';
import NotificationsTASSModule from './Modules/NotificationsTASSModule.vue';
import PaperworkSlipsParentModule from './Modules/PaperworkSlipsParentModule.vue';
import ParentDirectoryReachModule from './Modules/ParentDirectoryReachModule.vue';
import ParentsTASSModule from './Modules/ParentsTASSModule.vue';
import StudentsTASSModule from './Modules/StudentsTASSModule.vue';
import SubscriptionsReachModule from './Modules/SubscriptionsReachModule.vue';
import TimetableEdumateModule from './Modules/TimetableEdumateModule.vue';
import TimetableSchoolboxModule from './Modules/TimetableSchoolboxModule.vue';
import TimetableTASSModule from './Modules/TimetableTASSModule.vue';
import TodosEdumateModule from './Modules/TodosEdumateModule.vue';
import VideosReachModule from './Modules/VideosReachModule.vue';

export default {
  data () {
    return {
      dialog: false,
      translationArray: { title: null, empty: null, desc: null },
      translationCheckbox: false,
      buttonSelectionList: ListOfButtons.newObject(),
      selectedButtonType: null,
      selectedSchoolboxPermissions:[],
      deleteDialog:false,
      coreLinksAdded: []
      
    }
  },
  props: { 'button': Object,
    'returnFn': Function,
    'deleteBtnFn':Function,
    'schoolboxPermissionsAllowed':Boolean
  },
  computed: {
    btnComponentSet () {
      if (!this.button.name == null || !this.button.name == '') {
        return 'primary'
      }
      return 'warning'
    },
    currentModuleSelectedAdditions(){
      let platform = this.getNameAndPlatform()
      if(platform != null){
        if (platform.text.indexOf('-') != -1) {

          let SecondText = platform.text
          let index = SecondText.indexOf('-')
          SecondText = SecondText.slice(index+1)

          let firstText = platform.text.substring(0, index)
          return 'app'+firstText.charAt(0).toUpperCase()+firstText.slice(1)+SecondText.charAt(0).toUpperCase()+SecondText.slice(1) +platform.platform.charAt(0).toUpperCase()+ platform.platform.slice(1) +'Module';

        }else{
          return 'app'+platform.text.charAt(0).toUpperCase()+ platform.text.slice(1)+platform.platform.charAt(0).toUpperCase()+ platform.platform.slice(1) +'Module'
        }
      }
      return null
    }
  },
  methods: {
    translationSetUp (value) {
      if (value.title) {
        this.translationArray.title = value.title
      } else if (value.empty) {
        this.translationArray.empty = value.empty
      } else if (value.desc) {
        this.translationArray.desc = value.desc
      }
    },
    addCoreLink () {
      this.coreLinksAdded.push({ 'key': this.coreLinksAdded.size })
    },
    setUpModuleJSON () {
      let tranlations = this.getTranslations()

      let nameAndPlatform = this.getNameAndPlatform()

      this.button.mod = {
        id: this.button.module_id,
        use_screenshot: this.button.mod.use_screenshot == true,
        name: (nameAndPlatform == null) ? '' : nameAndPlatform.text,
        platform: (nameAndPlatform == null) ? '' : nameAndPlatform.platform,
        settings: null,
        translations: tranlations,
        icons: []
      }
    },
    getTranslations () {
      let tranlations = {}

      if (this.translationArray.title != null) {
        if (this.translationArray.title != null && this.translationArray.empty == null) {
          tranlations = {
            'list': {
              'title': this.translationArray.title }
          }
        }
        if (this.translationArray.title != null && this.translationArray.empty != null) {
          tranlations = {
            'list': {
              'title': this.translationArray.title,
              'empty': {
                'title': this.translationArray.empty,
                'message': this.translationArray.desc
              }
            }
          }
        }
      } else {
        tranlations = null
      }

      return tranlations
    },
    getNameAndPlatform() {
      let selectedValue = this.selectedButtonType

      let nameAndPlatform = this.buttonSelectionList.find(function (element) {
        return element.value == selectedValue
      })

      return nameAndPlatform
    },
    createCSSForSchoolboxPermissions(){

      let CSSstring = '';
      let checker = false;

      if(this.selectedSchoolboxPermissions.includes('Parent')){
        CSSstring = "for-parent "
        checker = true
      }
      if(this.selectedSchoolboxPermissions.includes('Staff')){
        CSSstring += "for-staff "
        checker = true
      }
      if(this.selectedSchoolboxPermissions.includes('Student')){
        CSSstring += "for-student "
        checker = true
      }

      if(!checker)
      {
        CSSstring = null
      }

      this.button.class_name = CSSstring

    },
    closeDialogButton () {

      if(this.schoolboxPermissionsAllowed){
        this.createCSSForSchoolboxPermissions()
      }else{
        this.button.class_name = null
      }


      this.setUpModuleJSON()

      this.dialog = false
      this.returnFn()
    },
    buttonSelectOnChange () {

    },
    deleteButton(){
        this.deleteDialog = false
        this.dialog = false
        this.deleteBtnFn(this.button.id)

    }
  },
  components: {
    appAbsencesEdumateModule: AbsencesEdumateModule,
appAbsenteesReachModule: AbsenteesReachModule,
appBoardingBoardingReachModule: BoardingBoardingReachModule,
appBrowserReachModule: BrowserReachModule,
appBusinessesReachModule: BusinessesReachModule,
appCalendarEdumateModule: CalendarEdumateModule,
appClassesSchoolboxModule: ClassesSchoolboxModule,
appContactsReachModule: ContactsReachModule,
appCustomContentReachModule: CustomContentReachModule,
appDueWorkSchoolboxModule: DueWorkSchoolboxModule,
appEdustackFormsReachModule: EdustackFormsReachModule,
appEventsReachModule: EventsReachModule,
appEventsSchoolboxModule: EventsSchoolboxModule,
appEventsTASSModule: EventsTASSModule,
appExcursionsTASSModule: ExcursionsTASSModule,
appFeedsReachModule: FeedsReachModule,
appFutureEventsEdumateModule: FutureEventsEdumateModule,
appFutureTasksEdumateModule: FutureTasksEdumateModule,
appGalleriesReachModule: GalleriesReachModule,
appGroupsSchoolboxModule: GroupsSchoolboxModule,
appHomepageNewsSchoolboxModule: HomepageNewsSchoolboxModule,
appLinksCoreModule: LinksCoreModule,
appLinksReachModule: LinksReachModule,
appMapsReachModule: MapsReachModule,
appMessagesSchoolboxModule: MessagesSchoolboxModule,
appNewsEdumateModule: NewsEdumateModule,
appNewsSchoolboxModule: NewsSchoolboxModule,
appNewslettersReachModule: NewslettersReachModule,
appNoticesReachModule: NoticesReachModule,
appNoticesTASSModule: NoticesTASSModule,
appNotificationsTASSModule: NotificationsTASSModule,
appPaperworkSlipsParentModule: PaperworkSlipsParentModule,
appParentDirectoryReachModule: ParentDirectoryReachModule,
appParentsTASSModule: ParentsTASSModule,
appStudentsTASSModule: StudentsTASSModule,
appSubscriptionsReachModule: SubscriptionsReachModule,
appTimetableEdumateModule: TimetableEdumateModule,
appTimetableSchoolboxModule: TimetableSchoolboxModule,
appTimetableTASSModule: TimetableTASSModule,
appTodosEdumateModule: TodosEdumateModule,
appVideosReachModule: VideosReachModule
  }

}
</script>

<style>

</style>
