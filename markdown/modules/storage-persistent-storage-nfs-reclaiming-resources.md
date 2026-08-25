{%- set _mod_docs_content_type = "REFERENCE" %}
# Resource reclamation {id="nfs-reclaiming-resources_{{ context }}"}

You can release NFS shares to allow them to be reclaimed. {._abstract}

NFS implements the {{ product_title }} `Recyclable` plugin interface. Automatic processes handle reclamation tasks based on policies set on each persistent volume.

By default, PVs are set to `Retain`.

Once claim to a PVC is deleted, and the PV is released, the PV object
should not be reused. Instead, a new PV should be created with the same
basic volume details as the original.

For example, the administrator creates a PV named `nfs1`:

```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: nfs1
spec:
  capacity:
    storage: 1Mi
  accessModes:
    - ReadWriteMany
  nfs:
    server: 192.168.1.1
    path: "/"
```

The user creates `PVC1`, which binds to `nfs1`. The user then deletes
`PVC1`, releasing claim to `nfs1`. This results in `nfs1` being `Released`.
If the administrator wants to make the same NFS share available,
they should create a new PV with the same NFS server details, but a
different PV name:

```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: nfs2
spec:
  capacity:
    storage: 1Mi
  accessModes:
    - ReadWriteMany
  nfs:
    server: 192.168.1.1
    path: "/"
```

Deleting the original PV and re-creating it with the same name is
discouraged. Attempting to manually change the status of a PV
from `Released` to `Available` causes errors and potential data loss.