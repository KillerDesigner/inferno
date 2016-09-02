import { isUndefined, isNull } from './utils';

export const NULL_INDEX = -1;
export const ROOT_INDEX = -2;

export const NodeTypes = {
	ELEMENT: 1,
	OPT_ELEMENT: 2,
	TEXT: 3,
	FRAGMENT: 4,
	OPT_BLUEPRINT: 5
};

export const ValueTypes = {
	CHILDREN: 1,
	PROP_CLASS_NAME: 2,
	PROP_STYLE: 3,
	PROP_DATA: 4,
	PROP: 5
};

export const ChildrenTypes = {
	NON_KEYED: 1,
	KEYED: 2,
	NODE: 3,
	TEXT: 4,
	UNKNOWN: 5
};

export function createOptBlueprint(staticVElement, v0, d0, v1, d1, v2, d2) {
	return {
		clone: null,
		d0,
		d1,
		d2,
		pools: {
			nonKeyed: [],
			keyed: new Map()
		},
		staticVElement,
		type: NodeTypes.OPT_BLUEPRINT,
		v0,
		v1,
		v2
	};
}

export function createVComponent(component, props, key, hooks, ref) {
	return {
		component,
		dom: null,
		hooks: hooks || null,
		key,
		props,
		ref: ref || null,
		type: NodeTypes.COMPONENT
	};
}

export function createVText(text) {
	return {
		dom: null,
		text,
		type: NodeTypes.TEXT
	};
}

export function createVElement(tag, props, children, key, ref, childrenType) {
	return {
		children,
		childrenType: childrenType || ChildrenTypes.UNKNOWN,
		dom: null,
		key,
		props,
		ref: ref || null,
		tag,
		type: NodeTypes.ELEMENT
	};
}

export function createStaticVElement(tag, props, children) {
	return {
		children,
		props,
		tag,
		type: NodeTypes.ELEMENT
	};
}

export function createVFragment(children, childrenType) {
	return {
		children,
		childrenType: childrenType || ChildrenTypes.UNKNOWN,
		dom: null,
		pointer: null,
		type: NodeTypes.FRAGMENT
	};
}

export function isVElement(o) {
	return o.type === NodeTypes.ELEMENT;
}

export function isOptVElement(o) {
	return o.type === NodeTypes.OPT_ELEMENT;
}

export function isVComponent(o) {
	return o.type === NodeTypes.COMPONENT;
}

export function isVText(o) {
	return o.type === NodeTypes.TEXT;
}

export function isVFragment(o) {
	return o.type === NodeTypes.FRAGMENT;
}

export function isVPlaceholder(o) {
	return o.type === NodeTypes.FRAGMENT;
}

export function isVNode(o) {
	return !isUndefined(o.type);
}

export function isUnknownChildrenType(o) {
	return o === ChildrenTypes.UNKNOWN;
}

export function isKeyedListChildrenType(o) {
	return o === ChildrenTypes.KEYED;
}

export function isNonKeyedListChildrenType(o) {
	return o === ChildrenTypes.NON_KEYED;
}

export function isTextChildrenType(o) {
	return o === ChildrenTypes.TEXT;
}

export function isNodeChildrenType(o) {
	return o === ChildrenTypes.NODE;
}