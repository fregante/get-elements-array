function isWindow(arg) {
	return arg.location && arg.document && arg.alert && arg.setInterval;
}
export default function (arg) {
	if (!arg) {
		return [];
	}
	// string is interpreted as a selector
	if (typeof arg === 'string') {
		arg = document.querySelectorAll(arg);
	}

	// If it's a Array-like object
	// but not an element (<form> is is Array-like)
	// and not window (window.length)
	if ('length' in arg && arg.nodeType !== Node.ELEMENT_NODE && !isWindow(arg)) {
		// Produce a real Array
		return Array.apply(null, arg); // 3 times faster than .from and .slice.call
	}

	return [arg];
}
