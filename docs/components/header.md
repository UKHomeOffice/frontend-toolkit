# Header component

## Example usage:

```
{% from "components/header.html" import header %}
{{
  header(
    title='Frontend toolkit',
    menu=[
      { text: 'Settings', href: '/settings' }
    ]
  )
}}
```

## Arguments

### `title`

Sets the main title text in the header

Type: `string`
Default: `<empty>`

### `home`

Sets the link href for the title

Type: `string`
Default: `/`

### `menu`

Adds optional menu items to the header.

Items should either be strings, or objects with `text` and (optional) `href` properties.

Type: `array`
Default: `[]`
