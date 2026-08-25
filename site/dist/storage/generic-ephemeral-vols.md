---
title: Generic ephemeral volumes
---

# Generic ephemeral volumes {#generic-ephemeral-volumes}

Generic ephemeral volumes provide per-pod temporary storage backed by any storage driver that supports dynamic provisioning, unlike `emptyDir` volumes which are limited to local node storage. This flexibility lets you use network storage backends, control storage classes and volume characteristics, and leverage delayed volume binding for optimal pod scheduling.

**Additional resources**

- [Creating generic ephemeral volumes](/storage/generic-ephemeral-vols#generic-ephemeral-vols-procedure_generic-ephemeral-volumes)
