import Vue from 'vue'
const components = require.context(
    './',
    true,
    /movie-container(-\w+)+\.(vue|js)$/,
    'lazy-once'
);

components.keys().forEach(filePath => {
    const component = components(filePath);
    const fileName = filePath.split('/').pop().replace(/\.\w+$/, '');

    Vue.component(
        fileName,
        () => component.default || component
    )
});