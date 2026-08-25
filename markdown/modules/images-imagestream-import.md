{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring periodic importing of image stream tags {id="images-imagestream-import_{{ context }}"}

To maintain up-to-date image definitions from an external container image registry, configure periodic importing of image stream tags. This process allows you to quickly re-import images for critical security updates by using the `--scheduled` flag. {._abstract}

**Procedure**

1.  Schedule importing images:
    ```terminal
    $ oc tag <repository/image> <image-name:tag> --scheduled
    ```

    For example:
    ```terminal
    $ oc tag docker.io/python:3.6.0 python:3.6 --scheduled
    ```
    ```terminal title="Example output"
    Tag python:3.6 set to import docker.io/python:3.6.0 periodically.
    ```

    This command causes {{ product_title }} to periodically update this particular image stream tag. This period is a cluster-wide setting set to 15 minutes by default.
1.  Remove the periodic check, re-run above command but omit the `--scheduled` flag. This will reset its behavior to default.
    ```terminal
    $ oc tag <repositiory/image> <image-name:tag>
    ```