# emonster-hnc

emonster-hnc (short for emonster hooks and components) is a library of React hooks and components built on top of antd and framer-motion. The library provides a set of reusable UI components and hooks that can help you build beautiful and interactive web applications with ease.

## Storybook

You can find examples of the library [here][storybook].

## Tech

emonster-hnc uses a number of open source projects to work properly:

- [React][react] - A JavaScript library for building user interfaces!
- [Antd][antd] - A React UI library that provides a set of high-quality components and patterns for building web and mobile applications
- [Framer Motion][framer-motion] - A library for adding animation and motion to React components.
- [Font Awesome][font-awesome] - A library of icons and tools for adding icons to web projects

And of course emonster-hnc itself is open source with a [public repository][github] on GitHub.

## Installation

To install emonster-hnc, simply run:

    npm install emonster-hnc

or

    yarn add emonster-hnc

## Usage

To use emonster-hnc, you'll need to have antd and framer-motion installed in your project. You can import the components and hooks you need from the library like this:

```jsx
import { AsyncButton } from 'emonster-hnc';

const App = () => {
  return (
    <AsyncButton onClick={async () => {
        await sleep(500);
      }} 
    />
  )
}
```

## Documentation

You can find the documentation for emonster-hnc in the docs folder of the library. The documentation includes detailed usage instructions, code examples, and API references for all the available components and hooks.

### components

#### [AsyncButton](https://63ed98bdfdd4823a325643f3-lhqbjjxcid.chromatic.com/?path=/story/components-asyncbutton--default)

| Props   | Type     | Required | Default Value |
|---------|----------|----------|---------------|
| onClick | function | true     | -             |
| loading | boolean  | false    | -             |

#### [DoubleConfirmBtn](https://63ed98bdfdd4823a325643f3-lhqbjjxcid.chromatic.com/?path=/story/components-doubleconfirmbtn--default)

| Props         | Type                   | Required | Default Value |
|---------------|------------------------|--------|-------------|
| label         | string                 | true   | -           |
| secondaryText | string                 | true   | -           |
| secondaryType | "save" &#124; "danger" | false  | "danger"    |
| loading       | boolean                | false  | -           |
| size          | SizeType               | false  | "middle"    |
| onConfirm     | function               | true   | -           |
| shape         | ButtonShape            | false  | "default"   |
| disabled      | boolean                | false  | false       |

#### [InputStepper](https://63ed98bdfdd4823a325643f3-hlkpxebdcw.chromatic.com/?path=/story/components-inputstepper--default)

| Props     | Type     | Required | Default Value |
|-----------|----------|----------|---------------|
| stepper   | number   | false    | 1             |
| onAdd     | function | true     | -             |
| onMinus   | function | false    | -             |
| hideMinus | boolean  | false    | false         |
| hideAdd   | boolean  | false    | false         |
| setValue  | number   | true     | -             |
| loading   | boolean  | false    | -             |


#### [LongTextColumn](https://63ed98bdfdd4823a325643f3-lhqbjjxcid.chromatic.com/?path=/story/components-longtextcolumn--default)

| Props     | Type          | Required | Default Value |
|-----------|---------------|----------|---------------|
| copy      | boolean       | false    | false         |
| text      | string        | true     | -             |
| hoverShow | boolean       | false    | true         |
| maxWidth  | number        | true     | -             |
| movable   | boolean       | false    | false         |
| style     | CSSProperties | false    | -             |


#### [MovableTooltip](https://63ed98bdfdd4823a325643f3-lhqbjjxcid.chromatic.com/?path=/story/components-movabletooltip--default)

| Props             | Type          | Required | Default Value |
|-------------------|---------------|----------|---------------|
| title             | string        | true     | -             |
| floatContentStyle | CSSProperties | false    | -             |


#### [SpeedDial](https://63ed98bdfdd4823a325643f3-lhqbjjxcid.chromatic.com/?path=/story/components-speeddial--default)

| Props       | Type        | Required | Default Value |
|-------------|-------------|----------|---------------|
| actionArray | ActionProps | true     | -             |
| alwaysShow  | boolean     | false    | true          |


#### SpeedDial.ActionProps

