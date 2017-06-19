import App from '../src/App.vue';

describe('Main App', function () {

  beforeAll(function() {

  });

  afterAll(function() {

  });

  it('Should have two components in App.vue', function() {
    expect(App.components.NavigationBar).toBeDefined();
    expect(App.components.GreyFooter).toBeDefined();
  });

  it('Should initialize "user" data with "Wanderson Alves"', function() {
    expect(App.data().user).toBe('Wanderson Alves');
  });

  it('Should initialize "notifications" data with 4', function() {
    expect(App.data().notifications).toBe(4);
  });
});
