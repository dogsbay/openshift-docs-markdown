{% if context == "mirroring-ocp-image-repository" %}
{%- set restricted = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the OpenShift CLI on macOS {id="cli-installing-cli-macos_{{ context }}"}

To manage your cluster and deploy applications from the command line on macOS, install the {{ oc_first }} binary. You can download the {{ oc_first }} from the Red&#160; Customer Portal. {._abstract}


:::important

If you installed an earlier version of `oc`, you cannot use it to complete all of the commands in {{ product_title }}.

Download and install the new version of `oc`.
{%- if restricted %}
If you are updating a cluster in a disconnected environment, install the `oc` version that you plan to update to.
{%- endif %}

:::


{% if microshift %}

:::note

{{ product_title }} version numbering matches {{ OCP }} version numbering. Use the `oc` binary that matches your {{ microshift_short }} version and has the appropriate RHEL compatibility.

:::


{%- endif %}

**Procedure**

{% if openshift_origin %}
1.  Navigate to [https://mirror.openshift.com/pub/openshift-v4/clients/oc/latest/](https://mirror.openshift.com/pub/openshift-v4/clients/oc/latest/) and choose the folder for your operating system and architecture.
1.  Download `oc.tar.gz`.
{% endif %}
{% if not (openshift_origin or microshift or openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
1.  Navigate to the [Download {{ product_title }}](https://access.redhat.com/downloads/content/290) page on the Red&#160;Hat Customer Portal.
1.  Select the architecture from the **Product Variant** list.
1.  Select the appropriate version from the **Version** list.
1.  Click **Download Now** next to the **OpenShift v{{ product_version }} macOS Clients** entry and save the file.

    :::note

    For macOS arm64, choose the **OpenShift v{{ product_version }} macOS arm64 Client** entry.
    
    :::

{% endif %}
{% if microshift or openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
1.  Navigate to the [Download {{ OCP }}](https://access.redhat.com/downloads/content/290) on the Red&#160;Hat Customer Portal.
1.  Select the appropriate version from the **Version** drop-down list.
1.  Click **Download Now** next to the **OpenShift v{{ product_version }} macOS Clients** entry and save the file.

{%- endif %}
1.  Unpack and unzip the archive.
1.  Move the `oc` binary to a directory on your `PATH` variable.

    To check your `PATH` variable, open a terminal and execute the following command:
    ```terminal
    $ echo $PATH
    ```

**Verification**

*   Verify your installation by using an `oc` command:
    ```terminal
    $ oc <command>
    ```

{% if context == "mirroring-ocp-image-repository" %}
{%- set restricted = "" -%}
{% endif %}