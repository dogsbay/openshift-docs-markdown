{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding tags to image streams {id="images-add-tags-to-imagestreams_{{ context }}"}

To organize images and create aliases for specific versions or automatically track changes to source tags in {{ product_title }}, you can add tags to image streams with the `oc tag` command. {._abstract}

There are two types of tags available in {{ product_title }}:

*   Permanent tags: A permanent tag points to a specific image in time. If the permanent tag is in use and the source changes, the tag does not change for the destination.
*   Tracking tags: A tracking tag means that the destination tag’s metadata is updated during the import of the source tag.

The default behavior creates a permanent tag that is pinned to an image ID.

**Procedure**

*   Optional: Add a tag to an image stream by entering the following command. The default behavior creates a permanent tag that is pinned to an image ID:
    ```terminal
    $ oc tag <source_reference> <destination_image_stream>:<destination_tag>
    ```

    For example, to configure the `ruby` image stream `static-2.0` tag to always refer to the specific image that the `ruby:2.0` tag points to now, enter the following command:
    ```terminal
    $ oc tag ruby:2.0 ruby:static-2.0
    ```

    This creates a new image stream tag named `static-2.0` in the `ruby` image stream. The new tag directly references the image ID that the `ruby:2.0` image stream tag pointed to at the time `oc tag` was run, and the image it points to never changes.
*   Optional: Use the `--alias=true` flag to create a tracking tag. This ensures the destination tag automatically updates (tracks) when the source tag changes to point to a new image. For example, to ensure that the `ruby:latest` tag always reflects whatever image is currently tagged as `ruby:2.0`, enter the following command:
    ```terminal
    $ oc tag --alias=true ruby:2.0 ruby:latest
    ```

    :::note

    A Tracking Tag created with `--alias=true` automatically updates its image ID whenever the source tag changes. Use the `latest` or `stable` tracking tags for creating common, long-lived aliases. This tracking behavior only works correctly within a single image stream. Trying to create a cross-image stream alias produces an error.
    
    :::

*   Optional: Use the `--scheduled=true` flag to have the destination tag be refreshed, or re-imported, periodically. The period is configured globally at the system level. For example:
    ```terminal
    $ oc tag <source_reference> <destination_image_stream>:<destination_tag> --scheduled=true
    ```
*   Optional: Use the `--reference` flag to create an image stream tag that is not imported. The tag permanently points to the source location, regardless of changes to the source image. For example:
    ```terminal
    $ oc tag <source_reference> <destination_image_stream>:<destination_tag> --reference
    ```
*   Optional. Use the `--insecure` flag if the source registry is not secured with a valid HTTPS certificate. This flag tells the image stream to skip certificate verification during the import progress. For example:
    ```terminal
    $ oc tag <source_reference> <destination_image_stream>:<destination_tag> --insecure
    ```
*   Optional: Use the `--reference-policy=local` flag to instruct {{ product_title }} to always fetch the tagged image from the integrated registry. The registry uses the pull-through feature to serve the image to the client. By default, the image blobs are mirrored locally by the registry. As a result, they can be pulled more quickly the next time they are needed. The  `--reference-policy=local` flag also allows for pulling from insecure registries without a need to supply the `--insecure` flag to the container runtime provided that the image stream has an insecure annotation or the tag has an insecure import policy. For example:
    ```terminal
    $ oc tag <source_reference> <destination_image_stream>:<destination_tag> --reference-policy=local
    ```