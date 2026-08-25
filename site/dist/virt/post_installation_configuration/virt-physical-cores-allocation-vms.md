---
title: Allocate physical cores for virtual machines
---

# Allocate physical cores for virtual machines {#virt-physical-cores-allocation-vms}

As a cluster administrator, you can allocate a full physical core to a specific virtual machine (VM), instead of allowing different VMs to share the same physical core. Configuring your VMs to use only full physical cores can optimize performance for high-throughput or latency-critical VMs.

Allocating only full physical cores is important on simultaneous multi-threading (SMT) enabled systems because it offers the following benefits:

- Prevents noisy neighbors and resource contention
- Mitigates performance degradation
- Offers predictable latency
- Guarantees exclusive CPU resources
