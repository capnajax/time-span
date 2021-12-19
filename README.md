# time-span

Prints the time elapsed between two Dates in a friendly manner. The numbers printed are expected to be taken on their own, not used for comparison or to be parsed by a machine.

This is only meant for short durations, milliseconds to a few days, not months and years. This may change in the future, but currently this is all I need for my own purposes.

It is also very specifically meant for human-readability in English, not parsability by machine. The output format does change depending on the scale.

The time format could also change in future releases without a major-version update. I will nto consider this to be a breaking change because it's not meant for machines to understand.

## Usage

Install with 

```sh
npm install @capnajax/time-span
```

To use

```javascript
import timespan from '@capnajax/time-span'

console.log(timespan(startDate, endDate))
```

