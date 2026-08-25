{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding a custom icon to a quick start {id="adding-custom-icon-to-quick-start_{{ context }}"}

A default icon is provided for all quick starts. You can provide your own custom icon. {._abstract}

**Procedure**

1.  Find the `.svg` file that you want to use as your custom icon.
1.  Use an [online tool to convert the text to base64](https://cryptii.com/pipes/text-to-base64).
1.  In the YAML file, add `icon: >-`, then on the next line include `data:image/svg+xml;base64` followed by the output from the base64 conversion. For example:
    ```yaml
    icon: >-
       data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHJvbGU9ImltZyIgdmlld.
    ```