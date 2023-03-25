<script>
import { useEventStore } from '../stores/EventStore'

export default {
  setup() {
    const eventStore = useEventStore();
    return {
      eventStore
    }
  },
  props: ['id'],
  created() {
    const existingEvent = this.eventStore.events.find(event => event.id = this.id);
    if(existingEvent) this.eventStore.event = existingEvent;
    else {
      this.eventStore.fetchEvent(this.id).catch(error => {
      this.$router.push({
        name: 'ErrorDisplay',
        params: { error: error }
      })
    })
    }
  },
  computed: {
    event() {
      console.log(this.eventStore.event);
      return this.eventStore.event
    }
  }
}
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>
