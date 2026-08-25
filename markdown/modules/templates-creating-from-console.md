{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an application by using the web console {id="templates-creating-from-console_{{ context }}"}

To create an application from a template on your {{ product_title }} cluster, use the web console **Developer Catalog**. Select a template or builder image and configure the generated objects before you deploy. {._abstract}

**Procedure**

1.  Navigate to your project and click **+Add**.
1.  Click **All services** in the **Developer Catalog** tile.
1.  Click **Builder Images** under **Type** to see the available builder images.

    :::note

    Only image stream tags that have the `builder` tag listed in their annotations appear in this list, as demonstrated in the following example. Include `builder` in the `tags` annotation so the image stream tag appears in the web console as a builder.
    
    :::

    ```yaml
    kind: "ImageStream"
    apiVersion: "image.openshift.io/v1"
    metadata:
      name: "ruby"
      creationTimestamp: null
    spec:
    # ...
      tags:
        - name: "2.6"
          annotations:
            description: "Build and run Ruby 2.6 applications"
            iconClass: "icon-ruby"
            tags: "builder,ruby"
            supports: "ruby:2.6,ruby"
            version: "2.6"
    # ...
    ```
1.  Modify the settings in the new application screen to configure the objects to support your application.