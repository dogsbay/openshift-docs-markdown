{% if context == "updating-restricted-network-cluster" %}
{%- set restricted = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the OpenShift CLI on Windows using the web console {id="cli-installing-cli-web-console-macos-windows_{{ context }}"}

To manage your cluster and deploy applications from the command line on Windows, install the {{ oc_first }} binary. You can download the {{ oc_first }} from the web console. {._abstract}

**Procedure**

{%- if not (openshift_rosa or openshift_dedicated) %}
1.  From the web console, click **?**.
    ![click-question-mark](/_assets/images/click-question-mark.png)
1.  Click **Command Line Tools**.
    ![CLI-list](/_assets/images/CLI-list.png)
1.  Select the `oc` binary for Windows platform, and then click **Download oc for Windows for x86_64**.
1.  Save the file.
1.  Unzip the archive with a ZIP program.
{% endif %}
{% if openshift_rosa or openshift_dedicated %}
1.  Download the latest version of the `oc` CLI for your operating system from the [**Downloads**](https://console.redhat.com/openshift/downloads) page on {{ cluster_manager }}.
1.  Extract the `oc` binary file from the downloaded archive.
{% endif %}
1.  Move the `oc` binary to a directory that is on your `PATH`.

    To check your `PATH`, open the command prompt and execute the following command:
    ```terminal
    C:\> path
    ```

**Verification**

*   After you install the OpenShift CLI, you can use the `oc` command:
    ```terminal
    C:\> oc <command>
    ```

{% if context == "updating-restricted-network-cluster" %}
{%- set restricted = false -%}
{% endif %}