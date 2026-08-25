{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using environment variables for custom builds {id="builds-strategy-custom-environment-variables_{{ context }}"}

To make environment variables available to the custom build process, you can add environment variables to the `customStrategy` definition of the build configuration.

The environment variables defined there are passed to the pod that runs the
custom build.

**Procedure**

1.  Define a custom HTTP proxy to be used during build:
    ```yaml
    customStrategy:
    ...
      env:
        - name: "HTTP_PROXY"
          value: "http://myproxy.net:5187/"
    ```
1.  To manage environment variables defined in the build configuration, enter the following command:
    ```terminal
    $ oc set env <enter_variables>
    ```