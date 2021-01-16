# random-item-percent
For random item with percent ( I use on javascript games :D )

<p align="center">
    <a href="https://www.npmjs.com/package/random-item-percent">
        <img src="https://img.shields.io/npm/v/random-item-percent.svg" />
    </a>
</p>

## Installation
Using npm:

```sh
$ npm install --save random-item-percent
```

Using yarn:

```sh
$ yarn add random-item-percent
```

## Quick Start
```javascript
import randomItem from 'random-item-percent'

const itemsList = [
    {
        itemEnum: 'bike',
        percent: 40,
    },
    {
        itemEnum: 'car',
        percent: 30,
    },
    {
        itemEnum: 'boat',
        percent: 2,
    },
    {
        itemEnum: 'train',
        percent: 1,
    },
    {
        itemEnum: 'plane',
        percent: 0.5,
    },
]

const result = randomItem({
    itemsList
})

console.log('result:', result)
// { itemEnum: 'bike', item: { itemEnum: 'bike', percent: 40} }
```

## Documentation

#### Parameters object
* `itemsList` {`Array`} Items for random **require  `{ itemEnum: String, percent: Number }`**

#### Return value
* `itemEnum` {`String`} Item enum
* `item` {`Object`} Item object

## Contributing
Feel free to submit any issues or pull requests.

## License
MIT
