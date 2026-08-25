{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding secrets with web console {id="builds-strategy-secrets-web-console_{{ context }}"}

You can add a secret to your build configuration so that it can access a private repository.

**Procedure**

To add a secret to your build configuration so that it can access a private repository from the {{ product_title }} web console:

1.  Create a new {{ product_title }} project.
1.  Create a secret that contains credentials for accessing a private source code repository.
1.  Create a build configuration.
1.  On the build configuration editor page or in the `create app from builder image` page of the web console, set the **Source Secret**.
1.  Click **Save**.