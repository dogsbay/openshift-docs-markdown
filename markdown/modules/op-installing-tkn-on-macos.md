{%- set _mod_docs_content_type = "PROCEDURE" %}

# Installing the {{ pipelines_title }} CLI on macOS {id="installing-tkn-on-macos"}

For macOS, you can download the CLI as a `tar.gz` archive. {._abstract}

**Procedure**

1.  Download the relevant CLI tool.
    *   [macOS](https://mirror.openshift.com/pub/openshift-v4/clients/pipelines/{{ pipelines_version_number }}.0/tkn-macos-amd64.tar.gz)
    *   [macOS on ARM](https://mirror.openshift.com/pub/openshift-v4/clients/pipelines/{{ pipelines_version_number }}.0/tkn-macos-arm64.tar.gz)
1.  Unpack and extract the archive.

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
1.  Add the location of your `tkn`, `tkn-pac`, and `opc` files to your `PATH` environment variable.
{% endif %}

{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
1.  Add the location of your `tkn` and `tkn-pac` and files to your `PATH` environment variable.
{% endif %}
1.  To check your `PATH`, run the following command:
    ```terminal
    $ echo $PATH
    ```