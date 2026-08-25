---
title: Configuring local storage by using the hostpath provisioner
---

# Configuring local storage by using the hostpath provisioner {#virt-configuring-local-storage-with-hpp}

You can configure local storage for virtual machines by using the hostpath provisioner (HPP).

When you install the {{ VirtProductName }} Operator, the Hostpath Provisioner Operator is automatically installed. HPP is a local storage provisioner designed for {{ VirtProductName }} that is created by the Hostpath Provisioner Operator. To use HPP, you create an HPP custom resource (CR) with a basic storage pool.
