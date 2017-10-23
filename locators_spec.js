describe('Locators', function(){
  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    browser.driver.manage().window().maximize();
  });

  it('should locate an element by model', function() {
    var firstField = element(by.model('first'));
    expect(firstField.isPresent()).toBe(true);
  });

  it('should locate an element by binding', function() {
    var latestResult = element(by.binding('latest'));
    expect(latestResult.isPresent()).toBe(true);
  });

  it('should locate an element by repeater', function() {
    var history = element.all(by.repeater('result in memory'));

    var firstField = element(by.model('first'));
    var secondField = element.all(by.css('.input-small.ng-pristine.ng-untouched.ng-valid')).get(0);
    var goButton = element(by.id('gobutton'));
    firstField.sendKeys(2);
    secondField.sendKeys(3);
    goButton.click();
    expect(history.count()).toEqual(1);
  });

  it('should locate an element by css', function() {
    var secondField = element.all(by.css('.input-small.ng-pristine.ng-untouched.ng-valid')).get(1);
    expect(secondField.isPresent()).toBe(true);
  });

  it('should locate an element by id', function() {
    var goButton = element(by.id('gobutton'));
    expect(goButton.isPresent()).toBe(true);
  });

  it('should locate elements by options', function() {
    var allOptions = element.all(by.options('value for (key, value) in operators'));
    expect(allOptions.count()).toEqual(5);
  });

  it('should locate an element by cssContainingText', function() {
    var colTime = element(by.cssContainingText('.table', 'Time'));
    expect(colTime.isPresent()).toBe(true);
  });

  it('should locate elements by deepCss', function(){
    var spans = element.all(by.deepCss('th'));
    expect(spans.count()).toEqual(3);
  });
});
