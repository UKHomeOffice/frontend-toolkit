# frontend-toolkit

Implementation of the [Home Office design system](https://github.com/UKHomeOffice/design-system) for use in projects

## HTML components

HTML components are shipped as nunjucks macro functions for maximal compatability with the GDS prototype kit.

### Usage

To use a component inside a nunjucks template, first import the component, then call as a function:

```
{% from "components/header.html" import header %}
{{ header(title='Frontend toolkit') }}
```

#### Using with express

Include the components in your app's `views` stack:

```js
app.set('views', [require('@ukhomeoffice/frontend-toolkit').views, '<your app views directory>']);
```

This will allow simple reference to the components when using them in templates.

#### Using without express

If you are not using express, and so cannot make use of its `views` stack, then you will need to provide a full path when importing components. The easiest way to do this is to expose a `componentPath` property to your templates.

```
{% set componentPath = '/path/to/frontend/toolkit/templates/' %}
{% from componentPath + "components/header.html" import header %}
{{ header(title='Frontend toolkit') }}
```

### Components

The following components are available:

* [header](./docs/components/header.md)
* [footer](./docs/components/footer.md)

## Styles

The default css styles are provided as sass files. To include these in a project add the following line to your project's sass:

```sass
@import "@ukhomeoffice/frontend-toolkit/styles/index";
```

Note: you will need to set the `includePaths` option in your sass compiler to include your project's local `node_modules` directory.