| Props       | Type            | Required | Default Value |
|-------------|-----------------|----------|---------------|
| actionArray | ActionProps     | true     | -             |
| icon        | FontAwesomeIcon | true     | -             |
| tooltip     | string          | true     | -             |
| onClick     | function        | true     | -             |
| disabled    | boolean         | false    | false         |


#### [TextAutoScroll](https://63ed98bdfdd4823a325643f3-lhqbjjxcid.chromatic.com/?path=/story/components-textautoscroll--default)

| Props | Type           | Required | Default Value |
|-------|----------------|----------|---------------|
| style | CSSProperties  | false    | -             |

#### [TypeConfirmModal](https://63ed98bdfdd4823a325643f3-hlkpxebdcw.chromatic.com/?path=/story/components-typeconfirmmodal--default)

| Props         | Type                  | Required | Default Value |
|---------------|-----------------------|----------|---------------|
| verifyString  | string                | true     | -             |
| inputPosition | "top" &#124; "bottom" | false    | "bottom"      |

### hooks

##### [useClickOutside](https://63ed98bdfdd4823a325643f3-lhqbjjxcid.chromatic.com/?path=/story/hooks-useclickoutside--default)
##### [useCountdown](https://63ed98bdfdd4823a325643f3-hlkpxebdcw.chromatic.com/?path=/story/hooks-usecountdown--default)
##### [useDebounce](https://63ed98bdfdd4823a325643f3-lhqbjjxcid.chromatic.com/?path=/story/hooks-usedebounce--default)
##### [useDrag](https://63ed98bdfdd4823a325643f3-jjqmnyvhul.chromatic.com/?path=/story/hooks-usedrag--default)
##### [useEventListener](https://63ed98bdfdd4823a325643f3-hlkpxebdcw.chromatic.com/?path=/story/hooks-useeventlistener--default)
##### [useHover](https://63ed98bdfdd4823a325643f3-hlkpxebdcw.chromatic.com/?path=/story/hooks-usehover--default)
##### [useInterval](https://63ed98bdfdd4823a325643f3-hlkpxebdcw.chromatic.com/?path=/story/hooks-useinterval--default)
##### [useLeavePageNotification](https://63ed98bdfdd4823a325643f3-hjotyfkise.chromatic.com/?path=/story/hooks-useleavepagenotification--default)
##### [useLoading](https://63ed98bdfdd4823a325643f3-hjotyfkise.chromatic.com/?path=/story/hooks-useloading--single-action)
##### [useMousePosition](https://63ed98bdfdd4823a325643f3-lhqbjjxcid.chromatic.com/?path=/story/hooks-usemouseposition--default)
##### [usePrevious](https://63ed98bdfdd4823a325643f3-hlkpxebdcw.chromatic.com/?path=/story/hooks-useprevious--default)
##### [useSaveClose](http://localhost:6006/?path=/story/hooks-usesaveclose--default)
##### [useScroll](https://63ed98bdfdd4823a325643f3-hlkpxebdcw.chromatic.com/?path=/story/hooks-usescroll--default)
##### [useSize](http://localhost:6006/?path=/story/hooks-usesize--default)
##### [useTrottle](https://63ed98bdfdd4823a325643f3-lhqbjjxcid.chromatic.com/?path=/story/hooks-usethrottle--default)
##### [useToggle](https://63ed98bdfdd4823a325643f3-lhqbjjxcid.chromatic.com/?path=/story/hooks-usetoggle--default)
##### [useWindowSize](https://63ed98bdfdd4823a325643f3-hjotyfkise.chromatic.com/?path=/story/hooks-usewindowsize--default)

## Contributing
If you'd like to contribute to emonster-hnc, feel free to submit a pull request or open an issue on GitHub. We welcome all contributions and feedback!

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[github]: <https://github.com/patrickxunuo/emonster-hnc>
[react]: <https://reactjs.org/>
[antd]: <https://ant.design/>
[framer-motion]: <https://www.framer.com/motion/>
[font-awesome]: <https://fontawesome.com/>
[storybook]: <https://63ed98bdfdd4823a325643f3-jjqmnyvhul.chromatic.com/>

