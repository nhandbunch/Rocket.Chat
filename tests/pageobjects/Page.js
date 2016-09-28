class Page {
	get body() { return browser.element('body'); }

	open(path) {
		browser.url('http://localhost:3000/' + path);
		this.body.waitForExist();
		browser.windowHandleSize({width:1280, height:800});
	}
}

module.exports = Page;
