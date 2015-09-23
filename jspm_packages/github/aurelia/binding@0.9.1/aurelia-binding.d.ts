declare module 'aurelia-binding' {
  import * as core from 'core-js';
  import { TaskQueue }  from 'aurelia-task-queue';
  import { All, Container }  from 'aurelia-dependency-injection';
  import { Decorators, Metadata }  from 'aurelia-metadata';
  export function subscriberCollection(): any;
  export class AccessKeyedObserver {
    constructor(expression: any, scope: any, binding: any);
    getValue(): any;
    setValue(newValue: any): any;
    subscribe(context: any, callable: any): any;
    unsubscribe(context: any, callable: any): any;
    subscribeMember(object: any, key: any): any;
    unsubscribeMember(): any;
    objectChanged(newValue: any, oldValue: any): any;
    keyChanged(newValue: any, oldValue: any): any;
    memberChanged(newValue: any, oldValue: any): any;
    call(context: any, newValue: any, oldValue: any): any;
  }
  export function calcSplices(current: any, currentStart: any, currentEnd: any, old: any, oldStart: any, oldEnd: any): any;
  export function projectArraySplices(array: any, changeRecords: any): any;
  export var hasObjectObserve: any;
  export var hasArrayObserve: any;
  export function getChangeRecords(map: any): any;
  export class ModifyCollectionObserver {
    constructor(taskQueue: any, collection: any);
    subscribe(context: any, callable: any): any;
    unsubscribe(context: any, callable: any): any;
    addChangeRecord(changeRecord: any): any;
    reset(oldCollection: any): any;
    getLengthObserver(): any;
    call(): any;
  }
  export class CollectionLengthObserver {
    constructor(collection: any);
    getValue(): any;
    setValue(newValue: any): any;
    subscribe(context: any, callable: any): any;
    unsubscribe(context: any, callable: any): any;
    call(newValue: any): any;
  }
  export function getArrayObserver(taskQueue: any, array: any): any;
  class ModifyArrayObserver extends ModifyCollectionObserver {
    constructor(taskQueue: any, array: any);
    static create(taskQueue: any, array: any): any;
  }
  class ArrayObserveObserver {
    constructor(array: any);
    subscribe(context: any, callable: any): any;
    unsubscribe(context: any, callable: any): any;
    getLengthObserver(): any;
    handleChanges(changeRecords: any): any;
  }
  export class CompositeObserver {
    constructor(expression: any, scope: any, binding: any);
    getValue(): any;
    subscribe(context: any, callable: any): any;
    unsubscribe(context: any, callable: any): any;
    addPrimary(expression: any): any;
    addChild(expression: any, condition: any): any;
    isObservable(): any;
    call(context: any): any;
    connect(connect: any): any;
  }
  
  //  ValueConverter
  //  - Args
  // 
  //  Conditional
  //  - Condition
  //  - Yes
  //  - No
  //  - should not connect Yes if Condition is falsey
  //  - should not connect No if Condition is truthy
  // 
  //  CallScope
  //  - Name
  //  - Args
  //  - should not connect args if name is null/Undefined/not a function
  // 
  //  CallMember
  //  - Instance
  //  - Args
  //  - should not connect args if instance is null/Undefined/not a function
  // 
  //  CallFunction
  //  - Func
  //  - Args
  //  - should not connect args if instance is null/Undefined/not a function
  // 
  //  Binary
  //  - Left
  //  - Right
  //  - should not connect Right if operator is && and Left is falsey
  //  - should not connect Right if operator is || and Left is truthy
  // 
  //  PrefixNot
  //  - expression
  export class Expression {
    constructor();
    evaluate(scope: any, valueConverters: any, args?: any): any;
    assign(scope: any, value: any, valueConverters: any): any;
    toString(): any;
  }
  export class Chain extends Expression {
    constructor(expressions: any);
    evaluate(scope: any, valueConverters: any): any;
    accept(visitor: any): any;
  }
  export class ValueConverter extends Expression {
    constructor(expression: any, name: any, args: any, allArgs: any);
    evaluate(scope: any, valueConverters: any): any;
    assign(scope: any, value: any, valueConverters: any): any;
    accept(visitor: any): any;
    connect(binding: any, scope: any): any;
  }
  export class Assign extends Expression {
    constructor(target: any, value: any);
    evaluate(scope: any, valueConverters: any): any;
    accept(vistor: any): any;
    connect(binding: any, scope: any): any;
  }
  export class Conditional extends Expression {
    constructor(condition: any, yes: any, no: any);
    evaluate(scope: any, valueConverters: any): any;
    accept(visitor: any): any;
    connect(binding: any, scope: any): any;
  }
  export class AccessScope extends Expression {
    constructor(name: any);
    evaluate(scope: any, valueConverters: any): any;
    assign(scope: any, value: any): any;
    accept(visitor: any): any;
    connect(binding: any, scope: any): any;
  }
  export class AccessMember extends Expression {
    constructor(object: any, name: any);
    evaluate(scope: any, valueConverters: any): any;
    assign(scope: any, value: any): any;
    accept(visitor: any): any;
    connect(binding: any, scope: any): any;
  }
  export class AccessKeyed extends Expression {
    constructor(object: any, key: any);
    evaluate(scope: any, valueConverters: any): any;
    assign(scope: any, value: any): any;
    accept(visitor: any): any;
    connect(binding: any, scope: any): any;
  }
  export class CallScope extends Expression {
    constructor(name: any, args: any);
    evaluate(scope: any, valueConverters: any, args: any): any;
    accept(visitor: any): any;
    connect(binding: any, scope: any): any;
  }
  export class CallMember extends Expression {
    constructor(object: any, name: any, args: any);
    evaluate(scope: any, valueConverters: any, args: any): any;
    accept(visitor: any): any;
    connect(binding: any, scope: any): any;
  }
  export class CallFunction extends Expression {
    constructor(func: any, args: any);
    evaluate(scope: any, valueConverters: any, args: any): any;
    accept(visitor: any): any;
    connect(binding: any, scope: any): any;
  }
  export class Binary extends Expression {
    constructor(operation: any, left: any, right: any);
    evaluate(scope: any, valueConverters: any): any;
    accept(visitor: any): any;
    connect(binding: any, scope: any): any;
  }
  export class PrefixNot extends Expression {
    constructor(operation: any, expression: any);
    evaluate(scope: any, valueConverters: any): any;
    accept(visitor: any): any;
    connect(binding: any, scope: any): any;
  }
  export class LiteralPrimitive extends Expression {
    constructor(value: any);
    evaluate(scope: any, valueConverters: any): any;
    accept(visitor: any): any;
    connect(binding: any, scope: any): any;
  }
  export class LiteralString extends Expression {
    constructor(value: any);
    evaluate(scope: any, valueConverters: any): any;
    accept(visitor: any): any;
    connect(binding: any, scope: any): any;
  }
  export class LiteralArray extends Expression {
    constructor(elements: any);
    evaluate(scope: any, valueConverters: any): any;
    accept(visitor: any): any;
    connect(binding: any, scope: any): any;
  }
  export class LiteralObject extends Expression {
    constructor(keys: any, values: any);
    evaluate(scope: any, valueConverters: any): any;
    accept(visitor: any): any;
    connect(binding: any, scope: any): any;
  }
  export class Unparser {
    constructor(buffer: any);
    static unparse(expression: any): any;
    write(text: any): any;
    writeArgs(args: any): any;
    visitChain(chain: any): any;
    visitValueConverter(converter: any): any;
    visitAssign(assign: any): any;
    visitConditional(conditional: any): any;
    visitAccessScope(access: any): any;
    visitAccessMember(access: any): any;
    visitAccessKeyed(access: any): any;
    visitCallScope(call: any): any;
    visitCallFunction(call: any): any;
    visitCallMember(call: any): any;
    visitPrefix(prefix: any): any;
    visitBinary(binary: any): any;
    visitLiteralPrimitive(literal: any): any;
    visitLiteralArray(literal: any): any;
    visitLiteralObject(literal: any): any;
    visitLiteralString(literal: any): any;
  }
  export var bindingMode: any;
  export class Token {
    constructor(index: any, text: any);
    withOp(op: any): any;
    withGetterSetter(key: any): any;
    withValue(value: any): any;
    toString(): any;
  }
  export class Lexer {
    lex(text: any): any;
  }
  export class Scanner {
    constructor(input: any);
    scanToken(): any;
    scanCharacter(start: any, text: any): any;
    scanOperator(start: any, text: any): any;
    scanComplexOperator(start: any, code: any, one: any, two: any): any;
    scanIdentifier(): any;
    scanNumber(start: any): any;
    scanString(): any;
    advance(): any;
    error(message: any, offset?: any): any;
  }
  export class Parser {
    constructor();
    parse(input: any): any;
  }
  export class ParserImplementation {
    constructor(lexer: any, input: any);
    peek(): any;
    parseChain(): any;
    parseValueConverter(): any;
    parseExpression(): any;
    parseConditional(): any;
    parseLogicalOr(): any;
    parseLogicalAnd(): any;
    parseEquality(): any;
    parseRelational(): any;
    parseAdditive(): any;
    parseMultiplicative(): any;
    parsePrefix(): any;
    parseAccessOrCallMember(): any;
    parsePrimary(): any;
    parseAccessOrCallScope(): any;
    parseObject(): any;
    parseExpressionList(terminator: any): any;
    optional(text: any): any;
    expect(text: any): any;
    advance(): any;
    error(message: any): any;
  }
  export function getMapObserver(taskQueue: any, map: any): any;
  class ModifyMapObserver extends ModifyCollectionObserver {
    constructor(taskQueue: any, map: any);
    static create(taskQueue: any, map: any): any;
  }
  class DelegateHandlerEntry {
    constructor(eventName: any);
    increment(): any;
    decrement(): any;
  }
  class DefaultEventStrategy {
    subscribe(target: any, targetEvent: any, callback: any, delegate: any): any;
  }
  export class EventManager {
    constructor();
    registerElementConfig(config: any): any;
    registerElementPropertyConfig(tagName: any, propertyName: any, events: any): any;
    registerElementHandler(tagName: any, handler: any): any;
    registerEventStrategy(eventName: any, strategy: any): any;
    getElementHandler(target: any, propertyName: any): any;
    addEventListener(target: any, targetEvent: any, callback: any, delegate: any): any;
  }
  export class DirtyChecker {
    constructor();
    addProperty(property: any): any;
    removeProperty(property: any): any;
    scheduleDirtyCheck(): any;
    check(): any;
  }
  export class DirtyCheckProperty {
    constructor(dirtyChecker: any, obj: any, propertyName: any);
    getValue(): any;
    setValue(newValue: any): any;
    call(): any;
    isDirty(): any;
    subscribe(context: any, callable: any): any;
    unsubscribe(context: any, callable: any): any;
  }
  export class SetterObserver {
    constructor(taskQueue: any, obj: any, propertyName: any);
    getValue(): any;
    setValue(newValue: any): any;
    getterValue(): any;
    setterValue(newValue: any): any;
    call(): any;
    subscribe(context: any, callable: any): any;
    unsubscribe(context: any, callable: any): any;
    convertProperty(): any;
  }
  export class OoPropertyObserver {
    constructor(obj: any, propertyName: any);
    getValue(): any;
    setValue(newValue: any): any;
    subscribe(context: any, callable: any): any;
    unsubscribe(context: any, callable: any): any;
  }
  export class OoObjectObserver {
    constructor(obj: any, observerLocator: any);
    subscriberAdded(): any;
    subscriberRemoved(propertyName: any, callback: any): any;
    getObserver(propertyName: any, descriptor: any): any;
  }
  export class XLinkAttributeObserver {
    
    //  xlink namespaced attributes require getAttributeNS/setAttributeNS
    //  (even though the NS version doesn't work for other namespaces
    //  in html5 documents)
    constructor(element: any, propertyName: any, attributeName: any);
    getValue(): any;
    setValue(newValue: any): any;
    subscribe(): any;
  }
  export class DataAttributeObserver {
    constructor(element: any, propertyName: any);
    getValue(): any;
    setValue(newValue: any): any;
    subscribe(): any;
  }
  export class StyleObserver {
    constructor(element: any, propertyName: any);
    getValue(): any;
    setValue(newValue: any): any;
    subscribe(): any;
    flattenCss(object: any): any;
  }
  export class ValueAttributeObserver {
    constructor(element: any, propertyName: any, handler: any);
    getValue(): any;
    setValue(newValue: any): any;
    notify(): any;
    subscribe(context: any, callable: any): any;
    unsubscribe(context: any, callable: any): any;
  }
  export class SelectValueObserver {
    constructor(element: any, handler: any, observerLocator: any);
    getValue(): any;
    setValue(newValue: any): any;
    call(context: any, splices: any): any;
    synchronizeOptions(): any;
    synchronizeValue(): any;
    notify(): any;
    subscribe(context: any, callable: any): any;
    unsubscribe(context: any, callable: any): any;
    bind(): any;
    unbind(): any;
  }
  export class CheckedObserver {
    constructor(element: any, handler: any, observerLocator: any);
    getValue(): any;
    setValue(newValue: any): any;
    call(context: any, splices: any): any;
    synchronizeElement(): any;
    synchronizeValue(): any;
    notify(): any;
    subscribe(context: any, callable: any): any;
    unsubscribe(context: any, callable: any): any;
    unbind(): any;
  }
  export class ClassObserver {
    constructor(element: any);
    getValue(): any;
    setValue(newValue: any): any;
    subscribe(): any;
  }
  export class ComputedPropertyObserver {
    constructor(obj: any, propertyName: any, descriptor: any, observerLocator: any);
    getValue(): any;
    setValue(newValue: any): any;
    call(context: any): any;
    subscribe(context: any, callable: any): any;
    unsubscribe(context: any, callable: any): any;
  }
  export function hasDeclaredDependencies(descriptor: any): any;
  export function declarePropertyDependencies(ctor: any, propertyName: any, dependencies: any): any;
  export var elements: any;
  export var presentationElements: any;
  export var presentationAttributes: any;
  export function isStandardSvgAttribute(nodeName: any, attributeName: any): any;
  export class ObserverLocator {
    static inject(): any;
    constructor(taskQueue: any, eventManager: any, dirtyChecker: any, observationAdapters: any);
    getObserver(obj: any, propertyName: any): any;
    getOrCreateObserversLookup(obj: any): any;
    createObserversLookup(obj: any): any;
    getObservationAdapter(obj: any, propertyName: any, descriptor: any): any;
    createPropertyObserver(obj: any, propertyName: any): any;
    getArrayObserver(array: any): any;
    getMapObserver(map: any): any;
  }
  export class ObjectObservationAdapter {
    handlesProperty(object: any, propertyName: any, descriptor: any): any;
    getObserver(object: any, propertyName: any, descriptor: any): any;
  }
  export class BindingExpression {
    constructor(observerLocator: any, targetProperty: any, sourceExpression: any, mode: any, valueConverterLookupFunction: any, attribute: any);
    createBinding(target: any): any;
    static create(targetProperty: any, sourceExpression: any, mode?: any): any;
  }
  class Binding {
    constructor(observerLocator: any, sourceExpression: any, target: any, targetProperty: any, mode: any, valueConverterLookupFunction: any);
    getObserver(obj: any, propertyName: any): any;
    call(context: any, newValue: any, oldValue: any): any;
    bind(source: any): any;
    unbind(): any;
  }
  export class CallExpression {
    constructor(observerLocator: any, targetProperty: any, sourceExpression: any, valueConverterLookupFunction: any);
    createBinding(target: any): any;
  }
  class Call {
    constructor(observerLocator: any, sourceExpression: any, target: any, targetProperty: any, valueConverterLookupFunction: any);
    bind(source: any): any;
    unbind(): any;
  }
  export class ValueConverterResource {
    constructor(name: any);
    static convention(name: any): any;
    analyze(container: any, target: any): any;
    register(registry: any, name: any): any;
    load(container: any, target: any): any;
  }
  
  // ES7 Decorators
  export function valueConverter(nameOrTarget: any): any;
  export function computedFrom(...rest: any[]): any;
  export class ListenerExpression {
    constructor(eventManager: any, targetEvent: any, sourceExpression: any, delegate: any, preventDefault: any);
    createBinding(target: any): any;
  }
  class Listener {
    constructor(eventManager: any, targetEvent: any, delegate: any, sourceExpression: any, target: any, preventDefault: any);
    bind(source: any): any;
    unbind(): any;
  }
  export class NameExpression {
    constructor(name: any, mode: any);
    createBinding(target: any): any;
  }
  class NameBinder {
    constructor(property: any, target: any, mode: any);
    bind(source: any): any;
    unbind(): any;
  }
}