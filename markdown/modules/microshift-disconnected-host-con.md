{%- set _mod_docs_content_type = "CONCEPT" %}
# Preparing networking for fully disconnected hosts {id="microshift-disconnected-host-preparation_{{ context }}"}

To run {{ microshift_short }} on a fully disconnected host with no external network connectivity, you prepare a persistent hostname, loopback IP addressing, DNS, and `/etc/hosts` entries before you apply {{ microshift_short }} network configuration. {._abstract}

Typically this means that the device does not have an attached network interface controller (NIC) to provide a subnet. These steps can also be completed on a host with a NIC that is removed after setup. You can also automate these steps on a host that does not have a NIC by using the `%post` phase of a Kickstart file.


:::important

Configuring networking settings for disconnected environments is necessary because {{ microshift_short }} requires a network device to support node communication. To meet this requirement, you must configure {{ microshift_short }} networking settings to use the "fake" IP address you assign to the system loopback device during setup.

:::


## Procedure summary {id="microshift-disconnected-host-procedure-summary_{{ context }}"}

To run {{ microshift_short }} on a disconnected host, the following steps are required:


Prepare the host
:   *   Stop {{ microshift_short }} if it is currently running and clean up changes the service has made to the network.
    *   Set a persistent hostname.
    *   Add a “fake” IP address on the loopback interface.
    *   Configure DNS to use the fake IP as local name server.
    *   Add an entry for the hostname to `/etc/hosts`.

Update the {{ microshift_short }} configuration
:   *   Define the `nodeIP` parameter as the new loopback IP address.
    *   Set the `.node.hostnameOverride` parameter to the persistent hostname.

For the changes to take effect
:   *   Disable the default NIC if attached.
    *   Restart the host or device.

After starting, {{ microshift_short }} runs using the loopback device for intra-node communication.