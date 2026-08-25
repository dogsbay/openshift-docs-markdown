---
title: Detach volumes after non-graceful node shutdown
---

# Detach volumes after non-graceful node shutdown {#ephemeral-storage-csi-vol-detach-non-graceful-shutdown}

\[role="\_abstract"\] Automatic volume detachment after non-graceful node shutdowns prevents volumes from remaining attached to failed nodes, enabling faster workload recovery by allowing pods to reschedule and reattach volumes on healthy nodes without manual intervention.
