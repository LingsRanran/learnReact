# learnReact
## 总结
> 1. **props**
>    > * 为了使得组件的可定制性更强，在使用组件的时候，可以在标签上加属性来传入配置参数。
>    > * 组件可以在内部通过 `this.props` 获取到配置参数，组件可以根据 `props` 的不同来确定自己的显示形态，达到可配置的效果。
>    > * 可以通过给组件添加类属性 `defaultProps` 来配置默认参数。
>    > * `props` 一旦传入，你就不可以在组件内部对它进行修改。但是你可以通过父组件主动重新渲染的方式来传入新的 `props`，从而达到更新的效果。
> 2. **props vs state**
>    > * `state` 的主要作用是用于组件保存、控制、修改自己的可变状态。`state` 在组件内部初始化，可以被组件自身修改，而外部不能访问也不能修改。你可以认为 `state` 是一个局部的、只能被组件自身控制的数据源。`state` 中状态可以通过 `this.setState` 方法进行更新，`setState` 会导致组件的重新渲染.
>    > * `props` 的主要作用是让使用该组件的父组件可以传入参数来配置该组件。它是外部传进来的配置参数，组件内部无法控制也无法修改。除非外部组件主动传入新的 props，否则组件的 `props` 永远保持不变。
>    > * `state` 和 `props` 有着千丝万缕的关系。它们都可以决定组件的行为和显示形态。一个组件的 `state` 中的数据可以通过 `props` 传给子组件，一个组件可以使用外部传入的 `props` 来初始化自己的 `state`。但是它们的职责其实非常明晰分明：***state 是让组件控制自己的状态，`props` 是让外部对组件自己进行配置***。
>    > * ***尽量少地用 `state`，尽量多地用 `props`。***
> 3. ***对于用表达式套数组罗列到页面上的元素，都要为每个元素加上 `key` 属性，这个 `key` 必须是每个元素唯一的标识***
> 4. **comment-app案例总结**
>    > * 实现功能之前先理解、分析需求，划分组件。并且掌握划分组件的基本原则——可复用性、可维护性。
>    > * 受控组件的概念，React.js 中的 `input`  、`textarea` 、`select`  等元素的 `value` 值如果是受到 `React.js` 的控制，那么就是受控组件。
>    > * 组件之间使用 `props` 通过父元素传递数据的技巧。
> 5. **挂载阶段的组件生命周期**
>    > * React.js 将组件渲染，并且构造 DOM 元素然后塞入页面的过程称为组件的 ***挂载*** 。
>    > * `componentWillMount` ：组件挂载开始之前，也就是在组件调用 `render` 方法之前调用。
>    > * `componentDidMount` ：组件挂载完成以后，也就是 DOM 元素已经插入页面后调用。
>    > * `componentWillUnmount` ：组件对应的 DOM 元素从页面中删除之前调用。
>    > * 我们一般会把组件的 state 的初始化工作放在 `constructor` 里面去做；在 `componentWillMount` 进行组件的启动工作，例如 Ajax 数据拉取、定时器的启动；组件从页面上销毁的时候，有时候需要一些数据的清理，例如定时器的清理，就会放在 `componentWillUnmount` 里面去做。
> 6. **更新阶段的组件生命周期**
>    > * `shouldComponentUpdate(nextProps, nextState)` ：你可以通过这个方法控制组件是否重新渲染。如果返回 false 组件就不会重新渲染。这个生命周期在 React.js 性能优化上非常有用。
>    > * `componentWillReceiveProps(nextProps)` ：组件从父组件接收到新的 props 之前调用。
>    > * `componentWillUpdate()` ：组件开始重新渲染之前调用。
>    > * `componentDidUpdate()` ：组件重新渲染并且把更改变更到真实的 DOM 以后调用。
> 7. **ref 和 React.js 中的 DOM 操作**
>    > * 可以给任意代表 HTML 元素标签加上 `ref` 从而获取到它 DOM 元素然后调用 DOM API。但是记住一个原则：***能不用 ref 就不用***。
> 8. **props.children 和容器类组件**
>    > * 使用自定义组件的时候，可以在其中嵌套 JSX 结构。嵌套的结构在组件内部都可以通过 `props.children` 获取到，这种组件编写方式在编写容器类型的组件当中非常有用。
> 9. **dangerouslySetHTML 和 style 属性**
>    > * `dangerouslySetHTML` ：需要给 `dangerouslySetInnerHTML` 传入一个对象，这个对象的 `__html` 属性值就相当于元素的 `innerHTML`，这样我们就可以动态渲染元素的 `innerHTML` 结构了。
>    > * `style` : 用对象作为 `style` 方便我们动态设置元素的样式。我们可以用 `props` 或者 `state` 中的数据生成样式对象再传给元素，然后用 `setState` 就可以修改样式，非常灵活。
> 10. **PropTypes 和组件参数验证**
>    > * 通过 `PropTypes` 给组件的参数做类型限制，可以在帮助我们迅速定位错误，这在构建大型应用程序的时候特别有用；另外，给组件加上 `propTypes`，也让组件的开发、使用更加规范清晰。
> 11. **组件的内容编写顺序**
>    > 1. `static` 开头的类属性，如 `defaultProps`、`propTypes`。
>    > 2. 构造函数，`constructor`。
>    > 3. `getter`/`setter`。
>    > 4. 组件生命周期。
>    > 5. `_` 开头的私有方法。
>    > 6. 事件监听方法，`handle*`。
>    > 7. `render*` 开头的方法，有时候 `render()` 方法里面的内容会分开到不同函数里面进行，这些函数都以 `render*` 开头。
>    > 8. `render()` 方法。
> 12. **Redux**
>    > 1. FLUX
>    >    > 1. Dispatcher
>    >    >    > Dispatcher存在的作用，就是用来派发 action，接下来我们就来定义应用中涉及的 action。
>    >    > 2. action