---
title: Create a service to connect with SSH
---

# Create a service to connect with SSH {#virt-using-services}

You can create a service for a virtual machine (VM) and connect to the IP address and port exposed by the service. Services provide excellent performance and are recommended for applications that are accessed from outside the cluster or within the cluster. Ingress traffic is protected by firewalls.

After you create a service with `virtctl`, you must add `special: key` to the `spec.template.metadata.labels` stanza of the `VirtualMachine` manifest. If the cluster network cannot handle the traffic load, consider using a secondary network for VM access.
