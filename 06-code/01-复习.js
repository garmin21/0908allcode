/**
 * 
 * Vuex:是一个集中管理状态数据的插件或者是包,可以让任意组件之间进行通信
 * 在Vuex中经常使用四个对象,分别是:state对象,mutations对象,actions对象,getters对象
 * state对象,包含了多个状态数据,说白了,状态数据都在state对象中定义
 * mutations对象,包含了多个直接修改状态数据的方法,说白了,凡是要修改状态数据的方法都在这个对象中书写,而且是直接修改状态数据的方法,一般都是不同的方法
 * actions对象,包含了多个间接修改状态数据的方法,说白了,只要是修改状态数据,方法都在这里定义,但是和mutations不一样的是什么,actions对象中定义的方法都是调用mutations对象中的方法,也就是说actions对象中的方法,都是间接修改状态数据的,另外,actions对象中的方法可以是同步操作的方法也可以是异步操作的方法
 * 那么将来操作状态数据可能是同步的方法操作也可能是异步的方法操作,同步的就放在mutations对象中,异步的操作方法放在actions对象中(内部也是调用mutations对象中的方法)
 * getter对象,包含了多个状态数据的计算属性的get方法,也就是说,如果我有一个属性,这个属性的数据变化是根据状态数据的变化而变化,那么此时就会根据状态数据进行计算属性的get进行书写
 * 使用Vuex可以在Vue的任意组件中进行通信
 * 组件之间是有关系,父子关系(直接/间接),兄弟关系,组件之间就会涉及到传值的问题,传递数据的问题,组件之间进行通信的问题
 * 组件之间通信有哪些方式:
 * props,自定义事件,PubSub,事件总线,插槽
 * props在组件之间通信,一般都是父子组件之间进行通信,可以设置传递的数据是什么类型,或者是是否是必须的
 * 自定义事件组件之间通信,一般都是父子组件之间进行通信
 * PubSub组件之间通信,首先PubSub是一个插件或者包,不是专门针对Vue的一个插件,但是可以在Vue中使用,可以做到任意组件之间的通信,当然React中也可以使用PubSub进行组件之间通信(延伸到React中组件之间通信的一些方式)
 * 事件总线可以让任意组件之间进行通信,无非就是在Vue的原型上添加一个属性,该属性存储的是Vue的实例对象,所有的组件都可以通过该属性调用里面的$on和$emit进行事件的绑定和分发,从而实现任意组件之间通信
 * 插槽:有普通插槽,具名插槽,还有作用域插槽
 * 所谓的插槽就是占位,咱一个组件内部占位,其他组件可以调用当前组件,并且向占位的位置传递数据,父子关系的组件进行通信
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */