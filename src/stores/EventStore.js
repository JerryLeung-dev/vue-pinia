import { defineStore } from "pinia";
import EventService from "../services/EventService";

export const useEventStore = defineStore('eventStore', {
    state: () => {
        return {
            events: [],
            event: {}
        }
    },
    getters: {
        numberOfEvents() {
            return this.events.length;
        }
    }, 
    actions: {
        fetchEvents() {
            return EventService.getEvents()
              .then(response => {
                this.events = response.data
              })
              .catch(error => {
                throw error
              })
        },
        createEvent(event) {
            return EventService.postEvent(event)
              .then(() => {
                this.events.push(event)
              })
              .catch(error => {
                throw error
              })
        },
        fetchEvent(id) {
          return EventService.getEvent(id)
            .then(response => {
              this.events = response.data
            })
            .catch(error => {
              throw error
            })
          }
    }
})