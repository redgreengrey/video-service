<template>
  <div class="channels-list scroll-width-thin scrollable">
    <div class="force-overflow">
      <ChannelsListItem
        v-for="channel in CHANNELS"
        :key="channel.id"
        :channel="channel"
      />
    </div>
  </div>
</template>

<script>
import ChannelsListItem from './ChannelsListItem'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ChannelsList',
  components: { ChannelsListItem },
  computed: {
    ...mapGetters([
      'CHANNELS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_CHANNELS'
    ])
  },
  mounted () {
    this.GET_CHANNELS()
  }
}
</script>

<style lang="scss">
.channels-list {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 47px auto 70px auto;
  width: 1211px;
  height: 696px;
  overflow-y: scroll;
}

.force-overflow {
  min-height: 696px;
}

/* for webkit */
.channels-list::-webkit-scrollbar {
  width: 8px;
  background: #F2F2F2;
  border-radius: 2px;
}

.channels-list::-webkit-scrollbar-thumb {
  width: 4px;
  background: #BDBDBD;
  border-radius: 2px;
}

/* for mozilla */
.scroll-width-thin {
  scrollbar-color: #BDBDBD #F2F2F2;
  scrollbar-width: thin;
}

/* for ie */
.scrollable {
  color: rgba(0, 0, 0, 0);
  scrollbar-face-color: #BDBDBD;
  scrollbar-arrow-color: rgb(242, 242, 242);
  scrollbar-track-color: #F2F2F2;
  scrollbar-shadow-color: #BDBDBD;
  scrollbar-highlight-color: #BDBDBD;
  scrollbar-3dlight-color: #808080;
  scrollbar-darkshadow-Color: rgba(0, 0, 0, 0);
  /*-ms-overflow-style: none;*/
}
</style>
