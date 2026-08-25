{%- set _mod_docs_content_type = "PROCEDURE" %}
# Downloading the installation ISO {id="virt-installing-ove-iso_{{ context }}"}

You must first download the ISO image that will be used to run the installation on your bare-metal machines.
This image includes all of the necessary {{ product_title }} release images, as well as the {{ olm_first }} Operators needed to install Virtualization on the cluster. {._abstract}


:::note

The size of the ISO image can vary depending on the release you select.

:::


**Procedure**

1.  Log in to the {{ hybrid_console_url }}.
1.  On the **Red Hat OpenShift** tile, click **OpenShift**.
1.  On the **Red Hat OpenShift Container Platform** tile, click **Create cluster**.
1.  Click the **Datacenter** tab.
1.  Under **Assisted Installer**, click **Create cluster**.
1.  In the **Cluster details** page, select the toggle for "I’m installing on a disconnected/air-gapped/secured environment".
1.  Click **Next**.
1.  Click **Download ISO**.