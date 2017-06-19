import App from 'App.vue';

describe('Main App', () => {

  beforeAll(() => {

  });

  afterAll(() => {

  });

  it('[dummy] Should have "app" name', () => {
    expect(App.name).toBe('app');
  });

  it('Should have two components in App.vue', () => {
    expect(App.components.NavigationBar).toBeDefined();
    expect(App.components.GreyFooter).toBeDefined();
  });

  it('Should initialize "user" data with "Wanderson Alves"', () => {
    expect(App.data().user).toBe('Wanderson Alves');
  });

  it('Should initialize "notifications" data with 4', () => {
    expect(App.data().notifications).toBe(4);
  });
});
