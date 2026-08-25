---
title: Accessing a virtual machine  by using its internal FQDN
---

# Accessing a virtual machine  by using its internal FQDN {#virt-accessing-vm-internal-fqdn}

You can access a virtual machine on a stable, fully qualified domain name (FQDN) by using headless services. A headless service creates DNS records for each pod instead of a virtual IP, enabling FQDN access without exposing specific ports.

> [!IMPORTANT]
> If you created a VM by using the OpenShift Container Platform web console, you can find its internal FQDN listed in the **Network** tile on the **Overview** tab of the **VirtualMachine details** page.

## Additional resources {#additional-resources_virt-accessing-vm-internal-fqdn}

- [Exposing a VM by using a service](/virt/vm_networking/virt-exposing-vm-with-service#virt-exposing-vm-with-service)
