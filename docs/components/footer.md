# Footer component

## Example usage:

```
{% from "components/footer.html" import footer %}
{{
  footer(
    text='Frontend toolkit',
    menu=[
      { text: 'Settings', href: '/settings' }
    ]
  )
}}
```

## Arguments

### `text`

Sets the text in the footer

Type: `string`
Default: `A Home Office Digital, Data and Technology service`

### `menu`

Adds optional menu items to the footer.

Items should either be strings, or objects with `text` and (optional) `href` properties.

Type: `array`
Default: `[]`
