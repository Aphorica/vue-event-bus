/**
 * So trivial its ridiculous, but I use it everywhere and I don't want
 * to have to keep re-creating this file every time I need it.
 *
 * Besides, something may change
 *
 * usage: import {EventBus} from '@aphorica/vue-event-bus'
 *
 *        EventBus.$on('event', handler)
 *        EventBus.$off('event', handler)
 *
 * Note: for every handler you add in a component, you should remove it,
 * minimally on 'beforeDestroy()', since the component may not get GC'ed
 * immediately, and can still receive events even though it is presumably
 * destroyed
 */
import Vue from 'vue';
export const EventBus = new Vue();
