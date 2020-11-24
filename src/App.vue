<template>
  <div>
    <Menubar :model="items">
      <template #end>
        <span class="p-input-icon-left">
          <i class="pi pi-search" />
          <InputText type="text" v-model="search" placeholder="Rechercher une carte" />
        </span>
      </template>
    </Menubar>
    <Card>
      <template slot="title">
        {{ cardInfo[index].title | capitalize }}
      </template>
      <template slot="content">
        <Slider v-model="index" :step="1" :min="0" :max="cardInfo.length"/>
    <Fieldset legend="Traduction" :toggleable="true" collapsed>
    <ScrollPanel style="width: 100%; height: 200px" class="custom">
      {{ cardInfo[index].trad }}      
    </ScrollPanel>
    </Fieldset>
      </template>
      <template slot="footer">
        <img :src="publicPath + 'img/' + cardInfo[index].url">
      </template>
    </Card>
  </div>
</template>

<script>
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import ScrollPanel from 'primevue/scrollpanel';
import Fieldset from 'primevue/fieldset';
import CardInfo from '../src/data/cards.json';
import Slider from 'primevue/slider';

export default {
  components: { Menubar, InputText, Card, ScrollPanel, Fieldset, Slider },
  data() {
          return {
              items: [
                  {
                    label:'Donation',
                    icon:'pi pi-fw pi-dollar'
                  },
                  {
                    label:'Contact',
                    icon:'pi pi-fw pi-inbox'
                  },

              ],
              search: undefined,
              cardInfo: CardInfo,
              index: 0,
              publicPath: process.env.BASE_URL
          }
      },
  methods:  {
    getCardInfo() {
      
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<style>
.custom .p-scrollpanel-wrapper {
    border-right: 9px solid #f4f4f4;
  }

.custom .p-scrollpanel-bar {
    background-color: #1976d2;
    opacity: 1;
    transition: background-color .3s;
  }

.custom .p-scrollpanel-bar:hover {
    background-color: #135ba1;
  }

body {
    background-color: #2a323dda;
  }

img {
  width: 100%;
}
</style>
