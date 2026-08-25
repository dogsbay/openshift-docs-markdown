{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing deprecated image stream tags from the Cluster Samples Operator {id="images-samples-operator-deprecated-image-stream_{{ context }}"}

The Cluster Samples Operator leaves deprecated image stream tags in an image stream because users can have deployments that use the deprecated image stream tags. {._abstract}

You can remove deprecated image stream tags by editing the image stream with the  `oc tag` command.


:::note

Deprecated image stream tags that the samples providers have removed from their image streams are not included on initial installations.

:::


**Prerequisites**

*   You installed the {{ oc_first }}.

**Procedure**

*   Remove deprecated image stream tags by editing the image stream with the following `oc tag` command:
    ```terminal
    $ oc tag -d <image_stream_name:tag>
    ```
    ```terminal title="Example output"
    Deleted tag default/<image_stream_name:tag>.
    ```