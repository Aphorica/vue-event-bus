# @aphorica/vue-event-bus

## Provides Observer Pattern for VueJS

So trivial its ridiculous, but I use it everywhere and I don't want
to have to keep re-creating this file every time I need it in a new
project.

Besides, something may change

## Usage

```
  import {EventBus} from '@aphorica/vue-event-bus'

  EventBus.$on('event', handler)
  EventBus.$off('event', handler)
```

## Note

For every handler you add in a component, you should remove it,
minimally on 'beforeDestroy()' (this argues against using anonymous or arrow
functions as handlers.)

The component may not get GC'ed immediately and can still receive events,
even though it is presumably destroyed.

(Interesting debugging experience.)
