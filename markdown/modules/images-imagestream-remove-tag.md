{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing image stream tags {id="images-imagestream-remove-tag_{{ context }}"}

To maintain control over your image history and simplify management within {{ product_title }}, you can remove old tags from an image stream. This action helps ensure that your resources track only the current and necessary image references. {._abstract}

**Procedure**

*   Remove old tags from an image stream:
    ```terminal
    $ oc tag -d <image-name:tag>
    ```

    For example:
    ```terminal
    $ oc tag -d python:3.6
    ```
    ```terminal title="Example output"
    Deleted tag default/python:3.6
    ```