{%- set _mod_docs_content_type = "PROCEDURE" %}

# Installing the {{ pipelines_title }} CLI on Linux {id="installing-tkn-on-linux"}

For Linux distributions, you can download the CLI as a `tar.gz` archive. {._abstract}

**Procedure**

1.  Download the relevant CLI tool.
    *   [Linux (x86_64, amd64)](https://mirror.openshift.com/pub/openshift-v4/clients/pipelines/{{ pipelines_version_number }}.0/tkn-linux-amd64.tar.gz)
    *   [Linux on {{ ibm_z_name }} and {{ ibm_linuxone_name }} (s390x)](https://mirror.openshift.com/pub/openshift-v4/clients/pipelines/{{ pipelines_version_number }}.0/tkn-linux-s390x.tar.gz)
    *   [Linux on {{ ibm_power_name }} (ppc64le)](https://mirror.openshift.com/pub/openshift-v4/clients/pipelines/{{ pipelines_version_number }}.0/tkn-linux-ppc64le.tar.gz)
    *   [Linux on ARM (aarch64, arm64)](https://mirror.openshift.com/pub/openshift-v4/clients/pipelines/{{ pipelines_version_number }}.0/tkn-linux-arm64.tar.gz)

1.  Unpack the archive:
    ```terminal
    $ tar xvzf <file>
    ```
{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
1.  Add the location of your `tkn`, `tkn-pac`, and `opc` files to your `PATH` environment variable.
{% endif %}

{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
1.  Add the location of your `tkn` and `tkn-pac` files to your `PATH` environment variable.
{% endif %}
1.  To check your `PATH`, run the following command:
    ```terminal
    $ echo $PATH
    ```