---
title: Creating a license-compliant AWS EC2 Windows VM
---

# Creating a license-compliant AWS EC2 Windows VM {#virt-creating-vms-aws-li-windows}

If you are running Windows virtual machines (VMs) on OpenShift Container Platform hosts, such as AMD64 bare metal EC2 instances with {{ aws_first }} Windows License Included (LI) enabled, you must ensure that any VMs you create are compliant with licensing requirements.

When you configure your Windows VMs correctly, they activate automatically with the {{ aws_short }} Key Management Service (KMS), and run using optimized drivers for the underlying bare-metal hardware. Proper configuration also ensures that billing is correct.

If you do not configure your Windows VMs so that they are license-compliant, they might fail to activate, suffer degraded system performance due to sub-optimal CPU pinning, and risk failing a licensing audit.
