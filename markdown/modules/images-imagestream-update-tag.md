{%- set _mod_docs_content_type = "PROCEDURE" %}
# Updating image stream tags {id="images-imagestream-update-tag_{{ context }}"}

To maintain flexibility and consistency in deployment definitions, update an image stream tag to reflect a different tag in {{ product_title }}. Specifically, you can update a tag to reflect another tag in an image stream, which is essential for managing image versions effectively. {._abstract}

**Procedure**

*   Update a tag:
    ```terminal
    $ oc tag <image-name:tag> <image-name:latest>
    ```

    For example, the following updates the `latest` tag to reflect the `3.6` tag in an image stream:
    ```terminal
    $ oc tag python:3.6 python:latest
    ```
    ```terminal title="Example output"
    Tag python:latest set to python@sha256:438208801c4806548460b27bd1fbcb7bb188273d13871ab43f.
    ```