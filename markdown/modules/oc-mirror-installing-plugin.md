{% if context == "installing-mirroring-disconnected" %}
{%- set oc_mirror = true -%}
{% endif %}

{% if context == "about-installing-oc-mirror-v2" %}
{%- set oc_mirror_v2 = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the oc-mirror OpenShift CLI plugin {id="installation-oc-mirror-installing-plugin_{{ context }}"}

You can install the oc-mirror OpenShift CLI plugin to manage image sets in disconnected environments. {._abstract}

**Prerequisites**

*   You have installed the OpenShift CLI (`oc`). If you are mirroring image sets in a fully disconnected environment, ensure the following:
    *   You have installed the oc-mirror plugin on the host that has internet access.
    *   The host in the disconnected environment has access to the target mirror registry.
*   You have set the `umask` parameter to `0022` on the operating system that uses oc-mirror.
*   You have installed the correct binary for the {{ op_system_base }} version that you are using.

**Procedure**

1.  Download the oc-mirror CLI plugin:
    1.  Navigate to the [Downloads](https://console.redhat.com/openshift/downloads) page of the {{ hybrid_console }}.
    1.  In the **OpenShift disconnected installation tools** section, select the **OS type** and **Architecture type** of the **OpenShift Client (oc) mirror plugin** from the dropdown menus.
    1.  Click **Download** to save the file.
1.  Extract the archive by running the following command:
    ```terminal
    $ tar xvzf oc-mirror.tar.gz
    ```
1.  If necessary, update the plugin file to be executable by running the following command:
    ```terminal
    $ chmod +x oc-mirror
    ```

    :::note

    Do not rename the `oc-mirror` file.
    
    :::

1.  Install the oc-mirror CLI plugin by placing the file in your `PATH`, for example `/usr/local/bin`, by running the following command:
    ```terminal
    $ sudo mv oc-mirror /usr/local/bin/.
    ```

**Verification**

{% if oc_mirror %}
*   Verify that the oc-mirror plugin v1 is successfully installed by running the following command:
    ```terminal
    $ oc mirror help --v1
    ```
{% endif %}

{% if oc_mirror_v2 %}
*   Verify that the oc-mirror plugin v2 is successfully installed by running the following command:
    ```terminal
    $ oc mirror --v2 --help
    ```
{% endif %}

{% if context == "about-installing-oc-mirror-v2" %}
{%- set oc_mirror_v2 = false -%}
{% endif %}

{% if context == "installing-mirroring-disconnected" %}
{%- set oc_mirror = false -%}
{% endif %}