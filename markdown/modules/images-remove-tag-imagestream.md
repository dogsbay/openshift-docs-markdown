{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing tags from image streams {id="images-remove-tag-imagestream_{{ context }}"}

To keep your image streams clean and maintain organized image references in {{ product_title }}, you can remove unused or outdated image stream tags. Remove tags by using the `oc delete istag` or `oc tag -d` commands.  {._abstract}

**Procedure**

*   Remove a tag from an image stream by entering the following command:
    ```terminal
    $ oc delete istag/<name>:<tag>
    ```

    For example, to remove the `ruby:latest` tag from the `ruby` image stream, enter the following command:
    ```terminal
    $ oc delete istag/ruby:latest
    ```
*   Alternatively, you can remove a tag using the `oc tag -d` command:
    ```terminal
    $ oc tag -d <name>:<tag>
    ```

    For example, to remove the `ruby:latest` tag from the `ruby` image stream, enter the following command:
    ```terminal
    $ oc tag -d ruby:latest
    ```