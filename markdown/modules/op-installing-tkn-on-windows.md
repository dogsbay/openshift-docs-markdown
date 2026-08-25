{%- set _mod_docs_content_type = "PROCEDURE" %}

# Installing the {{ pipelines_title }} CLI on Windows {id="installing-tkn-on-windows"}

For Windows, you can download the CLI as a `zip` archive. {._abstract}

**Procedure**

1.  Download the [CLI tool](https://mirror.openshift.com/pub/openshift-v4/clients/pipelines/{{ pipelines_version_number }}.0/tkn-windows-amd64.zip).
1.  Extract the archive with a ZIP program.
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
1.  Add the location of your `tkn`, `tkn-pac`, and `opc` files to your `PATH` environment variable.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
1.  Add the location of your `tkn` and `tkn-pac` files to your `PATH` environment variable.
{% endif %}
1.  To check your `PATH`, run the following command:
    ```terminal
    C:\> path
    ```