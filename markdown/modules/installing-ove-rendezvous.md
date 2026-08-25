{%- set _mod_docs_content_type = "PROCEDURE" %}
# Mounting the ISO and booting the rendezvous node {id="virt-installing-ove-booting_{{ context }}"}

To initiate the cluster installation, attach the downloaded ISO to the machine that will serve as your rendezvous host and boot the machine from the ISO. {._abstract}

The rendezvous node runs as the bootstrap host during the installation, which hosts the configuration web console and runs an Assisted Service that facilitates the cluster deployment.

**Prerequisites**

*   You have downloaded the installation ISO.

**Procedure**

1.  On the machine that you have designated to be the rendezvous node, attach the ISO image to the machine and boot the machine from this image.
You can also boot from a USB drive containing the ISO image.

    :::note

    If you mount the ISO via a virtual drive, the cluster installation might take several hours to complete.
    Mount the ISO with physical media such as a USB drive to reduce the overall installation time.
    
    :::

1.  Wait for the machine to boot from the image and display the **Rendezvous node setup** menu.
1.  Select **This is the rendezvous node** in the **Rendezvous node setup** menu.

    :::important

    You must select only one machine to act as the rendezvous node.
    Selecting two or more machines as a rendezvous node is not supported.
    
    :::

1.  In the **Rendezvous node IP selection** menu, select an IP address from the list to use as the rendezvous node IP address and select **Continue**.
Make note of this address for later use.
1.  Wait for the rendezvous node to provide a URL for finishing the installation and save the URL for later use, as shown in the following image.
    ![The rendezvous host providing the URL of the installation console](/_assets/images/installing-ove-console.png)